// ═══════════════════════════════════════════════════════════════════════
// lib/legal.ts — TEXTOS LEGAIS (Política de Privacidade e Termos de Uso)
// ═══════════════════════════════════════════════════════════════════════
// Os textos das páginas /privacidade e /termos ficam AQUI. Para mudar um
// parágrafo, edite o texto abaixo; a página é montada sozinha.
//
// Dentro dos textos você pode usar:
//   [texto do link](/rota)  → link interno      ex.: [Termos de Uso](/termos)
//   https://...             → vira link externo automaticamente
//   e-mails                 → viram links "mailto:" automaticamente
//
// Base legal: LGPD (Lei nº 13.709/2018), Código de Defesa do Consumidor
// (Lei nº 8.078/1990), Lei de Direitos Autorais (Lei nº 9.610/1998),
// Lei da Propriedade Industrial (Lei nº 9.279/1996) e Resolução CD/ANPD nº 2/2022.
// Este modelo é uma base técnica e NÃO substitui a revisão de um(a) advogado(a).
// ═══════════════════════════════════════════════════════════════════════

import { COMPANY } from "@/lib/constants";

// ─── TIPOS ──────────────────────────────────────────────────────────────
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSectionData = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocumentData = {
  metaTitle: string;    // título da aba do navegador / Google
  description: string;  // descrição para o Google
  title: string;        // título (h1) da página
  intro: string;
  sections: LegalSectionData[];
};

// ─── DADOS DA EMPRESA USADOS NOS TEXTOS ─────────────────────────────────
export const LEGAL = {
  // Atualize sempre que alterar qualquer texto legal.
  updatedAt: "23 de outubro de 2026",

  // Cidade/UF usada na identificação de quem controla os dados.
  city: "Belo Horizonte/MG",
};

const NAME = COMPANY.name;
const EMAIL = COMPANY.email;

