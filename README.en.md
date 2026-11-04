# Digital S&D — business website

[Português](README.md) · [Website](https://digitalsd.com.br/) · [Project enquiries](mailto:digitalsd.contato@gmail.com)

## Purpose and scope

Digital S&D’s website presents websites, landing pages and custom web interfaces for small businesses and independent professionals. It includes services, founders, process, FAQ, contact channels and three fictional portfolio demonstrations.

## Portfolio cases

| Case | Portuguese | English |
| --- | --- | --- |
| Alvorada — property landing page | [Read](https://digitalsd.com.br/portfolio/alvorada/) | [Read](https://digitalsd.com.br/en/portfolio/alvorada/) |
| Advocacia Digital — multi-page business website | [Read](https://digitalsd.com.br/portfolio/advocacia-digital/) | [Read](https://digitalsd.com.br/en/portfolio/advocacia-digital/) |
| OdontoHub — scheduling and patient interfaces | [Read](https://digitalsd.com.br/portfolio/odontohub/) | [Read](https://digitalsd.com.br/en/portfolio/odontohub/) |

Each case explains a proposed need, audience, team contribution, implementation decisions, delivery, evidence and limits. Screenshots show the running implementations with fictional data. OdontoHub source remains private. No client endorsements or commercial returns are claimed.

## Run and verify

Use Node.js 24: `npm ci`, `npm run dev` for development, and `npm run check` for lint, production build, TypeScript and tests. The static build lives in `out/`; `npm start` serves it locally on port 3000. Netlify uses the supplied `netlify.toml`.

Next.js, React, TypeScript and Tailwind CSS are used. Content lives in `lib/`; case narratives are in `lib/case-studies.ts` and Portuguese routes live in `app/(pt)/` and English routes in `app/en/`. Both use the same templates in `components/pages/` and the same visual components. Translations are in `lib/translations/en.json`. Public screenshots are under `public/images/portfolio/`. The sitemap and metadata are generated from `lib/seo.ts`.

The business contact form requires a real `NEXT_PUBLIC_FORMSPREE_ENDPOINT` at build time; copy `.env.local.example` and configure it locally or on the host. Without it, the site provides the SD email and WhatsApp channels. Do not commit secrets. The portfolio demos have separate simulated forms and do not send enquiries.

## Team and limitations

The Digital S&D team was founded by Álvaro Marinho and Arthur Leite. Sole authorship is not claimed. All nine website pages are available in Portuguese and English. The PT | EN selector preserves the current page, query and section. Page structure, styling and project images are shared; only text and language-specific navigation/metadata change. Project screenshots do not translate the demonstration interfaces themselves. Contact, scope, integrations and delivery are agreed separately for each project.

Run `npm run check` after changes. Tests compare all nine pairs for the same main-content structure, CSS classes and images, and check language, canonical URLs, hreflang and sitemap coverage. Text length can naturally change wrapping; no separate English layout is used.
