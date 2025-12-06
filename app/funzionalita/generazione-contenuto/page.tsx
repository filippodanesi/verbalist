import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function GenerazioneContenutoPage() {
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
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">Generazione Contenuto</h1>
            <p className="text-lg text-neutral-600">
              Genera contenuto completo ottimizzato per SEO, AEO, GEO e AI search basato sui pattern identificati nell'analisi SERP.
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Cosa fa</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Il sistema utilizza l'analisi SERP completata nella fase precedente per generare contenuto completo. 
                Seleziona automaticamente la strategia migliore in base al tipo di contenuto richiesto (blog post, 
                landing page, product page, guide) e applica il tone profile configurato.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                La generazione segue i pattern identificati nei top performer:
              </p>
              <ul className="space-y-2 text-[15px] text-neutral-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Crea un outline strutturato basato sulla <em>typical_structure</em> dei competitor vincenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Copre tutti i topic e subtopic identificati nell'analisi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Rispetta il word count medio dei top performer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Include segnali E-E-A-T osservati nei competitor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Identifica gap nei competitor e li riempie</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Perché è importante</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Non basta replicare i competitor: devi superarli. Il sistema genera contenuti che sono più completi, 
                meglio strutturati e più autorevoli dei competitor esistenti, identificando cosa manca e riempiendo quei gap.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Ogni decisione è basata sui dati reali dell'analisi SERP: struttura heading, topic coverage, 
                word count, segnali di trust. Il risultato è un contenuto progettato per competere nelle prime posizioni.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Risultato</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Ricevi un contenuto completo pronto per pubblicare con:
              </p>
              <ul className="space-y-2 text-[15px] text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>SEO metadata:</strong> title tag ottimizzato, meta description, slug URL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Outline strutturato:</strong> lista completa di heading (H1, H2, H3) basata sui pattern vincenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Body content completo:</strong> articolo completo nel formato richiesto (Markdown o HTML)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Media suggestions:</strong> suggerimenti per immagini/video con placement e alt text ottimizzato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Rationale:</strong> spiegazione delle scelte basate sull'analisi SERP</span>
                </li>
              </ul>
            </section>

            <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Ottimizzazione SEO, AEO, GEO e AI</h3>
              <p className="text-[14px] text-neutral-600 mb-3">
                Il contenuto generato è ottimizzato per ogni tipo di ricerca:
              </p>
              <ul className="space-y-2 text-[14px] text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>SEO:</strong> Title tag, meta description, struttura heading per ranking organico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>AEO:</strong> Struttura ottimizzata per featured snippets e risposte dirette</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>GEO:</strong> Contenuti citabili e autorevoli per motori generativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>AI:</strong> Formattazione semantica chiara per essere trovato e citato dagli assistenti AI</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