// ═══════════════════════════════════════════════════════════════════════
// POLÍTICA DE PRIVACIDADE
// ═══════════════════════════════════════════════════════════════════════
export const PRIVACY_POLICY: LegalDocumentData = {
  metaTitle: `Política de Privacidade | ${NAME}`,
  description: `Saiba como a ${NAME} coleta, usa, compartilha e protege dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).`,
  title: "Política de Privacidade",
  intro: `Esta Política de Privacidade explica, de forma clara, como a ${NAME} coleta, usa, compartilha e protege os dados pessoais de quem visita este site ou entra em contato conosco, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD, Lei nº 13.709/2018). Recomendamos a leitura antes de enviar qualquer informação pelo site.`,
  sections: [
    {
      title: "Quem é o responsável pelos seus dados",
      blocks: [
        {
          type: "p",
          text: `O controlador, ou seja, quem toma as decisões sobre o tratamento dos seus dados pessoais, é a ${NAME}, com atuação em ${LEGAL.city}.`,
        },
        {
          type: "p",
          text: `Para qualquer assunto sobre privacidade e proteção de dados, fale com a nossa equipe pelo e-mail ${EMAIL}. Esse é o nosso canal de comunicação com os titulares dos dados e com a Agência Nacional de Proteção de Dados (ANPD).`,
        },
      ],
    },
    {
      title: "Quais dados pessoais coletamos",
      blocks: [
        { type: "p", text: "Coletamos apenas o necessário para atender você:" },
        {
          type: "ul",
          items: [
            "Dados que você informa no formulário de contato: nome, e-mail e WhatsApp/telefone (obrigatórios) e, se quiser, empresa, serviço de interesse, faixa de orçamento e a mensagem que escrever.",
            "Dados que você nos envia ao falar conosco por e-mail ou WhatsApp, como nome, número de telefone e o conteúdo da conversa.",
            "Dados técnicos de acesso, como endereço IP, tipo de navegador e dispositivo, e data e hora do acesso, registrados automaticamente pela hospedagem do site e pelo serviço de fontes de texto (veja a seção sobre compartilhamento).",
          ],
        },
        {
          type: "p",
          text: "Não pedimos dados pessoais sensíveis (como saúde, origem racial ou étnica, convicção religiosa ou opinião política). Pedimos que você não inclua esse tipo de informação no campo de mensagem.",
        },
      ],
    },
    {
      title: "Para que usamos seus dados e em qual base legal",
      blocks: [
        {
          type: "ul",
          items: [
            "Responder ao seu contato e elaborar orçamentos ou propostas que você pediu. Base legal: procedimentos preliminares relacionados a contrato, a pedido do titular (art. 7º, V, da LGPD).",
            "Manter o registro das solicitações recebidas e organizar o atendimento. Base legal: legítimo interesse (art. 7º, IX), limitado ao estritamente necessário (art. 10, §1º).",
            "Proteger o site contra abusos, spam e fraudes. Base legal: legítimo interesse (art. 7º, IX).",
            "Cumprir obrigações legais ou regulatórias, quando houver (art. 7º, II), e exercer direitos em processos judiciais, administrativos ou arbitrais (art. 7º, VI).",
          ],
        },
        {
          type: "p",
          text: "Os campos marcados como obrigatórios no formulário (nome, e-mail e WhatsApp/telefone) são necessários para que possamos responder ao seu pedido. Os demais são opcionais.",
        },
      ],
    },
    {
      title: "Com quem compartilhamos seus dados",
      blocks: [
        {
          type: "p",
          text: `A ${NAME} é responsável pelas decisões sobre os dados que você nos envia. Para operar o site e atender você, usamos prestadores de serviço, que tratam esses dados para nos prestar o serviço, nos limites de seus contratos e de suas próprias políticas de privacidade:`,
        },
        {
          type: "ul",
          items: [
            "Formspree (Formspree, Inc., Estados Unidos): recebe os envios do formulário de contato e os encaminha para o nosso e-mail. Os envios também ficam armazenados nos servidores do Formspree, pelo período definido no plano de uso e na política desse serviço.",
            "Google (Gmail e Google Fonts): o e-mail que recebe suas mensagens é um endereço Gmail. Além disso, as fontes de texto do site são carregadas dos servidores do Google Fonts, o que faz o seu navegador enviar ao Google dados técnicos, como o endereço IP.",
            "GitHub (GitHub, Inc., Estados Unidos): hospeda o site (GitHub Pages) e, como qualquer hospedagem, pode registrar dados técnicos de acesso, como o endereço IP.",
            "WhatsApp (Meta): se você clicar nos botões de WhatsApp para falar conosco, a conversa passa a ser regida também pelos termos e pela política de privacidade do WhatsApp.",
          ],
        },
        {
          type: "p",
          text: "Também podemos compartilhar dados com autoridades públicas quando houver obrigação legal ou ordem judicial.",
        },
      ],
    },
    {
      title: "Transferência internacional de dados",
      blocks: [
        {
          type: "p",
          text: "Os prestadores citados acima (Formspree, Google e GitHub) são empresas sediadas ou que armazenam dados nos Estados Unidos. Por isso, seus dados podem ser transferidos para fora do Brasil. Essa transferência ocorre quando necessária para atender ao seu pedido de contato e orçamento, nas hipóteses previstas no art. 33 da LGPD (em especial o inciso IX, combinado com o art. 7º, V e VI) e na regulamentação da ANPD.",
        },
      ],
    },
    {
      title: "Por quanto tempo guardamos seus dados",
      blocks: [
        {
          type: "p",
          text: "Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta Política, isto é, enquanto durar o atendimento do seu pedido e a eventual relação comercial que dele resultar.",
        },
        {
          type: "p",
          text: "Depois disso, eliminamos os dados ou os mantemos apenas pelo prazo exigido ou permitido por lei, por exemplo, para cumprimento de obrigação legal ou para o exercício regular de direitos (art. 16 da LGPD).",
        },
      ],
    },
    {
      title: "Cookies e tecnologias semelhantes",
      blocks: [
        {
          type: "p",
          text: "Este site não utiliza cookies próprios nem ferramentas de análise de audiência ou de publicidade. Por isso, não exibimos aviso de cookies.",
        },
        {
          type: "p",
          text: "Serviços de terceiros mencionados nesta Política (como hospedagem e fontes de texto) podem registrar dados técnicos de acesso conforme suas próprias políticas. Se passarmos a usar cookies ou ferramentas de análise, atualizaremos esta Política e pediremos o seu consentimento quando a lei exigir.",
        },
      ],
    },
    {
      title: "Seus direitos como titular dos dados",
      blocks: [
        {
          type: "p",
          text: "Nos termos do art. 18 da LGPD, você pode, a qualquer momento e mediante requisição, obter de nós:",
        },
        {
          type: "ul",
          items: [
            "confirmação da existência de tratamento dos seus dados;",
            "acesso aos seus dados;",
            "correção de dados incompletos, inexatos ou desatualizados;",
            "anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;",
            "portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa e conforme a regulamentação da ANPD;",
            "eliminação dos dados tratados com base no seu consentimento, exceto nas hipóteses do art. 16 da LGPD;",
            "informação sobre as entidades públicas e privadas com as quais compartilhamos seus dados;",
            "informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;",
            "revogação do consentimento, quando o tratamento se basear nele.",
          ],
        },
        {
          type: "p",
          text: "Você também pode se opor a um tratamento feito sem consentimento, em caso de descumprimento da LGPD (art. 18, §2º), e peticionar contra nós perante a ANPD (art. 18, §1º) ou perante os órgãos de defesa do consumidor (art. 18, §8º).",
        },
        {
          type: "p",
          text: `Como exercer seus direitos: envie um e-mail para ${EMAIL} dizendo seu nome e o que deseja. Para sua segurança, podemos pedir informações adicionais para confirmar sua identidade. O atendimento é gratuito e será feito nos prazos da LGPD (art. 19) e da regulamentação da ANPD.`,
        },
      ],
    },
    {
      title: "Segurança dos dados",
      blocks: [
        {
          type: "p",
          text: "Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão (art. 46 da LGPD), como o acesso restrito às mensagens recebidas e o uso de conexão segura (HTTPS) no site.",
        },
        {
          type: "p",
          text: "Nenhum sistema é totalmente livre de falhas. Se ocorrer um incidente de segurança que possa acarretar risco ou dano relevante, comunicaremos você e a ANPD, conforme o art. 48 da LGPD.",
        },
      ],
    },
    {
      title: "Crianças e adolescentes",
      blocks: [
        {
          type: "p",
          text: "Este site é voltado a empresas e profissionais, e não a crianças e adolescentes. Não coletamos intencionalmente dados de menores de 18 anos. Se você acredita que um menor nos enviou dados, entre em contato para que possamos eliminá-los.",
        },
      ],
    },
    {
      title: "Links para sites de terceiros",
      blocks: [
        {
          type: "p",
          text: "O site contém links para serviços externos, como WhatsApp, Instagram, LinkedIn e YouTube. Ao acessá-los, você passa a estar sujeito às políticas desses serviços, pelas quais não nos responsabilizamos.",
        },
      ],
    },
    {
      title: "Alterações desta Política",
      blocks: [
        {
          type: "p",
          text: "Podemos atualizar esta Política para refletir mudanças no site, nos serviços de terceiros que usamos ou na legislação. A data da última atualização aparece no topo desta página. Consulte também os [Termos de Uso](/termos).",
        },
      ],
    },
    {
      title: "Contato e reclamações",
      blocks: [
        {
          type: "p",
          text: `Dúvidas, solicitações ou reclamações sobre esta Política: ${EMAIL}.`,
        },
        {
          type: "p",
          text: "Se não ficar satisfeito com a nossa resposta, você pode peticionar à Agência Nacional de Proteção de Dados (ANPD) pelo site https://www.gov.br/anpd.",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// TERMOS DE USO
// ═══════════════════════════════════════════════════════════════════════
export const TERMS_OF_USE: LegalDocumentData = {
  metaTitle: `Termos de Uso | ${NAME}`,
  description: `Condições de uso do site da ${NAME}: uso permitido, propriedade intelectual, limites de responsabilidade e legislação aplicável.`,
  title: "Termos de Uso",
  intro: `Estes Termos de Uso regulam o acesso e o uso do site da ${NAME}. Ao navegar por este site, você concorda com as condições abaixo. Se não concordar, pedimos que não utilize o site. O tratamento de dados pessoais está descrito na [Política de Privacidade](/privacidade).`,
  sections: [
    {
      title: "Sobre o site",
      blocks: [
        {
          type: "p",
          text: `Este site apresenta a ${NAME}, agência de desenvolvimento web com atuação em ${LEGAL.city}, e os seus serviços (como sites institucionais, landing pages e lojas virtuais), voltados a empresas e profissionais autônomos.`,
        },
        { type: "p", text: `Contato: ${EMAIL}.` },
      ],
    },
    {
      title: "Natureza das informações",
      blocks: [
        {
          type: "p",
          text: "As descrições de serviços, os exemplos de trabalhos e os indicadores apresentados no site têm caráter informativo e ilustrativo. Os resultados reais dependem de cada projeto.",
        },
        {
          type: "p",
          text: "O conteúdo do site não é uma proposta comercial vinculante. Valores, prazos, entregas e demais condições de cada projeto são definidos em proposta ou contrato próprio, por escrito, firmado entre as partes.",
        },
      ],
    },
    {
      title: "Uso permitido do site",
      blocks: [
        {
          type: "p",
          text: "Você se compromete a usar o site de forma lícita, respeitando a lei, a moral, os bons costumes e os direitos de terceiros. É proibido:",
        },
        {
          type: "ul",
          items: [
            "tentar acessar áreas, sistemas ou dados do site sem autorização, ou comprometer sua segurança e disponibilidade;",
            "usar robôs, scripts ou outros meios automatizados para sobrecarregar o site ou para enviar mensagens em massa (spam) pelo formulário;",
            "enviar conteúdo falso, ofensivo, ilícito ou que viole direitos de terceiros, inclusive dados pessoais de outras pessoas sem autorização;",
            "copiar, reproduzir ou explorar comercialmente o conteúdo do site sem autorização, salvo nos casos permitidos em lei.",
          ],
        },
      ],
    },
    {
      title: "Formulário de contato",
      blocks: [
        {
          type: "p",
          text: "Ao enviar o formulário, você declara que as informações são verdadeiras e, se falar em nome de uma empresa, que tem poderes para solicitar o orçamento. O envio do formulário não cria contrato nem obrigação de contratação para nenhuma das partes.",
        },
      ],
    },
    {
      title: "Propriedade intelectual",
      blocks: [
        {
          type: "p",
          text: `Os textos, o layout, a identidade visual, as imagens e os demais conteúdos do site pertencem à ${NAME} ou são usados com autorização, e são protegidos pela legislação de direitos autorais (Lei nº 9.610/1998) e de propriedade industrial (Lei nº 9.279/1996).`,
        },
        {
          type: "p",
          text: `O nome, os logotipos e a identidade visual da ${NAME} não podem ser usados sem autorização prévia e por escrito. A visita ao site não concede nenhuma licença sobre esses conteúdos, além da navegação normal.`,
        },
        {
          type: "p",
          text: "Os direitos sobre os projetos desenvolvidos para clientes seguem o que for definido no contrato de cada projeto.",
        },
      ],
    },
    {
      title: "Links e serviços de terceiros",
      blocks: [
        {
          type: "p",
          text: "O site pode conter links para serviços de terceiros, como WhatsApp e redes sociais. Não controlamos nem respondemos pelo conteúdo, pela disponibilidade ou pelas práticas desses serviços.",
        },
      ],
    },
    {
      title: "Disponibilidade e limitação de responsabilidade",
      blocks: [
        {
          type: "p",
          text: "Nos empenhamos para manter o site disponível e atualizado, mas não garantimos funcionamento ininterrupto nem ausência de erros, e podemos alterar ou suspender conteúdos a qualquer momento.",
        },
        {
          type: "p",
          text: `Na extensão máxima permitida por lei, a ${NAME} não se responsabiliza por danos decorrentes do uso do site ou da impossibilidade de acessá-lo, por falhas em serviços de terceiros ou por decisões tomadas com base apenas nas informações do site.`,
        },
        {
          type: "p",
          text: "Nada nestes Termos exclui ou limita direitos que a lei assegura ao usuário, em especial os previstos no Código de Defesa do Consumidor (Lei nº 8.078/1990), quando aplicável.",
        },
      ],
    },
    {
      title: "Privacidade e proteção de dados",
      blocks: [
        {
          type: "p",
          text: "O tratamento de dados pessoais segue a [Política de Privacidade](/privacidade), que integra estes Termos.",
        },
      ],
    },
    {
      title: "Alterações destes Termos",
      blocks: [
        {
          type: "p",
          text: "Podemos alterar estes Termos a qualquer momento. A versão válida é a publicada nesta página, com a data da última atualização no topo. Continuar usando o site depois da publicação indica concordância com a nova versão.",
        },
      ],
    },
    {
      title: "Legislação aplicável",
      blocks: [
        {
          type: "p",
          text: "Estes Termos são regidos pelas leis da República Federativa do Brasil.",
        },
      ],
    },
    {
      title: "Contato",
      blocks: [
        {
          type: "p",
          text: `Dúvidas sobre estes Termos: ${EMAIL}.`,
        },
      ],
    },
  ],
};
