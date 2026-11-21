import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Media, Project } from '@/lib/portfolio-data'

/**
 * Verifica se o valor recebido representa uma imagem válida.
 *
 * O projeto aceita tanto uma URL em string quanto um objeto Media.
 * Como os componentes precisam das propriedades da imagem, esta função
 * garante que estamos trabalhando com um objeto que possui uma URL.
 */
function isMedia(
  value: string | Media | null | undefined,
): value is Media {
  return Boolean(
    value &&
      typeof value === 'object' &&
      value.url,
  )
}

/**
 * Componente reutilizável para exibir imagens dos projetos.
 *
 * Centralizar a renderização das imagens evita repetir configurações
 * de tamanho, acessibilidade, carregamento e responsividade em vários
 * pontos da página.
 */
export function ProjectImage({
  media,
  className = '',
  eager = false,
}: {
  media: string | Media | null | undefined
  className?: string
  eager?: boolean
}) {
  if (!isMedia(media)) return null

  return (
    <Image
      className={`h-auto w-full ${className}`}
      src={media.url}
      alt={media.alt}
      width={media.width || 1600}
      height={media.height || 1000}
      sizes="(max-width: 900px) 100vw, 92vw"
      loading={eager ? 'eager' : 'lazy'}
    />
  )
}

/**
 * Exibe as principais informações do projeto.
 *
 * Os dados são filtrados antes da renderização para evitar campos
 * vazios na interface.
 */
