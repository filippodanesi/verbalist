import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function IntegrazioniPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="text-[14px] text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2 mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla home
            </Link>
              <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-6">
              Tecnologia
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Verbalist si integra con le migliori piattaforme e tecnologie per garantire risultati di qualità enterprise-grade.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-6">Modelli di linguaggio (LLM)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Claude (Anthropic)",
                    logo: "/logos/claude.svg",
                    description: "Ideale per analisi complesse e generazione di contenuti lunghi",
                    useCase: "Analisi SERP, generazione contenuti",
                  },
                  {
                    name: "GPT-4 (OpenAI)",
                    logo: "/logos/gpt-4.svg",
                    description: "Eccellente per task creativi e ottimizzazione contenuti",
                    useCase: "Generazione, ottimizzazione",
                  },
                  {
                    name: "Gemini (Google)",
                    logo: "/logos/gemini.svg",
                    description: "Ottimizzato per analisi dati e pattern recognition",
                    useCase: "Analisi SERP, pattern extraction",
                  },
                ].map((llm) => (
                  <div key={llm.name} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <div className="mb-5">
                      <Image 
                        src={llm.logo} 
                        alt={llm.name} 
                        width={100} 
                        height={32}
                        className="h-6 w-auto"
                      />
                    </div>
                    <p className="text-[14px] text-neutral-600 mb-3">{llm.description}</p>
                    <div className="text-[13px] text-neutral-500">
                      <span className="font-medium">Uso:</span> {llm.useCase}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-6">API e servizi esterni</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "DataForSEO API v3",
                    description: "Fornisce dati SERP in tempo reale tramite endpoint /serp/google/organic/live/advanced. Recupera top 10 risultati organici con metadata completi (title, description, rank, URL).",
                    category: "Dati SERP",
                    features: [
                      "Filtraggio automatico domini esclusi (Wikipedia, social, aggregatori)",
                      "Supporto desktop/mobile con configurazione OS",
                      "Gestione paginazione SERP configurabile",
                      "Estrazione rank_group e rank_absolute per ogni risultato",
                    ],
                  },
                  {
                    name: "StealthScriber Service",
                    description: "Servizio di web scraping avanzato che converte HTML in Markdown strutturato. Gestisce JavaScript rendering, timeout configurabili e rotazione headers.",
                    category: "Web Scraping",
                    features: [
                      "Conversione HTML → Markdown ottimizzata per LLM",
                      "Gestione JavaScript rendering quando necessario",
                      "Timeout e retry configurabili",
                      "Estrazione metadata: status code, processing time",
                    ],
                  },
                  {
                    name: "Google Ads API",
                    description: "Integrazione pianificata per dati volume ricerca direttamente da Google",
                    category: "Keyword Research",
                    comingSoon: true,
                  },
                ].map((api) => (
                  <div key={api.name} className="bg-white border border-neutral-200 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[16px] font-medium text-neutral-900">{api.name}</h3>
                          {api.comingSoon && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                              In arrivo
                            </span>
                          )}
                        </div>
                        <p className="text-[14px] text-neutral-600 mb-3">{api.description}</p>
                        <div className="text-[13px] text-neutral-500 mb-3">
                          <span className="font-medium">Categoria:</span> {api.category}
                        </div>
                        {api.features && (
                          <div className="mt-4 pt-4 border-t border-neutral-200">
                            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                              Caratteristiche
                            </div>
                            <ul className="space-y-1">
                              {api.features.map((feature, idx) => (
                                <li key={idx} className="text-[13px] text-neutral-700 flex items-start gap-2">
                                  <span className="text-neutral-400 mt-1">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-6">Stack tecnologico</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    category: "Backend",
                    tech: ["Python 3.11+", "FastAPI", "SQLModel/SQLAlchemy", "Pydantic v2"],
                  },
                  {
                    category: "AI & ML",
                    tech: ["LangChain", "OpenAI SDK", "Anthropic SDK", "Google AI SDK"],
                  },
                  {
                    category: "Infrastruttura",
                    tech: ["Docker", "Kubernetes", "HTTPX (async)"],
                  },
                  {
                    category: "Frontend",
                    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
                  },
                ].map((stack) => (
                  <div key={stack.category} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <h3 className="text-[16px] font-medium text-neutral-900 mb-4">{stack.category}</h3>
                    <ul className="space-y-2">
                      {stack.tech.map((item) => (
                        <li key={item} className="text-[14px] text-neutral-700 flex items-center gap-2">
                          <span className="text-neutral-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-neutral-900 rounded-xl p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Pronto a far crescere il tuo traffico organico?
              </h2>
              <p className="text-lg text-neutral-300 mb-4">
                Inizia oggi. Nessuna carta richiesta. Risultati in 5 minuti.
              </p>
              <p className="text-[15px] text-neutral-400 mb-10">
                Genera il tuo primo contenuto ottimizzato per SEO e scopri perché Verbalist è diverso dagli altri tool.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[16px] bg-white text-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors font-medium shadow-lg"
                >
                  Inizia gratis ora
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#pricing"
                  className="text-[16px] text-neutral-300 hover:text-white transition-colors font-medium"
                >
                  Vedi i piani →
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Nessun impegno</span>
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
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

