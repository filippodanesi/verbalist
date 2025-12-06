import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const funzionalita = [
  {
    slug: "analisi-serp",
    title: "Analisi SERP",
    description: "Identifica i competitor che dominano Google per la tua keyword e scopri perché rankano nelle prime posizioni.",
    cosa: "Recupera i top 10 risultati organici per la keyword target, filtra aggregatori e social, estrae metadata completi.",
    risultato: "Lista di competitor vincenti con posizione, title, description e URL pronti per l'analisi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    slug: "scraping-competitor",
    title: "Scraping Competitor",
    description: "Estrae il contenuto completo dai competitor vincenti per analizzare struttura, topic coverage e pattern di successo.",
    cosa: "Scarica e converte il contenuto di ogni competitor in formato strutturato, mantenendo la gerarchia heading.",
    risultato: "Contenuto completo di ogni competitor in formato ottimizzato per analisi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    slug: "analisi-pattern",
    title: "Analisi Pattern",
    description: "Identifica i pattern di successo comuni ai top performer: intent, topic, struttura heading e segnali E-E-A-T.",
    cosa: "Analizza tutti i contenuti competitor per estrarre: search intent, topic comuni, struttura heading tipica, word count medio, segnali di autorevolezza.",
    risultato: "Report con pattern vincenti e struttura consigliata basata sui dati reali.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: "generazione-contenuto",
    title: "Generazione Contenuto",
    description: "Genera contenuto completo ottimizzato per SEO, AEO, GEO e AI search basato sui pattern identificati.",
    cosa: "Genera articolo completo con title, meta description, slug, outline strutturato basato su pattern vincenti, body content ottimizzato, suggerimenti media.",
    risultato: "Contenuto completo pronto per pubblicare, ottimizzato per ogni tipo di ricerca.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
]

export default function FunzionalitaPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4 tracking-tight">
              Funzionalità
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Verbalist automatizza l'intero processo di creazione contenuti SEO, dall'analisi dei competitor alla generazione di contenuti ottimizzati.
            </p>
          </div>

          {/* Grid Funzionalità */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {funzionalita.map((funz) => (
              <Card key={funz.slug} className="border border-neutral-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
                      {funz.icon}
                    </div>
                    <Link
                      href={`/funzionalita/${funz.slug}`}
                      className="inline-flex items-center gap-1 text-[14px] text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      Dettagli <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <CardTitle className="text-xl font-medium text-neutral-900">
                    {funz.title}
                  </CardTitle>
                  <CardDescription className="text-[15px] text-neutral-600 leading-relaxed">
                    {funz.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-[13px] font-medium text-neutral-500 mb-2 uppercase tracking-wide">
                      Cosa fa
                    </h3>
                    <p className="text-[14px] text-neutral-700 leading-relaxed">
                      {funz.cosa}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-medium text-neutral-500 mb-2 uppercase tracking-wide">
                      Risultato
                    </h3>
                    <p className="text-[14px] text-neutral-700 leading-relaxed">
                      {funz.risultato}
                    </p>
                  </div>
                  <Link
                    href={`/funzionalita/${funz.slug}`}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-neutral-900 hover:text-neutral-600 transition-colors pt-2"
                  >
                    Scopri di più <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-neutral-50 rounded-xl p-8 md:p-12 border border-neutral-200 text-center">
            <h2 className="text-2xl font-medium text-neutral-900 mb-4">
              Pronto a iniziare?
            </h2>
            <p className="text-[15px] text-neutral-600 mb-6 max-w-2xl mx-auto">
              Scopri come Verbalist può automatizzare la creazione di contenuti ottimizzati per la tua azienda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-[15px] bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
              >
                Prenota una demo
              </Link>
              <Link
                href="/prodotto"
                className="inline-flex items-center gap-1 text-[15px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Scopri il prodotto <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

