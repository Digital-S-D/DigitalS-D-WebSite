# Estado das pendências antes do próximo projeto

Revisão de 03/11/2026, após os commits `1d081ba` e `79af78c`. Este é o estado atual; os relatórios de etapas anteriores mantêm o histórico do que foi observado em cada rodada.

## Resolvido no código

| Item | Resultado |
| --- | --- |
| Next.js 14 fora de suporte e alertas críticos | Atualizado para Next.js 16.4.5 estável |
| React, tipagens e ícones | React/React DOM 19.3.1, tipagens React 19 e Lucide 1.67.0 |
| PostCSS e ferramentas transitivas antigas | PostCSS 8.5.32 e árvore instalada a partir do lockfile sem vulnerabilidades reportadas pelo npm |
| Comando `next lint` removido | `npm run lint` usa Oxlint 1.91.0, com regras nativas de Next.js, React, TypeScript e acessibilidade |
| Prévia com `next start` incompatível com export | `npm start` serve `out/` em loopback com sirv-cli 3.0.1 |
| Configurações e teste TypeScript com módulos ambíguos | Pacote ESM e configurações `.mjs`; testes rodam sem o aviso anterior de tipo de módulo |
| Imagem com propriedade depreciada | `priority` substituído por `preload`, conforme Next.js 16 |
| Regressão de menu e anúncio do formulário | Fundo do diálogo tratado pela API nativa; Escape, foco e fechamento preservados. Resultado assíncrono usa `output` com região viva |
| Caminhos RSC da exportação no Windows | Pós-build preserva os originais e cria os caminhos planos esperados pelo navegador, com teste de regressão |
| Rotina de validação | `npm run check` reúne lint, build e testes; `npm run typecheck` disponível separadamente |

A cadeia ESLint experimentada durante a migração trouxe dependências legadas com avisos e contratos incompatíveis com o minimatch corrigido. A configuração final usa regras nativas do Oxlint, sem essas dependências, sem ignorar avisos de auditoria e sem forçar versões principais de bibliotecas transitivas. Não foram adicionadas supressões de segurança. A regra de exigir React global no JSX fica desligada porque o projeto usa o runtime automático `react-jsx`.

## Verificações executadas

- `npm ci --cache .npm-cache`: instalação limpa concluída, 122 pacotes auditados e zero vulnerabilidades reportadas, incluindo dependências de desenvolvimento. É o resultado da base de avisos consultada nesta data, não garantia de ausência de falhas desconhecidas.
- Build Next.js 16 com Turbopack concluído; todas as oito páginas públicas, 404, robots e sitemap continuam exportados.
- Lint e TypeScript sem erros; onze testes aprovados após o build.
- Home, FAQ, atendimento e Alvorada conferidos em 320, 390, 768 e 1440 px: um H1 por página e sem transbordamento horizontal nas dimensões verificadas.
- Cabeçalho em 1024 px sem sobreposição dos links com o CTA.
- Menu mobile: foco inicial em fechar, Escape, retorno ao botão de abertura, liberação da rolagem e fechamento por clique no fundo.
- FAQ abre com Enter e fecha com Espaço.
- Formulário: troca de Landing Page para Site Institucional preserva o nome; CTA da Alvorada seleciona Landing Page, inclusive após recarga. Envio incompleto mostra os erros e foca no e-mail. Nenhum novo envio real foi feito.
- Nenhum erro ou aviso foi registrado no navegador durante essa revisão.
- Captura da Home migrada: `C:/Users/alvar/.codex/visualizations/2026/11/03/01a19f89-8b41-7551-adc9-d9b64c158986/base-next16-desktop.jpg`.

## Publicação anterior confirmada

As URLs públicas de Home, atendimento, FAQ, Sobre, Alvorada, OdontoHub, robots e sitemap responderam 200 nesta rodada. Home, atendimento e FAQ já exibem a política nova; as páginas HTML consultadas declaram canonical próprio. A inclusão anterior de atendimento e Alvorada e os arquivos de indexação deixaram de ser apenas locais. Essa consulta foi feita no domínio público, sem acessar ou alterar a configuração do Netlify.

## Dependência externa ainda aberta

O Search Console da conta empresarial exibe a propriedade de domínio `digitalsd.com.br` aguardando confirmação por TXT no DNS. A propriedade já existe; não foi criada outra, não foi removida e não foram alterados DNS, contas ou permissões. Nenhum token de verificação foi incluído neste repositório.

O administrador do domínio precisa concluir a verificação pendente. Só depois a conta poderá consultar os relatórios, enviar `https://digitalsd.com.br/sitemap.xml` e inspecionar as páginas. Se o sócio já tiver uma propriedade verificada em outra conta, pode executar os passos ali e devolver os resultados. Não é necessário compartilhar senha ou códigos de login.

Esse é um impedimento de acesso ao Search Console, não de funcionamento do site ou inclusão de outro projeto no portfólio. Não se declara que o envio ao Google ou a indexação foram concluídos.

## Acompanhamento contínuo

A coleta posterior de visibilidade e contatos exige observação depois da publicação e dados reais. A amostra anterior permanece como referência, sem alegação de melhora medida. Casos e depoimentos de clientes continuam exigindo autorização e evidência; não são substituídos por demonstrações. A auditoria do código original da Alvorada pertence àquele projeto; a apresentação no portfólio não afirma que seja uma operação imobiliária real.

## Referências de implementação

- [Next.js: migração para a versão 16](https://nextjs.org/docs/app/guides/upgrading/version-16), também consultada na documentação empacotada da versão instalada.
- [Next.js: exportação estática](https://nextjs.org/docs/app/guides/static-exports).
- [Oxlint: plugins nativos](https://oxc.rs/docs/guide/usage/linter/plugins).
- [sirv-cli](https://github.com/lukeed/sirv/tree/master/packages/sirv-cli).

O próximo projeto ainda não foi integrado nesta rodada.

## Complemento: navegação estática no Windows

A conferência final dos logs encontrou 404 em arquivos de antecipação da navegação na prévia Windows, apesar de as páginas abrirem e o navegador não registrar erro. O build havia gerado os segmentos em diretórios, enquanto o cliente pedia nomes planos. O mesmo caminho respondeu 200 no site publicado em Linux; o problema local corresponde ao [relato Next.js #85374](https://github.com/vercel/next.js/issues/85374).

`postbuild` executa `scripts/finalize-static-export.mjs`: preserva os arquivos originais e cria aliases idênticos nos caminhos esperados, sem sobrescrever conteúdo divergente. Em plataformas que já exportam os nomes corretos, não precisa criar aliases. Não altera dependências nem desliga o prefetch.

`npm run check` completo passou com lint, build, pós-build e onze testes. A nova verificação exige o segmento de navegação de cada página pública no caminho pedido pelo cliente. Atendimento e os dois cases responderam 200 para esses arquivos na prévia; a navegação por links entre Home, FAQ, atendimento e Alvorada foi repetida sem 404 nos logs monitorados. O serviço escolhido continuou preservado ao chegar ao formulário.
