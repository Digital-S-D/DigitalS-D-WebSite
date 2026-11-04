# Integração da Advocacia Digital

Revisão em 03/11/2026, autorizada após a auditoria inicial. O código original foi corrigido e enviado primeiro ao repositório [Digital-S-D/advocacia-digital](https://github.com/Digital-S-D/advocacia-digital), commit [07622e9](https://github.com/Digital-S-D/advocacia-digital/commit/07622e9678d3e3e5b7a754706bc00f47fe141eda). A inclusão no portfólio usa capturas dessa versão corrigida.

## Correções no projeto original

- Demonstração identificada em todas as páginas; sem schema `LegalService`, domínio de escritório não confirmado ou indexação como empresa real.
- Retirados rankings de terceiros, números de clientes/experiência e credenciais acadêmicas/OAB inventados. Perfis e textos continuam explicitamente fictícios.
- Contato convertido em simulação local, sem API, logs dos valores, armazenamento ou transmissão do formulário. Canais falsos de WhatsApp/e-mail foram retirados. Confirmação explica que nenhuma consulta foi recebida ou agendada.
- Validação de telefone brasileiro com DDD e formato de fixo/celular, área permitida, campos obrigatórios e limites. Isso não comprova existência/titularidade do telefone.
- Erro associado ao campo com `aria-invalid`, `aria-describedby` e foco no primeiro erro; aviso de JavaScript e campos desabilitados sem script. Método `dialog` evita submissão HTTP nativa.
- Menu mobile fecha com Escape, clique no link e mudança para desktop; devolve o foco após Escape.
- Configuração TypeScript corrigida; checagem de arquivos Astro adicionada. TypeScript 5.9 corresponde ao peer suportado pelo `@astrojs/check` 0.9.12, em vez do TypeScript 7 anterior incompatível com essa ferramenta.
- Astro atualizado para 7.4.5 e Zod para 4.6.7; transitivas atualizadas pelo npm, sem overrides forçados. Adaptador serverless e cliente CMS não utilizados foram removidos. O projeto agora exporta `dist/` sem função de coleta; README explica o que exige uma implantação real.

## Validação do original

- `npm ci` reproduziu o lockfile; `npm audit` e auditoria de produção reportaram zero vulnerabilidades conhecidas nesta consulta.
- `npm run check`: 33 arquivos verificados sem erros, avisos ou hints; build de 26 páginas estáticas e seis testes aprovados.
- Testes verificam regras de preenchimento, todas as páginas, avisos/noindex, ausência de credenciais/canais inventados acionáveis, links/recursos/âncoras locais e ausência de API de coleta.
- Home, área trabalhista, equipe, FAQ e contato em 320, 390, 768, 1024 e 1440 px: sem transbordamento horizontal nas 25 combinações.
- No navegador: formulário vazio foca nome; `00000000` é rejeitado e foca telefone; confirmação demonstrativa é obrigatória; dados sintéticos válidos terminam em “Simulação concluída”. Menu com Escape/foco, fechamento por navegação/resize e FAQ por Enter conferidos.

Ao receber o push, o GitHub ainda listava alertas associados às versões anteriores. A consulta dos intervalos afetados foi comparada com o lockfile publicado: Astro 7.4.5, Zod 4.6.7, Vite 8.3.5, devalue 6.0.3, source-map-js 1.2.2, http-cache-semantics 4.3.0, Sharp 0.35.5, SVGO 4.1.0 e Nano ID 3.3.20 já estão fora desses intervalos; js-yaml foi removido. Não se encerram alertas manualmente para ocultá-los. O painel depende do processamento do grafo pelo GitHub. Auditorias são retratos da base de avisos consultada, não garantias permanentes.

## Inclusão no site Digital S&D

- Card de site institucional ao lado de Alvorada e OdontoHub, com três colunas em desktop e adaptação mobile.
- Case `/portfolio/advocacia-digital/` com apresentação, escopo, limites, link para o código e quatro capturas reais otimizadas em WebP: abertura, áreas, contato e celular.
- CTA seleciona “Site Institucional” no formulário comercial da Digital S&D. Nenhum novo envio real foi realizado.
- Metadados próprios, imagem de compartilhamento e nova rota em `PUBLIC_PATHS`/sitemap. O case é indexável; a demonstração fictícia mantém `noindex`.
- Lint, build/TypeScript e onze testes do site aprovados, incluindo metadados, sitemap e caminhos RSC estáticos de todas as nove páginas públicas.
- Home e novo case em 320, 390, 768, 1024 e 1440 px sem transbordamento horizontal ou imagens quebradas detectadas; navegação pelo card e seleção do serviço pelo CTA conferidas no navegador.

As capturas não representam resultados comerciais ou trabalho contratado por escritório real. A inclusão do case não publica um serviço jurídico operacional nem conecta dados fictícios ao formulário comercial da Digital S&D.

A verificação DNS do Search Console permanece uma dependência externa com o administrador do domínio, conforme [estado anterior](pendencias-base-tecnica.md). Não impede a publicação do portfólio.
