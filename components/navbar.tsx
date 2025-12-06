"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const router = useRouter()
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

  const handleNavClick = (hash: string) => {
    setIsFeaturesOpen(false)
    // Se siamo già nella stessa pagina, scrolla direttamente
    if (window.location.pathname === "/") {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // Se siamo in un'altra pagina, naviga alla home con hash
      window.location.href = `/${hash}`
    }
  }

  const handleLinkClick = (path: string) => {
    setIsFeaturesOpen(false)
    router.push(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="Verbalist" 
              width={120} 
              height={40}
              className="h-6 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/prodotto" className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors">
              Prodotto
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              <DropdownMenu open={isFeaturesOpen} onOpenChange={setIsFeaturesOpen} modal={false}>
                <DropdownMenuTrigger className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors outline-none cursor-pointer">
                  Funzionalità
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  sideOffset={8} 
                  className="w-56"
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <DropdownMenuItem onClick={() => handleLinkClick("/funzionalita/analisi-serp")}>
                    Analisi SERP
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLinkClick("/funzionalita/scraping-competitor")}>
                    Scraping Competitor
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLinkClick("/funzionalita/analisi-pattern")}>
                    Analisi Pattern
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLinkClick("/funzionalita/generazione-contenuto")}>
                    Generazione Contenuto
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLinkClick("/funzionalita/ottimizzazione")}>
                    Ottimizzazione
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href="/integrazioni" className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors">
              Tecnologia
            </Link>
            <Link href="/chi-siamo" className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors">
              Chi siamo
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors">
              Accedi
            </Link>
            <Link
              href="/contatti"
              className="text-[13px] bg-neutral-900 text-white px-4 py-1.5 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Prenota una demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
