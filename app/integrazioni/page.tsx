import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tecnologia",
  description: "Claude, GPT-4, Gemini e DataForSEO: lo stack AI di Verbalist per analisi SERP e generazione contenuti SEO enterprise-grade.",
  alternates: {
    canonical: "/integrazioni",
  },
  openGraph: {
    title: "Tecnologia — Verbalist",
    description: "Claude, GPT-4, Gemini e DataForSEO: lo stack AI di Verbalist per analisi SERP e generazione contenuti SEO enterprise-grade.",
  },
}

export default function IntegrazioniPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="text-[14px] text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-2 mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla home
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 ">
              Tecnologia
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Verbalist si integra con le migliori piattaforme e tecnologie per garantire risultati di qualità enterprise-grade.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="font-serif text-2xl font-medium tracking-tight text-neutral-900 mb-6">Modelli di linguaggio (LLM)</h2>
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
                    <p className="text-base text-neutral-600 mb-3">{llm.description}</p>
                    <div className="text-[13px] text-neutral-500">
                      <span className="font-medium">Uso:</span> {llm.useCase}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium tracking-tight text-neutral-900 mb-6">API e servizi esterni</h2>
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
                        <p className="text-base text-neutral-600 mb-3">{api.description}</p>
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

            <section className="bg-neutral-50 rounded-xl p-8 md:p-12 border border-neutral-200">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-neutral-900 mb-4">
                Vuoi vedere Verbalist in azione?
              </h2>
              <p className="text-base text-neutral-600 mb-6 max-w-2xl">
                Prenota una demo con il nostro team: ti mostreremo come Verbalist può automatizzare la creazione di contenuti SEO per il tuo business.
              </p>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-base bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
              >
                Prenota una demo
              </Link>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

