export type Media = {
  id: string
  alt: string
  url: string
  width: number
  height: number
}

export type Project = {
  id: string
  order: number
  title: string
  slug: string
  category?: string | null
  meta: string
  year: string
  description: string
  variant: 'civic' | 'council' | 'adas' | 'lab'
  caseURL?: string | null
  role?: string | null
  technologies?: Array<{ id?: string | null; label: string }> | null
  heroImage?: Media | null
  context?: { overview?: string | null; motivation?: string | null; audience?: string | null }
  challenge?: string | null
  process?: Array<{ id?: string | null; title: string; description: string }> | null
  solution?: string | null
  gallery?: Array<{ id?: string | null; layout: 'wide' | 'full' | 'split'; image: Media; secondaryImage?: Media | null; caption?: string | null }> | null
  results?: { summary?: string | null; metrics?: Array<{ id?: string | null; value: string; label: string }> | null }
  learnings?: string | null
  featuredDetails?: { role?: string | null; stack?: string | null; focus?: string | null }
}

export type Portfolio = {
  hero: { eyebrow: string; firstName: string; lastName: string; role: string; description: string; portfolioLabel: string; location: string; discipline: string }
  about: { heading: string; lead: string; body: string; keywords: Array<{ id?: string | null; label: string }> }
  workIntro: { heading: string; description: string }
  capabilities: { heading: string; description: string; skills: Array<{ id?: string | null; title: string; list: string }> }
  journey: { heading: string; description: string; steps: Array<{ id?: string | null; title: string; copy: string }> }
  featuredProject: Project
  contact: { status: string; heading: string; copy: string; email: string; linkedin: string; github: string; instagram: string }
}

