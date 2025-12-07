import asyncio
import os
from typing import Dict, Any, List, Optional

from langchain.agents import create_agent
from langchain_core.messages import HumanMessage
from pydantic import BaseModel, Field
from sqlmodel import Session, select

from executors.analyze_serp import SerpAnalysisResult
from executors.generate_serp import Content
from executors.scrape import MultipleUrlModel, ScraperResult, Format
from models.tasks import Subtask, SubTaskKind, SubtaskDependency, Task
from models.schemas import ImproveSerpInput
from utils.files import fetch_remote_pdf_as_text
import httpx


class ContentScores(BaseModel):
    """Quantitative quality scores for the analyzed content (0-100 scale)"""
    seo: int = Field(
        ge=0, le=100,
        description="SEO optimization score: keyword usage, meta optimization, heading structure (0=poor, 100=excellent)"
    )
    readability: int = Field(
        ge=0, le=100,
        description="Readability score: sentence length, vocabulary, flow, scannability (0=difficult, 100=very easy)"
    )
    completeness: int = Field(
        ge=0, le=100,
        description="Topic coverage compared to top SERP competitors (0=missing topics, 100=comprehensive)"
    )
    trust: int = Field(
        ge=0, le=100,
        description="E-E-A-T signals score: expertise, authoritativeness, trustworthiness indicators (0=none, 100=strong)"
    )


class ContentIssue(BaseModel):
    """A specific problem identified in the existing content"""
    severity: str = Field(
        description="Issue severity level. Must be one of: 'critical' (blocks ranking), 'major' (significantly hurts ranking), 'minor' (small improvement opportunity)"
    )
    category: str = Field(
        description="Issue category. Must be one of: 'seo' (keyword/meta issues), 'structure' (heading/layout problems), 'content' (gaps/quality), 'trust' (E-E-A-T deficiencies)"
    )
    description: str = Field(
        description="Clear explanation of what is wrong and why it matters for SERP performance"
    )


class Improvement(BaseModel):
    """A specific, actionable improvement recommendation"""
    priority: int = Field(
        ge=1,
        description="Priority rank from 1 (highest/most impactful). Priority 1 items should be addressed first."
    )
    action: str = Field(
        description="Concrete action to take, e.g., 'Add FAQ section with 5 questions about [topic]' or 'Include keyword in H1 and first paragraph'"
    )
    rationale: str = Field(
        description="Why this improvement matters, referencing specific SERP analysis findings, e.g., 'Top 3 competitors all include FAQ schema'"
    )

class SerpImproveResult(BaseModel):
    """Complete content improvement analysis and rewritten content.

    This model contains:
    1. Quantitative scores evaluating the original content
    2. List of identified issues ordered by severity
    3. Prioritized improvement recommendations
    4. The fully rewritten content with all improvements applied
    """
    scores: ContentScores = Field(
        description="Quality scores (0-100) evaluating the ORIGINAL content before improvements on four dimensions: seo, readability, completeness, trust"
    )
    issues: List[ContentIssue] = Field(
        description="Problems found in the original content, ordered by severity (critical first, then major, then minor). Each issue has severity, category, and description."
    )
    improvements: List[Improvement] = Field(
        description="Recommended changes ordered by priority (1=highest). Each improvement has priority (1-5), action (what to do), and rationale (why, based on SERP analysis)."
    )
    body: Content = Field(
        description="The COMPLETE rewritten content with all improvements applied. Must contain 'format' (MARKDOWN or HTML) and 'content' (full improved text, not a summary)."
    )


async def fetch_content(params: ImproveSerpInput) -> str:
    """Recupera il contenuto da ottimizzare da una delle 3 fonti"""

    if params.content_raw:
        return params.content_raw

    elif params.content_url:
        url = params.content_url
        if not url.startswith(('http://', 'https://')):
            url = 'https://' + url

        async with httpx.AsyncClient() as client:
            response = await client.post(
                os.environ.get("SCRAPER_ENDPOINT"),
                json=MultipleUrlModel(
                    urls=[url],
                    formats=[Format.MARKDOWN],
                ).model_dump(mode='json'),
                timeout=60.0
            )
            response.raise_for_status()
            result = ScraperResult(**response.json()[0])
            return result.data.markdown or ""

    elif params.content_filename:
        if params.content_filename.lower().endswith('.pdf'):
            return fetch_remote_pdf_as_text(
                os.environ.get("REMOTE_ENDPOINT_URL"),
                params.content_filename,
                os.environ.get("REMOTE_SECRET_KEY")
            )
        else:
            raise NotImplementedError(f"File type not supported: {params.content_filename}")

    raise ValueError("No content source specified")


def retrieve_needed_input_data(session: Session, subtask: Subtask):
    input_result = session.exec(
        select(Task)
        .where(Task.id == subtask.task_id)
    ).first()
    return ImproveSerpInput(**input_result.params)


