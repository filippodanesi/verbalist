import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function AnalisiSerpPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Link href="/#features" className="text-[14px] text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-2 mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alle funzionalità
            </Link>
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">Analisi SERP</h1>
            <p className="text-lg text-neutral-600">
              Identifica i competitor che dominano Google per la tua keyword e scopri perché rankano nelle prime posizioni.
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Cosa fa</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Il sistema recupera i top 10 risultati organici per la keyword target tramite API esterne in tempo reale. 
                Filtra automaticamente aggregatori e social network per concentrarsi solo sui contenuti che competono realmente.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Per ogni risultato estrae metadata completi: URL, title tag, meta description e posizione di ranking. 
                Questi dati vengono validati e strutturati per essere utilizzati nelle fasi successive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Perché è importante</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Per creare contenuti che competono davvero, devi sapere chi sta già vincendo e perché. 
                Non puoi indovinare cosa Google vuole: devi osservare cosa funziona realmente nella SERP.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Questa fase è fondamentale perché ogni decisione successiva (struttura, topic, word count) 
                sarà basata su ciò che effettivamente ranka, non su supposizioni o best practice generiche.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">Risultato</h2>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                Ricevi una lista completa dei top 10 competitor con:
              </p>
              <ul className="space-y-2 text-[15px] text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>URL e posizione di ranking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Title tag e meta description ottimizzati</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Metadata completi per ogni risultato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>Dati pronti per l'analisi successiva</span>
                </li>
              </ul>
            </section>

            <section className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Ottimizzazione SEO</h3>
              <p className="text-[14px] text-neutral-600">
                Questa fase identifica chi compete realmente per le prime posizioni Google. 
                I dati estratti vengono utilizzati per capire quali pattern di successo replicare nel contenuto generato.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

