import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-neutral-50 rounded-xl p-8 md:p-12 border border-neutral-200 text-center">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-neutral-900 mb-4">
            Vuoi vedere Verbalist in azione?
          </h2>
          <p className="text-base text-neutral-600 mb-6 max-w-2xl mx-auto">
            Prenota una demo con il nostro team: ti mostreremo come Verbalist può automatizzare la creazione di contenuti SEO per il tuo business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 text-base bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
            >
              Prenota una demo
            </Link>
            <Link
              href="/funzionalita"
              className="text-base text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Scopri le funzionalità →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
