"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const funzionalita = [
  {
    id: "serp-retrieval",
    name: "Analisi SERP",
    description: "Recupera i primi 10 risultati Google per la tua keyword",
    details: {
      cosa: "Interroga le API di ricerca in tempo reale, filtra i risultati non rilevanti (social, aggregatori) ed estrae i metadata di ogni competitor.",
      perche: "Per capire cosa funziona davvero su Google, non cosa pensiamo che funzioni.",
      risultato: "Lista di competitor con posizione, titolo, descrizione e URL.",
    },
  },
  {
    id: "scrape",
    name: "Estrazione contenuti",
    description: "Scarica e struttura il contenuto dei competitor",
    details: {
      cosa: "Recupera il contenuto completo di ogni pagina competitor, rimuove elementi non rilevanti (banner, menu) e lo converte in formato strutturato.",
      perche: "Per analizzare esattamente cosa hanno scritto i top performer.",
      risultato: "Contenuto pulito con gerarchia heading preservata.",
    },
  },
  {
    id: "analyze",
    name: "Analisi pattern",
    description: "Identifica struttura, argomenti e segnali di qualità",
    details: {
      cosa: "Analizza tutti i contenuti per identificare: intent di ricerca, argomenti comuni, struttura heading tipica, lunghezza media, segnali E-E-A-T.",
      perche: "Per replicare i pattern che portano risultati, non supposizioni.",
      risultato: "Report con pattern vincenti e struttura consigliata.",
    },
  },
  {
    id: "generate",
    name: "Generazione contenuto",
    description: "Crea contenuto completo ottimizzato per il ranking",
    details: {
      cosa: "Genera un articolo completo con title, meta description, slug, struttura heading, body content e suggerimenti per immagini.",
      perche: "Per creare contenuti che competono con i migliori già in prima pagina.",
      risultato: "Contenuto pronto per la pubblicazione.",
    },
  },
  {
    id: "improve",
    name: "Ottimizzazione contenuti",
    description: "Migliora contenuti esistenti con analisi e riscrittura",
    details: {
      cosa: "Analizza un contenuto esistente, calcola score su più dimensioni (SEO, leggibilità, completezza), identifica problemi e genera una versione migliorata.",
      perche: "Per recuperare contenuti che non performano senza ripartire da zero.",
      risultato: "Score dettagliati, lista problemi e contenuto riscritto.",
    },
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ACCORDION */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-8">Cosa fa Verbalist</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {funzionalita.map((item) => (
              <div key={item.id} id={item.id} className="scroll-mt-24">
                <AccordionItem
                  value={item.id}
                  className="bg-white border border-neutral-200 [&]:border-b [&]:border-b-neutral-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline px-6 py-5">
                    <div className="text-left flex-1">
                      <div className="text-[16px] font-medium text-neutral-900 mb-1">{item.name}</div>
                      <div className="text-base text-neutral-600">{item.description}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 pt-4 border-t border-neutral-100">
                      <div>
                        <div className="text-[13px] font-medium text-neutral-500 mb-1">Cosa fa</div>
                        <p className="text-base text-neutral-700 leading-relaxed">{item.details.cosa}</p>
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-neutral-500 mb-1">Perché è importante</div>
                        <p className="text-base text-neutral-700 leading-relaxed">{item.details.perche}</p>
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-neutral-500 mb-1">Risultato</div>
                        <p className="text-base text-neutral-700 leading-relaxed">{item.details.risultato}</p>
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
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-8">Due modalità</h2>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Genera */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Genera contenuto</h3>
              <p className="text-base text-neutral-500 mb-4">Crea da zero, basandoti sui competitor</p>
              <p className="text-base text-neutral-600 mb-4 leading-relaxed">
                Parti da una keyword e ottieni un contenuto completo, strutturato per rankare.
              </p>
              <div className="pt-4 border-t border-neutral-100">
                <div className="text-[13px] font-medium text-neutral-500 mb-2">Cosa ottieni</div>
                <ul className="space-y-1.5">
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Title tag e meta description</span>
                  </li>
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Struttura heading H1-H3</span>
                  </li>
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Contenuto completo</span>
                  </li>
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Suggerimenti media con alt text</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ottimizza */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Ottimizza contenuto</h3>
              <p className="text-base text-neutral-500 mb-4">Migliora quello che hai già</p>
              <p className="text-base text-neutral-600 mb-4 leading-relaxed">
                Carica un contenuto esistente e ricevi analisi dettagliata più versione migliorata.
              </p>
              <div className="pt-4 border-t border-neutral-100">
                <div className="text-[13px] font-medium text-neutral-500 mb-2">Cosa ottieni</div>
                <ul className="space-y-1.5">
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Score 0-100 su più dimensioni</span>
                  </li>
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Problemi identificati per priorità</span>
                  </li>
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Suggerimenti di miglioramento</span>
                  </li>
                  <li className="text-base text-neutral-700 flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">•</span>
                    <span>Contenuto riscritto e ottimizzato</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}