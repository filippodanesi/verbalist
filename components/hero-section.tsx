import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-neutral-900 mb-6 tracking-tight leading-tight">
            Build content that <span className="text-neutral-600">AI can find</span> and rank
          </h1>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Verbalist analizza i competitor che dominano Google e genera contenuti ottimizzati per SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization) e AI search.
            <br className="hidden md:block" />
            <span className="text-neutral-500">Da keyword a contenuto completo ottimizzato in 5 minuti.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[15px] bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors font-medium"
            >
              Inizia gratis - nessuna carta richiesta
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#features"
              className="text-[15px] text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Scopri come funziona →
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Prova gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Nessuna carta richiesta</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Risultati in 5 minuti</span>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl border border-neutral-200 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-medium text-neutral-500 mb-4">Cosa ottieni</div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Contenuti ottimizzati per ogni tipo di ricerca
                </h3>
                <div className="space-y-3 text-[15px] text-neutral-600">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>SEO:</strong> Title tag, meta description, struttura heading ottimizzata</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>AEO:</strong> Contenuti strutturati per risposte dirette nei motori di ricerca</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>GEO:</strong> Ottimizzazione per motori generativi e AI search</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>AI:</strong> Contenuti che gli assistenti AI possono trovare e citare</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-neutral-400 mb-1">Keyword inserita</div>
                    <div className="text-[15px] font-medium text-neutral-900">migliori crm 2025</div>
                  </div>
                  <div className="h-px bg-neutral-200" />
                  <div>
                    <div className="text-xs text-neutral-400 mb-1">Risultato</div>
                    <div className="text-[15px] text-neutral-700">
                      Articolo completo di 2.500+ parole con struttura ottimizzata, pronto per competere nelle prime posizioni Google.
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Completato in 4 minuti
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
