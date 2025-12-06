import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function AnalisiPatternPage() {
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
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">Analisi Pattern</h1>
            <p className="text-lg text-neutral-600">
              Identifica i pattern di successo comuni ai top performer: intent di ricerca, topic ricorrenti, struttura heading ottimale e segnali E-E-A-T.
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Cosa fa</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Il sistema analizza tutti i contenuti dei competitor recuperati nella fase precedente. 
                Calcola automaticamente metriche quantitative come word count medio e range, pulendo il testo 
                da HTML e Markdown per ottenere conteggi accurati.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Utilizza modelli di linguaggio avanzati per estrarre pattern qualitativi osservabili:
              </p>
              <ul className="space-y-2 text-[15px] text-neutral-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Search intent:</strong> identifica se la query è informazionale, commerciale, transazionale o navigazionale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Topic comuni:</strong> temi principali ricorrenti nei contenuti vincenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Subtopics:</strong> sotto-argomenti frequenti che approfondiscono i topic principali</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Struttura heading:</strong> pattern ricorrenti di H1, H2, H3 nei top performer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>Trust patterns:</strong> segnali E-E-A-T visibili nel testo (citazioni, bio autore, date aggiornamento)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Perché è importante</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Questa è la fase che trasforma i dati grezzi in insight utilizzabili. Non basta sapere chi ranka: 
                devi capire <em>perché</em> ranka. Quali pattern sono comuni ai top performer? Quale struttura funziona meglio?
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                L'analisi è puramente osservativa: estrae solo ciò che è visibile nei contenuti vincenti, 
                senza supposizioni. Ogni decisione di generazione successiva sarà basata su questi pattern reali.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Risultato</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Ricevi un'analisi completa con:
              </p>
              <ul className="space-y-2 text-[15px] text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Search intent dominante identificato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Lista di topic e subtopic ricorrenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Struttura heading tipica dei top performer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Segnali di trust e autorevolezza osservati</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Metriche quantitative: word count medio e range</span>
                </li>
              </ul>
            </section>

            <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Ottimizzazione SEO, AEO, GEO e AI</h3>
              <p className="text-[14px] text-neutral-600 mb-3">
                Questa fase identifica i pattern che funzionano per ogni tipo di ricerca:
              </p>
              <ul className="space-y-2 text-[14px] text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>SEO:</strong> struttura heading ottimale per ranking organico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>AEO:</strong> pattern per risposte dirette e featured snippets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>GEO:</strong> struttura semantica per motori generativi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span><strong>AI:</strong> segnali di autorevolezza per citazioni AI</span>
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

