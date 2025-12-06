import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8">
            <section>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                La presente informativa (di seguito, "Informativa Privacy") è relativa al trattamento dei tuoi dati personali (di seguito, i "Dati Personali") effettuato da NUR S.r.l., con sede legale in San Giorgio Bigarello (MN), Via del Commercio 1/N, P.IVA 01902640208, e-mail info@nur.it (di seguito, "NUR" o il "Titolare"), anche in conformità al Regolamento UE 2016/679 (di seguito "GDPR").
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">1. Identità e dati di contatto del titolare del trattamento</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Titolare del trattamento è NUR. Essendo il Titolare stabilito nel territorio italiano, non è stato nominato alcun rappresentante.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">2. Dati di contatto del responsabile della protezione dei dati</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Il Titolare ha provveduto a nominare un responsabile per la protezione dei dati ("DPO"). Il DPO è contattabile agli indirizzi del Titolare o agli indirizzi seguenti gdpr@nur.it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">3. Finalità del trattamento e base giuridica del trattamento</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                I tuoi Dati Personali saranno trattati per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700">
                <li>
                  <strong>a)</strong> per inviarti comunicazioni di marketing diretto, newsletter, materiale pubblicitario, per mezzo di sistemi tradizionali di contatto e sistemi informatici automatizzati, incluse comunicazioni commerciali o promozionali a mezzo e-mail o SMS, o per ricerche ed analisi di mercato. La base giuridica del trattamento è il consenso, espresso in conformità all'Informativa Privacy;
                </li>
                <li>
                  <strong>b)</strong> per attività di determinazione delle tue abitudini e preferenze con trattamenti di profilazione, per fornirti un servizio personalizzato. La base giuridica è il tuo consenso, espresso in conformità all'Informativa Privacy. In relazione ai Dati Personali trattati, la comunicazione di Dati Personali non è un obbligo di natura contrattuale. Hai la facoltà di fornire i Dati Personali. In caso di mancata comunicazione di tali dati, NUR non potrà fornirti un servizio personalizzato;
                </li>
                <li>
                  <strong>c)</strong> per finalità connesse a relativi obblighi di legge. La base giuridica del trattamento è l'obbligo legale di NUR di trattare i Dati Personali secondo la normativa applicabile.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">4. Modalità di espressione del consenso</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Potrai esprimere il tuo consenso sottoscrivendo un documento informatizzato tramite specifiche flagbox.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">5. Modalità di trattamento e logica</h3>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700">
                <li>In relazione ai Dati Personali trattati per le finalità di cui al punto a) numero 3 dell'Informativa Privacy (finalità di marketing), il trattamento sarà effettuato mediante software di invio di informazioni commerciali;</li>
                <li>In relazione ai Dati Personali trattati per le finalità di cui al punto b) numero 3 (profilazione), il trattamento avverrà mediante software di tipo CRM che consentono di definire gusti e preferenze per offrirti servizi e comunicazioni personalizzate. Per ulteriori dettagli, si veda il punto successivo dell'Informativa Privacy.</li>
                <li>In relazione ai Dati Personali trattati e conservati per le finalità di cui al punto c), numero 3 (obblighi di legge), il trattamento avverrà mediante strumenti cartacei, logiche automatizzate ed utilizzo di software gestionali di tipo CRM che consentiranno di gestire al meglio l'adempimento degli obblighi di legge.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">6. Processo decisionale automatizzato e profilazione</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                Se acconsenti al trattamento dei Dati Personali per fruire di servizi personalizzati tramite profilazione, i Dati Personali potranno essere soggetti ad un processo decisionale automatizzato, con uno specifico algoritmo che deciderà quali comunicazioni siano più adatte al tuo profilo o quali potrebbero essere maggiormente di tuo interesse. Il trattamento così effettuato ha, quali conseguenze previste, a titolo esemplificativo, l'invio di comunicazioni commerciali altamente profilate, l'invio di inviti ad eventi ritenuti di interesse, ecc.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                In conformità all'articolo 22 GDPR, hai il diritto di:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700">
                <li>ottenere l'intervento umano nel processo decisionale da parte di NUR;</li>
                <li>esprimere la tua opinione;</li>
                <li>ottenere una spiegazione della decisione conseguita da NUR;</li>
                <li>contestare la decisione stessa.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">7. Fonte da cui hanno origine i Dati Personali</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Saranno trattati solo i Dati Personali forniti in conformità con l'Informativa Privacy. NUR non tratterà Dati Personali provenienti da fonti accessibili al pubblico.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">8. Destinatari e categorie di destinatari dei Dati Personali</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                Potranno essere destinatari dei Dati Personali:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700">
                <li>le società di comunicazioni che effettuano attività di comunicazione commerciale ed attività di profilazione per conto del Titolare, qualora sia stato espresso il relativo consenso, le quali rivestono la qualifica di responsabili per il trattamento;</li>
                <li>le società che offrono servizi della società dell'informazione, ivi incluse, in particolare, quelle che offrono servizi di hosting;</li>
                <li>le società che effettuano indagini statistiche e di mercato, qualora sia stato espresso il relativo consenso;</li>
                <li>le società di revisione contabile;</li>
                <li>le società partner del Titolare.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">9. Categorie di dati</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Saranno trattati Dati Personali. In nessun caso potranno essere trattati i Dati Personali particolari definiti all'articolo 9 del GDPR.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">10. Trasferimento dei dati</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                NUR ha intenzione di trasferire i Dati Personali verso soggetti stabiliti in un Paese terzo all'Unione Europea o a un'organizzazione internazionale.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                Tali soggetti potrebbero essere rappresentati, ad esempio, da:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700 mb-3">
                <li>le società di comunicazioni che effettuano attività di comunicazione per conto del Titolare;</li>
                <li>provider di servizi della società della comunicazione;</li>
                <li>organizzazioni controllate e/o controllanti.</li>
              </ul>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                Il trasferimento di Dati Personali verso tali soggetti, qualora stabiliti in un Paese terzo o un'organizzazione internazionale, è effettuata in presenza di una decisione di adeguatezza della Commissione Europea, che ha verificato come il Paese terzo, il territorio o uno o più settori specifici all'interno del paese terzo, o l'organizzazione internazionale in questione garantiscono un livello di protezione adeguato dei diritti. In ogni caso NUR, se lo ritenga comunque opportuno, si riserva di concludere specifici separati accordi che obblighino tali soggetti ad adottare adeguate misure di sicurezza, anche organizzative, volte ad offrire garanzie appropriate per i tuoi diritti. I Dati Personali potranno essere così trasferiti nei seguenti Paesi: Stati Uniti d'America. Per ottenere una copia di tali Dati Personali o il luogo dove sono stati resi disponibili, è sufficiente inviare la relativa richiesta a NUR, all'indirizzo email gdpr@nur.it.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">11. Periodo di conservazione dei Dati Personali</h3>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700">
                <li>I Dati Personali trattati per le finalità di cui al punto a) numero 3 della presente informativa (finalità di marketing) sono trattati e conservati da NUR sino a quando non richiedi la relativa cancellazione e/o la revoca, in qualità di Interessato;</li>
                <li>I singoli Dati Personali trattati per le finalità di cui al punto b) numero 3 (finalità di determinazione di preferenze), come di volta in volta acquisiti, sono trattati e conservati da NUR per un periodo di tempo non superiore a 12 mesi (dodici) decorrenti dalla raccolta;</li>
                <li>I Dati Personali trattati e conservati per le finalità di cui al punto c), numero 3 (adempimento di obblighi di legge) sono trattati e conservati da NUR secondo quanto previsto dalla normativa vigente, comunque per un periodo di tempo non superiore a 10 (dieci) anni decorrenti dalla cessazione degli effetti del contratto in caso di conclusione dello stesso, salvo diverso obbligo di legge.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">12. Facoltatività del consenso e conseguenze del mancato consenso</h3>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700">
                <li>In relazione ai Dati Personali trattati per le finalità di cui al punto a) numero 3 della presente informativa (finalità di marketing), la comunicazione di Dati Personali non è un obbligo di natura contrattuale. Hai la facoltà di fornire i Dati Personali. Se non comunichi tali Dati Personali, NUR non potrà effettuare alcuna attività di marketing.</li>
                <li>In relazione ai Dati Personali trattati per le finalità di cui al punto b) numero 3 della presente informativa (finalità di determinazione di preferenze), la comunicazione di Dati Personali non è un obbligo di natura contrattuale. Hai la facoltà di fornire i Dati Personali. Se non comunichi tali Dati Personali, NUR non potrà effettuare alcuna attività di profilazione.</li>
                <li>In relazione ai Dati Personali trattati per le finalità di cui al punto c) numero 3 della presente informativa (obblighi di legge), la comunicazione di Dati Personali è un obbligo di legge.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">13. I tuoi diritti</h3>
              <h4 className="text-lg font-medium text-neutral-900 mb-2">a) Diritto di opposizione</h4>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                In qualità di Interessato, hai il diritto di opposizione nei termini che seguono:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700 mb-4">
                <li>il diritto di opporti in qualsiasi momento, per motivi connessi alla tua situazione particolare, al trattamento dei Dati Personali che ti riguardano ai sensi dell'articolo 6, paragrafo 1, lettere e) o f) del GDPR. NUR si astiene dal trattare ulteriormente i tuoi Dati Personali, salvo che NUR dimostri l'esistenza di motivi legittimi cogenti per procedere al trattamento che prevalgono sui tuoi interessi, diritti e libertà oppure per l'accertamento, l'esercizio o la difesa di un diritto in sede giudiziaria;</li>
                <li>qualora i Dati Personali siano trattati per finalità di marketing diretto, hai il diritto di opporti in qualsiasi momento al trattamento dei Dati Personali che ti riguardano effettuato per tali finalità, compresa la profilazione nella misura in cui sia connessa al marketing diretto;</li>
                <li>in caso di opposizione al trattamento per finalità di marketing diretto, i Dati Personali non sono più oggetto di trattamento per tali finalità. Potrai opporti al trattamento dei tuoi Dati Personali per finalità di marketing diretto anche solo in parte, ad esempio opponendoti al solo invio di comunicazioni promozionali effettuato tramite strumenti automatizzati e/o digitali, oppure all'invio di comunicazioni cartacee e/o al ricevimento di comunicazioni telefoniche;</li>
                <li>qualora i tuoi Dati Personali siano trattati a fini di ricerca scientifica o storica o a fini statistici a norma dell'articolo 89, paragrafo 1 del GDPR, per motivi connessi alla tua situazione particolare hai il diritto di opporti al trattamento di Dati Personali, salvo il caso in cui il trattamento sia necessario per l'esecuzione di un compito di interesse pubblico.</li>
              </ul>
              <h4 className="text-lg font-medium text-neutral-900 mb-2">b) Altri diritti</h4>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                NUR vuole inoltre informarti dell'esistenza dei seguenti tuoi diritti:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-neutral-700">
                <li><strong>Diritto di accesso:</strong> hai il diritto di ottenere da NUR la conferma che sia o meno in corso un trattamento di Dati Personali che ti riguardano e accedere ai tuoi Dati Personali ed a specifiche informazioni, in conformità all'articolo 15 del GDPR;</li>
                <li><strong>Diritto di rettifica:</strong> hai il diritto di ottenere da NUR la rettifica dei dati personali inesatti che ti riguardano senza ingiustificato ritardo. Tenuto conto delle finalità del trattamento, hai il diritto di ottenere l'integrazione dei dati personali incompleti, anche fornendo una dichiarazione integrativa, in conformità all'articolo 16 del GDPR;</li>
                <li><strong>Diritto alla cancellazione dei dati, incluso il diritto alla revoca del consenso:</strong> hai il diritto di ottenere da NUR la cancellazione dei tuoi Dati Personali senza ingiustificato ritardo o di revocare il consenso al trattamento, se sussistono i motivi definiti dall'articolo 17 del GDPR. Hai il diritto di revocare il consenso in qualsiasi momento, senza che ciò pregiudichi la liceità del trattamento basata sul consenso da te prestato prima della revoca;</li>
                <li><strong>Diritto di limitazione di trattamento:</strong> hai il diritto di ottenere da NUR la limitazione del trattamento, quando ricorrono le ipotesi definite dall'articolo 18 del GDPR;</li>
                <li><strong>Diritto alla portabilità dei dati:</strong> hai il diritto di ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico, i tuoi Dati Personali forniti al Titolare ed hai il diritto di trasmetterli a un altro Titolare senza impedimenti di NUR, come previsto dall'articolo 20 del GDPR;</li>
                <li><strong>Diritto di opposizione del contraente a comunicazioni commerciali:</strong> in qualità di contraente, hai il diritto di opporti in ogni momento, gratuitamente, al ricevimento di comunicazioni commerciali di NUR;</li>
                <li><strong>Diritto di proporre reclamo all'Autorità Garante:</strong> hai il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali, per lamentare una violazione della disciplina in materia di protezione dei dati personali, in conformità all'articolo 77 del GDPR.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">14. Come esercitare i tuoi diritti</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed mb-3">
                Potrai esercitare i diritti indicati nella Cookie Policy indirizzando le istanze direttamente a NUR all'indirizzo e-mail gdpr@nur.it, oppure inviando la relativa comunicazione mediante una raccomandata A/R all'indirizzo Via del Commercio 1/N, San Giorgio Bigarello (MN).
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                Potrai proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali secondo le modalità previste dal sito ufficiale, indirizzandolo ai recapiti disponibili all'indirizzo <a href="https://www.garanteprivacy.it/home/footer/contatti" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:underline">https://www.garanteprivacy.it/home/footer/contatti</a>.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">15. Accessibilità dell'Informativa Privacy</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                L'Informativa Privacy è disponibile all'URL www.nur.it/privacy-policy oppure presso NUR. Se richiesto espressamente, NUR potrà fornire le informazioni oralmente, a condizione che sia comprovata la tua identità, con una richiesta telefonica rivolta allo 0376 369728.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">16. Modifiche</h3>
              <p className="text-[15px] text-neutral-700 leading-relaxed">
                NUR potrà modificare l'Informativa Privacy, anche per adeguarsi ai cambiamenti della normativa nazionale e/o dell'Unione Europea, oppure alle innovazioni tecnologiche. Eventuali nuove versioni dell'Informativa Privacy saranno riportate sul sito www.nur.it (di seguito, il "Sito"). Ti invitiamo a controllare periodicamente l'Informativa Privacy. Ogni modifica ti verrà comunque comunicata attraverso un pop-up sul Sito o differenti modalità e/o strumenti informatici.
              </p>
              <p className="text-[15px] text-neutral-700 leading-relaxed mt-3">
                Se NUR modificasse sostanzialmente l'Informativa Privacy, prevedendo nuove finalità di trattamento e/o categorie di Dati Personali trattati, la stessa provvederà ad informarti, richiedendoti i consensi necessari, tramite un pop-up sul Sito o differenti modalità e/o strumenti informatici.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