export const projects: Project[] = [
  {
    "id": "af231e62-09bc-421a-8708-059047675f0d",
    "order": 1,
    "title": "Maringá Participativa",
    "slug": "maringa-participativa",
    "category": "Civic Tech · Plataforma web",
    "meta": "UI/UX · Front-End · Desenvolvimento Web",
    "year": "2026",
    "description": "Interface desenvolvida para facilitar a participação cidadã e a visualização de resultados.",
    "variant": "civic",
    "caseURL": null,
    "role": "UI/UX Design + Front-End",
    "technologies": [
      {
        "id": "6ae690e4803bbb1894992b11",
        "label": "React"
      },
      {
        "id": "6ae690e4803bbb1894992b12",
        "label": "CSS"
      },
      {
        "id": "6ae690e4803bbb1894992b13",
        "label": "Design Systems"
      },
      {
        "id": "6ae690e4803bbb1894992b14",
        "label": "Acessibilidade"
      }
    ],
    "heroImage": {
      "id": "3dd47def-1c10-40fc-b9ff-e74c7bc94a96",
      "alt": "Visual conceitual do projeto Maringá Participativa com interface cívica em coral e azul-petróleo, mostrando apresentação principal",
      "url": "/project-media/maringa-inicial.png",
      "width": 1400,
      "height": 800
    },
    "context": {
      "audience": "Cidadãos de Maringá, equipes públicas e pessoas que acompanham iniciativas e decisões da cidade.",
      "overview": "Maringá Participativa é uma experiência digital concebida para organizar temas, propostas e resultados de participação cidadã em uma interface clara e acessível.",
      "motivation": "O projeto nasceu da necessidade de aproximar informação pública e participação cotidiana, reduzindo a distância entre processos institucionais e pessoas interessadas em contribuir."
    },
    "challenge": "Transformar um volume potencialmente complexo de informações públicas em uma jornada compreensível, com hierarquia clara, linguagem direta e pontos de entrada que não exigissem conhecimento prévio do processo.",
    "process": [
      {
        "id": "6ae690e4803bbb1894992b15",
        "title": "Leitura do problema",
        "description": "Mapeamento das necessidades de informação, referências de civic tech e barreiras comuns em plataformas de participação."
      },
      {
        "id": "6ae690e4803bbb1894992b16",
        "title": "Arquitetura",
        "description": "Organização de temas, propostas, status e resultados em uma estrutura navegável e progressiva."
      },
      {
        "id": "6ae690e4803bbb1894992b17",
        "title": "Sistema visual",
        "description": "Definição de contraste, tipografia, componentes e sinais de estado para equilibrar confiança institucional e proximidade."
      },
      {
        "id": "6ae690e4803bbb1894992b18",
        "title": "Front-End e refinamento",
        "description": "Construção da interface responsiva, revisão de legibilidade e ajustes de interação para diferentes dispositivos."
      }
    ],
    "solution": "A solução utiliza uma navegação objetiva, blocos de informação escaneáveis e uma linguagem visual que combina azul-petróleo, coral e superfícies neutras. Os dados mais importantes aparecem primeiro, enquanto detalhes permanecem disponíveis sem sobrecarregar a leitura.",
    "gallery": [
      {
        "id": "6ae690e4803bbb1894992b1a",
        "image": {
          "id": "a0b14221-6450-40a1-abbe-840cf67ad816",
          "alt": "Visual conceitual do projeto Maringá Participativa com interface cívica em coral e azul-petróleo, mostrando adaptação responsiva para desktop e celular",
          "url": "/project-media/maringa-ideia.png",
          "width": 1600,
          "height": 1000
        },
        "layout": "split",
        "caption": "Adaptação responsiva e aplicação da direção visual em diferentes proporções.",
        "secondaryImage": {
          "id": "3dd47def-1c10-40fc-b9ff-e74c7bc94a96",
          "alt": "Visual conceitual do projeto Maringá Participativa com interface cívica em coral e azul-petróleo, mostrando apresentação principal",
          "url": "/project-media/maringa-democracia.png",
          "width": 1600,
          "height": 1000
        }
      }
    ],
    "results": {
      "metrics": [],
      "summary": "O resultado é uma proposta de experiência cívica mais legível e convidativa, preparada para apresentar participação, andamento e resultados sem depender de jargão técnico."
    },
    "learnings": "O projeto reforçou a importância de tratar clareza como parte central da interface: em produtos públicos, arquitetura, microcopy, contraste e feedback são tão importantes quanto a expressão visual.",
    "featuredDetails": {
      "role": "UI/UX + FRONT-END",
      "focus": "CIVIC EXPERIENCE",
      "stack": "REACT / CSS"
    }
  },
  {
    "id": "11524518-319e-4abe-b38f-a50c9b366cf2",
    "order": 2,
    "title": "ProMube",
    "slug": "promube",
    "category": "GovTech · Educação",
    "meta": "Product Design · Interface",
    "year": "2026",
    "description": "Uma experiência digital que organiza informações do ProMube e aproxima estudantes das oportunidades de bolsas de estudo.",
    "variant": "council",
    "caseURL": null,
    "role": "Product Design + Interface",
    "technologies": [
      {
        "id": "6ae690e7063b5318dfb0b36d",
        "label": "Figma"
      },
      {
        "id": "6ae690e7063b5318dfb0b36e",
        "label": "Design System"
      },
      {
        "id": "6ae690e7063b5318dfb0b36f",
        "label": "Acessibilidade"
      },
      {
        "id": "6ae690e7063b5318dfb0b370",
        "label": "Front-End"
      }
    ],
    "heroImage": {
      "id": "2188c063-5806-4bc9-84da-98f2c943ee8b",
      "alt": "Página inicial do ProMube com apresentação das bolsas de estudo e informações para estudantes",
      "url": "/project-media/promube-inicio.png",
      "width": 1400,
      "height": 800
    },
    "context": {
      "audience": "Estudantes interessados em bolsas de estudo, instituições de ensino e pessoas que buscam informações sobre o programa.",
      "overview": "O ProMube é uma iniciativa da Prefeitura de Maringá voltada à oferta de bolsas de estudo para estudantes, reunindo informações sobre o programa, modalidades de bolsa, requisitos e processos.",
      "motivation": "Informações sobre bolsas, critérios e etapas do programa precisam ser encontradas e compreendidas com facilidade. A proposta busca tornar essa jornada mais clara, acessível e orientada ao estudante."
    },
    "challenge": "Organizar informações institucionais e regras do programa de forma clara e acessível, reduzindo a complexidade da navegação e facilitando a busca por informações importantes para quem deseja participar do ProMube.",
    "process": [
      {
        "id": "6ae690e7063b5318dfb0b371",
        "title": "Inventário de conteúdo",
        "description": "Mapeamento das principais informações do ProMube, identificando conteúdos essenciais como bolsas, requisitos, documentos, etapas e orientações para os estudantes."
      },
      {
        "id": "6ae690e7063b5318dfb0b372",
        "title": "Arquitetura e fluxos",
        "description": "Organização dos conteúdos e exploração de caminhos de navegação para facilitar o acesso às informações mais importantes do programa."
      },
      {
        "id": "6ae690e7063b5318dfb0b373",
        "title": "Interface acessível",
        "description": "Definição de padrões de hierarquia, contraste, navegação, foco e legibilidade para tornar a experiência mais inclusiva e fácil de utilizar."
      },
      {
        "id": "6ae690e7063b5318dfb0b374",
        "title": "Validação responsiva",
        "description": "Revisão da interface em diferentes tamanhos de tela, garantindo que conteúdos e funcionalidades permanecessem claros em desktop, tablet e celular."
      }
    ],
    "solution": "A interface combina uma estrutura modular com uma linguagem visual institucional e contemporânea. A organização prioriza as informações que o estudante precisa para compreender o programa, encontrar oportunidades de bolsa e avançar pelas etapas de participação com mais segurança.",
    "gallery": [
      {
        "id": "6ae690e7063b5318dfb0b376",
        "image": {
          "id": "eb99bf6e-50dd-4f73-a0e3-973416ff5570",
          "alt": "Interface responsiva do ProMube adaptada para diferentes tamanhos de tela",
          "url": "/project-media/promube-secao-01.png",
          "width": 1600,
          "height": 1000
        },
        "layout": "split",
        "caption": "Adaptação responsiva da experiência do ProMube para diferentes dispositivos e proporções de tela.",
        "secondaryImage": {
          "id": "2188c063-5806-4bc9-84da-98f2c943ee8b",
          "alt": "Página inicial do ProMube com apresentação das bolsas de estudo e informações para estudantes",
          "url": "/project-media/promube-secao-02.png",
          "width": 1600,
          "height": 1000
        }
      }
    ],
    "results": {
      "metrics": [],
      "summary": "A proposta final transforma as informações do ProMube em uma experiência mais organizada e orientada ao estudante, facilitando a compreensão do programa e o acesso às informações necessárias para participar."
    },
    "learnings": "Projetar uma experiência para um serviço público exige equilibrar informação, clareza e acessibilidade. O projeto mostrou a importância de estruturar conteúdos institucionais a partir das necessidades reais do usuário, transformando informações complexas em uma jornada mais simples e compreensível.",
    "featuredDetails": {
      "role": "PRODUCT DESIGN",
      "focus": "STUDENT EXPERIENCE",
      "stack": "FIGMA / UI SYSTEM"
    }
  },
  {
    "id": "51f498b6-5323-409d-b82f-96f0f06d5d26",
    "order": 3,
    "title": "Axion Consultoria",
    "slug": "axion-consultoria",
    "category": "Tecnologia · Consultoria Jr.",
    "meta": "Projeto em equipe · Experiência acadêmica",
    "year": "2026",
    "description": "Experiência acadêmica em equipe na Axion, conectando universidade, tecnologia e mercado por meio de projetos, eventos e formação prática.",
    "variant": "adas",
    "caseURL": null,
    "role": "Participante do projeto",
    "technologies": [
      {
        "id": "6ae690ea84d8a6192a6a440e",
        "label": "Projetos em equipe"
      },
      {
        "id": "6ae690ea84d8a6192a6a440f",
        "label": "Tecnologia"
      },
      {
        "id": "6ae690ea84d8a6192a6a4410",
        "label": "UX"
      },
      {
        "id": "6ae690ea84d8a6192a6a4411",
        "label": "Eventos"
      }
    ],
    "heroImage": {
      "id": "a5ef0c19-87c4-4139-8295-94ce5b42cc17",
      "alt": "Site institucional da Axion Consultoria Jr. e Liga Acadêmica de TI da UniCesumar",
      "url": "/project-media/axion-grupo.JPG",
      "width": 1400,
      "height": 8000
    },
    "context": {
      "audience": "Estudantes, professores, profissionais de tecnologia, empresas parceiras e pessoas interessadas em participar das iniciativas da Axion.",
      "overview": "A Axion é uma consultoria júnior e liga acadêmica de TI da UniCesumar que conecta universidade, estudantes e mercado por meio de projetos reais, eventos, mentorias e formação prática.",
      "motivation": "A experiência na Axion proporciona aos estudantes contato com projetos, eventos e situações próximas da realidade profissional, criando oportunidades para transformar conhecimento acadêmico em prática."
    },
    "challenge": "Participar de um ambiente colaborativo que aproxima estudantes da realidade do mercado, contribuindo para projetos e iniciativas enquanto desenvolve habilidades técnicas, criativas e profissionais.",
    "process": [
      {
        "id": "6ae690ea84d8a6192a6a4412",
        "title": "Integração ao time",
        "description": "Participação em um ambiente multidisciplinar formado por estudantes envolvidos em projetos, eventos e iniciativas de tecnologia."
      },
      {
        "id": "6ae690ea84d8a6192a6a4413",
        "title": "Projetos e iniciativas",
        "description": "Contato com diferentes demandas e atividades que conectam tecnologia, design, comunicação e desenvolvimento de soluções."
      },
      {
        "id": "6ae690ea84d8a6192a6a4414",
        "title": "Eventos e formação",
        "description": "Participação em ações como hackathons, palestras, workshops, mentorias e outras iniciativas voltadas à formação prática."
      },
      {
        "id": "6ae690ea84d8a6192a6a4415",
        "title": "Experiência colaborativa",
        "description": "Desenvolvimento de habilidades de comunicação, colaboração e resolução de problemas em um contexto próximo ao mercado."
      }
    ],
    "solution": "A Axion estrutura suas iniciativas em três frentes principais: consultoria, liga acadêmica e formação prática. O site institucional apresenta essa proposta por meio de uma linguagem visual inspirada em tecnologia, com navegação dinâmica, projetos, eventos, equipe e oportunidades para novos participantes.",
    "gallery": [
      {
        "id": "6ae690ea84d8a6192a6a4417",
        "image": {
          "id": "42441f5b-a586-4958-96fd-1ea7c2508f50",
          "alt": "Seção do site da Axion apresentando projetos, eventos e iniciativas da organização",
          "url": "/project-media/axion-professor01.JPG",
          "width": 1600,
          "height": 1000
        },
        "layout": "split",
        "caption": "Projetos, eventos e experiências que representam a atuação da Axion dentro e fora da universidade.",
        "secondaryImage": {
          "id": "a5ef0c19-87c4-4139-8295-94ce5b42cc17",
          "alt": "Site institucional da Axion Consultoria Jr. e Liga Acadêmica de TI da UniCesumar",
          "url": "/project-media/axion-professor02.JPG",
          "width": 1600,
          "height": 1000
        }
      }
    ],
    "results": {
      "metrics": [],
      "summary": "A experiência proporcionou contato com projetos, eventos e atividades colaborativas em um ambiente que aproxima a formação acadêmica das demandas e práticas do mercado de tecnologia."
    },
    "learnings": "A participação na Axion ampliou a experiência com trabalho em equipe, projetos multidisciplinares e iniciativas de tecnologia, mostrando na prática como comunicação, colaboração e conhecimento técnico se complementam na construção de projetos.",
    "featuredDetails": {
      "role": "PARTICIPANTE",
      "focus": "EXPERIÊNCIA EM EQUIPE",
      "stack": "TECNOLOGIA / PROJETOS / EVENTOS"
    }
  },
  /*{
    "id": "aaefe270-3c55-4c48-b712-592ce7ee916b",
    "order": 4,
    "title": "Amtech",
    "slug": "amtech",
    "category": "Tecnologia · Inovação",
    "meta": "UI Design · Visual Design",
    "year": "2026",
    "description": "Desenvolvimento visual das telas da Amtech, explorando composição, hierarquia e identidade para construir uma experiência digital alinhada ao universo de tecnologia e inovação.",
    "variant": "lab",
    "caseURL": null,
    "role": "UI Design + Visual Design",
    "technologies": [
      {
        "id": "6ae690edff12e51975c3856c",
        "label": "Figma"
      },
      {
        "id": "6ae690edff12e51975c3856d",
        "label": "UI Design"
      },
      {
        "id": "6ae690edff12e51975c3856e",
        "label": "Visual Design"
      },
      {
        "id": "6ae690edff12e51975c3856f",
        "label": "Design System"
      }
    ],
    "heroImage": {
      "id": "629a90b0-bd0e-435d-ae36-7f96c186c6b9",
      "alt": "Interface visual desenvolvida para a Amtech com composição contemporânea e elementos relacionados à tecnologia",
      "url": "/project-media/amtech-cover-original.png",
      "width": 1600,
      "height": 1000
    },
    "context": {
      "audience": "Pessoas interessadas em tecnologia, inovação e nas iniciativas desenvolvidas pela Amtech.",
      "overview": "O projeto envolveu a criação visual das telas da Amtech, trabalhando composição, tipografia, cores, hierarquia e organização das informações.",
      "motivation": "A proposta foi construir uma linguagem visual contemporânea e coerente com o contexto de tecnologia e inovação, tornando as informações mais claras e visualmente interessantes."
    },
    "challenge": "Construir uma identidade visual para as telas que equilibrasse estética, clareza e organização das informações, mantendo uma linguagem conectada ao universo de tecnologia e inovação.",
    "process": [
      {
        "id": "6ae690edff12e51975c38570",
        "title": "Direção visual",
        "description": "Definição da linguagem visual do projeto a partir de referências, composição, cores e elementos relacionados ao universo tecnológico."
      },
      {
        "id": "6ae690edff12e51975c38571",
        "title": "Composição",
        "description": "Construção das telas trabalhando hierarquia, espaçamentos, proporções e distribuição dos elementos."
      },
      {
        "id": "6ae690edff12e51975c38572",
        "title": "Tipografia e interface",
        "description": "Exploração de tipografia, pesos, contrastes e componentes para criar uma interface visualmente consistente."
      },
      {
        "id": "6ae690edff12e51975c38573",
        "title": "Refinamento visual",
        "description": "Revisão das telas para ajustar detalhes de composição, alinhamento, contraste e consistência entre as diferentes páginas."
      }
    ],
    "solution": "A solução visual utiliza uma composição contemporânea e elementos gráficos associados à tecnologia para criar uma interface consistente, equilibrando impacto visual e organização das informações.",
    "gallery": [
      {
        "id": "6ae690edff12e51975c38574",
        "image": {
          "id": "74daa7ad-c5dd-4eef-88f1-1f1044a343c5",
          "alt": "Tela da Amtech apresentando a composição visual, tipografia e organização dos elementos",
          "url": "/project-media/amtech-system-original.png",
          "width": 1600,
          "height": 1000
        },
        "layout": "full",
        "caption": "Exploração da linguagem visual, composição e hierarquia das telas desenvolvidas para a Amtech.",
        "secondaryImage": null
      },
      {
        "id": "6ae690edff12e51975c38575",
        "image": {
          "id": "866bd08b-4292-48d6-a03b-10ec2fa320fa",
          "alt": "Conjunto de telas da Amtech mostrando diferentes aplicações da linguagem visual",
          "url": "/project-media/amtech-responsive-original.png",
          "width": 1600,
          "height": 1000
        },
        "layout": "split",
        "caption": "Aplicação da mesma direção visual em diferentes telas e contextos da experiência.",
        "secondaryImage": {
          "id": "629a90b0-bd0e-435d-ae36-7f96c186c6b9",
          "alt": "Tela principal desenvolvida visualmente para a Amtech",
          "url": "/project-media/amtech-cover-original.png",
          "width": 1600,
          "height": 1000
        }
      }
    ],
    "results": {
      "metrics": [],
      "summary": "O projeto resultou em um conjunto de telas visualmente consistente, com uma linguagem contemporânea e alinhada ao contexto de tecnologia e inovação da Amtech."
    },
    "learnings": "O projeto reforçou a importância de transformar conceitos e referências em decisões visuais concretas, trabalhando composição, tipografia, hierarquia e consistência para construir interfaces mais claras e marcantes.",
    "featuredDetails": {
      "role": "UI + VISUAL DESIGN",
      "focus": "VISUAL EXPERIENCE",
      "stack": "FIGMA / UI / VISUAL"
    }
  }*/
]

