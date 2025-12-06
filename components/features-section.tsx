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

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4">
            Ottimizzazione per SEO, AEO, GEO e AI
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Verbalist genera contenuti ottimizzati per ogni tipo di ricerca: Google tradizionale, risposte dirette, motori generativi e assistenti AI.
          </p>
        </div>

        <div className="space-y-24 mb-16">
          {[
            {
              title: "SEO: contenuti che competono per le prime posizioni",
              description:
                "Analizza i top 10 risultati Google per la tua keyword e replica i pattern vincenti: struttura heading ottimale, word count medio, topic coverage completo. Ogni contenuto è progettato per competere nelle prime posizioni organiche.",
              benefit: "Ranking organico",
            },
            {
              title: "AEO: ottimizzazione per risposte dirette",
              description:
                "Struttura contenuti per essere selezionati come risposte dirette nei motori di ricerca. Analisi dei featured snippets e ottimizzazione per domande specifiche. Contenuti che rispondono direttamente alle query degli utenti.",
              benefit: "Featured snippets",
            },
            {
              title: "GEO: contenuti per motori generativi",
              description:
                "Ottimizzazione per motori di ricerca generativi che creano risposte sintetiche. Contenuti strutturati, citabili e autorevoli che gli AI possono trovare, comprendere e utilizzare nelle loro risposte.",
              benefit: "AI search ready",
            },
            {
              title: "AI: trovabilità nei chatbot e assistenti",
              description:
                "Contenuti che gli assistenti AI possono trovare e citare. Struttura semantica chiara, segnali di autorevolezza e formattazione ottimizzata per essere inclusi nelle risposte di ChatGPT, Claude, Perplexity e altri.",
              benefit: "AI discoverable",
            },
          ].map((feature, index) => (
            <div key={feature.title} className="grid md:grid-cols-2 gap-16 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="inline-block text-xs font-medium text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full mb-4">
                  {feature.benefit}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-4 text-balance leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>

              <div className={`bg-neutral-50 rounded-xl border border-neutral-200 aspect-[4/3] ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center w-full">
                    <div className="w-16 h-16 rounded-xl bg-neutral-200 mx-auto mb-6" />
                    <div className="h-3 w-48 bg-neutral-200 rounded mx-auto mb-3" />
                    <div className="h-3 w-36 bg-neutral-200 rounded mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-b border-neutral-200 pt-16 pb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-4">
              Come funziona il sistema
            </h3>
            <p className="text-[15px] text-neutral-600 max-w-2xl mx-auto">
              Ogni step del processo è progettato per ottimizzare i contenuti per SEO, AEO, GEO e AI search.
            </p>
          </div>

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
      </div>
    </section>
  )
}
