'use client'

import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'

type Skill = {
  id?: string | null
  title: string
  list: string
}

type ContactLinks = {
  email: string
  linkedin: string
  github: string
}

export function CapabilitiesExplorer({ skills }: { skills: Skill[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSkill = skills[activeIndex]
  const tools = activeSkill?.list.split(' · ') ?? []

  if (!activeSkill) return null

  return (
    <div className="capabilities-explorer">
      <aside className="capability-console" aria-live="polite">
        <div className="capability-console__top">
          <span>KNOWLEDGE SIGNAL</span>
          <span className="capability-console__status">
            <i /> ONLINE
          </span>
        </div>
        <div className="capability-console__index">
          {String(activeIndex + 1).padStart(2, '0')}
          <small>/ {String(skills.length).padStart(2, '0')}</small>
        </div>
        <p>ACTIVE DOMAIN</p>
        <h3>{activeSkill.title}</h3>
        <div className="capability-console__tools">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <div className="capability-console__signal" aria-hidden="true">
          {tools.map((tool, index) => (
            <i
              key={tool}
              style={
                {
                  '--signal-delay': `${index * -0.17}s`,
                  '--signal-height': `${8 + index * 4}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </aside>

      <div className="skills">
        {skills.map((skill, index) => {
          const active = activeIndex === index

          return (
            <button
              className={`skill ${active ? 'skill--active' : ''}`}
              key={skill.id ?? skill.title}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveIndex(index)}
              onPointerEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <span className="skill__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="skill__title">{skill.title}</span>
              <span className="skill__copy">{skill.list}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function ContactActions({ links }: { links: ContactLinks }) {
  const portalRef = useRef<HTMLAnchorElement>(null)
  const [copied, setCopied] = useState(false)
  const emailAddress = links.email.replace(/^mailto:/, '')

  const movePortal = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const portal = portalRef.current
    if (!portal) return

    const bounds = portal.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    portal.style.setProperty('--portal-x', `${x * 8}px`)
    portal.style.setProperty('--portal-y', `${y * 8}px`)
  }

  const resetPortal = () => {
    portalRef.current?.style.setProperty('--portal-x', '0px')
    portalRef.current?.style.setProperty('--portal-y', '0px')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = links.email
    }
  }

  return (
    <div className="contact-actions">
      <a
        className="contact-portal"
        href={links.email}
        ref={portalRef}
        onPointerMove={movePortal}
        onPointerLeave={resetPortal}
      >
        <span>START A PROJECT</span>
        <strong aria-hidden="true">↗</strong>
        <small>{emailAddress}</small>
        <i aria-hidden="true" />
      </a>

      <div className="contact-actions__meta">
        <button className="copy-email" type="button" onClick={copyEmail}>
          <span>{copied ? 'E-MAIL COPIADO' : 'COPIAR E-MAIL'}</span>
          <span>{copied ? 'OK' : 'COPY'}</span>
        </button>
        <div className="contact__links">
          <a href={links.linkedin}>LINKEDIN</a>
          <a href={links.github}>GITHUB</a>
        </div>
      </div>
    </div>
  )
}
