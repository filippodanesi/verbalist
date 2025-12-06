import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-[#f5f3ef]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-6 tracking-tight">
          Prova Verbalist
        </h2>
        <p className="text-lg text-neutral-600 mb-10">
          Analizza i competitor. Genera contenuti ottimizzati. In 5 minuti.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[16px] bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors font-medium shadow-lg"
          >
            Inizia gratis
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#pricing"
            className="text-[16px] text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
          >
            Vedi i piani →
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Nessun impegno</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancella quando vuoi</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Supporto incluso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
