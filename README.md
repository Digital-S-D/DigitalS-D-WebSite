# Digital S&D — Landing Page

https://digital-s-d.github.io/DigitalS-D-WebSite/

## 🚀 Como rodar o projeto

```bash
npm install
npm run dev
# Acesse: http://localhost:3000
```

---

## 🗂️ Estrutura de Pastas

```
digital-sd/
│
├── app/                          # Núcleo do Next.js (App Router)
│   ├── globals.css               # Estilos globais, fontes e variáveis CSS
│   ├── layout.tsx                # HTML raiz: <head>, fontes, metadados SEO
│   └── page.tsx                  # Página inicial — monta todas as seções
│
├── components/                   # Todos os componentes visuais do site
│   │
│   ├── layout/                   # Componentes que aparecem em TODAS as páginas
│   │   ├── Header.tsx            # Navbar fixa com blur + menu mobile hambúrguer
│   │   ├── Footer.tsx            # Rodapé com links, redes sociais e CTA
│   │   └── index.ts              # Barrel export → import { Header, Footer } from "@/components/layout"
│   │
│   └── sections/                 # Seções da landing page (na ordem que aparecem)
│       ├── HeroSection.tsx       # Seção principal: título, CTAs, mockup animado
│       ├── ProblemSection.tsx    # Comparativo: problema do cliente × nossa solução
│       ├── ServicesSection.tsx   # Grid de serviços oferecidos
│       ├── PortfolioSection.tsx  # Cases e projetos realizados
│       ├── ContactSection.tsx    # Formulário de captura de leads
│       └── index.ts              # Barrel export → import { HeroSection, ... } from "@/components/sections"
│
├── lib/                          # Lógica e dados reutilizáveis
│   └── constants.ts              # ⭐ CENTRAL DE CONTEÚDO: textos, links, dados
│                                 #    Edite aqui para atualizar o site todo
│
├── public/                       # Arquivos estáticos (acessíveis via URL direta)
│   └── images/
│       ├── logo-texto.png        # Logo completa (DIGITAL S&D) — use no Header desktop
│       ├── logo-icone.png        # Somente o ícone SD — use no Header mobile
│       └── portfolio/            # Screenshots dos projetos do portfólio (800×500px)
│           ├── clinica-saude.jpg
│           ├── loja-moda.jpg
│           └── ...
│
├── tailwind.config.js            # Design system: cores (#2563EB, #0F172A), fontes
├── postcss.config.js             # Necessário para o Tailwind funcionar
├── next.config.js                # Configurações do Next.js
├── tsconfig.json                 # Configurações do TypeScript
└── package.json                  # Dependências do projeto
```

---

## ✏️ Como editar o conteúdo

**Para mudar textos, links e dados do site**, edite apenas o arquivo:

```
lib/constants.ts
```

Lá você encontra, organizados em seções:
- Dados da empresa (nome, email, WhatsApp, cidade)
- Links de CTA (WhatsApp, redes sociais)
- Menu de navegação
- Estatísticas dos cards de números
- Lista de serviços
- Projetos do portfólio
- Opções do formulário de contato

---

## 🖼️ Como adicionar imagens

1. Coloque o arquivo em `/public/images/`
2. Referencie no código como `src="/images/nome-do-arquivo.jpg"`
3. Para o portfólio, preencha o campo `imageSrc` em `lib/constants.ts`

---

## 📦 Dependências principais

| Pacote | Para que serve |
|--------|---------------|
| `next` | Framework React (App Router) |
| `tailwindcss` | Estilização utility-first |
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
