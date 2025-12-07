import asyncio
import os
import re
from datetime import datetime, timezone
from typing import List, Dict, Any

from langchain.agents import create_agent
from langchain_core.messages import HumanMessage
from pydantic import BaseModel, Field, computed_field
from sqlmodel import Session, select

from executors.data_for_seo import DataForSEOResult
from models.tasks import Subtask, SubTaskKind, SubtaskDependency, RunStatus


class SerpAnalysisInput(BaseModel):
    """Schema per l'input dell'analisi SERP"""
    keyword: str = Field(description="Keyword analizzata")
    location_name: str = Field(description="Location della ricerca")
    language_code: str = Field(description="Codice lingua")
    device: str = Field(description="Tipo device")
    os: str = Field(description="Sistema operativo")

    scraped_data: List[Dict[str, Any]] = Field(
        description="Dati scraping con content markdown e metadata",
        default_factory=list
    )

    @computed_field
    @property
    def avg_word_count(self) -> int:
        counts = self._get_word_counts()
        return sum(counts) // len(counts) if counts else 0

    @computed_field
    @property
    def word_count_range(self) -> Dict[str, int]:
        counts = self._get_word_counts()
        if not counts:
            return {'min': 0, 'max': 0}
        return {'min': min(counts), 'max': max(counts)}

    def _get_word_counts(self) -> List[int]:
        """Helper privato per calcolare word counts."""
        counts = []
        for item in self.scraped_data:
            content = item.get('content', '')
            count = self._clean_and_count_words(content)
            if count > 0:
                counts.append(count)
        return counts

    @staticmethod
    def _clean_and_count_words(text: str) -> int:
        if not text:
            return 0

        # Rimuovi tag HTML
        text = re.sub(r'<[^>]+>', ' ', text)

        # Rimuovi markdown
        text = re.sub(r'^#{1,6}\s+', '', text, flags=re.MULTILINE)
        text = re.sub(r'[\*_]{1,3}([^\*_]+)[\*_]{1,3}', r'\1', text)
        text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)
        text = re.sub(r'!\[([^\]]*)\]\([^\)]+\)', '', text)
        text = re.sub(r'```[^`]*```', ' ', text, flags=re.DOTALL)
        text = re.sub(r'`[^`]+`', ' ', text)
        text = re.sub(r'^[\>\-\*\+]\s+', '', text, flags=re.MULTILINE)
        text = re.sub(r'^[\-\*_]{3,}$', '', text, flags=re.MULTILINE)

        # Rimuovi punteggiatura
        text = re.sub(r'[^\w\s]', ' ', text)

        words = [w for w in text.split() if w.strip()]
        return len(words)


class SerpAnalysisLLMResult(BaseModel):
    """Risultato dell'analisi SERP basata sul contenuto testuale dei top performer"""

    keyword: str = Field(
        description="Keyword principale analizzata"
    )
    search_intent: str = Field(
        description="Intent di ricerca dominante: 'informational', 'commercial', 'transactional', o 'navigational'"
    )

    # Pattern contenuto
    common_topics: List[str] = Field(
        description="Temi principali ricorrenti nei contenuti analizzati (es: 'definizione', 'vantaggi', 'come fare')"
    )
    common_subtopics: List[str] = Field(
        description="Sotto-argomenti frequenti che approfondiscono i topic principali"
    )
    typical_structure: List[str] = Field(
        description="Struttura heading ricorrente nei top performer (es: ['H1: Titolo principale', 'H2: Cos'è X', 'H2: Come funziona'])"
    )

    # Segnali di trust osservabili nel testo
    observed_trust_patterns: List[str] = Field(
        description="Pattern di autorevolezza rilevati nel testo: citazioni di fonti, sezioni autore/bio, riferimenti a studi, menzioni di credenziali, date di aggiornamento esplicite"
    )


class SerpAnalysisResult(SerpAnalysisLLMResult):
    # Statistiche contenuto
    avg_word_count: int = Field(description="Numero medio di parole")
    word_count_range: Dict[str, int] = Field(description="Range min/max parole")