def retrieve_needed_data(session: Session, subtask: Subtask):
    serp_analysis = session.exec(
        select(Subtask)
        .join(SubtaskDependency, SubtaskDependency.predecessor_id == Subtask.id)
        .where(
            SubtaskDependency.successor_id == subtask.id,
            Subtask.kind == SubTaskKind.SERP_ANALYSIS
        )
    ).first()

    if not serp_analysis or not serp_analysis.result:
        raise ValueError("No SERP analysis found")

    return SerpAnalysisResult.model_validate(serp_analysis.result)


def build_improvement_prompt(existing_content: str, analysis: SerpAnalysisResult, params: ImproveSerpInput):
    system_prompt = """You are an expert SEO content optimizer. Analyze existing content against SERP winners and produce an improved version.

Your task:
1. Score the ORIGINAL content objectively (before your changes)
2. Identify issues ordered by severity (critical → major → minor)  
3. List prioritized improvements (priority 1 = most impactful)
4. Rewrite the COMPLETE content with all improvements applied

The body.content field must contain the FULL rewritten article, not a summary or outline.
Maintain original tone and brand voice while optimizing for SERP performance."""

    # # Tronca contenuto troppo lungo
    # max_len = 12000
    # content_display = existing_content[:max_len]
    # if len(existing_content) > max_len:
    #     content_display += "\n\n[...truncated...]"
    content_display = existing_content
    user_prompt = f"""## CONTENT TO IMPROVE
```
{content_display}
```

## SERP ANALYSIS (top competitors)
- **Intent**: {analysis.search_intent}
- **Topics**: {', '.join(analysis.common_topics)}
- **Subtopics**: {', '.join(analysis.common_subtopics)}
- **Structure**: {', '.join(analysis.typical_structure[:5])}
- **Trust patterns**: {', '.join(analysis.observed_trust_patterns[:3])}
- **Word count**: avg {analysis.avg_word_count}, range {analysis.word_count_range['min']}-{analysis.word_count_range['max']}

## PARAMETERS
- **Keyword**: "{params.keyword}"
- **Tone**: {params.tone}
- **Language**: {params.language_code}
- **Output format**: {params.format.value}
{f'- **Audience**: {params.target_audience}' if params.target_audience else ''}

Analyze the content, identify issues, recommend improvements, and provide the complete rewritten content in body.content."""

    return system_prompt, user_prompt

async def execute_serp_improve(session: Session, subtask: Subtask) -> Dict[str, Any]:
    # Recupera parametri e analisi
    params = retrieve_needed_input_data(session, subtask)
    analysis = retrieve_needed_data(session, subtask)

    # Recupera il contenuto esistente
    existing_content = await fetch_content(params)

    if not existing_content:
        raise ValueError("No content retrieved for optimization")

    system_prompt, user_prompt = build_improvement_prompt(existing_content, analysis, params)

    agent = create_agent(
        model=os.getenv("LLM_MODEL"),
        system_prompt=system_prompt,
        response_format=SerpImproveResult
    )

    try:
        response = await asyncio.wait_for(
            asyncio.to_thread(agent.invoke, {"messages": [HumanMessage(user_prompt)]}),
            timeout=float(os.getenv("LLM_TIMEOUT"))
        )
        result = response["structured_response"]
        return result.model_dump()
    except asyncio.TimeoutError:
        raise Exception("LLM response timeout")


async def test_execute_serp_improve(session: Session, subtask: Subtask) -> Dict[str, Any]:
    """Mock improvement per testing"""
    await asyncio.sleep(2)

    keyword = subtask.payload.get('keyword', 'test keyword')

    return {
        'scores': {
            'seo': 65,
            'readability': 72,
            'completeness': 58,
            'trust': 61
        },
        'issues': [
            {
                'severity': 'critical',
                'category': 'seo',
                'description': f'Title tag missing keyword "{keyword}"'
            },
            {
                'severity': 'major',
                'category': 'completeness',
                'description': 'Content 500 words below competitor average'
            },
            {
                'severity': 'minor',
                'category': 'trust',
                'description': 'No author bio or credentials'
            }
        ],
        'improvements': [
            {
                'priority': 1,
                'action': f'Add "{keyword}" to title tag and H1',
                'rationale': 'All top 3 results include exact keyword in title'
            },
            {
                'priority': 2,
                'action': 'Add FAQ section with 5-6 questions',
                'rationale': '80% of top results include FAQ schema'
            },
            {
                'priority': 3,
                'action': 'Expand content by 500 words',
                'rationale': 'Current word count below competitor average'
            }
        ],
        'body': {
            'format': 'MARKDOWN',
            'content': f'# {keyword.title()}: Guida Completa\n\n## Introduzione\n\nContenuto migliorato per {keyword}...'
        }
    }
