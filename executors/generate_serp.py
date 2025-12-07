import asyncio
import os
from enum import Enum
from typing import Dict, Any, List

from langchain.agents import create_agent
from langchain.agents.structured_output import ToolStrategy
from langchain_core.messages import HumanMessage
from pydantic import BaseModel, Field, ValidationError
from sqlmodel import Session, select

from executors.analyze_serp import SerpAnalysisResult
from models.tasks import Subtask, SubTaskKind, SubtaskDependency, Task
from models.schemas import (
    GenerateSerpInput, Format, ContentType
)

#####################   SERP GENERATION OUTPUTS  ##############################
class SerpSEO(BaseModel):
    """SEO metadata for the generated content"""
    title_tag: str = Field(
        max_length=80,
        description="SEO title tag for search results (max 60 chars). Should include primary keyword and be compelling"
    )
    meta_description: str = Field(
        max_length=160,
        description="Meta description for search results (max 160 chars). Should summarize content and include keyword naturally"
    )
    slug: str = Field(
        description="URL slug for the content. Use hyphens, lowercase, no special chars (e.g., 'python-tutorial-beginners')"
    )

class MediaSuggestion(BaseModel):
    """Suggested media element to enhance content"""
    slot: str = Field(
        description="Location in content where media should be placed (e.g., 'hero', 'after-intro', 'step-3')"
    )
    idea: str = Field(
        description="Description of the media content to create (e.g., 'infographic showing process flow')"
    )
    alt: str = Field(
        description="Alt text for accessibility and SEO. Should describe the image content including keyword when relevant"
    )

class Content(BaseModel):
    format: Format = Field(description="Content format")
    content: str = Field(description="Formatted content")

class SerpGenerationResult(BaseModel):
    """Complete SERP-optimized content generation output"""
    seo: SerpSEO = Field(description="SEO metadata including title, description and URL slug")
    outline: List[str] = Field(
        description="Content outline as list of headings (H1, H2, H3) following SERP analysis recommendations"
    )
    body: Content = Field(
        description="Main content body. Must have 'format' key and 'cont' key with full content text"
    )
    media_suggestions: Dict[str, List[MediaSuggestion]] = Field(
        description="Media recommendations organized by type. Keys like 'images', 'videos', 'infographics' with placement suggestions"
    )
    rationale: List[str] = Field(
        description="List of reasons explaining content decisions based on SERP analysis (e.g., 'Matched top performer structure')"
    )

##################################################################################
#####################   SERP GENERATION STRATEGIES  ##############################

class ToneProfile(BaseModel):
    name: str
    adjectives: List[str]
    avoid: List[str]

TONE_PROFILES: Dict[str, ToneProfile] = {
    "professionale": ToneProfile(
        name="professionale",
        adjectives=["autorevole", "preciso", "formale"],
        avoid=["slang", "emoji", "esclamazioni"]
    ),
    "conversazionale": ToneProfile(
        name="conversazionale",
        adjectives=["amichevole", "diretto", "accessibile"],
        avoid=["gergo tecnico non spiegato", "frasi lunghe"]
    ),
    "tecnico": ToneProfile(
        name="tecnico",
        adjectives=["preciso", "dettagliato", "documentato"],
        avoid=["semplificazioni", "metafore vaghe"]
    ),
}

class ContentStrategy(BaseModel):
    content_type: ContentType
    serp_sections: List[str]  # Sezioni tipiche che rankano
    eeat_signals: List[str]
    cta_approach: str

CONTENT_STRATEGIES: Dict[ContentType, ContentStrategy] = {
    ContentType.BLOG_POST: ContentStrategy(
        content_type=ContentType.BLOG_POST,
        serp_sections=["intro con keyword", "definizione", "how-to steps", "best practices", "faq schema"],
        eeat_signals=["author expertise", "sources/citations", "updated date", "internal links"],
        cta_approach="soft (newsletter, related content)"
    ),
    ContentType.LANDING_PAGE: ContentStrategy(
        content_type=ContentType.LANDING_PAGE,
        serp_sections=["hero H1 con keyword", "pain points", "solution benefits", "social proof", "faq"],
        eeat_signals=["testimonials", "trust badges", "case studies", "guarantees"],
        cta_approach="strong conversion (above fold + repeated)"
    ),
    ContentType.PRODUCT_PAGE: ContentStrategy(
        content_type=ContentType.PRODUCT_PAGE,
        serp_sections=["product H1", "key features", "specs table", "use cases", "reviews section"],
        eeat_signals=["reviews/ratings", "certifications", "brand authority", "detailed specs"],
        cta_approach="purchase/trial with urgency"
    ),
    ContentType.GUIDE: ContentStrategy(
        content_type=ContentType.GUIDE,
        serp_sections=["comprehensive intro", "step-by-step", "examples", "troubleshooting", "resources"],
        eeat_signals=["expert author", "depth of coverage", "practical examples", "updated regularly"],
        cta_approach="resource download, related guides"
    ),
}


##############################################################################################

def retrieve_needed_input_data(session: Session, subtask: Subtask):
    # risultati DataForSEO (stesso task_id)
    input_result = session.exec(
        select(Task)
        .where(
            Task.id == subtask.task_id,
        )
    ).first()
    return GenerateSerpInput(**input_result.params)


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


