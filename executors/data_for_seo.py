import argparse
import asyncio
import json
import os
import random
import sys
from datetime import datetime, timezone
from typing import Dict, Any, Optional
from urllib.parse import urlparse

import requests
from pydantic import BaseModel
from pydantic import Field

from models.schemas import DataForSEORequest, DeviceType, OSType
from models.tasks import Subtask

if "DATAFORSEO_EXCLUDED_DOMAINS" in os.environ:
    EXCLUDED_DOMAINS = set(os.getenv("EXCLUDED_DOMAINS").split(","))
else:
    EXCLUDED_DOMAINS = {
        "wikipedia",
        "youtube",
        "facebook",
        "twitter",
        "instagram",
        "linkedin",
        "pinterest",
        "reddit",
        "quora",
    }

class SerpResultItem(BaseModel):
    """Modello per un singolo risultato SERP"""
    url: str
    website_name: Optional[str] = ""
    title: Optional[str] = ""
    description: Optional[str] = ""
    rank_group: Optional[int] = None
    rank_absolute: Optional[int] = None
    page: Optional[int]= None


class DataForSEOResult(DataForSEORequest):
    """Modello per il risultato di execute_dataforseo"""
    urls: list[SerpResultItem] = Field(default_factory=list)
    timestamp: str

class DataForSEOClient:
    """Client per interagire con l'API DataForSEO"""

    def __init__(self, base64_credentials: Optional[str] = None):

        self.cred = base64_credentials or os.getenv('DATAFORSEO_BASE64_CRED')

        if not self.cred:
            raise ValueError(
                "Credenziali mancanti. Impostare DATAFORSEO_BASE64_CRED"
                "come variabili d'ambiente o passarle al costruttore"
            )

        self.base_url = "https://api.dataforseo.com/v3"
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Basic {self.cred}',
            'Content-Type': 'application/json'
        })

    def search_google_organic(
            self,
            request_data: DataForSEORequest
    ) -> Dict[str, Any]:
        url = f"{self.base_url}/serp/google/organic/live/advanced"

        payload = [request_data.model_dump()]

        try:
            response = self.session.post(url, json=payload, timeout=30)
            response.raise_for_status()
            return response.json()

        except requests.exceptions.RequestException as e:
            print(f"Errore nella chiamata API: {e}", file=sys.stderr)
            if hasattr(e.response, 'text'):
                print(f"Dettagli errore: {e.response.text}", file=sys.stderr)
            raise


def format_results(results: Dict[str, Any], verbose: bool = False) -> str:
    """
    Formatta i risultati per la visualizzazione

    Args:
        results: Risultati dall'API
        verbose: Se True, mostra tutti i dettagli

    Returns:
        Stringa formattata con i risultati
    """
    if verbose:
        return json.dumps(results, indent=2, ensure_ascii=False)

    # Formattazione semplificata
    output = []

    if 'tasks' in results and results['tasks']:
        for task in results['tasks']:
            if 'result' in task and task['result']:
                for result in task['result']:
                    output.append(f"\n=== Risultati per: {result.get('keyword', 'N/A')} ===")
                    output.append(f"Totale risultati: {result.get('items_count', 0)}")

                    if 'items' in result:
                        output.append("\nPrimi risultati organici:")
                        for i, item in enumerate(result['items'][:5], 1):
                            if item.get('type') == 'organic':
                                output.append(f"\n{i}. {item.get('title', 'N/A')}")
                                output.append(f"   URL: {item.get('url', 'N/A')}")
                                output.append(f"   Descrizione: {item.get('description', 'N/A')}...")

    return '\n'.join(output) if output else "Nessun risultato trovato"


def is_domain_excluded(url: str, excluded_domains=None) -> bool:
    """Verifica se l'URL appartiene a un dominio escluso (ignora TLD)."""
    if excluded_domains is None:
        excluded_domains = EXCLUDED_DOMAINS
    try:
        domain = urlparse(url).netloc.lower().replace("www.", "")
        domain_name = domain.rsplit(".", 1)[0]
        return domain_name in excluded_domains  # O(1) lookup
    except:
        return False

