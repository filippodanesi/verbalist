export function BenefitsSection() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4">
            Cosa fa Verbalist per te
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Un sistema che analizza i competitor vincenti e genera contenuti ottimizzati per ogni tipo di ricerca.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              metric: "SEO",
              label: "Ottimizzazione per Google",
              description: "Analizza i top 10 risultati e replica i pattern vincenti: struttura, topic, word count. Contenuti che competono per le prime posizioni organiche.",
            },
            {
              metric: "AEO",
              label: "Risposte dirette",
              description: "Struttura contenuti per essere selezionati come featured snippets. Ottimizzazione per domande specifiche e risposte dirette nei motori di ricerca.",
            },
            {
              metric: "GEO & AI",
              label: "Trovabilità AI",
              description: "Contenuti che gli assistenti AI possono trovare e citare. Struttura semantica chiara e segnali di autorevolezza per essere inclusi nelle risposte AI.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-neutral-200 p-8">
              <div className="text-4xl font-medium text-neutral-900 mb-3">{item.metric}</div>
              <div className="text-[15px] font-medium text-neutral-900 mb-2">{item.label}</div>
              <div className="text-[14px] text-neutral-600 leading-relaxed">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 rounded-xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-medium mb-4">
              Cosa ricevi
            </h3>
            <p className="text-[15px] text-neutral-300 mb-8">
              Contenuti completi ottimizzati per ogni tipo di ricerca: Google tradizionale, featured snippets, motori generativi e assistenti AI.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              {[
                "Articolo completo ottimizzato per ranking organico",
                "Title tag e meta description per SEO",
                "Struttura heading ottimizzata per featured snippets (AEO)",
                "Contenuti citabili e autorevoli per AI search (GEO)",
                "Formattazione ottimale per chatbot e assistenti AI",
                "Score dettagliati e suggerimenti per migliorare contenuti esistenti",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

