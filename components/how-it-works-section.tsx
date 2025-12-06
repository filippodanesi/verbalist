export function HowItWorksSection() {
  return (
    <section id="workflow" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4">
            Semplice come sembra
          </h2>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Inserisci una keyword. Verbalist fa il resto. In 5 minuti hai un articolo completo ottimizzato per competere nelle prime posizioni.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "Inserisci la keyword",
              description:
                "Scegli la keyword per cui vuoi competere. Verbalist analizza automaticamente i top 10 risultati Google per capire cosa funziona.",
              icon: "🔍",
            },
            {
              step: "02",
              title: "Analisi automatica dei competitor",
              description:
                "Il sistema studia i contenuti che dominano la SERP: struttura, topic, lunghezza e segnali di autorevolezza. Scopre cosa li fa rankare.",
              icon: "📊",
            },
            {
              step: "03",
              title: "Generazione intelligente",
              description:
                "L'AI crea un articolo completo replicando i pattern vincenti: struttura ottimale, topic coverage completo e ottimizzazione SEO.",
              icon: "✨",
            },
            {
              step: "04",
              title: "Pubblica e monitora",
              description:
                "Ricevi l'articolo completo con title tag, meta description e struttura ottimizzata. Pronto per pubblicare e competere per le prime posizioni.",
              icon: "🚀",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-2xl group-hover:bg-neutral-200 transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1 pb-8 border-b border-neutral-100 last:border-0">
                <div className="text-xs font-medium text-neutral-400 mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-[15px] text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#features"
            className="text-[15px] text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2 transition-colors font-medium"
          >
            Scopri tutti i dettagli tecnici
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