def retrieve_needed_data(session: Session, subtask: Subtask):
    # risultati DataForSEO (stesso task_id)
    dataforseo_result = session.exec(
        select(Subtask)
        .where(
            Subtask.task_id == subtask.task_id,
            Subtask.kind == SubTaskKind.GET_DATAFORSEO_TOP_10,
            Subtask.status == RunStatus.SUCCEEDED
        )
    ).first()

    dataforseo_result = DataForSEOResult.model_validate(dataforseo_result.result)

    # barrier predecessor
    barrier = session.exec(
        select(Subtask)
        .join(SubtaskDependency, SubtaskDependency.predecessor_id == Subtask.id)
        .where(
            SubtaskDependency.successor_id == subtask.id,
            Subtask.kind == SubTaskKind.WAIT_BARRIER
        )
    ).first()

    if not barrier or not barrier.result:
        raise ValueError("No barrier result found for SERP analysis")

    scrape_ids = barrier.result.get('scrape_subtask_ids', [])

    # 2. Recupera i risultati degli scraping
    scrape_results = session.exec(
        select(Subtask)
        .where(
            Subtask.id.in_(scrape_ids),
            Subtask.status == RunStatus.SUCCEEDED
        )
    ).all()

    if not scrape_results:
        return {
            'error': 'No successful scraping results to analyze',
            'keyword': subtask.payload.get('keyword', ''),
            'timestamp': datetime.now(timezone.utc).isoformat()
        }

    # 3. Prepara i dati per l'analisi
    from operator import itemgetter

    scraped_data = []
    for st in scrape_results:
        if st.result and st.result.get('data'):
            scraped_data.append(
                dataforseo_result.urls[int(st.idempotency_key.split(":")[-1])].model_dump(exclude_unset=True) | {
                    "content": st.result.get('data', {}).get('markdown', '')})

    scraped_data.sort(key=itemgetter('rank_group'))

    return SerpAnalysisInput(
        keyword=dataforseo_result.keyword,
        location_name=dataforseo_result.location_name,
        language_code=dataforseo_result.language_code,
        device=dataforseo_result.device,
        os=dataforseo_result.os,
        scraped_data=scraped_data
    )

async def execute_analyze_serp(session: Session, subtask: Subtask) -> Dict[str, Any]:

    serp_analysis_input  = retrieve_needed_data(session, subtask)

    system_prompt = """You are an expert SEO content analyst. Analyze the textual content from top-ranking SERP results to identify patterns and characteristics that contribute to their success.

    Your analysis is purely observational - extract patterns from what you see in the content, not recommendations.

    Focus on:
    1. Search intent alignment - what intent does this content serve?
    2. Topic coverage - what themes and subtopics appear consistently?
    3. Content structure - what heading patterns are used?
    4. Trust patterns - what authority signals are visible in the text itself?

    Analyze only what is observable in the provided text content."""

    user_prompt = f"""Analyze the following SERP results for the keyword "{serp_analysis_input.keyword}":
    ```json
    {serp_analysis_input.model_dump_json()}
    ```

    Extract:
    1. The dominant search intent based on content type and structure
    2. Common topics covered across multiple results
    3. Recurring subtopics that expand on main themes
    4. Typical heading structure (H1, H2, H3 patterns)
    5. Trust/authority patterns visible IN THE TEXT (author mentions, source citations, credential references, explicit update dates, expert quotes)

    Note: Word count statistics are already calculated separately. Focus only on qualitative content analysis."""

    # Create agent
    agent = create_agent(
        model=os.getenv("LLM_MODEL"),
        system_prompt=system_prompt,
        tools=[],
        response_format=SerpAnalysisLLMResult
    )

    try:

        response = await asyncio.wait_for(
            asyncio.to_thread(agent.invoke, {"messages": [HumanMessage(user_prompt)]}),
            timeout=float(os.getenv("LLM_TIMEOUT"))
        )

    except asyncio.TimeoutError:
        raise Exception("LLM response timeout")

    final_result = SerpAnalysisResult(
        **response["structured_response"].model_dump(),
        avg_word_count=serp_analysis_input.avg_word_count,
        word_count_range=serp_analysis_input.word_count_range
    )

    return final_result.model_dump()

async def test_execute_analyze_serp(session: Session, subtask: Subtask) -> Dict[str, Any]:
    """
    Mock dell'analisi SERP per testing senza LLM.
    """
    await asyncio.sleep(2)

    keyword = subtask.payload.get('keyword', 'test keyword')

    return {
        'keyword': keyword,
        'search_intent': 'informational',
        'avg_word_count': 1500,
        'word_count_range': {'min': 800, 'max': 2500},
        'common_topics': [
            f'{keyword} basics',
            f'How to use {keyword}',
            f'{keyword} best practices'
        ],
        'common_subtopics': [
            'Getting started',
            'Advanced techniques',
            'Common mistakes',
            'Tools and resources'
        ],
        'typical_structure': [
            'Introduction',
            'What is X',
            'Benefits',
            'How to guide',
            'Best practices',
            'FAQs',
            'Conclusion'
        ],
        'trust_signals': [
            'Author credentials mentioned',
            'Citations to authoritative sources',
            'Updated date visible',
            'User reviews/testimonials'
        ],
        'freshness_indicators': {
            'avg_days_since_update': 45,
            'pages_with_dates': 7,
            'recent_updates': 3
        },
        'optimization_priorities': [
            {'priority': 1, 'action': 'Match average word count of 1500 words'},
            {'priority': 2, 'action': 'Include how-to section with step-by-step guide'},
            {'priority': 3, 'action': 'Add author bio and credentials'}
        ],
        'content_gaps': [
            'Missing comparison tables',
            'No video content embedded',
            'Lacks user testimonials'
        ],
        'recommended_outline': [
            f'What is {keyword} (200 words)',
            f'Why {keyword} matters (150 words)',
            f'How to implement {keyword} (500 words)',
            'Common mistakes to avoid (300 words)',
            'Tools and resources (200 words)',
            'FAQs (150 words)'
        ]
    }
