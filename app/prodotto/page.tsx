import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function ProdottoPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Link href="/" className="text-[14px] text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-2 mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla home
            </Link>
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">Verbalist</h1>
            <p className="text-lg text-neutral-600">
              Genera contenuti ottimizzati per SEO, AEO, GEO e AI search analizzando i competitor che dominano Google.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Cosa fa Verbalist</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Verbalist è un sistema automatizzato che analizza i competitor vincenti su Google e genera contenuti 
                ottimizzati per competere nelle prime posizioni. Invece di indovinare cosa funziona, studia cosa 
                effettivamente ranka e replica quei pattern.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Il sistema funziona per ogni tipo di ricerca: Google tradizionale (SEO), risposte dirette nei motori 
                di ricerca (AEO), motori generativi (GEO) e assistenti AI come ChatGPT, Claude e Perplexity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Come funziona</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-6">
                Il processo è completamente automatizzato:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Analizza i competitor vincenti",
                    description: "Identifica chi ranka nelle prime posizioni Google per la tua keyword e perché",
                  },
                  {
                    step: "2",
                    title: "Estrae i pattern di successo",
                    description: "Studia struttura, topic, word count e segnali di autorevolezza dei top performer",
                  },
                  {
                    step: "3",
                    title: "Genera contenuto ottimizzato",
                    description: "Crea contenuto completo che replica e supera i pattern vincenti identificati",
                  },
                  {
                    step: "4",
                    title: "Ottimizza contenuti esistenti",
                    description: "Migliora articoli già pubblicati identificando gap e problemi prioritari",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-sm font-medium text-neutral-600">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-neutral-900 mb-1">{item.title}</h3>
                      <p className="text-[14px] text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Cosa ottieni</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Contenuto completo",
                    items: [
                      "Articolo completo ottimizzato",
                      "Title tag e meta description",
                      "Struttura heading ottimale",
                      "Pronto per pubblicare",
                    ],
                  },
                  {
                    title: "Ottimizzazione SEO, AEO, GEO, AI",
                    items: [
                      "Ranking organico Google",
                      "Featured snippets",
                      "Motori generativi",
                      "Assistenti AI",
                    ],
                  },
                ].map((section) => (
                  <div key={section.title} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <h3 className="text-[16px] font-medium text-neutral-900 mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-[14px] text-neutral-700 flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-neutral-900 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-medium mb-4">Da keyword a contenuto in 5 minuti</h2>
              <p className="text-[15px] text-neutral-300 mb-6">
                Inserisci una keyword. Verbalist analizza automaticamente i competitor, identifica i pattern vincenti 
                e genera un contenuto completo ottimizzato per competere nelle prime posizioni.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[15px] bg-white text-neutral-900 px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors font-medium"
              >
                Prova gratuita
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

