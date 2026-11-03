// Uma fonte de conteúdo para serviços, FAQ e caminhos de orçamento.
export const PRIMARY_SERVICES = [
  {
    id: "site-institucional",
    title: "Site institucional",
    interest: "Site Institucional",
    label: "Apresente seu negócio",
    audience: "Para empresas e profissionais que precisam de uma presença própria na internet.",
    description: "Organize seus serviços, apresente sua marca e facilite o contato de quem procura o que você oferece.",
    deliverables: [
      "Páginas de apresentação e serviços definidas no escopo",
      "Layout adaptado para celular, tablet e computador",
      "Caminhos de contato por formulário, WhatsApp ou e-mail",
      "Estrutura de títulos e descrições para os buscadores",
    ],
    materials: "Identidade da marca, informações sobre o negócio, serviços, textos e imagens disponíveis.",
  },
  {
    id: "landing-page",
    title: "Landing page",
    interest: "Landing Page",
    label: "Dê foco à sua campanha",
    audience: "Para uma oferta, lançamento ou campanha que precisa de um próximo passo claro.",
    description: "Reúna a mensagem da sua oferta em uma página e conduza o visitante para pedir contato, se cadastrar ou conversar.",
    deliverables: [
      "Uma página com seções organizadas para a sua oferta",
      "Layout adaptado para celular, tablet e computador",
      "Chamada principal e caminho de contato definidos",
      "Estrutura de títulos e descrições para os buscadores",
    ],
    materials: "Oferta, público, objetivo da campanha, identidade da marca e materiais de divulgação disponíveis.",
  },
];

export const COMPLEMENTARY_SERVICES = [
  { title: "Sistemas web e e-commerce", description: "Fluxos, painéis e lojas com escopo e integrações avaliados para cada negócio." },
  { title: "SEO e desempenho", description: "Revisão técnica e melhorias em sites existentes, conforme diagnóstico e prioridades." },
  { title: "Manutenção e evolução", description: "Atualizações, ajustes e novas funcionalidades com condições de atendimento combinadas." },
];

export const PROJECT_AGREEMENTS = [
  { title: "Antes de começar", description: "Conversamos sobre objetivo, público e materiais. A proposta registra páginas, funcionalidades, responsabilidades e o que fica fora do escopo." },
  { title: "Prazo e investimento", description: "O orçamento considera o escopo, o conteúdo e as integrações. Cronograma, marcos de aprovação e pagamento são combinados por escrito." },
  { title: "Depois da entrega", description: "Publicação, acessos, revisões e condições de suporte ficam descritos na proposta. Manutenção e evolução podem ser contratadas conforme a necessidade." },
];

export function quoteHref(interest: string): string {
  return `/?servico=${encodeURIComponent(interest)}#contato`;
}

