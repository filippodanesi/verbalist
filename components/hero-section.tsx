import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-neutral-900 mb-6 tracking-tight leading-tight">
            I tuoi competitor rankano. Tu indovini.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Contenuti ottimizzati per SEO, AEO e GEO — generati dall'analisi reale dei top 10 in SERP, non dall'immaginazione di un LLM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[15px] bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors font-medium"
            >
              Prova Verbalist
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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

        {/* PILLAR */}
        <div className="mt-24">
          <p className="text-center text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            Analisi SERP automatizzata per contenuti che rankano
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Data-driven</h3>
              <p className="text-sm text-neutral-600">Analizza i top 10 competitor reali per ogni keyword</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Multi-formato</h3>
              <p className="text-sm text-neutral-600">Blog post, landing page, schede prodotto, guide</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">SEO + AEO + GEO</h3>
              <p className="text-sm text-neutral-600">Ottimizzato per Google, risposte AI e motori generativi</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Output completo</h3>
              <p className="text-sm text-neutral-600">Title, meta, outline, body e suggerimenti media</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
