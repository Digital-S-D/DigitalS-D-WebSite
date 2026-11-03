# Digital S&D — Site Institucional

Site da Digital S&D, voltado à apresentação de serviços de criação de sites e landing pages para pequenas e médias empresas e profissionais autônomos.

Reúne serviços, informações sobre a equipe, perguntas frequentes, portfólio e canais de contato por formulário, WhatsApp e e-mail. O portfólio apresenta o OdontoHub como um projeto demonstrativo com dados fictícios.

**Site:** [digitalsd.com.br](https://digitalsd.com.br/)

Desenvolvido com Next.js, React, TypeScript e Tailwind CSS, com exportação estática para hospedagem no Netlify.

## 🚀 Como rodar o projeto

Com Node.js e npm instalados:

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
│   ├── perguntas-frequentes/     # Dúvidas sobre serviços e contratação
│   ├── portfolio/odontohub/      # Apresentação do projeto demonstrativo
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
│       ├── PortfolioSection.tsx  # Projeto em destaque
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
│   ├── portfolio.ts              # Dados e galeria do OdontoHub
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
│       └── portfolio/odontohub/   # Capturas da interface demonstrativa em WebP
│
├── tests/                        # Testes de validação do formulário
├── netlify.toml                  # Build e diretório de publicação
├── tailwind.config.js            # Cores, fontes e animações
├── postcss.config.js             # Processamento do CSS
├── next.config.js                # Exportação estática e caminhos de publicação
├── tsconfig.json                 # Configuração do TypeScript
└── package.json                  # Dependências e comandos do projeto
```

---

## ✏️ Como editar o conteúdo

O conteúdo compartilhado está organizado por assunto:

| Conteúdo | Arquivo |
|----------|---------|
| Empresa, contatos, menu, equipe e opções do formulário | `lib/constants.ts` |
| Serviços, etapas comerciais e perguntas frequentes | `lib/offers.ts` |
| Descrição, capa e galeria do OdontoHub | `lib/portfolio.ts` |
| Política de Privacidade e Termos de Uso | `lib/legal.ts` |
| Título, descrição e imagem de compartilhamento padrão | `app/layout.tsx` |

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
node --test tests/contact.test.mts
npm run build
```

Os testes de contato requerem Node.js 22.18 ou superior. O build verifica os tipos e gera os arquivos estáticos em `out/`.

O Netlify está configurado em `netlify.toml` para usar Node.js 20, executar `npm run build` e publicar `out/`. Configure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` também no ambiente de build da hospedagem; mudar seu valor exige uma nova compilação.
