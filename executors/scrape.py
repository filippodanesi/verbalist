import asyncio
import os
import random
import time
from datetime import datetime, timezone
from enum import Enum
from typing import Dict, Any, Optional
from typing import List

import httpx
from pydantic import BaseModel, HttpUrl
from pydantic import NonNegativeInt, model_validator
from pydantic_core import PydanticCustomError
from sqlmodel import Session

from models.tasks import Subtask


class Format(Enum):
    HTML = "HTML"
    MARKDOWN = "MARKDOWN"

class UrlModel(BaseModel):
    url: HttpUrl
    wait_after_load: Optional[NonNegativeInt] = 3000
    timeout: Optional[NonNegativeInt] = 15000
    headers: Optional[dict] = None
    scrolls: Optional[int] = 2
    formats: Optional[List[Format]] = [Format.MARKDOWN]


class MultipleUrlModel(BaseModel):
    url: Optional[HttpUrl] = None
    urls: Optional[List[HttpUrl]] = None
    wait_after_load: Optional[NonNegativeInt] = 3000
    timeout: Optional[NonNegativeInt] = 15000
    headers: Optional[dict] = None
    scrolls: int = 2
    formats: Optional[List[Format]] = [Format.MARKDOWN]

    @model_validator(mode='after')
    def check_url_or_urls(self):
        url = self.url
        urls = self.urls

        if url is None and urls is None:
            raise PydanticCustomError(
                'url_or_urls_required',
                'Either "url" or "urls" must be provided',
            )
        if url is not None and urls is not None:
            raise PydanticCustomError(
                'url_or_urls_exclusive',
                'Only one of "url" or "urls" should be provided, not both',
            )

        return self


class MetadataModel(BaseModel):
    url: HttpUrl
    statusCode: Optional[int] = None
    processingTime: Optional[float] = None

class DataModel(BaseModel):
    markdown: Optional[str] = None
    rawHtml: Optional[str] = None
    html: Optional[str] = None

class ScraperResult(BaseModel):
    success: bool
    error: Optional[str] = None
    data: Optional[DataModel] = None
    metadata: Optional[MetadataModel] = None



async def execute_scrape(session: Session, subtask: Subtask):
    url = subtask.payload.get('url')

    if not url:
        raise ValueError("No URL found in payload")

    processingTime = time.process_time()

    async with httpx.AsyncClient() as client:
        response = await client.post(
            os.environ.get("SCRAPER_ENDPOINT"),
            json=MultipleUrlModel(
                urls=[url],  # url è già una stringa qui
                formats=[Format.MARKDOWN], # Format.HTML
            ).model_dump(mode='json'),  # Aggiungi mode='json' per serializzazione corretta
            timeout=60.0
        )
        response.raise_for_status()
        result = ScraperResult(success=True, data=(response.json()[0]["data"]), metadata=MetadataModel(url=url, statusCode=200, processingTime=time.process_time() - processingTime))

        return result.model_dump(mode='json', exclude_unset=True, exclude={"success", "error"}) | {
            'scraped_at': datetime.now(timezone.utc).isoformat()
        }

async def test_execute_scrape(session: Session, subtask: Subtask) -> Dict[str, Any]:
    """Mock web scraping per nuovo formato"""
    url = subtask.payload.get('url')


    if not url:
        raise ValueError("No URL found in payload")

    await asyncio.sleep(random.uniform(2, 5))

    if random.random() < 0.15:
        raise Exception(f"Mock scraping failed: Connection timeout to {url}")

    return {
        "data": {
            "markdown": "<h1>Test Markdown</h1>\n<p>Test Markdown</p>\n",
            "html": "<h1>Test HTML</h1>\n<p>Test HTML</p>\n"
        },
        "metadata": {
            "url": "https://nur.it/",
            "processingTime": 5.718
        },
        'scraped_at': datetime.now(timezone.utc).isoformat()
}
