"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// Visualizzazione Analisi SERP - Recupero top 10 risultati Google
export function SerpAnalysisVisual() {
  const [visibleItems, setVisibleItems] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (!isComplete) {
      timer = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev < 5) {
            return prev + 1
          } else {
            setIsComplete(true)
            return prev
          }
        })
      }, 400)
    } else {
      timer = setTimeout(() => {
        setVisibleItems(0)
        setIsComplete(false)
      }, 2000)
    }

    return () => {
      clearInterval(timer)
      clearTimeout(timer)
    }
  }, [isComplete])

  // Dati realistici: risultati SERP filtrati (no Wikipedia, social, aggregatori)
  const results = [
    { position: 1, title: "Guida alla scelta del materasso: consigli esperti", domain: "materassi.it", wordCount: "2.847" },
    { position: 2, title: "Come scegliere il materasso perfetto per te", domain: "dormire-bene.com", wordCount: "2.134" },
    { position: 3, title: "Materassi: guida completa all'acquisto 2024", domain: "consumatori.it", wordCount: "3.201" },
    { position: 4, title: "Quale materasso comprare? La guida definitiva", domain: "casa-salute.it", wordCount: "1.956" },
    { position: 5, title: "Scegliere il materasso giusto: 10 fattori chiave", domain: "espertoriposo.it", wordCount: "2.412" },
  ]

  return (
    <div className="h-full bg-white p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-1">Keyword</div>
          <div className="text-base font-medium text-neutral-900">"come scegliere un materasso"</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[12px] text-neutral-500">Recupero SERP in corso</span>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2">
        {results.map((result, idx) => (
          <div
            key={result.position}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border transition-all duration-500",
              idx < visibleItems
                ? "opacity-100 translate-y-0 bg-neutral-50 border-neutral-200"
                : "opacity-0 translate-y-2 border-transparent"
            )}
          >
            <div className="w-6 h-6 rounded bg-neutral-200 flex items-center justify-center text-[12px] font-medium text-neutral-600">
              {result.position}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-neutral-900 truncate">{result.title}</div>
              <div className="text-[11px] text-neutral-500">{result.domain}</div>
            </div>
            <div className="text-[11px] text-neutral-500 text-right">
              {idx < visibleItems && <span>{result.wordCount} parole</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      {isComplete && (
        <div className="mt-4 pt-4 border-t border-neutral-100 text-[12px] text-neutral-500">
          <span className="text-neutral-900 font-medium">5 competitor</span> analizzati · Media{" "}
          <span className="text-neutral-900 font-medium">2.510 parole</span>
        </div>
      )}
    </div>
  )
}

// Visualizzazione Pattern Detection - Analisi AI dei contenuti competitor
export function PatternDetectionVisual() {
  const [activeSection, setActiveSection] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => {
        const next = prev + 1
        if (next >= 4) {
          setTimeout(() => {
            setActiveSection(0)
            setCycle((c) => c + 1)
          }, 1500)
          return prev
        }
        return next
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [cycle])

  // Dati realistici basati su analyze_serp.py
  const metrics = [
    { label: "Word Count", value: "2.510", detail: "media" },
    { label: "Heading H2", value: "7", detail: "media" },
    { label: "Search Intent", value: "Informational", detail: "dominante" },
    { label: "E-E-A-T", value: "Alto", detail: "segnali" },
  ]

  // Topic comuni identificati dall'AI
  const commonTopics = [
    { name: "Tipologie di materasso", frequency: "5/5" },
    { name: "Materiali e composizione", frequency: "5/5" },
    { name: "Guida alla scelta per esigenze", frequency: "4/5" },
    { name: "Dimensioni e misure", frequency: "4/5" },
    { name: "Fascia di prezzo", frequency: "3/5" },
  ]

  // Struttura heading tipica
  const typicalStructure = [
    "H1: Titolo con keyword",
    "H2: Tipologie di materasso",
    "H2: Come scegliere",
    "H2: Materiali",
    "H2: FAQ",
  ]

  return (
    <div className="h-full bg-white p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Pattern identificati</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[12px] text-neutral-500">Analisi AI</span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {metrics.map((metric, idx) => (
          <div
            key={metric.label}
            className={cn(
              "p-2.5 rounded-lg border transition-all duration-300",
              activeSection === idx
                ? "bg-neutral-900 border-neutral-900"
                : "bg-neutral-50 border-neutral-200"
            )}
          >
            <div className={cn(
              "text-[10px] uppercase tracking-wider mb-1",
              activeSection === idx ? "text-neutral-400" : "text-neutral-500"
            )}>
              {metric.label}
            </div>
            <div className={cn(
              "text-[16px] font-semibold",
              activeSection === idx ? "text-white" : "text-neutral-900"
            )}>
              {metric.value}
            </div>
            <div className={cn(
              "text-[10px]",
              activeSection === idx ? "text-neutral-400" : "text-neutral-500"
            )}>
              {metric.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Two columns: Topics + Structure */}
      <div className="grid grid-cols-2 gap-4">
        {/* Topic comuni */}
        <div>
          <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-2">Topic ricorrenti</div>
          <div className="space-y-1.5">
            {commonTopics.map((topic) => (
              <div key={topic.name} className="flex items-center justify-between text-[12px]">
                <span className="text-neutral-700 truncate">{topic.name}</span>
                <span className="text-neutral-400 ml-2">{topic.frequency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Struttura tipica */}
        <div>
          <div className="text-[11px] text-neutral-400 uppercase tracking-wider mb-2">Struttura heading</div>
          <div className="space-y-1.5">
            {typicalStructure.map((heading, idx) => (
              <div key={idx} className="text-[12px] text-neutral-700">
                {heading}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Visualizzazione Generazione Contenuto - Output finale AI
export function ContentGenerationVisual() {
  const [typedText, setTypedText] = useState("")
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<number[]>([])
  const [isResetting, setIsResetting] = useState(false)

  // Output realistico basato su generate_serp.py
  const sections = [
    { type: "seo", label: "Title Tag", content: "Come Scegliere un Materasso: Guida Completa 2024" },
    { type: "seo", label: "Meta Description", content: "Scopri come scegliere il materasso perfetto: tipologie, materiali, dimensioni e consigli per ogni esigenza. Guida aggiornata con prezzi." },
    { type: "seo", label: "Slug", content: "come-scegliere-materasso-guida" },
    { type: "content", label: "H1", content: "Come Scegliere un Materasso: La Guida Definitiva" },
  ]

  useEffect(() => {
    if (isResetting) return

    const section = sections[currentSection]
    let charIndex = 0

    const typeTimer = setInterval(() => {
      if (charIndex <= section.content.length) {
        setTypedText(section.content.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeTimer)

        // Aggiungi alla lista completati
        setCompletedSections((prev) => [...prev, currentSection])

        setTimeout(() => {
          if (currentSection < sections.length - 1) {
            // Passa alla prossima sezione
            setCurrentSection((prev) => prev + 1)
            setTypedText("")
          } else {
            // Tutte le sezioni completate, pausa e reset
            setIsResetting(true)
            setTimeout(() => {
              setCurrentSection(0)
              setCompletedSections([])
              setTypedText("")
              setIsResetting(false)
            }, 2000)
          }
        }, 1000)
      }
    }, 30)

    return () => clearInterval(typeTimer)
  }, [currentSection, isResetting])

  const currentItem = sections[currentSection]

  return (
    <div className="h-full bg-white p-6 overflow-hidden">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[12px] text-neutral-500">Generazione in corso</span>
        </div>
        <div className="flex gap-1">
          {sections.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "w-8 h-1 rounded-full transition-colors",
                completedSections.includes(idx) || idx === currentSection ? "bg-neutral-900" : "bg-neutral-200"
              )}
            />
          ))}
        </div>
      </div>

      {/* Output Preview */}
      <div className="space-y-4">
        {/* Current Section Being Generated */}
        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 mb-2">
            <div className={cn(
              "px-2 py-0.5 rounded text-[10px] font-medium uppercase",
              currentItem.type === "seo"
                ? "bg-blue-100 text-blue-700"
                : "bg-purple-100 text-purple-700"
            )}>
              {currentItem.label}
            </div>
          </div>
          <div className="text-[13px] text-neutral-900 min-h-[3rem]">
            {typedText}
            <span className="inline-block w-0.5 h-4 bg-neutral-900 animate-pulse ml-0.5" />
          </div>
        </div>

        {/* Generated Sections */}
        <div className="space-y-2">
          {completedSections.map((sectionIdx) => {
            const section = sections[sectionIdx]
            return (
              <div key={sectionIdx} className="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-200">
                <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="text-[10px] text-green-700 font-medium uppercase">{section.label}</div>
                  <div className="text-[12px] text-green-900 truncate max-w-xs">{section.content}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
