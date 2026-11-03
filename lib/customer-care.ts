// Política confirmada pelo usuário: retorno inicial em até 1 dia útil,
// sem horário fixo e atendimento pela equipe, sem responsável fixo.
export const CUSTOMER_CARE = {
  firstReply: "Até 1 dia útil",
  replyDescription: "A equipe responde pelo WhatsApp ou e-mail em até 1 dia útil, sem horário fixo de atendimento.",
  coordination: "Você conversa com a equipe Digital S&D. O atendimento é compartilhado, sem um responsável fixo por projeto.",
  responseAndDelivery: "A primeira resposta serve para entender seu pedido e combinar o próximo passo. O prazo para executar uma alteração depende da análise, da complexidade e das condições do serviço contratado.",
};

export const CARE_SUMMARY = [
  {
    title: "Você conta o que precisa",
    description: "Explique seu negócio e o que espera do site, mesmo sem saber os termos técnicos. A equipe faz as perguntas e ajuda a organizar o pedido.",
  },
  {
    title: "A equipe orienta cada etapa",
    description: "Você recebe uma proposta clara, sabe quais materiais reunir e revisa as versões do projeto antes de aprovar a publicação.",
  },
  {
    title: "Você sabe como continuar",
    description: "Na entrega, explicamos os acessos e a forma de atualizar o site: por um painel incluído no projeto ou com alterações solicitadas à equipe.",
  },
];

export const CUSTOMER_JOURNEY = [
  {
    title: "Comece com uma conversa simples",
    team: "Perguntamos sobre o negócio, o público e a ação que você quer facilitar: receber contatos, apresentar serviços ou divulgar uma oferta.",
    client: "Conte o que faz e o que precisa melhorar. Você pode trazer referências e dúvidas, sem escolher uma tecnologia antes de conversar.",
  },
  {
    title: "Entenda a proposta antes de contratar",
    team: "Explicamos páginas, recursos, materiais, investimento e etapas. As responsabilidades, revisões, publicação e condições de suporte ficam registradas na proposta.",
    client: "Confira o que está incluído e tire as dúvidas. A contratação começa com o escopo e as condições combinados por escrito.",
  },
  {
    title: "Reúna os materiais com orientação",
    team: "Listamos o que será necessário: marca, informações dos serviços, textos, fotos e acessos, quando forem necessários. Combinamos o que você já tem e o que precisará ser produzido.",
    client: "Envie os materiais disponíveis e avise o que falta. Produção de textos, fotos e outros conteúdos entra no orçamento quando fizer parte do trabalho.",
  },
  {
    title: "Veja as versões e aprove as etapas",
    team: "Apresentamos o andamento e as versões para revisão. Explicamos as decisões em linguagem simples e combinamos os próximos passos a partir das aprovações.",
    client: "Revise informações, imagens e caminhos de contato. Reúna os ajustes de cada rodada para conferirmos o que está dentro do escopo aprovado.",
  },
  {
    title: "Receba o site e as orientações de continuidade",
    team: "Conferimos a entrega, orientamos a publicação prevista no projeto e explicamos quais acessos e formas de atualização estão incluídos.",
    client: "Guarde os acessos entregues e saiba como pedir ajuda. O período e o escopo do suporte, assim como manutenção e novas funcionalidades, seguem a proposta contratada.",
  },
];

export const UPDATE_OPTIONS = [
  {
    title: "Atualizar por conta própria",
    condition: "Quando o projeto inclui um painel de edição",
    description: "Se você precisa mudar informações com frequência, avaliamos um painel com os campos que fazem sentido para a sua rotina.",
    details: [
      "Os conteúdos editáveis são definidos antes da contratação.",
      "A equipe orienta o uso das funções entregues.",
      "Mudanças de estrutura e recursos fora do painel são avaliadas separadamente.",
    ],
  },
  {
    title: "Pedir alterações à equipe",
    condition: "Com o escopo de atualização combinado",
    description: "Você envia o que deseja mudar, como textos, fotos, preços ou horários. A equipe avalia o pedido e informa como ele será atendido.",
    details: [
      "Os pedidos chegam pelos mesmos canais de contato.",
      "Prazo e eventual custo são informados antes da execução.",
      "Alterações avulsas ou acompanhamento contínuo dependem do serviço contratado.",
    ],
  },
];

export const HELP_REQUEST = [
  "Informe o nome do negócio e o endereço do site.",
  "Diga em qual página está a dúvida ou o que deseja alterar. Se ajudar, envie uma captura da tela.",
  "A equipe faz o retorno inicial, avalia o pedido e combina prazo e eventual orçamento antes de executar.",
];
