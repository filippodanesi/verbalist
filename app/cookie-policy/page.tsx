import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy di Verbalist: cookie tecnici, statistici e di profilazione. Come gestirli e i tuoi diritti.",
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy — Verbalist",
    description: "Cookie Policy di Verbalist: cookie tecnici, statistici e di profilazione. Come gestirli e i tuoi diritti.",
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="text-base text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2 mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla home
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">
              Cookie Policy
            </h1>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                La presente informativa (di seguito, "Cookie Policy") disciplina il trattamento dei tuoi dati personali mediante l'utilizzo di cookie, effettuato da NUR S.r.l., con sede legale in San Giorgio Bigarello (MN), Via del Commercio 1/N, P.IVA 01902640208, indirizzo email gdpr@nur.it ("Titolare"), in conformità alle norme in materia di protezione dei dati personali, in particolare, il Regolamento UE 2016/679 ("GDPR"), per tramite del sito che stai navigando (di seguito, il "Sito").
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">1. Identità e dati di contatto del titolare del trattamento</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Il Titolare del trattamento è NUR. NUR è una società stabilita nel territorio italiano, pertanto non è stato nominato alcun rappresentante.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                Il Titolare ha nominato un responsabile per la protezione dei dati personali ("DPO") ai sensi dell'art. 37 GDPR. Il DPO può essere contattato al seguente indirizzo: gdpr@nur.it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">2. Modalità del trattamento</h3>
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Cookie</h4>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                I cookie sono stringhe di testo di piccole dimensioni che il Sito da te visitato invia al browser, che li memorizza per ritrasmetterli al Sito a fronte di una tua nuova visita.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                I cookie permettono di raccogliere informazioni sulla navigazione svolta.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                I cookie possono essere memorizzati in modo permanente sul tuo computer e avere una durata variabile (cookie persistenti), oppure possono non essere memorizzati in modo persistente sul tuo dispositivo ed essere automaticamente cancellati con la chiusura del browser (cookie di sessione).
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                I cookie possono essere installati dal sito che stai visitando o possono essere installati da altri siti web che forniscono servizi di vario generare a tale sito (cookie di terze parti).
              </p>

              <h4 className="text-lg font-medium text-neutral-900 mb-2">2.1 Cookie tecnici</h4>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                <strong>Cookie tecnici</strong>
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                I cookie di questa categoria permettono al Sito di funzionare correttamente.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                <strong>Cookie statistici</strong>
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Il Sito utilizza anche cookie statistici realizzati direttamente da NUR, o forniti da terze parti.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Con i cookie statistici realizzati direttamente da NUR, NUR svolgerà analisi statistiche relative a diversi domini, siti web o app riconducibili a NUR stessa, procedendo in proprio all'elaborazione statistica, senza che tali analisi siano volte ad assumere decisioni di natura commerciale.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                Con i cookie statistici di terze parti, sono stati adottati degli strumenti per ridurne il potere identificativo, ad esempio mascherando porzioni significative degli indirizzi IP trattati. In caso di uso di cookie statistici di terze parti, la terza parte si è contrattualmente impegnata con NUR ad utilizzarli esclusivamente per la fornitura del servizio, a conservarli separatamente e a non "arricchirli" o "incrociarli" con altre informazioni di cui dispongono.
              </p>

              <h4 className="text-lg font-medium text-neutral-900 mb-2">Dati di navigazione e variabili ambientali</h4>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Il Sito acquisisce in automatico alcuni dati personali relativi alla tua navigazione. In questa categoria di dati rientrano, ad esempio:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700 mb-4">
                <li>gli indirizzi IP del computer da te utilizzato;</li>
                <li>il numero di accessi;</li>
                <li>le pagine utilizzate;</li>
                <li>la data e l'orario di accesso;</li>
                <li>l'URL in cui era il browser prima di visualizzare il Sito;</li>
                <li>il tipo di browser di navigazione;</li>
                <li>il sistema operativo utilizzato.</li>
              </ul>

              <h4 className="text-lg font-medium text-neutral-900 mb-2">2.2 Cookie di profilazione</h4>
              <p className="text-base text-neutral-700 leading-relaxed">
                I cookie di profilazione sono cookie non tecnici che consentono a NUR di fornirti servizi personalizzati in base alle tue esigenze. NUR utilizza i cookie di profilazione elencati.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">3. Eliminare e disattivare cookie</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Puoi configurare il browser per evitare il trattamento dei cookie, oppure cancellarli subito dopo la navigazione. Di seguito, elenchiamo le modalità di disattivazione ed eliminazione dei cookie con i principali browser:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>
                  <strong>Eliminare/disattivare i cookie con Firefox:</strong> <a href="http://support.mozilla.com/it/kb/Eliminare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline">http://support.mozilla.com/it/kb/Eliminare%20i%20cookie</a>
                </li>
                <li>
                  <strong>Eliminare/disattivare i cookie con EDGE:</strong> <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline">https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a>
                </li>
                <li>
                  <strong>Eliminare/disattivare i cookie con Chrome:</strong> <a href="http://support.google.com/chrome/bin/answer.py?hl=it&answer=95647" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline">http://support.google.com/chrome/bin/answer.py?hl=it&answer=95647</a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">4. Dati che fornisci volontariamente</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Hai la facoltà e la libertà di fornire dati con l'invio di posta elettronica agli indirizzi indicati sul Sito, che NUR potrà acquisire per le finalità di volta in volta indicate. Oltre all'indirizzo email necessario per risponderti, saranno trattati eventuali altri dati personali contenuti nella relativa comunicazione. I dati così raccolti saranno conservati e trattati esclusivamente per conservare la corrispondenza, senza usarli per altre finalità.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">5. Finalità, base giuridica del trattamento, facoltatività del consenso e conseguenze del mancato consenso</h3>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li><strong>Dati personali trattati con i cookie tecnici:</strong> La comunicazione di dati personali è un obbligo di natura contrattuale, senza cui non potrebbe essere reso disponibile il sito web perfettamente funzionante in conformità ai termini e condizioni di utilizzo.</li>
                <li><strong>Dati personali trattati con i cookie di profilazione:</strong> La comunicazione di dati personali è puramente facoltativa. In caso di mancata comunicazione dei dati, sarà impossibile per NUR metterti a disposizione dei servizi personalizzati tramite profilazione. La base giuridica del trattamento è il tuo consenso, espresso in conformità alla normativa vigente.</li>
                <li><strong>Dati personali forniti volontariamente tramite email:</strong> La comunicazione di dati personali è puramente facoltativa. In caso di mancata comunicazione dei dati, a NUR non sarà possibile rispondere alle tue richieste. La base giuridica del trattamento è il legittimo interesse di NUR, in qualità di Titolare, di rispondere alle richieste.</li>
              </ul>
              <p className="text-base text-neutral-700 leading-relaxed mt-3">
                Potrai esprimere il consenso al trattamento di dati personali con cookie non tecnici cliccando su una specifica casella presentata all'interno di un banner.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">6. Processo decisionale automatizzato e profilazione</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Se acconsenti al trattamento con i cookie di profilazione per fruire di servizi personalizzati, i tuoi dati personali potranno essere soggetti ad un processo decisionale automatizzato, con uno specifico algoritmo che deciderà quali comunicazioni siano più adatte al tuo profilo o quali potrebbero essere di tuo interesse. Le conseguenze previste di questo trattamento sono l'invio di comunicazioni commerciali altamente profilate, l'invio di sconti, l'invio di inviti ad eventi ritenuti di interesse.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                In conformità all'articolo 22 GDPR, hai il diritto di:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>ottenere l'intervento umano nel processo decisionale da parte di NUR;</li>
                <li>esprimere la tua opinione;</li>
                <li>ottenere una spiegazione della decisione conseguita da NUR;</li>
                <li>contestare la decisione stessa.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">7. Fonte da cui hanno origine i dati personali e categorie di dati</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                NUR tratterà solo i dati personali da te forniti in conformità alla Cookie Policy, raccolti tramite il Sito o l'invio di una tua email. NUR non tratterà i dati provenienti da fonti accessibili al pubblico. NUR non tratterà i dati personali particolari di cui all'articolo 9 del GDPR.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">8. Destinatari e eventuali categorie di destinatari dei dati personali</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Potranno ricevere i tuoi dati personali:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>le società che offrono servizi di hosting;</li>
                <li>le società di comunicazioni che effettuano attività di comunicazione commerciale ed attività di profilazione per conto del Titolare, le quali rivestono la qualifica di responsabili per il trattamento.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">9. Trasferimento dei dati</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                NUR ha intenzione di trasferire i tuoi dati personali a soggetti stabiliti in un Paese terzo all'Unione Europea o a un'organizzazione internazionale. Tali soggetti potrebbero essere rappresentati, a titolo esemplificativo, da:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700 mb-3">
                <li>le società di comunicazioni che effettuano attività di comunicazione per conto di NUR;</li>
                <li>le società che offrono servizi della società dell'informazione;</li>
                <li>le società che offrono servizi di hosting;</li>
                <li>i fornitori di servizi della società di comunicazione.</li>
              </ul>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Il trasferimento di dati personali verso tali soggetti, qualora stabiliti in un Paese terzo, o verso un'organizzazione internazionale, è effettuata in presenza di una decisione di adeguatezza della Commissione Europea, che ha verificato come il Paese terzo, il territorio o uno o più settori specifici all'interno del paese terzo, o l'organizzazione internazionale in questione garantiscono un livello di protezione adeguato dei tuoi diritti. In caso di assenza di tali decisioni, se ritenuto opportuno, NUR si riserva di concludere specifici e separati accordi che obblighino tali soggetti ad adottare adeguate misure di sicurezza, anche organizzative, volte ad offrire garanzie appropriate in merito ai tuoi diritti.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                Google Inc., in particolare, si è contrattualmente vincolata ad assicurare idonea tutela dei diritti dell'interessato. I dati potranno essere così trasferiti nei seguenti Paesi: Stati Uniti d'America.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mt-3">
                Per ottenere una copia di tali dati o il luogo dove sono stati resi disponibili è sufficiente inviare la relativa richiesta all'indirizzo: gdpr@nur.it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">10. Periodo di conservazione dei dati</h3>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li>NUR conserverà i tuoi dati personali trattati con cookie tecnici al fine di consentirti una corretta fruizione del Sito per un periodo non superiore a 12 (dodici) mesi decorrenti dalla data della singola raccolta, in conformità a quanto indicato al punto 2.1 della Cookie Policy;</li>
                <li>NUR conserverà i tuoi dati personali trattati per mettere a disposizione dei servizi personalizzati tramite cookie non tecnici e cookie di profilazione per un periodo non superiore a 12 (dodici) mesi decorrenti dalla data della singola raccolta, in conformità a quanto indicato al punto 2.2 della Cookie Policy;</li>
                <li>conserverà i tuoi dati personali forniti volontariamente e trattati per rispondere alle tue richieste per un periodo di tempo strettamente necessario a conseguire questa finalità e, in ogni caso, non superiore a 12 (dodici) mesi decorrenti dalla data della singola raccolta.</li>
              </ul>
              <p className="text-base text-neutral-700 leading-relaxed mt-3">
                NUR si riserva, in ogni caso, di richiederti di rinnovare il consenso al trattamento e/o di verificare i consensi da te già espressi.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">11. I tuoi diritti</h3>
              <h4 className="text-lg font-medium text-neutral-900 mb-2">11.1 Diritto di opposizione</h4>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                In qualità di "interessato", hai il diritto di opporti, in qualsiasi momento, per motivi connessi alla tua situazione particolare, al trattamento dei dati personali che ti riguardano, ai sensi dell'articolo 6, paragrafo 1, lettere e) o f) del GDPR, compresa la profilazione sulla base di tali disposizioni.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                NUR si astiene dal trattare ulteriormente i tuoi dati personali, salvo che NUR stessa dimostri l'esistenza di motivi legittimi cogenti per procedere al trattamento che prevalgono sui tuoi interessi, diritti e libertà oppure per l'accertamento, l'esercizio o la difesa di un diritto in sede giudiziaria.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Qualora i dati personali siano trattati per finalità di marketing diretto, hai il diritto di opporti in qualsiasi momento al trattamento dei dati personali che ti riguardano effettuato per tali finalità, compresa la profilazione nella misura in cui sia connessa a tale marketing diretto.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                In caso di opposizione al trattamento per finalità di marketing diretto, i dati personali non sono più oggetto di trattamento per tali finalità.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Potrai opporti al trattamento dei tuoi dati personali per finalità di marketing diretto anche solo in parte, ad esempio opponendoti al solo invio di comunicazioni promozionali effettuato tramite strumenti automatizzati e/o digitali, oppure all'invio di comunicazioni cartacee e/o al ricevimento di comunicazioni telefoniche.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                Qualora i tuoi dati personali siano trattati a fini di ricerca scientifica o storica o a fini statistici ai sensi dell'articolo 89, paragrafo 1 del GDPR, hai il diritto, per motivi connessi alla tua situazione particolare, ad opporti al trattamento dei dati personali che ti riguardano, salvo il caso in cui il trattamento sia necessario per l'esecuzione di un compito di interesse pubblico.
              </p>

              <h4 className="text-lg font-medium text-neutral-900 mb-2">11.2 Altri diritti</h4>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                NUR vuole inoltre informarti dell'esistenza dei seguenti tuoi diritti:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-neutral-700">
                <li><strong>Diritto di accesso:</strong> hai il diritto di ottenere da NUR la conferma che sia o meno in corso un trattamento di dati personali che ti riguardano. In tal caso, hai il diritto di accedere ai tuoi dati personali e alle specifiche informazioni, in conformità all'articolo 15 del GDPR;</li>
                <li><strong>Diritto di rettifica:</strong> hai il diritto di ottenere da NUR la rettifica dei dati personali inesatti che ti riguardano senza ingiustificato ritardo. Tenuto conto delle finalità del trattamento, hai il diritto di ottenere l'integrazione dei dati personali incompleti, anche fornendo una dichiarazione integrativa, in conformità all'articolo 16 del GDPR;</li>
                <li><strong>Diritto alla cancellazione:</strong> hai il diritto di ottenere da NUR la cancellazione dei dati personali che ti riguardano senza ingiustificato ritardo. NUR ha l'obbligo di cancellare senza ingiustificato ritardo i dati personali, se sussistono i motivi elencati dall'articolo 17 del GDPR;</li>
                <li><strong>Diritto di limitazione di trattamento:</strong> hai il diritto di ottenere da NUR la limitazione del trattamento, se sussistono i motivi elencati dall'articolo 18 del GDPR;</li>
                <li><strong>Diritto alla portabilità dei dati:</strong> hai il diritto di ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico, i dati personali che ti riguardano forniti a NUR, come il diritto di trasmettere tali dati a un altro titolare senza impedimenti da parte di NUR, nei casi ed alle condizioni specificate dall'articolo 20 del GDPR;</li>
                <li><strong>Diritto di opposizione a comunicazioni commerciali:</strong> hai il diritto di opporti in ogni momento, gratuitamente, al ricevimento di comunicazioni commerciali di NUR;</li>
                <li><strong>Diritto di proporre reclamo all'Autorità Garante:</strong> hai il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali, per lamentare una violazione della disciplina in materia di protezione dei dati personali, in conformità all'articolo 77 del GDPR.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">12. Come esercitare i tuoi diritti</h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Potrai esercitare i diritti indicati nella Cookie Policy indirizzando le istanze direttamente a NUR all'indirizzo email gdpr@nur.it, oppure inviando la relativa comunicazione mediante una raccomandata A/R all'indirizzo Via del Commercio 1/N, San Giorgio Bigarello (MN).
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                Potrai proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali secondo le modalità previste dal sito ufficiale, indirizzandolo ai recapiti disponibili all'indirizzo <a href="https://www.garanteprivacy.it/home/footer/contatti" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline">https://www.garanteprivacy.it/home/footer/contatti</a>.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">13. Accessibilità</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                La Cookie Policy è accessibile all'indirizzo https://www.nur.it/cookie-policy e presso NUR. Se lo richiedi espressamente, NUR potrà fornirti le informazioni oralmente, a condizione che sia comprovata la tua identità, con una richiesta telefonica rivolta agli indirizzi del Titolare.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">14. Modifiche</h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                NUR potrà modificare la Cookie Policy, anche per adeguarsi alla normativa nazionale e/o dell'Unione Europea o alle innovazioni tecnologiche. Eventuali nuove versioni della Cookie Policy saranno riportate sul Sito. Ti invitiamo a controllare periodicamente la Cookie Policy. Ogni modifica ti verrà comunque comunicata attraverso un pop-up sul Sito o differenti modalità e/o strumenti informatici. Se NUR modificasse sostanzialmente la Cookie Policy, prevedendo nuove finalità di trattamento e/o categorie di dati personali trattati oppure mutando le terze parti, NUR stessa provvederà ad informarti, richiedendoti i consensi necessari, tramite apposito banner. Se fosse impossibile per NUR verificare l'avvenuta memorizzazione sul tuo dispositivo dei cookie, in occasione di una tua successiva visita sul Sito, ad esempio in caso di cancellazione dei cookie installati, NUR stessa provvederà ad informarti, richiedendoti i consensi necessari, tramite apposito banner. Se fossero trascorsi almeno 6 (sei) mesi dalla precedente presentazione del banner sul Sito, NUR stessa provvederà ad informarti, richiedendoti i consensi necessari, tramite apposito banner.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

