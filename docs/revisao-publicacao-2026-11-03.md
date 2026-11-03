# Revisão de publicação — 03/11/2026

## Base e destino

Repositório público: `https://github.com/Digital-S-D/DigitalS-D-WebSite`. Branch de produção: `master`. Base remota consultada: `f6db6693043d241a835291b3959af054ccf14b15` (Atualização README), precedida por `d2cb63a` (site institucional, FAQ e OdontoHub). Após fetch, a base local e origin/master estavam alinhadas, sem commits adiantados ou atrasados.

Os endpoints públicos consultados no GitHub não apresentaram check/status individual, execução de Actions ou deployment registrado para essa base. O estado agregado sem checks não foi interpretado como build em execução. A configuração e o histórico no painel Netlify não foram auditados nesta rodada.

## Conjunto preparado

- Atendimento compartilhado, primeira resposta em até 1 dia útil, orientação e formas de atualização.
- Sitemap, robots, canonical e metadados por página, identidade Organization.
- Card e case Alvorada, com três capturas reais e identificação de cenário demonstrativo.
- Registros das auditorias, evidências e medição inicial de visibilidade.
- Build Netlify atualizado de Node 20 para Node 24, alinhado ao ambiente de validação. Node 20 consta como EOL na documentação oficial.

O contrato de publicação continua `npm run build` e diretório `out/`, com `output: "export"`, imagens não otimizadas no servidor e URLs com barra final. Não foram adicionados Functions, Server Actions ou um servidor Next à produção. O endpoint Formspree local está configurado; seu valor não foi alterado e a variável da hospedagem continua sendo a configuração já existente. A verificação do Search Console é opcional no build e não impede publicação.

## Verificações

- Fetch e comparação com origin/master; revisão das alterações e dos arquivos novos.
- Busca por padrões usuais de credenciais nos arquivos versionáveis sem ocorrências encontradas. Isso não substitui análise completa de segredos. `.env.local`, `out/`, `preview/` e dependências continuam ignorados.
- Verificação de diferenças sem erros de espaço em branco.
- Build de produção aprovado em Node.js 24.14.0 e dez testes de contato/exportação estática aprovados antes do commit.
- Responsividade, capturas e CTA Alvorada já conferidos na rodada do passo 3; o ajuste de Node não muda a interface. Nenhum novo envio real de formulário nesta revisão.

## Pendência de dependências

`npm audit --omit=dev` identificou duas entradas de pacotes: Next.js com severidade agregada crítica e PostCSS transitivo com severidade alta. A versão atual é Next.js 14.2.35, fora da política de suporte. A correção sugerida pela ferramenta exige migração de versão principal; não foi aplicado `audit fix --force` nem feita migração de framework neste conjunto.

Os avisos incluem APIs e comportamento de servidor (otimização de imagens, Server Actions e roteamento). A publicação configurada aqui é estática, sem esse runtime, de modo que a classificação do pacote não demonstra exposição dessas rotas no site publicado. Não se afirma que todos os avisos foram eliminados ou que o projeto está isento de vulnerabilidades. O pacote e suas ferramentas de build devem ser atualizados em uma migração separada com testes de regressão.

Fontes primárias: [política de suporte Next.js](https://nextjs.org/support-policy), [aviso de otimização SVG](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw), [aviso PostCSS](https://github.com/postcss/postcss/security/advisories/GHSA-6g55-p6wh-862q), [ciclo de versões Node.js](https://nodejs.org/en/about/previous-releases).

## Depois do push

O push confirma a entrega ao GitHub, não a conclusão do deploy. A publicação deve ser confirmada pelas URLs do domínio depois que o fluxo da hospedagem processar o commit. Priorizar Home, atendimento, Alvorada, robots e sitemap; conferir também o caminho de orçamento. O administrador poderá então executar o roteiro do Search Console. A inclusão no índice não é imediata nem garantida pelo deploy.