export const FAQ_ITEMS = [
  {
    id: "site-ou-landing-page", category: "Escolha e orçamento", home: true,
    question: "Preciso de um site institucional ou de uma landing page?",
    answer: "O site institucional apresenta o negócio, os serviços e as informações que o cliente consulta antes de entrar em contato. A landing page concentra uma oferta e uma ação, como pedir orçamento ou se cadastrar em uma campanha. Se ainda estiver em dúvida, conte seu objetivo no contato e ajudamos a avaliar o formato.",
  },
  {
    id: "orcamento", category: "Escolha e orçamento", home: true,
    question: "Como é calculado o orçamento?",
    answer: "O orçamento considera páginas ou seções, funcionalidades, conteúdo, integrações e complexidade do projeto. Conte o que precisa e quais materiais já tem. O valor e os entregáveis ficam registrados em uma proposta escrita; informar uma faixa no formulário ajuda a conversa e não representa um preço fechado.",
  },
  {
    id: "pagamento", category: "Escolha e orçamento", home: false,
    question: "Como funcionam o pagamento e a contratação?",
    answer: "As formas de pagamento, eventuais parcelas e marcos de cobrança são definidos na proposta de cada projeto, antes da contratação. O envio do formulário inicia uma conversa sobre o orçamento e não contrata automaticamente um serviço.",
  },
  {
    id: "prazo", category: "Conteúdo e desenvolvimento", home: true,
    question: "Qual é o prazo e quando ele começa a contar?",
    answer: "O prazo depende do escopo, dos materiais disponíveis e das etapas de aprovação. O cronograma e as condições para início são definidos na proposta. Atrasos na entrega de conteúdo ou mudanças de escopo podem exigir uma revisão das datas, combinada entre as partes.",
  },
  {
    id: "materiais", category: "Conteúdo e desenvolvimento", home: true,
    question: "Quem fornece os textos e as imagens?",
    answer: "No início, reunimos identidade da marca, informações dos serviços, textos, fotos e referências disponíveis. A proposta define o que será fornecido pelo cliente e se haverá produção ou adaptação de conteúdo pela equipe. Criação de textos, fotografia, compra de imagens e licenças precisam estar previstas no escopo.",
  },
  {
    id: "revisoes", category: "Conteúdo e desenvolvimento", home: false,
    question: "Quantas revisões posso solicitar?",
    answer: "A quantidade de rodadas, as etapas de revisão e os prazos de aprovação ficam definidos na proposta. Ajustes dentro do escopo são tratados nessas etapas. Novas páginas, funcionalidades ou mudanças de direção são avaliadas à parte, com impacto em prazo e orçamento informado antes da execução.",
  },
  {
    id: "dominio-hospedagem-codigo", category: "Entrega e continuidade", home: false,
    question: "Quem fica com o domínio, a hospedagem e o código?",
    answer: "A proposta deve esclarecer a titularidade do domínio, quem contrata e administra a hospedagem, quais acessos serão entregues e as condições de entrega e uso do código. Serviços e licenças de terceiros podem ter regras próprias. Esses pontos são combinados antes da contratação.",
  },
  {
    id: "custos-mensais", category: "Entrega e continuidade", home: false,
    question: "Existem custos mensais além do desenvolvimento?",
    answer: "Podem existir custos de domínio, hospedagem, serviços externos e manutenção, conforme a solução escolhida. A proposta informa o que está incluído no desenvolvimento e quais itens têm contratação ou renovação separada. Não presumimos uma mensalidade única para todos os projetos.",
  },
  {
    id: "suporte", category: "Entrega e continuidade", home: true,
    question: "Como funciona o suporte depois da entrega?",
    answer: "O período, o canal, o prazo de atendimento e o tipo de suporte são definidos na proposta. Correções, atualizações de conteúdo e novas funcionalidades têm escopos diferentes. Se você precisar de acompanhamento contínuo, podemos avaliar uma contratação de manutenção e evolução.",
  },
  {
    id: "atualizacoes", category: "Entrega e continuidade", home: false,
    question: "Vou conseguir atualizar meu site depois?",
    answer: "Sim, o projeto pode prever um painel para edição ou atualizações solicitadas à equipe. A opção depende do conteúdo e da frequência das mudanças. Painel, orientações de uso e manutenção precisam estar descritos na proposta; um editor de conteúdo não é presumido em todos os sites.",
  },
  {
    id: "seo-integracoes", category: "Recursos e atendimento", home: false,
    question: "O que está incluído em SEO e integrações?",
    answer: "A base apresentada para sites e landing pages contempla organização de títulos e descrições para os buscadores. SEO contínuo, produção recorrente de conteúdo, campanhas, ferramentas de análise e integrações com CRM ou pagamentos são avaliados conforme o escopo. Não garantimos posição no Google, volume de contatos ou vendas.",
  },
  {
    id: "atendimento-remoto", category: "Recursos e atendimento", home: false,
    question: "Vocês atendem fora de Belo Horizonte?",
    answer: "Sim. A Digital S&D está em Belo Horizonte e oferece atendimento remoto para outras cidades. Reuniões, materiais e aprovações podem ser organizados a distância, com canais e horários combinados para o projeto.",
  },
  {
    id: "odontohub", category: "Recursos e atendimento", home: false,
    question: "O que é o OdontoHub? Posso contratar algo parecido?",
    answer: "O OdontoHub é um projeto demonstrativo desenvolvido pela equipe para mostrar a experiência de um sistema de gestão odontológica personalizável. As telas usam dados fictícios e armazenamento no navegador. Você pode conversar conosco sobre uma solução semelhante; implantação, autenticação, banco de dados, permissões e integrações são definidos conforme a necessidade. A demonstração não é uma operação clínica real.",
  },
];
