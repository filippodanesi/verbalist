import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const steps = [
  {
    number: "01",
    title: "Analisi SERP",
    description: "Identifica i competitor che dominano Google per la tua keyword",
    link: "/prodotto/come-funziona/analisi-serp",
  },
  {
    number: "02",
    title: "Scraping Competitor",
    description: "Estrae il contenuto completo dai competitor vincenti",
    link: "/prodotto/come-funziona/scraping-competitor",
  },
  {
    number: "03",
    title: "Analisi Pattern",
    description: "Identifica i pattern di successo: intent, topic, struttura, trust patterns",
    link: "/prodotto/come-funziona/analisi-pattern",
  },
  {
    number: "04",
    title: "Generazione Contenuto",
    description: "Genera contenuto completo ottimizzato per SEO, AEO, GEO e AI",
    link: "/prodotto/come-funziona/generazione-contenuto",
  },
  {
    number: "05",
    title: "Ottimizzazione",
    description: "Migliora contenuti esistenti confrontandoli con i competitor",
    link: "/prodotto/come-funziona/ottimizzazione",
  },
]

export default function ComeFunzionaPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Link href="/#features" className="text-[14px] text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-2 mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alle funzionalità
            </Link>
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">Come funziona Verbalist</h1>
            <p className="text-lg text-neutral-600">
              Un workflow automatizzato che analizza i competitor vincenti e genera contenuti ottimizzati per SEO, AEO, GEO e AI search.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {steps.map((step) => (
              <Link
                key={step.number}
                href={step.link}
                className="block group"
              >
                <div className="flex gap-6 items-start p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center text-lg font-medium text-neutral-600 transition-colors">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-700">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-neutral-600">{step.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
            <h2 className="text-2xl font-medium text-neutral-900 mb-4">Workflow completo</h2>
            <p className="text-[15px] text-neutral-700 leading-relaxed mb-6">
              Ogni fase del processo è progettata per ottimizzare i contenuti per ogni tipo di ricerca: 
              Google tradizionale (SEO), risposte dirette (AEO), motori generativi (GEO) e assistenti AI.
            </p>
            <p className="text-[15px] text-neutral-700 leading-relaxed">
              Il sistema lavora in modo automatizzato: inserisci una keyword e in 5 minuti ricevi un contenuto 
              completo ottimizzato, pronto per competere nelle prime posizioni.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

