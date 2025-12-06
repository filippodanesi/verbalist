import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div>
            <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Prodotto</p>
            <ul className="space-y-2">
              {["Funzionalità", "Prezzi", "Changelog", "API"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Risorse</p>
            <ul className="space-y-2">
              {["Documentazione", "Guide", "Blog", "Case study"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
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
              {["Contatti", "Lavora con noi"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-wider mb-4">Legale</p>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                  <Link href="#" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Termini
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-[13px] text-neutral-600 hover:text-neutral-900 transition-colors">
                  Cookie
                  </Link>
                </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-neutral-100">
          <p className="text-[12px] text-neutral-400">© 2025 <a href="https://www.nur.it/" target="_blank" rel="noopener noreferrer">NUR Digital Marketing</a>. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[12px] text-neutral-400 hover:text-neutral-600 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-[12px] text-neutral-400 hover:text-neutral-600 transition-colors">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
