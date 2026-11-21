import type { ReactNode } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/portfolio-data'
import { getPortfolioHome } from '@/lib/portfolio-data'
import { Header, PortfolioEffects } from './portfolio-effects'
import { CapabilitiesExplorer, ContactActions } from './interactive-sections'
import { JourneyTimeline } from './journey-timeline'

type ArtworkVariant = 'civic' | 'council' | 'adas' | 'lab'

function Lines({ children }: { children: string }) {
  return children.split('\n').map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < children.split('\n').length - 1 && <br />}
    </span>
  ))
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>{children}</span>
      <span className="section-label__line" />
    </div>
  )
}

function Artwork({ variant }: { variant: ArtworkVariant }) {
  if (variant === 'civic') {
    return (
      <div className="artwork artwork--civic" aria-hidden="true">
        <div className="browser">
          <div className="browser__bar">
            <i />
            <i />
            <i />
            <span>participa.maringa</span>
          </div>
          <div className="civic-ui">
            <div className="civic-ui__copy">
              <small>PARTICIPAÇÃO CIDADÃ</small>
              <b>
                Sua cidade.
                <br />
                Sua voz.
              </b>
              <span />
            </div>
            <div className="civic-ui__orb" />
            <div className="civic-ui__stats">
              <span>
                42
                <br />
                <small>PROPOSTAS</small>
              </span>
              <span>
                8.4K
                <br />
                <small>PARTICIPAÇÕES</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'council') {
    return (
      <div className="artwork artwork--council" aria-hidden="true">
        <div className="poster">
          <span className="poster__tag">CONSELHOS / 24</span>
          <div className="poster__rings">
            <i />
            <i />
            <i />
          </div>
          <strong>
            CON
            <br />
            SELHOS
          </strong>
          <span className="poster__foot">INFORMAÇÃO QUE APROXIMA</span>
        </div>
        <div className="poster-shadow" />
      </div>
    )
  }

  if (variant === 'adas') {
    return (
      <div className="artwork artwork--adas" aria-hidden="true">
        <div className="code-window">
          <div className="code-window__nav">
            <b>ADA&apos;S</b>
            <span>learn &nbsp; connect &nbsp; create</span>
          </div>
          <div className="code-window__body">
            <small>01 / COMMUNITY</small>
            <strong>
              CODE
              <br />
              THE FUTURE
            </strong>
            <div className="code-window__code">
              const future = <em>you</em>;<br />
              build(together);
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="artwork artwork--lab" aria-hidden="true">
      <div className="lab-grid">
        <span className="lab-grid__a">A</span>
        <span className="lab-grid__b">LAB</span>
        <span className="lab-grid__c" />
        <span className="lab-grid__d">
          INTER
          <br />
          FACE
        </span>
        <span className="lab-grid__e">
          EXPERIMENTS
          <br />
          2025
        </span>
      </div>
    </div>
  )
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      {project.heroImage && typeof project.heroImage === 'object' && (
        <img
          src={project.heroImage.url}
          alt={project.heroImage.alt || ''}
          className="project__cover"
        />
      )}
      <span className="view-case">VER PROJETO →</span>
    </>
  )
  const projectHref = `/projects/${project.slug}`

  return (
    <article className={`project reveal ${index % 2 === 1 ? 'project--reverse' : ''}`}>
      {project.slug ? (
        <Link
          className="project__visual"
          href={projectHref}
          aria-label={`Ver case ${project.title}`}
        >
          {content}
        </Link>
      ) : (
        <div className="project__visual">{content}</div>
      )}
      <div className="project__info">
        <div className="project__top">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.slug ? <Link href={projectHref}>{project.title}</Link> : project.title}</h3>
        <p className="project__meta">{project.meta}</p>
        <p className="project__description">{project.description}</p>
        {project.caseURL && (
          <a className="project__external" href={project.caseURL} rel="noreferrer" target="_blank">
            VISITAR PROJETO
          </a>
        )}
      </div>
    </article>
  )
}

export default async function HomePage() {
  const { content, projects } = await getPortfolioHome()

  if (!content.hero?.firstName) {
    return (
      <main className="empty-state">
        <p>PORTFOLIO / CMS</p>
        <h1>Conteúdo em preparação.</h1>
        <p>Configure o portfólio no painel administrativo para publicar a página.</p>
      </main>
    )
  }

  const featured = content.featuredProject

  return (
    <>
      <PortfolioEffects />
      <Header />
      <main className="page-enter">
        <section className="hero" id="top">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__meta hero__meta--left">
            {content.hero.portfolioLabel}
            <br />
            {content.hero.location}
          </div>
          <div className="hero__meta hero__meta--right">{content.hero.discipline}</div>
          <div className="hero__content">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 data-reveal="title">
              <span>{content.hero.firstName}</span>
              <span>{content.hero.lastName}</span>
            </h1>
            <div className="hero__bottom">
              <h2>{content.hero.role}</h2>
              <p>{content.hero.description}</p>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            SCROLL TO EXPLORE
          </a>
          <span className="hero__index">01 / 06</span>
        </section>

        <section className="about section reveal" id="about">
          <SectionLabel index="02">ABOUT / PROFILE</SectionLabel>
          <div className="about__grid">
            <h2 data-reveal="title">
              <Lines>{content.about.heading}</Lines>
            </h2>
            <div className="about__copy">
              <p className="lead">{content.about.lead}</p>
              <p>{content.about.body}</p>
              <div className="keywords">
                {content.about.keywords?.map((keyword) => (
                  <span key={keyword.id}>{keyword.label}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <SectionLabel index="03">SELECTED WORK / 2023—2025</SectionLabel>
          <div className="work__intro reveal">
            <h2 data-reveal="title">
              <Lines>{content.workIntro.heading}</Lines>
            </h2>
            <p>{content.workIntro.description}</p>
          </div>
          <div className="projects">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectShowcase key={project.id} project={project} index={index} />
              ))
            ) : (
              <p className="content-empty">Nenhum projeto publicado ainda.</p>
            )}
          </div>
        </section>

        <section className="capabilities section reveal" id="experience">
          <SectionLabel index="04">CAPABILITIES / TOOLKIT</SectionLabel>
          <div className="capabilities__head">
            <h2>
              <Lines>{content.capabilities.heading}</Lines>
            </h2>
            <p>{content.capabilities.description}</p>
          </div>
          <CapabilitiesExplorer skills={content.capabilities.skills ?? []} />
        </section>

        <section className="journey section reveal">
          <SectionLabel index="05">EXPERIENCE / JOURNEY</SectionLabel>
          <div className="journey__heading">
            <h2>
              <Lines>{content.journey.heading}</Lines>
            </h2>
            <p>{content.journey.description}</p>
          </div>
          <JourneyTimeline steps={content.journey.steps ?? []} />
        </section>
      </main>

      <footer className="contact section" id="contact">
        <SectionLabel index="06">CONTACT / SAY HELLO</SectionLabel>
        <div className="contact__status">
          <i /> {content.contact.status}
        </div>
        <h2>
          <Lines>{content.contact.heading}</Lines>
        </h2>
        <div className="contact__bottom">
          <p>
            <Lines>{content.contact.copy}</Lines>
          </p>
          <ContactActions links={content.contact} />
        </div>
        <div className="footer-line">
          <span>© {new Date().getFullYear()} MARIA CLARA</span>
          <span>DESIGN + TECHNOLOGY</span>
          <a href="#top">BACK TO TOP</a>
        </div>
      </footer>
    </>
  )
}
