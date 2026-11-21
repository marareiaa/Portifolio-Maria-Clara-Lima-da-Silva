import Link from 'next/link'
import { Header, PortfolioEffects } from './portfolio-effects'

/**
 * Custom not-found page for the frontend.
 * This renders when `notFound()` is called from any page in the (frontend) route group.
 *
 * Customize this component to match your app's design and provide helpful navigation.
 */
export default function NotFound() {
  return (
    <>
      <PortfolioEffects />
      <Header />
      <main className="page-enter relative z-[1] grid min-h-svh place-content-center overflow-hidden px-[var(--pad)] py-32 text-center">
        <p className="font-mono text-[10px] tracking-[0.14em] text-[var(--coral)]">ERRO / 404</p>
        <h1 className="mt-6 text-[clamp(4.5rem,18vw,13rem)] leading-[0.72] font-medium tracking-[-0.09em]">
          FORA DE
          <br />
          ÓRBITA
        </h1>
        <p className="mx-auto mt-10 max-w-md text-sm leading-7 text-[var(--muted)]">
          Esta página não existe ou o endereço foi alterado. Os projetos continuam logo ali.
        </p>
        <Link
          className="mx-auto mt-8 border border-white/20 px-5 py-3 font-mono text-[10px] tracking-[0.1em] transition hover:-translate-y-1 hover:border-[var(--coral)] focus-visible:border-[var(--coral)]"
          href="/#work"
        >
          VOLTAR AOS PROJETOS →
        </Link>
      </main>
    </>
  )
}
