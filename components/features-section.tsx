"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const executors = [
  {
    id: "serp-retrieval",
    name: "Analisi SERP",
    description: "Identifica i competitor che dominano Google per la tua keyword",
    seoFocus: "Scopre chi ranka nelle prime posizioni e perché",
    details: {
      what: "Recupera i top 10 risultati organici per la keyword target, filtra aggregatori e social, estrae metadata completi",
      why: "Per capire cosa funziona realmente su Google, non cosa pensiamo che funzioni",
      output: "Lista di competitor vincenti con posizione, title, description e URL",
    },
  },
  {
    id: "scrape",
    name: "Scraping Competitor",
    description: "Estrae il contenuto completo dai competitor vincenti",
    seoFocus: "Analizza cosa hanno scritto i top performer per rankare",
    details: {
      what: "Scarica e converte il contenuto di ogni competitor in formato strutturato, mantenendo la gerarchia heading",
      why: "Per studiare struttura, topic coverage, word count e pattern di successo osservabili",
      output: "Contenuto completo di ogni competitor in formato ottimizzato per analisi",
    },
  },
  {
    id: "analyze",
    name: "Analisi Pattern",
    description: "Identifica i pattern di successo comuni ai top performer",
    seoFocus: "Scopre intent di ricerca, topic ricorrenti, struttura heading ottimale e segnali E-E-A-T",
    details: {
      what: "Analizza tutti i contenuti competitor per estrarre: search intent, topic comuni, struttura heading tipica, word count medio, segnali di autorevolezza",
      why: "Per replicare ciò che funziona davvero, non supposizioni",
      output: "Analisi completa con intent, topic, struttura ottimale, trust patterns e metriche quantitative",
    },
  },
  {
    id: "generate",
    name: "Generazione Contenuto",
    description: "Genera contenuto completo ottimizzato per SEO, AEO, GEO e AI",
    seoFocus: "Crea contenuti che competono per le prime posizioni, featured snippets e citazioni AI",
    details: {
      what: "Genera articolo completo con: SEO metadata (title, description, slug), outline strutturato basato su pattern vincenti, body content ottimizzato, suggerimenti media",
      why: "Per creare contenuti che superano i competitor su tutti i fronti: ranking organico, featured snippets, AI search",
      output: "Contenuto completo pronto per pubblicare, ottimizzato per ogni tipo di ricerca",
    },
  },
  {
    id: "improve",
    name: "Ottimizzazione Contenuti",
    description: "Migliora contenuti esistenti confrontandoli con i competitor",
    seoFocus: "Identifica gap e problemi, poi riscrive il contenuto per competere meglio",
    details: {
      what: "Analizza contenuto esistente, calcola score (SEO, leggibilità, completezza, trust), identifica problemi per severità, genera versione migliorata completa",
      why: "Per trasformare contenuti che non performano in contenuti competitivi senza ricominciare da zero",
      output: "Score dettagliati, lista problemi prioritizzati, contenuto riscritto completo con tutte le migliorie",
    },
  },
]

const processSteps = [
  {
    number: "1",
    title: "Keyword",
    description: "Inserisci la keyword target",
  },
  {
    number: "2",
    title: "Analisi SERP",
    description: "Recuperiamo e analizziamo i top 10 risultati Google",
  },
  {
    number: "3",
    title: "Pattern extraction",
    description: "L'AI identifica struttura, topic e trust signals dei competitor",
  },
  {
    number: "4",
    title: "Contenuto ottimizzato",
    description: "Generiamo o miglioriamo il tuo contenuto con dati reali",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* PROCESSO */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-12 text-center">
            Come funziona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-medium mb-4 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-neutral-300 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-neutral-300 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ACCORDION */}
        <div className="mb-24">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {executors.map((executor) => (
              <div key={executor.id} id={executor.id} className="scroll-mt-24">
                <AccordionItem
                  value={executor.id}
                  className="border border-neutral-200 last:!border-b last:!border-b-neutral-200 rounded-lg px-6 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="text-left flex-1">
                      <div className="text-[15px] font-medium text-neutral-900 mb-1">{executor.name}</div>
                      <div className="text-[14px] text-neutral-600">{executor.description}</div>
                      <div className="text-[13px] text-neutral-500 mt-1">{executor.seoFocus}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-6 pt-4 border-t border-neutral-100">
                      <div>
                        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                          Cosa fa
                        </div>
                        <div className="text-[14px] text-neutral-700">{executor.details.what}</div>
                      </div>

                      <div>
                        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                          Perché è importante
                        </div>
                        <div className="text-[14px] text-neutral-700">{executor.details.why}</div>
                      </div>

                      <div>
                        <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                          Risultato
                        </div>
                        <div className="text-[14px] text-neutral-700">{executor.details.output}</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        {/* USE CASES */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-12 text-center">
            Genera o ottimizza
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Genera contenuto */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-medium text-neutral-900 mb-2">Genera contenuto</h3>
              <p className="text-sm text-neutral-500 mb-4">Crea da zero, basandoti sui competitor</p>
              <p className="text-[15px] text-neutral-600 mb-6">
                Parti da una keyword e ottieni un contenuto completo, strutturato per rankare.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">SEO metadata (title, meta description, slug)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">Outline con heading H1-H3</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">Contenuto completo (Markdown o HTML)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">Suggerimenti media con alt text</span>
                </div>
              </div>
            </div>

            {/* Card 2: Ottimizza contenuto */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-medium text-neutral-900 mb-2">Ottimizza contenuto</h3>
              <p className="text-sm text-neutral-500 mb-4">Migliora quello che hai già</p>
              <p className="text-[15px] text-neutral-600 mb-6">
                Carica un contenuto esistente e ricevi analisi + versione migliorata.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">Score 0-100 (SEO, leggibilità, completezza, trust)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">Issue identificate per severità</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">Improvement prioritizzati</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-neutral-700">Contenuto riscritto e ottimizzato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