export const portfolio: Portfolio = {
  "hero": {
    "role": "Designer Digital",
    "eyebrow": "OLÁ, EU SOU",
    "lastName": "CLARA",
    "location": "MARINGÁ, BR",
    "firstName": "MARIA",
    "discipline": "SOFTWARE ENGINEERING\n& DIGITAL DESIGN",
    "description": "Estudante de Engenharia de Software que transita entre design, tecnologia e desenvolvimento para criar experiências digitais com intenção, personalidade e propósito.",
    "portfolioLabel": "PORTFOLIO / 2026"
  },

  "about": {
    "body": "Sou estudante de Engenharia de Software e atuo entre design e tecnologia. Gosto de transformar ideias em experiências digitais, explorando interfaces, identidade visual, desenvolvimento e novas formas de interação.",
    "lead": "Entre design e tecnologia, crio experiências digitais que fazem sentido antes mesmo de parecerem bonitas.",
    "heading": "DESIGN\n× TECHNOLOGY",
    "keywords": [
      {
        "id": "6ae0e1f66e9e75136d801d52",
        "label": "UI/UX"
      },
      {
        "id": "6ae0e1f66e9e75136d801d53",
        "label": "DIGITAL DESIGN"
      },
      {
        "id": "6ae0e1f66e9e75136d801d54",
        "label": "FRONT-END"
      },
      {
        "id": "6ae0e1f66e9e75136d801d55",
        "label": "BACK-END"
      },
    ]
  },

  "contact": {
    "copy": "Ideias começam em algum lugar.\nTalvez a próxima comece aqui.",
    "email": "mailto:lima.maria.silva96@gmail.com",
    "github": "https://github.com/marareiaa",
    "status": "LET'S MAKE SOMETHING",
    "heading": "START\nSOMETHING.",
    "linkedin": "https://www.linkedin.com/in/marareia/",
    "instagram": "https://www.instagram.com/marareiaaa/"
  },
  "journey": {
    "steps": [
      {
        "id": "6ae0e1f66e9e75136d801d5b",
        "copy": "Curiosidade que virou caminho",
        "title": "Descoberta"
      },
      {
        "id": "6ae0e1f66e9e75136d801d5c",
        "copy": "Aprender fazendo",
        "title": "Experimentação"
      },
      {
        "id": "6ae0e1f66e9e75136d801d5d",
        "copy": "Ideias ganhando forma",
        "title": "Design"
      },
      {
        "id": "6ae0e1f66e9e75136d801d5e",
        "copy": "Experiências pensadas para pessoas",
        "title": "Interfaces"
      },
      {
        "id": "6ae0e1f66e9e75136d801d5f",
        "copy": "Tecnologia transformando ideias",
        "title": "Desenvolvimento"
      },
      {
        "id": "6ae0e1f66e9e75136d801d60",
        "copy": "Ainda há muito para construir",
        "title": "Próximos caminhos"
      }
    ],
    "heading": "LEARNING\nIN MOTION",
    "description": "Uma trajetória construída pela curiosidade, prática e vontade constante de evoluir."
  },
  "workIntro": {
    "heading": "PROJETOS\nSELECIONADOS",
    "description": "Uma seleção de interfaces, experiências e experimentos construídos entre design e tecnologia."
  },
  "capabilities": {
    "skills": [
      {
        "id": "6ae0e1f66e9e75136d801d57",
        "list": "HTML · CSS · JavaScript · React",
        "title": "FRONT-END"
      },
      {
        "id": "6ae0e1f66e9e75136d801d58",
        "list": "UI Design · UX · Figma · Design Systems",
        "title": "DESIGN"
      },
      {
        "id": "6ae0e1f66e9e75136d801d59",
        "list": "Git · GitHub · APIs · Responsividade",
        "title": "DESENVOLVIMENTO"
      },
      {
        "id": "6ae0e1f66e9e75136d801d5a",
        "list": "Engenharia de Software · Projetos · Tecnologia",
        "title": "OUTROS"
      }
    ],
    "heading": "WHAT I\nCREATE",
    "description": "Ideias transformadas em experiências digitais que conectam design, tecnologia e propósito."
  },
   "featuredProject": projects.find(
    (project) => project.slug === "maringa-participativa"
  )!
}

export async function getPortfolioHome() { return { content: portfolio, projects } }
export async function getProjects() { return projects }
export async function getProjectBySlug(slug: string) { return projects.find((project) => project.slug === slug) ?? null }
export async function getProjectSlugs() { return projects.map((project) => project.slug) }
