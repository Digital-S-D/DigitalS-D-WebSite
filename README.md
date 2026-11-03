# Digital S&D

Site institucional em Next.js com exportação estática. Site público: [digitalsd.com.br](https://digitalsd.com.br/).

## Desenvolvimento

```sh
npm ci
npm run dev
```

Use Node.js 22.18 ou superior para executar também os testes de contato. A hospedagem atual usa Node.js 20 para o build.

## Formulário de contato

1. Copie `.env.local.example` para `.env.local` e informe o endpoint do formulário existente no Formspree.
2. Confirme no Formspree que o destinatário é `digitalsd.contato@gmail.com`.
3. Na hospedagem, configure `NEXT_PUBLIC_FORMSPREE_ENDPOINT` antes da compilação. A variável é pública e incorporada ao JavaScript: alterações exigem um novo build.
4. Sem um endpoint válido, o formulário informa a indisponibilidade, desativa o envio e oferece WhatsApp e e-mail.
5. Após publicar, envie um teste identificado, com autorização, e confirme a chegada à caixa esperada. Uma resposta de sucesso do serviço não comprova entrega na caixa de entrada.

O formulário exige nome, e-mail e telefone brasileiro com DDD. Aceita telefone fixo, celular e colagem com código +55. Campos opcionais são enviados vazios quando não preenchidos. Erros preservam os dados para nova tentativa; a confirmação só aparece após resposta de sucesso do Formspree.

## Verificação e build

```sh
node --test tests/contact.test.mts
npx tsc --noEmit
npm run build
```

O build exporta os arquivos para `out/`, conforme `next.config.js`. O Netlify usa essa pasta. A configuração `DEPLOY_TARGET=github-pages` preserva o prefixo `/DigitalS-D-WebSite` quando necessário.

## Onde editar

- `lib/constants.ts`: dados da empresa, WhatsApp, navegação, opções do formulário e conteúdo de Sobre.
- `lib/offers.ts`: serviços principais, serviços complementares, etapas comerciais e FAQ (a Home e a página completa usam as mesmas respostas).
- `lib/portfolio.ts`: apresentação e galeria do OdontoHub.
- `public/images/portfolio/odontohub/`: seis capturas reais do projeto demonstrativo, em WebP.
- `lib/contact.ts`: máscara, validação dos contatos e verificação do endpoint.
- `lib/legal.ts`: conteúdo de Privacidade e Termos.
- `components/sections/`: textos e estrutura de cada seção.
- `components/layout/`: cabeçalho, menu mobile e rodapé.
- `app/layout.tsx`: metadados e acesso direto ao conteúdo pelo teclado.
- `public/images/brand-logo.png` e `brand-icon.png`: versões recortadas da marca oficial; os originais foram preservados.
- `public/og-image.jpg`: imagem de compartilhamento de 1200 × 630 px.

## Etapas da auditoria

Na etapa 1, redes sociais sem perfis oficiais, blog inexistente e projetos fictícios foram retirados; contato e acessibilidade foram corrigidos.

Na etapa 2, a Home passa a priorizar sites e landing pages, apresenta o OdontoHub como projeto demonstrativo e inclui processo, equipe e cinco dúvidas essenciais. As páginas `/portfolio/odontohub/` e `/perguntas-frequentes/` completam a apresentação. Os botões das ofertas e do case preservam o serviço no formulário pelo parâmetro `servico`, validado contra as opções conhecidas.

Valores, pagamento, prazos, revisões, titularidade e suporte são definidos por proposta, sem condições fixas inventadas. Medição e atualização de dependências continuam na etapa 3.

Veja `docs/etapa-1.md` para o registro de validação, incluindo o teste de envio e o recebimento na caixa de entrada confirmado pelo usuário em 03/11/2026.

Veja `docs/etapa-2.md` para escopo, origem das capturas e verificação das novas páginas.
