import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function ScrapingCompetitorPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Link href="/#features" className="text-[14px] text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-2 mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alle funzionalità
            </Link>
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">Scraping Competitor</h1>
            <p className="text-lg text-neutral-600">
              Estrae il contenuto completo dai competitor vincenti per analizzare struttura, topic coverage e pattern di successo.
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Cosa fa</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Il sistema crea automaticamente task di scraping per ogni URL trovato nella fase di analisi SERP. 
                Ogni competitor viene processato in parallelo per massimizzare l'efficienza.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Per ogni URL, il contenuto viene scaricato e convertito automaticamente da HTML a Markdown strutturato, 
                mantenendo la gerarchia delle heading (H1, H2, H3) e la struttura semantica originale.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Il sistema gestisce automaticamente timeout, errori e retry per garantire che tutti i contenuti 
                vengano recuperati correttamente prima di procedere all'analisi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Perché è importante</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Per capire perché un contenuto ranka, devi studiare cosa contiene realmente: struttura heading, 
                topic trattati, word count, segnali di autorevolezza visibili nel testo.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                L'esecuzione parallela permette di analizzare tutti i competitor simultaneamente, riducendo 
                drasticamente i tempi rispetto a un approccio sequenziale. Il sistema aspetta che tutti i contenuti 
                siano disponibili prima di procedere, garantendo un'analisi completa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Risultato</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Per ogni competitor ottieni:
              </p>
              <ul className="space-y-2 text-[15px] text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Contenuto completo in formato Markdown strutturato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Gerarchia heading preservata (H1, H2, H3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Metadata di processing (status code, tempo di elaborazione)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Contenuti pronti per l'analisi pattern</span>
                </li>
              </ul>
            </section>

            <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Ottimizzazione SEO</h3>
              <p className="text-[14px] text-neutral-600">
                Questa fase estrae il contenuto reale dei competitor vincenti. I dati raccolti permettono di 
                identificare pattern osservabili: struttura heading ottimale, topic ricorrenti, word count medio, 
                segnali E-E-A-T visibili nel testo.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

