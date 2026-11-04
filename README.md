# Digital S&D — Site Institucional

[English](README.en.md) · [Alvorada: PT](https://digitalsd.com.br/portfolio/alvorada/) / [EN](https://digitalsd.com.br/en/portfolio/alvorada/) · [Advocacia: PT](https://digitalsd.com.br/portfolio/advocacia-digital/) / [EN](https://digitalsd.com.br/en/portfolio/advocacia-digital/) · [OdontoHub: PT](https://digitalsd.com.br/portfolio/odontohub/) / [EN](https://digitalsd.com.br/en/portfolio/odontohub/)

Site da Digital S&D, voltado à apresentação de serviços de criação de sites e landing pages para pequenas e médias empresas e profissionais autônomos.

Reúne serviços, informações sobre a equipe, perguntas frequentes, portfólio e canais de contato por formulário, WhatsApp e e-mail. O portfólio apresenta o site institucional Advocacia Digital, a landing page Alvorada e o sistema OdontoHub como projetos demonstrativos com dados fictícios e capturas reais das interfaces.

**Site:** [digitalsd.com.br](https://digitalsd.com.br/)

Desenvolvido com Next.js, React, TypeScript e Tailwind CSS, com exportação estática para hospedagem no Netlify.

## 🚀 Como rodar o projeto

Com Node.js 24 LTS e npm instalados:

```bash
npm ci
npm run dev
# Acesse: http://localhost:3000
```

Para habilitar o formulário, copie `.env.local.example` para `.env.local` e configure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` com o endpoint do Formspree. Sem essa configuração, o site oferece WhatsApp e e-mail como alternativas. O arquivo `.env.local` não deve ser versionado.

---

## 🗂️ Estrutura de Pastas

```text
digital-sd/
│
├── app/                          # Páginas do Next.js (App Router)
│   ├── globals.css               # Estilos globais e fontes
│   ├── layout.tsx                # Layout raiz e metadados padrão
│   ├── page.tsx                  # Página inicial
│   ├── sobre/                    # Empresa, equipe e processo de trabalho
│   ├── atendimento/              # Acompanhamento, política de resposta e atualizações
│   ├── perguntas-frequentes/     # Dúvidas sobre serviços e contratação
│   ├── portfolio/advocacia-digital/ # Site institucional demonstrativo
│   ├── portfolio/alvorada/       # Landing page demonstrativa imobiliária
│   ├── portfolio/odontohub/      # Sistema web demonstrativo
│   ├── privacidade/              # Política de Privacidade
│   └── termos/                   # Termos de Uso
│
├── components/                   # Componentes visuais reutilizáveis
│   ├── layout/
│   │   ├── Header.tsx            # Cabeçalho fixo e menu mobile
│   │   ├── Footer.tsx            # Rodapé com navegação e contatos
│   │   └── index.ts              # Exportações dos componentes de layout
│   │
│   └── sections/                 # Seções e componentes de conteúdo
│       ├── HeroSection.tsx       # Apresentação e chamadas para ação
│       ├── PortfolioSection.tsx  # Advocacia Digital, Alvorada e OdontoHub
│       ├── ServicesSection.tsx   # Ofertas principais e complementares
│       ├── ProjectPlanSection.tsx # Processo comercial e fundadores
│       ├── FaqSection.tsx        # Resumo das perguntas frequentes
│       ├── FaqList.tsx           # Perguntas e respostas expansíveis
│       ├── ContactSection.tsx    # Formulário e canais de contato
│       └── ...                   # Seções de Sobre e documentos institucionais
│
├── lib/                          # Conteúdo e lógica compartilhados
│   ├── constants.ts              # Empresa, contatos, menu e opções do formulário
│   ├── offers.ts                 # Serviços, processo comercial e FAQ
│   ├── portfolio.ts              # Dados dos projetos demonstrativos
│   ├── contact.ts                # Máscara e validação do formulário
│   └── legal.ts                  # Textos de Privacidade e Termos
│
├── public/                       # Arquivos estáticos
│   ├── og-image.jpg              # Imagem de compartilhamento do site
│   └── images/
│       ├── brand-logo.png        # Marca completa usada no site
│       ├── brand-icon.png        # Ícone usado no cabeçalho mobile
│       ├── logo-icone.png        # Favicon
│       ├── team/                 # Fotos dos fundadores
│       └── portfolio/             # Capturas reais dos três projetos demonstrativos
│
├── tests/                        # Testes de validação do formulário
├── netlify.toml                  # Build e diretório de publicação
├── tailwind.config.mjs            # Cores, fontes e animações
├── postcss.config.mjs             # Processamento do CSS
├── next.config.mjs                # Exportação estática e caminhos de publicação
├── tsconfig.json                 # Configuração do TypeScript
└── package.json                  # Dependências e comandos do projeto
```

---

## ✏️ Como editar o conteúdo

O conteúdo compartilhado está organizado por assunto:

| Conteúdo | Arquivo |
|----------|---------|
| Empresa, contatos, menu, equipe e opções do formulário | `lib/constants.ts` |
| Serviços e perguntas frequentes | `lib/offers.ts` |
| Política de resposta, acompanhamento e formas de atualização | `lib/customer-care.ts` |
| Descrições, capas e galerias dos projetos | `lib/portfolio.ts` |
| Política de Privacidade e Termos de Uso | `lib/legal.ts` |
| Domínio, rotas, metadados e dados da organização | `lib/seo.ts` e páginas de `app/` |

Os textos específicos de apresentação ficam nos componentes de `components/sections/` e nas respectivas páginas de `app/`. A Home e a página de perguntas frequentes compartilham as respostas de `lib/offers.ts`.

---

## 🖼️ Como adicionar imagens

1. Coloque o arquivo em `/public/images/`.
2. Use o caminho público `/images/nome-do-arquivo.jpg`, com texto alternativo e dimensões adequadas. Siga o padrão de prefixo `BASE_PATH` dos componentes para compatibilidade com publicação em subdiretório.
3. Para o OdontoHub, coloque as capturas em `/public/images/portfolio/odontohub/` e atualize a capa ou a galeria em `lib/portfolio.ts`.

---

## 📦 Dependências principais

| Pacote | Para que serve |
|--------|---------------|
| `next` | Framework React (App Router) e exportação estática |
| `react` / `react-dom` | Interface e interações |
| `tailwindcss` | Estilização por classes utilitárias |
| `lucide-react` | Ícones |
| `typescript` | Tipagem estática |

---

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `brand-blue` | `#2563EB` | CTAs, destaques, links |
| `brand-navy` | `#0F172A` | Fundo principal |
| `brand-black` | `#000000` | Seções alternadas, cards |
| `font-sora` | Sora | Títulos (h1, h2, h3) |
| `font-outfit` | Outfit | Textos, parágrafos, botões |

---

## ✅ Verificação e publicação

```bash
npm run check
npm audit
```

O projeto usa Node.js 24. O lint usa Oxlint com regras de Next.js, React, TypeScript e acessibilidade; o runtime automático JSX dispensa importação global de React. O build verifica os tipos e gera os arquivos estáticos em `out/`. Execute os testes após o build, pois eles também conferem o HTML exportado. `npm run typecheck` permite repetir a verificação de tipos separadamente.

Para conferir o export localmente, execute `npm start` depois do build e acesse `http://127.0.0.1:3000/`. Esse comando serve `out/` com sirv; `next start` não se aplica à exportação estática.

O Netlify está configurado em `netlify.toml` para usar Node.js 24, executar `npm run build` e publicar `out/`. Configure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` também no ambiente de build da hospedagem; mudar seu valor exige uma nova compilação.

## Atendimento ao cliente

A política confirmada é primeira resposta em até 1 dia útil, sem horário fixo, com atendimento compartilhado pela equipe. O prazo de execução de uma alteração é avaliado separadamente. A página `/atendimento/`, o resumo da Home, os contatos e a FAQ usam essas condições.

A rotina interna e os modelos de mensagem estão em `docs/rotina-atendimento.md`. O registro da implementação está em `docs/passo-1-atendimento.md`.

## Descoberta e indexação

`lib/seo.ts` centraliza o domínio oficial, as rotas públicas, os metadados e os dados da organização. Ao criar uma página, definir seus metadados com `pageMetadata()` e incluí-la em `PUBLIC_PATHS`. A lista gera `/sitemap.xml`; `/robots.txt` anuncia esse sitemap e permite rastreamento.

Depois de `npm run build`, executar `npm run check:seo` para verificar os arquivos finais de `out/`. A verificação detecta páginas ausentes no sitemap, canonical herdado incorretamente, previews inconsistentes e imagens inexistentes.

A variável opcional `GOOGLE_SITE_VERIFICATION` recebe somente o token real do método de tag HTML do Search Console, quando utilizado; configurar no ambiente de build da hospedagem e recompilar. Propriedades já verificadas por DNS não precisam dela. O estado da publicação, as dependências de acesso e o roteiro para o administrador estão em `docs/passo-2-indexacao.md`.

## Evidências e medição

O inventário em `docs/provas-do-trabalho.md` distingue demonstrações de resultados de clientes. A Alvorada usa capturas do HTML original no computador e celular; números e condições imobiliárias exibidos pertencem ao cenário fictício.

O protocolo, as consultas do Modo IA e o acompanhamento manual de oportunidades estão em `docs/monitoramento/`. Não há analytics ou automação novos instalados por esse registro. A explicação para o administrador do Search Console está em `docs/explicacao-search-console.md`.

## Manutenção da base técnica

Next.js 16.4.5, React 19.3.1 e ícones/tipagens compatíveis. As configurações usam módulos ESM (`.mjs`) e o pacote declara `type: module`. Imagens antecipadas usam `preload`, conforme o Next.js 16.

A revisão das pendências e seus estados atuais estão em `docs/pendencias-base-tecnica.md`. Os relatórios de etapas anteriores preservam o estado observado em cada rodada; não representam a lista atual de pendências.

O build executa automaticamente um pós-processamento dos caminhos de segmentos de navegação para compatibilidade da exportação Windows com o roteador do Next.js. Os arquivos originais são preservados; o teste do export confere os caminhos solicitados pelo navegador.

## Casos bilíngues e participação

Os três casos têm problema proposto, público, participação da equipe, decisões, entrega, evidências e limites. O conteúdo estruturado fica em `lib/case-studies.ts`; `CaseProjectDetails` complementa as páginas em português e `EnglishCaseStudy` apresenta as versões em `/en/portfolio/`. Cada par tem canonical próprio, alternância de idioma e links hreflang; as rotas são incluídas no sitemap.

As capturas foram atualizadas a partir das demonstrações verificadas nesta revisão. Alvorada: cinco testes de navegador. Advocacia: diagnósticos Astro sem erros/avisos, 26 páginas e seis testes. OdontoHub: lint sem avisos, quatro testes, build e verificação dos fluxos documentados. Os resultados são evidência técnica da versão, sem atribuir vendas, pacientes ou clientes reais. O financeiro do OdontoHub nesta versão contém indicadores fictícios, sem módulo de movimentações conectado.

Projeto da equipe Digital S&D, fundada por Álvaro Marinho e Arthur Leite. O portfólio não atribui toda a implementação a uma única pessoa. O roteiro para compartilhar os casos está em `docs/casos-e-prospeccao.md`; não há envio automático de mensagens.
