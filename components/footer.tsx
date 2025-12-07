import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Prodotto</p>
            <ul className="space-y-2">
              <li>
                <Link href="/funzionalita" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Funzionalità
                </Link>
              </li>
              <li>
                <Link href="/prodotto" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Come funziona
                </Link>
              </li>
              <li>
                <Link href="/integrazioni" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Tecnologia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Azienda</p>
            <ul className="space-y-2">
              <li>
                <Link href="/chi-siamo" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Legale</p>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/termini" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Termini di servizio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Seguici</p>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/showcase/softwareverbalist/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-neutral-100 gap-4">
          <p className="text-[12px] text-neutral-400">© 2025 <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">NUR Digital Marketing</a>. Tutti i diritti riservati.</p>
          <p className="text-[12px] text-neutral-400">
            Verbalist è un prodotto di <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">NUR Digital Marketing</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