def build_generation_prompt(analysis: SerpAnalysisResult, params: GenerateSerpInput):
    # Resolve strategy & tone
    content_type = ContentType(params.content_type) if params.content_type in [e.value for e in
                                                                               ContentType] else ContentType.BLOG_POST
    strategy = CONTENT_STRATEGIES.get(content_type, CONTENT_STRATEGIES[ContentType.BLOG_POST])
    tone = TONE_PROFILES.get(params.tone, TONE_PROFILES["professionale"])

    target_words = int(analysis.avg_word_count)

    system_prompt = f"""You are an SEO content strategist. Generate content engineered to outrank current SERP results.

    YOUR MISSION: Create content that Google will rank higher than existing results by:
    1. Better matching search intent than competitors
    2. Covering topics competitors miss (identify gaps from analysis)
    3. Superior E-E-A-T signals
    4. Optimal keyword placement and density
    5. Structure that earns featured snippets

    CONTENT TYPE: {content_type.value}
    SERP-WINNING SECTIONS: {', '.join(strategy.serp_sections)}
    E-E-A-T SIGNALS TO INCLUDE: {', '.join(strategy.eeat_signals)}
    CTA STRATEGY: {strategy.cta_approach}

    TONE: {tone.name} ({', '.join(tone.adjectives)})
    AVOID: {', '.join(tone.avoid)}"""

    user_prompt = f"""## TARGET KEYWORD: "{params.keyword}"

## SEARCH INTENT: {analysis.search_intent}

---
## SERP ANALYSIS ON TOP COMPETITORS

**Topics covered by top results:**
{chr(10).join(f'- {topic}' for topic in analysis.common_topics)}

**Subtopics in winners:**
{chr(10).join(f'- {sub}' for sub in analysis.common_subtopics)}

**Winning content structure:**
{chr(10).join(f'{i + 1}. {section}' for i, section in enumerate(analysis.typical_structure))}

**Trust patterns observed in top content:**
{chr(10).join(f'- {pattern}' for pattern in analysis.observed_trust_patterns)}

---
## CONTENT METRICS

| Metric | SERP Winners | Your Target |
|--------|--------------|-------------|
| Word count | {analysis.word_count_range['min']}-{analysis.word_count_range['max']} | ~{target_words} |

---
## GENERATION REQUIREMENTS

1. **H1**: Include exact keyword "{params.keyword}" - make it compelling for CTR
2. **First 100 words**: Must contain keyword naturally + hook the reader
3. **Headings (H2/H3)**: Use keyword variations, match user questions
4. **Content depth**: Cover ALL common topics and subtopics from analysis
5. **Differentiation**: Identify what competitors miss and fill those gaps
6. **E-E-A-T**: Include {', '.join(strategy.eeat_signals[:3])}
7. **Internal linking placeholders**: Mark with [INTERNAL: topic]
8. **Schema opportunities**: Note FAQ, HowTo, or other schema-ready sections

**Language**: {params.language_code}
**Audience**: {params.target_audience or 'general searchers'}
**Output format**: {params.format.value}
{f"**Brand constraints**: {params.brand_constraints}" if params.brand_constraints else ""}

Generate content that would rank #1 for "{params.keyword}" by being MORE comprehensive, MORE trustworthy, and BETTER structured than current results."""

    return system_prompt, user_prompt

async def execute_serp_generation(session: Session, subtask: Subtask) -> Dict[str, Any]:
    # Recupera dati analisi
    analysis = retrieve_needed_data(session, subtask)

    # Estrai parametri generazione
    params = retrieve_needed_input_data(session, subtask)

    system_prompt, user_prompt = build_generation_prompt(analysis, params)

    # Create agent con schema strutturato
    agent = create_agent(
        model=os.getenv("LLM_MODEL"),
        system_prompt=system_prompt,
        response_format=SerpGenerationResult,
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



async def test_execute_serp_generation(session: Session, subtask: Subtask) -> Dict[str, Any]:
    """Mock generation per testing"""
    await asyncio.sleep(2)

    keyword = subtask.payload.get('keyword', 'test keyword')

    return {
        'metadata': {
            'keyword': keyword,
            'intent': 'informational',
            'tone': 'professionale',
            'content_type': 'blog_post',
            'language': 'it'
        },
        'seo': {
            'title_tag': f'{keyword.title()} - Guida Completa 2025',
            'meta_description': f'Scopri tutto su {keyword}: guide, esempi pratici e consigli degli esperti.',
            'slug': keyword.lower().replace(' ', '-')
        },
        'outline': ['H1: Introduzione', 'H2: Cos\'è', 'H2: Come funziona', 'H2: Vantaggi', 'H3: FAQ'],
        'body': {
            'format': Format.MARKDOWN,
            'body': f'# {keyword.title()}: Guida Completa\n\n## Introduzione\n\nContenuto mock per {keyword}...'
        },
        'media_suggestions': {
            'images': [{'slot': 'hero', 'idea': 'Infografica principale', 'alt': f'{keyword} overview'}]
        },
        'rationale': ['Used SERP common topics', 'Aligned with top performer structure']
    }
