import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function OttimizzazionePage() {
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
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">Ottimizzazione Contenuti</h1>
            <p className="text-lg text-neutral-600">
              Analizza e migliora contenuti esistenti confrontandoli con i competitor SERP, identificando gap e problemi prioritari.
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Cosa fa</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Il sistema può recuperare contenuti esistenti da tre fonti: testo grezzo (incolla direttamente), 
                URL (fornisci il link della pagina) o file PDF. Il contenuto viene analizzato confrontandolo con 
                l'analisi SERP dei competitor vincenti.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Per ogni contenuto calcola score quantitativi su 4 dimensioni (0-100):
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="text-[15px] font-medium text-neutral-900 mb-1">SEO</div>
                  <div className="text-[13px] text-neutral-600">Keyword usage, meta optimization, heading structure</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="text-[15px] font-medium text-neutral-900 mb-1">Leggibilità</div>
                  <div className="text-[13px] text-neutral-600">Sentence length, vocabulary, flow, scannability</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="text-[15px] font-medium text-neutral-900 mb-1">Completezza</div>
                  <div className="text-[13px] text-neutral-600">Topic coverage rispetto ai competitor SERP</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="text-[15px] font-medium text-neutral-900 mb-1">Trust</div>
                  <div className="text-[13px] text-neutral-600">Segnali E-E-A-T: expertise, authoritativeness, trustworthiness</div>
                </div>
              </div>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Identifica problemi ordinati per severità (critical, major, minor) e genera miglioramenti prioritizzati 
                con rationale basato sull'analisi SERP. Infine, riscrive il contenuto completo applicando tutte le migliorie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Perché è importante</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Non tutti i contenuti devono essere riscritti da zero. Se hai già articoli pubblicati che non performano, 
                questa fase ti permette di trasformarli in contenuti competitivi senza ricominciare da capo.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                I score quantitativi ti danno una visione chiara di dove migliorare, mentre i problemi identificati 
                ti mostrano cosa blocca il ranking. Il contenuto riscritto mantiene il tono originale mentre ottimizza 
                per le performance SERP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Risultato</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Ricevi un'analisi completa e un contenuto migliorato con:
              </p>
              <ul className="space-y-2 text-[15px] text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Score originali:</strong> valutazione quantitativa su SEO, leggibilità, completezza, trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Problemi identificati:</strong> lista ordinata per severità (critical → major → minor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Miglioramenti prioritizzati:</strong> azioni concrete con rationale basato su SERP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Contenuto riscritto completo:</strong> versione migliorata con tutte le ottimizzazioni applicate</span>
                </li>
              </ul>
            </section>

            <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Ottimizzazione SEO, AEO, GEO e AI</h3>
              <p className="text-[14px] text-neutral-600 mb-3">
                L'ottimizzazione migliora il contenuto per ogni tipo di ricerca:
              </p>
              <ul className="space-y-2 text-[14px] text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>SEO:</strong> Corregge problemi di keyword usage, meta tags, struttura heading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>AEO:</strong> Ottimizza struttura per featured snippets e risposte dirette</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>GEO:</strong> Migliora segnali di autorevolezza per motori generativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>AI:</strong> Rafforza struttura semantica per trovabilità negli assistenti AI</span>
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

