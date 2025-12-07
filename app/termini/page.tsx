import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termini di Servizio",
  description: "Termini e condizioni di utilizzo di Verbalist: registrazione, uso del servizio, proprietà intellettuale e pagamenti.",
  alternates: {
    canonical: "/termini",
  },
  openGraph: {
    title: "Termini di Servizio — Verbalist",
    description: "Termini e condizioni di utilizzo di Verbalist: registrazione, uso del servizio, proprietà intellettuale e pagamenti.",
  },
}

export default function TerminiPage() {
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
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">
              Termini di servizio
            </h1>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                I presenti Termini di Servizio (di seguito, "Termini") regolano l'accesso e l'utilizzo della piattaforma Verbalist (di seguito, il "Servizio"), fornita da NUR S.r.l., con sede legale in San Giorgio Bigarello (MN), Via del Commercio 1/N, P.IVA 01902640208 (di seguito, "NUR" o il "Fornitore").
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                Utilizzando il Servizio, l'utente accetta integralmente i presenti Termini. Se non si accettano i Termini, si prega di non utilizzare il Servizio.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">1. Descrizione del Servizio</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Verbalist è una piattaforma di SEO automation che utilizza intelligenza artificiale per:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>Analizzare i risultati di ricerca (SERP) per keyword specifiche</li>
                <li>Estrarre e analizzare contenuti dei competitor</li>
                <li>Identificare pattern di successo nei contenuti posizionati</li>
                <li>Generare contenuti ottimizzati per SEO, AEO, GEO e AI search</li>
                <li>Ottimizzare contenuti esistenti</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">2. Registrazione e Account</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Per utilizzare il Servizio è necessario creare un account fornendo informazioni accurate e complete. L'utente è responsabile di:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>Mantenere la riservatezza delle credenziali di accesso</li>
                <li>Tutte le attività che avvengono tramite il proprio account</li>
                <li>Notificare immediatamente qualsiasi uso non autorizzato dell'account</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">3. Utilizzo del Servizio</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                L'utente si impegna a utilizzare il Servizio in modo lecito e conforme ai presenti Termini. È vietato:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>Utilizzare il Servizio per scopi illegali o non autorizzati</li>
                <li>Violare diritti di proprietà intellettuale di terzi</li>
                <li>Generare contenuti diffamatori, offensivi o illeciti</li>
                <li>Tentare di accedere a sistemi o dati non autorizzati</li>
                <li>Interferire con il corretto funzionamento del Servizio</li>
                <li>Rivendere o sublicenziare il Servizio senza autorizzazione</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">4. Proprietà intellettuale</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Il Servizio, inclusi software, algoritmi, interfaccia, documentazione e marchi, sono di proprietà esclusiva di NUR o dei suoi licenzianti e sono protetti dalle leggi sulla proprietà intellettuale.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                I contenuti generati dal Servizio su richiesta dell'utente sono di proprietà dell'utente stesso, che ne assume la piena responsabilità per l'utilizzo e la pubblicazione.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">5. Contenuti generati</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                L'utente riconosce e accetta che:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>I contenuti sono generati tramite intelligenza artificiale e potrebbero richiedere revisione</li>
                <li>NUR non garantisce il posizionamento nei motori di ricerca</li>
                <li>L'utente è responsabile della verifica dell'accuratezza dei contenuti prima della pubblicazione</li>
                <li>L'utente è responsabile del rispetto dei diritti di terzi nei contenuti pubblicati</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">6. Pagamenti e abbonamenti</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                L'accesso al Servizio può essere soggetto al pagamento di un corrispettivo secondo i piani tariffari pubblicati sul sito. I pagamenti sono:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>Dovuti anticipatamente secondo la periodicità scelta (mensile o annuale)</li>
                <li>Non rimborsabili, salvo quanto previsto dalla legge</li>
                <li>Soggetti a rinnovo automatico salvo disdetta</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">7. Limitazione di responsabilità</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Nei limiti consentiti dalla legge applicabile:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>Il Servizio è fornito "così com'è" senza garanzie di alcun tipo</li>
                <li>NUR non garantisce risultati specifici di posizionamento SEO</li>
                <li>NUR non è responsabile per danni indiretti, incidentali o consequenziali</li>
                <li>La responsabilità massima di NUR è limitata all'importo pagato dall'utente negli ultimi 12 mesi</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">8. Sospensione e risoluzione</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                NUR si riserva il diritto di sospendere o terminare l'accesso al Servizio in caso di:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>Violazione dei presenti Termini</li>
                <li>Mancato pagamento</li>
                <li>Uso improprio o abusivo del Servizio</li>
                <li>Richiesta delle autorità competenti</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">9. Modifiche ai Termini</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                NUR si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche saranno comunicate tramite il sito web o via email. L'uso continuato del Servizio dopo la comunicazione delle modifiche costituisce accettazione dei nuovi Termini.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">10. Legge applicabile e foro competente</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia derivante dai presenti Termini o dall'utilizzo del Servizio sarà competente in via esclusiva il Foro di Mantova, salvo i casi in cui la legge preveda un foro inderogabile a favore del consumatore.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">11. Contatti</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Per qualsiasi domanda relativa ai presenti Termini, è possibile contattare NUR all'indirizzo email info@nur.it o all'indirizzo Via del Commercio 1/N, San Giorgio Bigarello (MN).
              </p>
            </section>

            <section>
              <p className="text-base text-neutral-500 leading-relaxed mt-8 pt-8 border-t border-neutral-200">
                Ultimo aggiornamento: Dicembre 2024
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
