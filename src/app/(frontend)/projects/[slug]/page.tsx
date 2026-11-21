import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getProjectBySlug,
  getProjects,
  getProjectSlugs,
} from '@/lib/portfolio-data'
import { Header, PortfolioEffects } from '../../portfolio-effects'
import {
  ProjectGallery,
  ProjectHero,
  ProjectNavigation,
  ProjectResult,
  ProjectSection,
} from './project-components'

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Projeto não encontrado — Maria Clara',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const hero =
    typeof project.heroImage === 'object'
      ? project.heroImage
      : null

  return {
    title: `${project.title} — Maria Clara`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Maria Clara`,
      description: project.description,
      type: 'article',
      images:
        hero?.url && hero.width && hero.height
          ? [
              {
                url: hero.url,
                width: hero.width,
                height: hero.height,
                alt: hero.alt,
              },
            ]
          : undefined,
    },
  }
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params

  const [project, projects] = await Promise.all([
    getProjectBySlug(slug),
    getProjects(),
  ])

  if (!project) {
    notFound()
  }

  const index = projects.findIndex(
    (item) => item.id === project.id,
  )

  const previous =
    index > 0
      ? projects[index - 1]
      : undefined

  const next =
    index >= 0 && index < projects.length - 1
      ? projects[index + 1]
      : undefined

  return (
    <>
      <PortfolioEffects />

      <Header />

      <main className="page-enter">
        <ProjectHero project={project} />

        <div className="px-[var(--pad)]">
          {project.context?.overview && (
            <ProjectSection
              index="01 / CONTEXTO"
              title="Ponto de partida"
            >
              <div className="space-y-6">
                <p className="text-white">
                  {project.context.overview}
                </p>

                {project.context.motivation && (
                  <p>
                    {project.context.motivation}
                  </p>
                )}

                {project.context.audience && (
                  <p className="border-l border-[var(--coral)] pl-5 text-sm">
                    <span className="mb-2 block font-mono text-[8px] tracking-[0.1em] text-[var(--coral)]">
                      PARA QUEM
                    </span>

                    {project.context.audience}
                  </p>
                )}
              </div>
            </ProjectSection>
          )}

          {project.challenge && (
            <ProjectSection
              index="02 / DESAFIO"
              title="O problema"
              accent
            >
              <p className="text-[clamp(1.35rem,2.5vw,2.25rem)] leading-snug tracking-[-0.035em] text-white">
                {project.challenge}
              </p>
            </ProjectSection>
          )}

          {Boolean(project.process?.length) && (
            <ProjectSection
              index="03 / PROCESSO"
              title="Do conceito ao código"
            >
              <ol className="divide-y divide-white/15 border-y border-white/15">
                {project.process?.map(
                  (step, stepIndex) => (
                    <li
                      className="grid gap-3 py-6 sm:grid-cols-[50px_0.75fr_1.25fr]"
                      key={step.id}
                    >
                      <span className="font-mono text-[9px] text-[var(--coral)]">
                        {String(
                          stepIndex + 1,
                        ).padStart(2, '0')}
                      </span>

                      <strong className="font-medium text-white">
                        {step.title}
                      </strong>

                      <p className="text-sm leading-7">
                        {step.description}
                      </p>
                    </li>
                  ),
                )}
              </ol>
            </ProjectSection>
          )}

          {project.solution && (
            <ProjectSection
              index="04 / SOLUÇÃO"
              title="Sistema e experiência"
            >
              <div className="space-y-8">
                <p className="text-white">
                  {project.solution}
                </p>

                {Boolean(
                  project.technologies?.length,
                ) && (
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label="Tecnologias"
                  >
                    {project.technologies?.map(
                      (technology) => (
                        <li
                          className="border border-white/15 px-3 py-2 font-mono text-[8px] tracking-[0.08em] text-[var(--muted)]"
                          key={
                            technology.id ??
                            technology.label
                          }
                        >
                          {technology.label}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </ProjectSection>
          )}
        </div>

        <div className="px-[var(--pad)]">
          <ProjectGallery
            gallery={project.gallery}
          />
        </div>

        <div className="px-[var(--pad)]">
          <ProjectSection
            index="05 / RESULTADO"
            title="O que ficou"
          >
            <ProjectResult
              results={project.results}
            />
          </ProjectSection>

          {project.learnings && (
            <ProjectSection
              index="06 / APRENDIZADOS"
              title="Próximos sinais"
            >
              <p className="text-[clamp(1.25rem,2.3vw,2rem)] leading-snug tracking-[-0.03em] text-white">
                {project.learnings}
              </p>
            </ProjectSection>
          )}
        </div>

        <div className="mt-12 px-[var(--pad)] pb-16 sm:mt-20 sm:pb-24">
          <ProjectNavigation
            previous={previous}
            next={next}
          />
        </div>
      </main>
    </>
  )
}