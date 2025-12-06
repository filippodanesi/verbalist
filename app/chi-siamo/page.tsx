import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ChiSiamoPage() {
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
              Chi siamo
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Verbalist nasce dall'esperienza pluridecennale di <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline font-medium">NUR Digital Marketing</a> nel campo della SEO, della GEO (Generative Engine Optimization) e dell'ottimizzazione dei contenuti.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">La nostra storia</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                  <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline font-medium">NUR Digital Marketing</a> è una digital agency fondata nel 1999, con oltre 25 anni di esperienza nel campo della SEO, della GEO (Generative Engine Optimization), dell'ottimizzazione dei contenuti e del digital marketing. In questi anni abbiamo aiutato oltre 430 aziende in Italia e nel mondo a migliorare la propria visibilità online e a raggiungere risultati concreti attraverso strategie multi-canale, data-driven e potenziate dall'AI.
                </p>
                <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                  NUR è stata pioniera in Italia nella GEO Strategy, pubblicando il primo libro italiano sulla Generative Engine Optimization. Siamo certificati HubSpot Partner Platinum e collaboriamo con aziende di livello enterprise come EY, Mercedes-Benz, LVMH, SDA Bocconi e molte altre.
                </p>
                <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                  Verbalist rappresenta l'evoluzione naturale di questa esperienza: un tool che automatizza e potenzia le metodologie che abbiamo perfezionato in oltre due decenni di lavoro sul campo. Ogni funzionalità è stata progettata basandosi su pattern reali di successo osservati in migliaia di campagne SEO e GEO.
                </p>
                <p className="text-[15px] text-neutral-700 leading-relaxed">
                  La nostra missione è democratizzare l'accesso a contenuti di qualità enterprise-grade, rendendo disponibili a tutti le stesse tecniche e strategie che utilizziamo per i nostri clienti più importanti.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-neutral-900 mb-4">La nostra esperienza</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                  <h3 className="text-[16px] font-medium text-neutral-900 mb-2">25+ anni di esperienza</h3>
                  <p className="text-[14px] text-neutral-600 leading-relaxed">
                    Fondati nel 1999, abbiamo oltre 25 anni di esperienza nel digital marketing, con oltre 430 aziende clienti in Italia e nel mondo.
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                  <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Metodologie testate</h3>
                  <p className="text-[14px] text-neutral-600 leading-relaxed">
                    Ogni funzionalità di Verbalist è basata su pattern di successo osservati e validati in migliaia di campagne reali.
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                  <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Focus su risultati</h3>
                  <p className="text-[14px] text-neutral-600 leading-relaxed">
                    La nostra filosofia si basa su metriche concrete: ranking, traffico organico e conversioni, non su teorie non verificate.
                  </p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                  <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Pionieri della GEO</h3>
                  <p className="text-[14px] text-neutral-600 leading-relaxed">
                    Siamo stati i primi in Italia a pubblicare un libro sulla Generative Engine Optimization e a lanciare servizi GEO per le aziende.
                  </p>
                </div>
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

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

