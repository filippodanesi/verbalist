'use client'

import { useState } from 'react'
import Link from 'next/link'

const suggestedKeywords = [
  "come scegliere un materasso",
  "migliori smartphone 2024",
  "ricetta tiramisù",
]

export function InteractiveDemo() {
  const [keyword, setKeyword] = useState('')
  const [step, setStep] = useState(0) // 0: input, 1: analyzing, 2: complete

  const startAnalysis = () => {
    if (!keyword.trim()) return
    setStep(1)
    setTimeout(() => setStep(2), 3000)
  }

  const resetDemo = () => {
    setStep(0)
    setKeyword('')
  }

  return (
    <div className="w-full h-full bg-white border border-neutral-200 rounded-xl shadow-sm flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 bg-neutral-50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[11px] text-neutral-400 font-medium">Verbalist Demo</span>
        <div className="w-16" />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto">

        {/* Step 0: Input */}
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <label className="text-[12px] text-neutral-500 font-medium mb-2 block">
                Inserisci una keyword
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && startAnalysis()}
                placeholder="es. come scegliere un materasso"
                className="w-full px-3 py-2 text-[13px] border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
            </div>

            <div>
              <p className="text-[11px] text-neutral-400 mb-2">Oppure prova con:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedKeywords.map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setKeyword(kw)}
                    className="text-[11px] px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startAnalysis}
              disabled={!keyword.trim()}
              className="w-full py-2.5 bg-neutral-900 text-white text-[13px] font-medium rounded-lg hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Analizza competitor
            </button>
          </div>
        )}

        {/* Step 1: Analyzing */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <p className="text-[12px] text-neutral-500 font-medium mb-2">Analisi in corso...</p>
              <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-neutral-900 w-2/3 animate-pulse" />
              </div>
            </div>
            <p className="text-[11px] text-neutral-400">Analizzando: &quot;{keyword}&quot;</p>
            <div className="space-y-2">
              <div className="p-2 bg-neutral-50 rounded text-[11px] text-neutral-600">1. guidacompleta.it ✓</div>
              <div className="p-2 bg-neutral-50 rounded text-[11px] text-neutral-600">2. dormirebene.com ✓</div>
              <div className="p-2 bg-neutral-50 rounded text-[11px] text-neutral-600">3. qualematerasso.it ✓</div>
            </div>
          </div>
        )}

        {/* Step 2: Complete */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="text-center py-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[13px] font-medium text-neutral-900">Contenuto generato!</p>
              <p className="text-[11px] text-neutral-500 mt-1">2.847 parole • 12 heading</p>
            </div>

            <div className="p-3 bg-neutral-50 rounded-lg">
              <p className="text-[10px] text-neutral-400 mb-1">Anteprima:</p>
              <p className="text-[12px] text-neutral-700 leading-relaxed">Un materasso di qualità è fondamentale per il benessere quotidiano...</p>
            </div>

            <div className="space-y-2">
              <Link
                href="/contatti"
                className="block w-full py-2.5 bg-neutral-900 text-white text-[13px] font-medium rounded-lg hover:bg-neutral-800 transition-colors text-center"
              >
                Prenota una demo
              </Link>
              <button
                onClick={resetDemo}
                className="block w-full py-2.5 text-neutral-600 text-[13px] font-medium hover:text-neutral-900 transition-colors"
              >
                Prova un&apos;altra keyword
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
