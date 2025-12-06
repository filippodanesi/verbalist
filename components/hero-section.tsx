import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADLINE */}
        <div className="mb-8">
        <p className="text-xs text-neutral-400 mb-2 font-mono uppercase">
          SEO + AEO + GEO
        </p>
          <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            La SEO non basta più
          </h1>
        <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
          Il traffico arriva da Google, ma anche da ChatGPT, Perplexity e Gemini. <br />
          Verbalist genera contenuti ottimizzati per tutti i canali da cui gli utenti cercano.
        </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 text-[15px] bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
          >
            Prenota una demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#features"
            className="text-[15px] text-neutral-600 hover:text-neutral-900 transition-colors font-medium py-3"
          >
            Scopri come funziona →
          </Link>
        </div>

        {/* CLIENTI */}
        <div className="mb-16 pb-12 border-b border-neutral-200">
          <p className="text-[13px] text-neutral-400 mb-6">Usato da aziende leader di mercato</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {/* Placeholder loghi - sostituire con Image quando disponibili */}
            <Image 
              src="/logos/rentokil-initial.svg" 
              alt="Rentokil Initial" 
              width={100} 
              height={28}
              className="h-16 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image 
              src="/logos/mhi.svg" 
              alt="Mitsubishi Heavy Industries" 
              width={100} 
              height={28}
              className="h-16 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image 
              src="/logos/jurny.svg" 
              alt="Jurny" 
              width={100} 
              height={28}
              className="h-16 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
            <Image 
              src="/logos/pompea.svg" 
              alt="Pompea" 
              width={100} 
              height={28}
              className="h-16 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            />
          </div>
        </div>

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

        {/* VALUE PROPS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200">
          
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