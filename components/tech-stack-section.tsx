export function TechStackSection() {
  return (
    <section id="tech" className="py-16 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium text-neutral-900 mb-3">
            Tecnologia che fa la differenza
          </h2>
          <p className="text-[15px] text-neutral-600 max-w-xl mx-auto">
            Dietro Verbalist c'è un'architettura enterprise-grade che garantisce risultati affidabili e scalabili.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
            <h3 className="text-[15px] font-medium text-neutral-900 mb-2">AI multi-modello</h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Utilizziamo i migliori modelli AI (Claude, GPT-4, Gemini) per garantire risultati di qualità superiore.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
            <h3 className="text-[15px] font-medium text-neutral-900 mb-2">Scalabile e affidabile</h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Architettura progettata per gestire grandi volumi senza compromettere qualità o velocità.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
            <h3 className="text-[15px] font-medium text-neutral-900 mb-2">Output garantito</h3>
            <p className="text-[14px] text-neutral-600 leading-relaxed">
              Validazione automatica di ogni output per garantire consistenza e qualità in ogni contenuto generato.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/integrazioni"
            className="text-[14px] text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2 transition-colors"
          >
            Scopri tutte le integrazioni e i dettagli tecnici
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
