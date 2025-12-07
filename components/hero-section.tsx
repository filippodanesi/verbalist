import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { InteractiveDemo } from "@/components/interactive-demo"

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
            
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight">
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
            <div className="pt-6">
              <p className="text-[13px] text-neutral-500 mb-4">Aziende che usano le nostre metodologie</p>
              <div className="flex flex-wrap items-center gap-8">
                <Image
                  src="/logos/rentokil-initial.svg"
                  alt="Rentokil Initial"
                  width={100}
                  height={28}
                  className="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                />
                <Image
                  src="/logos/mhi.svg"
                  alt="Mitsubishi Heavy Industries"
                  width={100}
                  height={28}
                  className="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                />
                <Image
                  src="/logos/jurny.svg"
                  alt="Jurny"
                  width={100}
                  height={28}
                  className="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                />
                <Image
                  src="/logos/pompea.svg"
                  alt="Pompea"
                  width={100}
                  height={28}
                  className="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Colonna destra - Demo interattiva */}
          <div className="w-full md:w-[420px] lg:w-[460px] md:flex-none h-[380px] md:h-[420px]">
            <InteractiveDemo />
          </div>

        </div>

        <Separator className="mb-12" />

        {/* COME FUNZIONA - 3 step */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-8">Come funziona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-[13px] text-neutral-500 mb-2">Passo 1</div>
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Analizza i competitor</h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Inserisci una keyword. Il sistema recupera i primi 10 risultati Google e ne estrae il contenuto.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-[13px] text-neutral-500 mb-2">Passo 2</div>
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Identifica i pattern</h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Analizza struttura, argomenti trattati, lunghezza e segnali di autorevolezza dei contenuti vincenti.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <div className="text-[13px] text-neutral-500 mb-2">Passo 3</div>
              <h3 className="text-[16px] font-medium text-neutral-900 mb-2">Genera il contenuto</h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Produce un contenuto completo con title, meta description, struttura heading e body ottimizzato.
              </p>
            </div>

          </div>
        </div>


      </div>
    </section>
  )
}