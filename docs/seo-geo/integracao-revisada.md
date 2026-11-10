# Correções do reviewer e integração local

## Base e isolamento

Referência `origin/main` atualizada via fetch do GitHub: `4f0413c`. Correções da medição registradas na branch etapa 3 em `14fe1db`. Esta branch `codex/seo-integracao-revisada` foi criada a partir da main atualizada e integra a cadeia SEO corrigida. Não modifica a branch main, o checkout principal sujo, contas ou publicação. Sem push/deploy.

## Três falhas corrigidas

1. **Expiração antes do primeiro evento:** a captura da entrada registra a atividade, e a permissão inicializa o estado com esse instante. Após 31 minutos sem interação, o primeiro evento passa a unknown/unavailable, mesmo que o callback de atividade não tenha executado.
2. **Quota na gravação completa:** a atribuição só compõe o evento depois da tentativa de persistir o registro real. Qualquer falha descarta a continuidade e usa unknown/unavailable, também nas próximas ações; não existe mais sonda '{}' que dê falsa indicação de sucesso.
3. **Exceção síncrona da telemetria:** measure contém falhas de preparação/transporte e retorna false, sem lançar para o formulário. Um AbortController com timer substitui a dependência de AbortSignal.timeout. O timer é limpo tanto em falha síncrona quanto após conclusão/rejeição da requisição. Expiração também não lança para eventos de navegação/atividade.

Cinco testes reproduzem os cenários do reviewer: inatividade antes do primeiro evento com/sem callback, quota após sonda pequena, API ausente e fetch síncrono com falha nos eventos de início/erro/aceite. São testes de ambiente simulado; não comprovam a ingestão no runtime remoto.

## Resolução dos conflitos

- **DocumentLayout:** preservados design-system, bootstrap de tema, AnchorNavigation e FloatingContact; Measurement adicionado separadamente, desligado por padrão.
- **ServicesSection:** preservados ilustrações e details da main, acrescentando links às páginas de serviço. Não reintroduzido MobileDetails no lugar do componente atual.
- **AlvoradaPage:** preservada a remoção intencional da seção ilustrativa na main, sem recolocar conteúdo antigo. Demais melhorias de galeria compatíveis foram mantidas. Resultado do arquivo equivalente à main.
- **en.json:** combinação por chave usando ancestral comum; preservadas traduções do redesign e acrescentadas as novas. Não substituído o dicionário inteiro por uma versão antiga.

Conferência de diff: Home hero, SiteControls, home-design.css e design-system.css permanecem iguais à main. Teste adicional garante no HTML exportado a presença do redesign, controles de tema, details e caminhos comerciais PT/EN.

## Validação do resultado combinado

- `npm run check` aprovado: lint, build padrão Turbopack, TypeScript e 28 testes. Após adicionar o teste de integração, `npm test` aprovado com **29 testes**; sem novas mudanças de código entre o build e esse teste.
- 22 páginas públicas exportadas, sitemap sem duplicatas, canonicals, pares PT/EN, JSON-LD, links e formulário estruturalmente verificados.
- `git diff --check` e diff staged sem erros; nenhum conflito por resolver.
- Prévia em navegador: Home no tema escuro e troca para claro; página EN de criação de sites em viewport390x844, sem overflow horizontal (384px de conteúdo); CTA chegou à Home EN com parâmetro de serviço, e o seletor exibiu Business Website. Nenhum formulário foi enviado.
- Evidência fora do Git: `integracao-revisada-claro.png` no diretório de artefatos desta conversa. O servidor temporário de prévia foi encerrado após os testes.

## Ainda não significa pronto para ativar coleta

A flag continua desligada. D1, segredo, origens, limpeza agendada e rede precisam de teste no projeto Cloudflare correto. Search Console/Bing e política gerenciada de robôs permanecem pendentes. Não há comprovação de ranking, entrega de e-mail ou Core Web Vitals. Antes de publicar, conferir o commit atual da main novamente, ambiente/branch do deploy e revisão desta integração; push pode disparar publicação. Não contratar ou provisionar nada automaticamente.