async def execute_dataforseo(subtask: Subtask) -> Dict[str, Any]:
    """Esegue chiamata reale a DataForSEO API"""

    payload = subtask.payload

    request_data = DataForSEORequest(
        keyword=payload.get('keyword'),
        location_name=payload.get('location_name'),
        language_code=payload.get('language_code', 'en'),
        device=DeviceType(payload.get('device', DeviceType.DESKTOP)),
        os=OSType(payload.get('os', OSType.WINDOWS)),
        max_crawl_pages=payload.get('max_crawl_pages', int(float(os.getenv("DATAFORSEO_TOP_ORGANIG_RESULTS")) / 10 * 2))
    )

    client = DataForSEOClient()

    try:
        # Chiamata sincrona (DataForSEO client usa requests, non async)
        results = await asyncio.to_thread(
            client.search_google_organic,
            request_data
        )

        urls = []

        if 'tasks' in results and results['tasks']:
            for task in results['tasks']:
                if 'result' in task and task['result']:
                    for result in task['result']:
                        if 'items' in result:
                            for item in result['items']:
                                if item.get('type') == 'organic' and len(urls) < int(os.getenv("DATAFORSEO_TOP_ORGANIG_RESULTS")):
                                    url = item.get('url', None)
                                    if url and not is_domain_excluded(url):
                                        urls.append(SerpResultItem(
                                            url=url,
                                            website_name=item.get('website_name'),
                                            title=item.get('title'),
                                            description=item.get('description'),
                                            rank_group=item.get('rank_group'),
                                            rank_absolute=item.get('rank_absolute'),
                                            page=item.get('page'),
                                        ))

        result = DataForSEOResult(
            keyword=request_data.keyword,
            location_name=request_data.location_name,
            language_code=request_data.language_code,
            device=request_data.device,
            os=request_data.os,
            urls=urls,
            timestamp=datetime.now(timezone.utc).isoformat(),
        )
        return result.model_dump()

    except Exception as e:
        print(f"  ❌ DataForSEO API error: {str(e)}")
        raise

async def test_execute_dataforseo(subtask: Subtask) -> Dict[str, Any]:
    """Mock DataForSEO API call"""
    keyword = subtask.payload.get('keyword', 'test')

    # Simula latenza API
    await asyncio.sleep(random.uniform(1, 3))

    # Mock SERP results
    mock_urls = [
        SerpResultItem(
            url=f'https://example{i}.com/{keyword}',
            title=f'Result {i}: {keyword.title()} Guide',
            description=f'Lorem ipsum about {keyword} - result {i}',
            rank_group=i,
            rank_absolute=i
        )
        for i in range(1, 11)
    ]

    # Simula occasionale fallimento (10% chance)
    if random.random() < 0.1:
        raise Exception("Mock DataForSEO API timeout")

    result = DataForSEOResult(
        keyword=keyword,
        location_name=subtask.payload.get('location_name'),
        language_code=subtask.payload.get('language_code', 'en'),
        device=DeviceType(subtask.payload.get('device', DeviceType.DESKTOP)),
        os=OSType(subtask.payload.get('os', OSType.WINDOWS)),
        urls=mock_urls,
        timestamp=datetime.now(timezone.utc).isoformat(),
    )

    print(f"  🔍 DataForSEO found {len(mock_urls)} URLs for '{keyword}'")
    return result.model_dump()



def main():
    request_data = DataForSEORequest(
        keyword="python"
    )

    client = DataForSEOClient()

    print(f"Ricerca in corso per: '{request_data.keyword}'...")
    results = client.search_google_organic(request_data)

    formatted_results = format_results(results, verbose=False)
    print(formatted_results)

    parser = argparse.ArgumentParser(
        description='Script per chiamate API DataForSEO',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Esempi di utilizzo:
  %(prog)s -k "python tutorial"
  %(prog)s -k "machine learning" -l it -d mobile
  %(prog)s -k "data science" --location 2380 --verbose

Variabili d'ambiente richieste:
  DATAFORSEO_USERNAME: Username per l'autenticazione
  DATAFORSEO_PASSWORD: Password per l'autenticazione
        """
    )

    # Argomenti richiesti
    parser.add_argument(
        '-k', '--keyword',
        required=True,
        help='Keyword da cercare'
    )

    # Argomenti opzionali
    parser.add_argument(
        '-l', '--language',
        default='en',
        help='Codice lingua (default: en)'
    )

    parser.add_argument(
        '--location',
        default="Italy",
        help='Codice location (default: 2840 per USA)'
    )

    parser.add_argument(
        '-d', '--device',
        choices=['desktop', 'mobile', 'tablet'],
        default='desktop',
        help='Tipo di dispositivo (default: desktop)'
    )

    parser.add_argument(
        '--os',
        choices=['windows', 'macos', 'android', 'ios'],
        default='windows',
        help='Sistema operativo (default: windows)'
    )

    parser.add_argument(
        '-v', '--verbose',
        action='store_true',
        help='Mostra output dettagliato (JSON completo)'
    )

    parser.add_argument(
        '--cred',
        help='Basic base64 credentials (sovrascrive variabile d\'ambiente)'
    )

    args = parser.parse_args()

    try:
        # Crea l'oggetto request con Pydantic
        request_data = DataForSEORequest(
            keyword=args.keyword,
            location_name=args.location,
            language_code=args.language,
            device=DeviceType(args.device),
            os=OSType(args.os)
        )

        # Inizializza il client
        client = DataForSEOClient(
            base64_credentials=args.cred,
        )

        # Esegue la chiamata API
        print(f"Ricerca in corso per: '{request_data.keyword}'...")
        results = client.search_google_organic(request_data)

        # Formatta e mostra i risultati
        formatted_results = format_results(results, verbose=args.verbose)
        print(formatted_results)

    except ValueError as e:
        print(f"Errore di validazione: {e}", file=sys.stderr)
        return 1

    except Exception as e:
        print(f"Errore: {e}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
