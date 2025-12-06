import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-neutral-900 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
            Da keyword a contenuto in 5 minuti
          </h2>
          <p className="text-[15px] text-neutral-300 mb-8 max-w-xl mx-auto">
            Genera il tuo primo contenuto ottimizzato per SEO e scopri come Verbalist 
            analizza i competitor per creare contenuti che rankano.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 text-[15px] bg-white text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors font-medium"
            >
              Prenota una demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/funzionalita"
              className="text-[15px] text-neutral-300 hover:text-white transition-colors font-medium"
            >
              Scopri il prodotto →
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-neutral-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Nessuna carta richiesta</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancella quando vuoi</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Supporto incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}