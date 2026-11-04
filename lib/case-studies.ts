export type CaseSlug = "alvorada" | "advocacia-digital" | "odontohub";
type Narrative = {
  subtitle: string; audience: string; problem: string; role: string;
  decisions: string[]; delivery: string; evidence: string; limits: string;
};
type CaseStudy = {
  title: string; service: string; stack: string;
  repository?: string; demo?: string;
  cover: string; pt: Narrative; en: Narrative;
};

const teamPt = "Trabalho da equipe Digital S&D, fundada por Álvaro Marinho e Arthur Leite. Álvaro participa da SD como fundador; não atribuímos toda a implementação individualmente. A apresentação reúne o trabalho da equipe e as verificações desta versão.";
const teamEn = "A Digital S&D team project. Álvaro Marinho and Arthur Leite are founders; Álvaro’s role as a founder does not establish sole authorship of the implementation. This case presents the team’s work and the checks performed on this version.";

export const CASE_STUDIES: Record<CaseSlug, CaseStudy> = {
  "alvorada": {
    title: "Construtora Alvorada", service: "Landing Page", stack: "HTML · CSS · JavaScript",
    repository: "https://github.com/Digital-S-D/Construtora-Alvorada_LandingPage",
    demo: "https://digital-s-d.github.io/Construtora-Alvorada_LandingPage/",
    cover: "/images/portfolio/alvorada/visao-geral.webp",
    pt: {
      subtitle: "Uma oferta imobiliária organizada para comparação e interesse.",
      audience: "Público proposto: pessoas comparando apartamentos e empresas que precisam apresentar uma oferta específica.",
      problem: "Como reunir diferenciais, duas opções de planta e dúvidas em uma página que funcione no celular? O cenário propõe essa necessidade; não veio de uma campanha ou cliente real.",
      role: teamPt,
      decisions: ["HTML, CSS e JavaScript mantêm a publicação estática, sem etapa de build do site.", "A identidade usa ilustrações vetoriais, cores e linhas inspiradas em desenho arquitetônico.", "A comparação usa as características das duas plantas; cenários de uso substituem depoimentos inventados.", "Avisos de ficção e um formulário sem envio permitem avaliar a interação com clareza."],
      delivery: "Uma landing page responsiva, três páginas de apoio, comparação de plantas, FAQ por teclado, navegação mobile e validação local com conclusão de teste e limpeza dos campos.",
      evidence: "Cinco testes de navegador passaram: avisos e links, validação e limpeza sem envio, telefone/FAQ, bloqueio sem JavaScript e navegação desktop/mobile. Capturas atuais em 1440 e 390 px. Esses testes demonstram comportamento, sem comprovar aumento de vendas.",
      limits: "Empresa, imóvel, valores e pessoas fictícios. Sem WhatsApp conectado, CRM, reservas ou recebimento de contatos. A ilustração não é um tour. Uma implantação real precisa de conteúdo autorizado, canais e integrações definidos e verificados."
    },
    en: {
      subtitle: "A focused property offer, organised for comparison and enquiry.",
      audience: "Proposed audience: people comparing apartments and businesses that need to present a specific offer.",
      problem: "How can one mobile-friendly page bring together property features, two layouts and common questions? This is a proposed scenario, rather than a brief from a real client or campaign.",
      role: teamEn,
      decisions: ["Plain HTML, CSS and JavaScript keep hosting static without a site build step.", "Vector illustrations, colours and reference lines draw on architectural drawings.", "The comparison uses the two fictional layouts; use scenarios replace fabricated endorsements.", "Visible demo notices and a form that sends nothing make the interaction clear to evaluate."],
      delivery: "A responsive landing page, three supporting pages, layout comparison, keyboard-operable FAQ, mobile navigation and local validation that clears the form after a test.",
      evidence: "Five browser tests passed, covering notices and links, validation and clearing without transmission, phone/FAQ behaviour, JavaScript-disabled protection and desktop/mobile navigation. Current screenshots use 1440 and 390 px. No sales or conversion uplift is claimed.",
      limits: "The company, property, prices and people are fictional. There is no connected WhatsApp, CRM, reservation or enquiry delivery. The illustration is not a video tour. Real deployment requires authorised content, contact channels and verified integrations."
    }
  },
  "advocacia-digital": {
    title: "Advocacia Digital", service: "Site Institucional", stack: "Astro · TypeScript · Tailwind CSS",
    repository: "https://github.com/Digital-S-D/advocacia-digital",
    cover: "/images/portfolio/advocacia-digital/visao-geral.webp",
    pt: {
      subtitle: "Serviços, equipe e conteúdo editorial em uma navegação coerente.",
      audience: "Público proposto: visitantes de um site de serviços profissionais que precisam entender áreas, pessoas e informações relacionadas.",
      problem: "Como dar clareza a uma apresentação institucional com várias áreas e conteúdos? O conceito explora navegação, hierarquia editorial e um caminho até o contato, sem representar um escritório em operação.",
      role: teamPt,
      decisions: ["Astro gera 26 páginas estáticas, com conteúdo e tipos centralizados para manutenção.", "Fontes locais e uma identidade editorial organizam textos longos e páginas relacionadas.", "Menu e FAQ podem ser operados por teclado; o formulário leva o foco ao campo inválido.", "A simulação limpa os dados e abre uma confirmação sem valores na URL; os campos ficam bloqueados sem JavaScript."],
      delivery: "Páginas institucionais, seis áreas ilustrativas, perfis fictícios, blog, notícias, FAQ e contato simulado, com apresentação adaptada ao computador e ao celular.",
      evidence: "Astro verificou 33 arquivos sem erros ou avisos; o build exportou 26 páginas e seis testes passaram. Foram conferidos links, recursos, validação, avisos e o contato em execução, sem POST ou valores na URL. Capturas atuais mostram o artefato gerado.",
      limits: "Não é atendimento jurídico, projeto de cliente ou comprovação de credenciais. Sem API, CRM, analytics, CMS ou envio de contatos. A demonstração usa noindex; o caso de portfólio é separado. Para implantação real, conteúdo, credenciais, revisão e recebimento de contatos precisam ser definidos."
    },
    en: {
      subtitle: "Services, people and editorial content with a coherent navigation structure.",
      audience: "Proposed audience: professional-services website visitors who need to understand services, people and related information.",
      problem: "How can a multi-page institutional website remain easy to navigate? This concept explores content hierarchy, related pages and an enquiry journey without presenting an operating law firm.",
      role: teamEn,
      decisions: ["Astro generates 26 static pages from centralised content and types.", "Bundled fonts and an editorial visual identity support long-form content and related pages.", "Keyboard-operable navigation and FAQ accompany form errors that move focus to the relevant field.", "The form clears its values before a local confirmation page; without JavaScript, fields remain disabled."],
      delivery: "Institutional pages, six illustrative practice areas, fictional profiles, blog, news, FAQ and a simulated enquiry form, adapted to desktop and mobile.",
      evidence: "Astro checked 33 files with no errors or warnings. The build generated 26 pages and six tests passed. Links, assets, validation and demo notices were checked; the running enquiry flow completed without a POST or field values in the URL. Screenshots show the current built site.",
      limits: "No legal service, client deployment or professional credentials are claimed. There is no API, CRM, analytics, CMS or enquiry delivery. Demo pages use noindex; this portfolio case is separate. Real deployment requires authorised content and credentials, suitable review and confirmed enquiry delivery."
    }
  },
  "odontohub": {
    title: "OdontoHub", service: "Sistema Web personalizado", stack: "Next.js · React · TypeScript · Tailwind CSS",
    cover: "/images/portfolio/odontohub/visao-geral.webp",
    pt: {
      subtitle: "Interfaces para explorar a rotina de agenda e pacientes.",
      audience: "Público proposto: profissionais de clínicas que precisam consultar agenda, contexto do paciente e configurações em uma navegação comum.",
      problem: "Como aproximar o panorama do dia e os detalhes do atendimento? O projeto explora essa experiência com dados fictícios; não é uma implantação clínica ou prontuário de produção.",
      role: teamPt,
      decisions: ["Rotas Next.js e componentes React separam visão geral, pacientes, agenda e configurações.", "A agenda demonstra quatro visualizações, intervalos e bloqueio de conflitos com estado local.", "Aparência usa seis cores e três temas; somente cor e tema persistem no navegador.", "O aviso e a documentação distinguem modelos Prisma e dependências de um backend efetivamente conectado."],
      delivery: "Interfaces navegáveis, lista e busca de pacientes fictícios, odontograma, anamnese local, agenda e configurações. Os números financeiros são indicadores ilustrativos; esta versão não implementa um módulo de movimentações.",
      evidence: "Lint sem avisos, quatro testes de formatação/busca e build com TypeScript passaram. Em execução: navegação e busca, odontograma, agendamento, rejeição de conflito e descarte após reload. Cor e tema permaneceram após reload. Capturas desktop e mobile documentam essa versão.",
      limits: "Código privado. Sem login, proteção por usuário, banco ou API de dados conectados. O detalhe de diferentes IDs usa o mesmo paciente de exemplo. Agenda, prontuário e ajustes de negócio são transitórios; horários nas configurações não alteram a agenda. Não há pagamentos ou comprovação de segurança e conformidade clínica de produção."
    },
    en: {
      subtitle: "Interfaces that explore scheduling and patient workflows.",
      audience: "Proposed audience: practice staff who need to move between appointments, patient context and settings.",
      problem: "How can a daily overview connect to the details of an appointment? The project explores that experience with fictional data, rather than delivering a production clinical record system.",
      role: teamEn,
      decisions: ["Next.js routes and React components separate overview, patients, scheduling and settings.", "The schedule demonstrates four views, time slots and overlap prevention using page state.", "Six colours and three themes can be tried; only colour and theme persist in the browser.", "Visible notices and documentation distinguish Prisma models and dependencies from an implemented backend."],
      delivery: "Navigable interfaces, mock patient search, odontogram, local anamnesis, scheduling and settings. Financial figures are illustrative indicators; this version has no integrated transaction module.",
      evidence: "Lint with no warnings, four formatting/search tests and a build with TypeScript validation passed. Running checks covered navigation/search, odontogram, appointment creation, conflict rejection and loss of appointments on reload. Colour and theme survived reload. Current screenshots cover desktop and mobile.",
      limits: "Source remains private. No login, user-specific route protection, connected database or data API is implemented. Different patient IDs resolve to the same fixture. Business changes live in page state; opening-hour settings do not update the schedule. There is no payment processing or demonstrated production clinical compliance."
    }
  }
};
