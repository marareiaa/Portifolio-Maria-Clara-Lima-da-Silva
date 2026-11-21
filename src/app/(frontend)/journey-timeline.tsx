'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'

type JourneyStep = {
  id?: string | null
  title: string
  copy: string
}

export function JourneyTimeline({ steps }: { steps: JourneyStep[] }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [scrollStep, setScrollStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  useEffect(() => {
    const update = () => {
      const root = rootRef.current
      if (!root || steps.length === 0) return

      const rect = root.getBoundingClientRect()
      const start = window.innerHeight * 0.78
      const distance = Math.max(rect.height + window.innerHeight * 0.28, 1)
      const nextProgress = Math.min(Math.max((start - rect.top) / distance, 0), 1)

      setProgress(nextProgress)
      setScrollStep(Math.min(Math.floor(nextProgress * steps.length), steps.length - 1))
      frameRef.current = null
    }

    const scheduleUpdate = () => {
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [steps.length])

  const activeStep = hoveredStep ?? selectedStep ?? scrollStep
  const timelineStyle = {
    '--journey-progress': progress,
  } as CSSProperties

  return (
    <div className="timeline-shell" ref={rootRef} style={timelineStyle}>
      <div className="timeline__meter" aria-hidden="true">
        <span>PATH / {String(Math.round(progress * 100)).padStart(3, '0')}%</span>
        <span>{steps[activeStep]?.title}</span>
      </div>
      <div className="timeline__track" aria-hidden="true">
        <span />
      </div>
      <ol className="timeline">
        {steps.map((step, index) => {
          const active = index === activeStep

          return (
            <li
              className={`timeline__item ${active ? 'timeline__item--active' : ''}`}
              key={step.id ?? step.title}
              onPointerEnter={() => setHoveredStep(index)}
              onPointerLeave={() => setHoveredStep(null)}
            >
              <button
                className="timeline__button"
                type="button"
                aria-pressed={selectedStep === index}
                aria-label={`Destacar etapa ${index + 1}: ${step.title}`}
                onClick={() => setSelectedStep((current) => (current === index ? null : index))}
                onFocus={() => setHoveredStep(index)}
                onBlur={() => setHoveredStep(null)}
              >
                <i className="timeline__node" aria-hidden="true" />
                <span className="timeline__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="timeline__title">{step.title}</span>
                <span className="timeline__copy">{step.copy}</span>
                <span className="timeline__signal" aria-hidden="true">
                  {active ? 'NOW / ACTIVE' : 'EXPLORE'}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
