from datetime import datetime, timezone, timedelta
from typing import Dict, Any

from sqlmodel import Session, select

from models.tasks import (
    Subtask, SubTaskKind, RunStatus,
    SubtaskDependency, DependencyType,
    get_next_ordinal
)


async def execute_create_scrape_tasks(session: Session, subtask: Subtask) -> Dict[str, Any]:
    """
    Orchestratore che crea dinamicamente i task di scraping
    basandosi sui risultati del predecessore GET_DATAFORSEO_TOP_10
    """

    # Query per trovare il predecessore di tipo GET_DATAFORSEO_TOP_10
    stmt = (
        select(Subtask.result)
        .join(SubtaskDependency, SubtaskDependency.predecessor_id == Subtask.id)
        .where(
            SubtaskDependency.successor_id == subtask.id,
            Subtask.kind == SubTaskKind.GET_DATAFORSEO_TOP_10
        )
    )

    predecessor_result = session.exec(stmt).first()

    if not predecessor_result:
        raise ValueError("No predecessor result found for orchestrator")

    urls = predecessor_result.get('urls', [])
    keyword = predecessor_result.get('keyword', '')

    created_subtasks = []
    created_ids = []

    # Trova il barrier che dipende da questo orchestrator
    stmt = (
        select(Subtask)
        .join(SubtaskDependency, SubtaskDependency.successor_id == Subtask.id)
        .where(
            SubtaskDependency.predecessor_id == subtask.id,
            Subtask.kind == SubTaskKind.WAIT_BARRIER
        )
    )
    barrier = session.exec(stmt).first()

    if not barrier:
        raise ValueError("No barrier found depending on this orchestrator")

    # Crea dinamicamente un subtask per ogni URL trovato
    for i, url_data in enumerate(urls):
        scrape_subtask = Subtask(
            task_id=subtask.task_id,
            kind=SubTaskKind.SCRAPE,
            status=RunStatus.BLOCKED,
            ordinal=get_next_ordinal(session, subtask.task_id),
            idempotency_key=f"scrape:{subtask.id}:{i}",
            payload={
                'url': url_data['url'],
                'url_index': i,
                'keyword': keyword,
                'url_data': url_data
            }
        )

        session.add(scrape_subtask)
        session.flush()  # Per ottenere l'ID

        # Crea dipendenza dall'orchestratore al task di scrape
        dependency = SubtaskDependency(
            predecessor_id=subtask.id,
            successor_id=scrape_subtask.id,
            dep_type=DependencyType.HARD
        )
        session.add(dependency)

        # Crea dipendenza dal task di scrape al barrier
        barrier_dep = SubtaskDependency(
            predecessor_id=scrape_subtask.id,
            successor_id=barrier.id,
            dep_type=DependencyType.HARD
        )
        session.add(barrier_dep)

        created_ids.append(str(scrape_subtask.id))
        created_subtasks.append({
            'url': url_data['url']
        })

    session.add(barrier)
    session.commit()

    return {
        'created_count': len(created_subtasks),
        'created_subtasks': created_subtasks,
        'created_ids': created_ids,
    }


async def execute_wait_barrier(session: Session, subtask: Subtask) -> Dict[str, Any]:
    """
    Barrier che raccoglie i risultati dei task di scraping completati.
    Quando viene eseguito, tutti i predecessori sono già completati grazie al sistema di dipendenze.
    """

    stmt = (
        select(Subtask)
        .join(SubtaskDependency, SubtaskDependency.predecessor_id == Subtask.id)
        .where(
            SubtaskDependency.successor_id == subtask.id,
            Subtask.kind == SubTaskKind.SCRAPE
        )
    )
    scrape_subtasks = session.exec(stmt).all()


    # Raccogli i risultati
    scrape_ids = []
    succeeded_count = 0
    failed_count = 0

    for st in scrape_subtasks:
        if st.status == RunStatus.SUCCEEDED and st.result:
            scrape_ids.append(str(st.id))
            succeeded_count += 1
        elif st.status in [RunStatus.FAILED, RunStatus.CANCELED]:
            failed_count += 1

    return {
        'scrape_subtask_ids': scrape_ids,
        'total_count': len(scrape_subtasks),
        'succeeded_count': succeeded_count,
        'failed_count': failed_count,
    }


async def execute_analyze_results(session: Session, subtask: Subtask) -> Dict[str, Any]:
    """
    Recupera i risultati con query diretta
    """
    # Ottieni gli ID dal barrier
    barrier = session.exec(
        select(Subtask)
        .join(SubtaskDependency, SubtaskDependency.predecessor_id == Subtask.id)
        .where(
            SubtaskDependency.successor_id == subtask.id,
            Subtask.kind == SubTaskKind.WAIT_BARRIER
        )
    ).first()

    scrape_ids = barrier.result.get('scrape_subtask_ids', [])

    # Query diretta per i risultati
    scrape_results = session.exec(
        select(Subtask)
        .where(
            Subtask.id.in_(scrape_ids),
            Subtask.status == RunStatus.SUCCEEDED
        )
    ).all()

    # Analizza i dati
    analysis = {
        'total_scraped': len(scrape_results),
        'keyword': subtask.payload.get('keyword', ''),
        'results_summary': [
            {
                'url': st.result.get('url'),
                'word_count': st.result.get('content', {}).get('word_count', 0)
            }
            for st in scrape_results[:10]  # Primi 10
        ]
    }

    return analysis
