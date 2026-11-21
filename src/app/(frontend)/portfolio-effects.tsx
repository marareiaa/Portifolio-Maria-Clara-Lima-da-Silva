'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <Link href="/#top" className="brand" aria-label="Maria Clara — início">
        MARIA CLARA
      </Link>
      <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
        {[
          ['WORK', '/#work'],
          ['ABOUT', '/#about'],
          ['EXPERIENCE', '/#experience'],
          ['CONTACT', '/#contact'],
        ].map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="availability" href="/#contact">
        LET'S CREATE
      </Link>
      <button
        className="menu-button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      >
        {open ? 'CLOSE' : 'MENU'}
      </button>
    </header>
  )
}

export function PortfolioEffects() {
  const frame = useRef<number | null>(null)

  useEffect(() => {
    document.documentElement.classList.add('js')
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )

    document
      .querySelectorAll('.reveal, [data-reveal]')
      .forEach((element) => observer.observe(element))

    if (reducedMotion) {
      return () => {
        observer.disconnect()
        root.classList.remove('js')
      }
    }

    let pointerX = window.innerWidth * 0.55
    let pointerY = window.innerHeight * 0.35

    const paint = () => {
      root.style.setProperty('--pointer-x', `${pointerX}px`)
      root.style.setProperty('--pointer-y', `${pointerY}px`)
      root.style.setProperty('--scroll-shift', `${Math.min(window.scrollY * 0.01, 12)}px`)
      frame.current = null
    }

    const schedulePaint = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(paint)
    }

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      schedulePaint()
    }

    if (finePointer) window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', schedulePaint, { passive: true })
    paint()

    return () => {
      observer.disconnect()
      root.classList.remove('js')
      if (finePointer) window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', schedulePaint)
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient__blob ambient__blob--coral" />
      <span className="ambient__blob ambient__blob--teal" />
      <span className="ambient__blob ambient__blob--orange" />
      <span className="ambient__grain" />
    </div>
  )
}