export function ProjectMeta({
  project,
}: {
  project: Project
}) {
  const items = [
    ['ANO', project.year],
    ['PAPEL', project.role],
    ['CATEGORIA', project.category],
  ].filter(
    (item): item is [string, string] => Boolean(item[1]),
  )

  return (
    <dl className="grid gap-px border-y border-white/15 bg-white/15 sm:grid-cols-3">
      {items.map(([label, value]) => (
        <div
          className="bg-[var(--black)] px-5 py-5 sm:px-7"
          key={label}
        >
          <dt className="font-mono text-[8px] tracking-[0.12em] text-[var(--muted)]">
            {label}
          </dt>

          <dd className="mt-2 text-sm">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * Cabeçalho da página de cada projeto.
 *
 * A imagem utilizada aqui vem diretamente de project.heroImage,
 * permitindo que cada projeto tenha sua própria capa.
 */
export function ProjectHero({
  project,
}: {
  project: Project
}) {
  return (
    <header className="px-[var(--pad)] pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-5 font-mono text-[9px] tracking-[0.1em] text-[var(--muted)]">
        <span>
          CASE STUDY / {String(project.order).padStart(2, '0')}
        </span>

        <span>
          {project.category}
        </span>
      </div>

      <h1
        className="mt-10 max-w-[12ch] text-[clamp(3.6rem,11vw,10rem)] leading-[0.78] font-medium tracking-[-0.08em] uppercase"
        data-reveal="title"
      >
        <span>{project.title}</span>
      </h1>

      <p className="mt-8 max-w-2xl text-[clamp(1.1rem,2vw,1.65rem)] leading-snug tracking-[-0.025em] text-white/75">
        {project.description}
      </p>

      <div className="mt-12">
        <ProjectMeta project={project} />
      </div>

      <div
        className="mt-8 overflow-hidden bg-[var(--surface)] sm:mt-12"
        data-reveal="image"
      >
        <ProjectImage
          media={project.heroImage}
          eager
        />
      </div>
    </header>
  )
}

/**
 * Seção reutilizável das páginas de projeto.
 *
 * Mantém a mesma estrutura visual para contexto, desafio,
 * processo, solução e aprendizados.
 */
export function ProjectSection({
  index,
  title,
  children,
  accent = false,
}: {
  index: string
  title: string
  children: ReactNode
  accent?: boolean
}) {
  return (
    <section
      className="grid gap-8 border-t border-white/15 py-16 sm:py-24 lg:grid-cols-[minmax(180px,0.55fr)_1.45fr] lg:gap-16"
      data-reveal="content"
    >
      <div>
        <p className="font-mono text-[9px] tracking-[0.12em] text-[var(--coral)]">
          {index}
        </p>

        <h2
          className={`mt-4 text-[clamp(2.4rem,5vw,5.5rem)] leading-[0.86] font-medium tracking-[-0.065em] uppercase ${
            accent ? 'text-[var(--coral)]' : ''
          }`}
        >
          {title}
        </h2>
      </div>

      <div className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
        {children}
      </div>
    </section>
  )
}

/**
 * Galeria de imagens do projeto.
 *
 * O layout pode ser "split", "wide" ou o padrão de imagem única.
 */
export function ProjectGallery({
  gallery,
}: {
  gallery: Project['gallery']
}) {
  if (!gallery?.length) return null

  return (
    <section
      className="space-y-6 py-8 sm:space-y-10 sm:py-16"
      aria-label="Galeria do projeto"
    >
      {gallery.map((item, index) => (
        <figure
          className={
            item.layout === 'split'
              ? 'grid gap-4 sm:grid-cols-2'
              : item.layout === 'wide'
                ? 'mx-auto max-w-6xl'
                : ''
          }
          data-reveal="image"
          key={item.id ?? index}
        >
          <div className="overflow-hidden bg-[var(--surface)]">
            <ProjectImage media={item.image} />
          </div>

          {item.layout === 'split' &&
            isMedia(item.secondaryImage) && (
              <div className="overflow-hidden bg-[var(--surface)]">
                <ProjectImage media={item.secondaryImage} />
              </div>
            )}

          {item.caption && (
            <figcaption className="pt-2 font-mono text-[9px] leading-5 tracking-[0.06em] text-[var(--muted)] sm:col-span-2">
              {String(index + 1).padStart(2, '0')} /{' '}
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </section>
  )
}

/**
 * Exibe o resumo dos resultados do projeto e,
 * quando disponíveis, suas métricas.
 */
export function ProjectResult({
  results,
}: {
  results: Project['results']
}) {
  if (!results?.summary) return null

  return (
    <div>
      <p className="text-[clamp(1.5rem,3vw,2.7rem)] leading-tight tracking-[-0.04em] text-white">
        {results.summary}
      </p>

      {Boolean(results.metrics?.length) && (
        <dl className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2">
          {results.metrics?.map((metric) => (
            <div
              className="bg-[var(--black)] p-6"
              key={metric.id ?? metric.label}
            >
              <dt className="text-4xl tracking-[-0.06em] text-[var(--coral)]">
                {metric.value}
              </dt>

              <dd className="mt-2 font-mono text-[9px] tracking-[0.08em] text-[var(--muted)]">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

/**
 * Navegação entre os projetos do portfólio.
 *
 * Mostra o projeto anterior e o próximo quando eles existem.
 */
export function ProjectNavigation({
  previous,
  next,
}: {
  previous?: Project
  next?: Project
}) {
  return (
    <nav
      className="grid border-y border-white/15 sm:grid-cols-2"
      aria-label="Navegação entre projetos"
    >
      {previous ? (
        <Link
          className="group border-b border-white/15 p-6 transition hover:bg-white/[0.035] sm:border-r sm:border-b-0 sm:p-10"
          href={`/projects/${previous.slug}`}
        >
          <span className="font-mono text-[8px] tracking-[0.12em] text-[var(--muted)]">
            ← ANTERIOR
          </span>

          <strong className="mt-5 block text-2xl tracking-[-0.04em] uppercase transition-transform group-hover:-translate-y-1">
            {previous.title}
          </strong>

          <span className="mt-3 block text-xs text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {previous.description}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          className="group p-6 text-right transition hover:bg-white/[0.035] sm:p-10"
          href={`/projects/${next.slug}`}
        >
          <span className="font-mono text-[8px] tracking-[0.12em] text-[var(--muted)]">
            PRÓXIMO →
          </span>

          <strong className="mt-5 block text-2xl tracking-[-0.04em] uppercase transition-transform group-hover:-translate-y-1">
            {next.title}
          </strong>

          <span className="mt-3 block text-xs text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {next.description}
          </span>
        </Link>
      )}
    </nav>
  )
}