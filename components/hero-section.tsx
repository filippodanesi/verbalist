import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { HeroVisual } from "@/components/hero-visual"

export function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HERO 2 COLONNE */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          
          {/* Colonna sinistra - Testo */}
          <div className="flex-none space-y-6 md:max-w-lg lg:max-w-xl">
            <Badge variant="outline" className="text-xs font-mono uppercase tracking-wide">
              AI Search Optimization
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight">
              Il software che studia Google e scrive per te
            </h1>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              Analizza i competitor in SERP, estrae struttura e argomenti chiave, <br />
              genera contenuti ottimizzati per SEO, AEO e GEO.
            </p>
            
            <div className="flex items-center gap-3">
              <Button asChild>
                <Link href="/contatti">
                  Prenota una demo
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#features" className="gap-1">
                  Come funziona <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* CLIENTI - sotto le CTA */}
            <div className="flex flex-wrap items-center gap-10 pt-4">
              <Image 
                src="/logos/rentokil-initial.svg" 
                alt="Rentokil Initial" 
                width={100} 
                height={28}
                className="h-14 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
              <Image 
                src="/logos/mhi.svg" 
                alt="Mitsubishi Heavy Industries" 
                width={100} 
                height={28}
                className="h-14 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
              <Image 
                src="/logos/jurny.svg" 
                alt="Jurny" 
                width={100} 
                height={28}
                className="h-14 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
              <Image 
                src="/logos/pompea.svg" 
                alt="Pompea" 
                width={100} 
                height={28}
                className="h-14 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
            </div>
          </div>

          {/* Colonna destra - Visual animato */}
          <div className="w-full md:w-[500px] md:flex-none h-[280px] md:h-[350px]">
            <HeroVisual />
          </div>

        </div>

        <Separator className="mb-12" />

        {/* COME FUNZIONA - 3 step */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-neutral-900 mb-6">Come funziona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-[13px] text-neutral-500 mb-2">Passo 1</div>
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Analizza i competitor</h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Inserisci una keyword. Il sistema recupera i primi 10 risultati Google e ne estrae il contenuto.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-[13px] text-neutral-500 mb-2">Passo 2</div>
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Identifica i pattern</h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Analizza struttura, argomenti trattati, lunghezza e segnali di autorevolezza dei contenuti vincenti.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-[13px] text-neutral-500 mb-2">Passo 3</div>
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Genera il contenuto</h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                Produce un contenuto completo con title, meta description, struttura heading e body ottimizzato.
              </p>
            </div>

          </div>
        </div>

        <Separator className="mb-8" />

        {/* VALUE PROPS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div>
            <h3 className="text-[15px] font-medium text-neutral-900 mb-1">Data-driven</h3>
            <p className="text-[14px] text-neutral-600">
              Basato su dati reali, non su template generici.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-medium text-neutral-900 mb-1">Multi-formato</h3>
            <p className="text-[14px] text-neutral-600">
              Blog, landing page, schede prodotto, guide.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-medium text-neutral-900 mb-1">SEO + AEO + GEO</h3>
            <p className="text-[14px] text-neutral-600">
              Ottimizzato per Google e motori AI.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-medium text-neutral-900 mb-1">Pronto in 5 minuti</h3>
            <p className="text-[14px] text-neutral-600">
              Da keyword a contenuto completo.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}