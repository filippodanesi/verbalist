'use client'

import { useEffect, useState, useRef } from 'react'

export function HeroVisual() {
  const [activeStep, setActiveStep] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll per seguire lo step attivo
  useEffect(() => {
    if (scrollRef.current) {
      const scrollPositions = [0, 0, 60, 140, 200]
      scrollRef.current.scrollTo({
        top: scrollPositions[activeStep],
        behavior: 'smooth'
      })
    }
  }, [activeStep])

  const competitors = [
    { rank: 1, domain: 'esempio.it' },
    { rank: 2, domain: 'guida-seo.com' },
    { rank: 3, domain: 'blog.tech' },
    { rank: 4, domain: 'risorse.io' },
    { rank: 5, domain: 'articoli.net' },
  ]

  const patterns = [
    { label: 'Intent', value: 'Informational' },
    { label: 'Word count', value: '2.400 avg' },
    { label: 'Headings', value: '12 H2/H3' },
    { label: 'E-E-A-T', value: 'High' },
  ]

  return (
    <div className="w-full h-full bg-neutral-50 border border-neutral-200 rounded-lg font-mono text-xs flex flex-col">
      
      {/* Header fisso */}
      <div className="flex items-center gap-2 p-4 pb-3 border-b border-neutral-200 flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
        <span className="ml-3 text-neutral-400 text-[10px]">verbalist_engine.py</span>
      </div>

      {/* Contenuto scrollabile */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-hidden p-4 pt-3"
      >
        {/* Step 1: Input */}
        <div className={`mb-3 transition-opacity duration-500 ${activeStep >= 0 ? 'opacity-100' : 'opacity-30'}`}>
          <span className="text-neutral-400">keyword</span>
          <span className="text-neutral-600"> = </span>
          <span className="text-neutral-900">"come scegliere un materasso"</span>
        </div>

        {/* Step 2: SERP Results */}
        <div className={`mb-3 transition-opacity duration-500 ${activeStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
          <div className="text-neutral-400 mb-1">serp_results <span className="text-neutral-300"># top 10</span></div>
          <div className="pl-3 space-y-0.5">
            {competitors.map((comp) => (
              <div 
                key={comp.rank}
                className={`flex items-center gap-2 transition-all duration-300 ${activeStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                style={{ transitionDelay: `${comp.rank * 80}ms` }}
              >
                <span className="text-neutral-300 w-3">{comp.rank}.</span>
                <span className="text-neutral-600">{comp.domain}</span>
                <span className="text-green-600 text-[10px]">✓ scraped</span>
              </div>
            ))}
            <div className="text-neutral-300 text-[10px]">... +5 more</div>
          </div>
        </div>

        {/* Step 3: Pattern Analysis */}
        <div className={`mb-3 transition-opacity duration-500 ${activeStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
          <div className="text-neutral-400 mb-1">patterns_extracted</div>
          <div className="pl-3 grid grid-cols-2 gap-1.5">
            {patterns.map((pattern, idx) => (
              <div 
                key={pattern.label}
                className={`flex items-center justify-between bg-white border border-neutral-200 rounded px-2 py-1 transition-all duration-300 ${activeStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="text-neutral-400 text-[10px]">{pattern.label}</span>
                <span className="text-neutral-700 text-[10px] font-medium">{pattern.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Generation */}
        <div className={`mb-3 transition-opacity duration-500 ${activeStep >= 3 ? 'opacity-100' : 'opacity-30'}`}>
          <div className="text-neutral-400 mb-1">generating_content<span className="text-neutral-300">...</span></div>
          <div className="pl-3 space-y-0.5">
            {['title_tag', 'meta_description', 'outline_h1_h3', 'body_content'].map((item, idx) => (
              <div 
                key={item}
                className={`flex items-center gap-2 transition-all duration-300 ${activeStep >= 3 ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeStep >= 3 ? 'bg-green-500' : 'bg-neutral-300'}`} 
                  style={{ transitionDelay: `${idx * 150}ms` }}
                />
                <span className="text-neutral-600 text-[10px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 5: Output */}
        <div className={`transition-opacity duration-500 ${activeStep >= 4 ? 'opacity-100' : 'opacity-30'}`}>
          <div className="bg-neutral-900 text-neutral-100 rounded px-3 py-2">
            <span className="text-green-400">→</span>
            <span className="text-neutral-400 ml-2">output:</span>
            <span className="text-white ml-1">content_ready.md</span>
            <span className="text-neutral-500 ml-1 text-[10px]">(2.847 words)</span>
          </div>
        </div>

      </div>
    </div>
  )
}
