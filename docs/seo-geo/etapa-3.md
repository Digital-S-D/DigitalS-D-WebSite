# Etapa 3 — medição e validação local

Branch `codex/seo-geo-etapa-3`, a partir de `a1e4748`. Sem push, deploy, cobrança, criação de conta/recurso remoto ou alteração de DNS/robôs publicados. A ferramenta existente não foi confirmada pelo usuário; foi preparada uma opção própria Cloudflare, sem SDK de terceiro e desligada por padrão. Esta entrega não inclui Make.

## Implementação

- Classificação de fonte/meio/canal com lista fechada de hosts, origem desconhecida explícita, campanhas exatas cadastradas (lista vazia), proteção contra hostname enganoso e descarte de dados brutos. Não classifica Google como orgânico automaticamente nem links de IA como recomendação.
- Eventos de início do formulário, erro categórico, aceite do endpoint e cliques WhatsApp/e-mail. Nenhum pageview automático, IP de analytics, identificador de pessoa ou corpo do formulário. `contact_registered` representa aceite do Formspree, não caixa de entrada ou venda. Métricas são ações, não usuários únicos nem leads qualificados.
- `NEXT_PUBLIC_MEASUREMENT_ENABLED=false` por padrão. No modo habilitado, um controle opcional no fim da página exige escolha afirmativa antes de emitir eventos. Desligar apaga categorias da sessão e impede novos eventos; não desfaz contagens já transmitidas. A amostra representa apenas visitas que optaram por participar.
- `/api/measure` valida esquema fechado, tamanho, origem exata e habilitação no runtime; agrega contagens em D1 por dia UTC, rota, idioma, evento, canal e categorias. Não há leitura pública dos dados. Eventos são fornecidos pelo cliente e podem ser falsificados; controles de abuso não tornam essa medição prova comercial/auditável.
- Limite de 20 eventos/minuto por identificador HMAC derivado do IP e minuto. Uso exclusivo para abuso, nunca como identidade de analytics. IP é recebido pela infraestrutura mas não é gravado por este coletor; infraestrutura pode manter logs próprios. Limites por IP compartilhado podem subcontar ações.
- Worker separado de limpeza remove contagens anteriores a 90 dias e limitadores anteriores a duas horas. Precisa ser associado ao mesmo banco e agendado; não é cron automático do Pages. Sem esse agendamento, retenção não está garantida. Exigir antes de habilitar.
- Cache de um ano/immutable apenas para arquivos Next versionados em `/_next/static/*`; HTML não recebe essa regra. Não houve mudança visual de fontes nem promessa de melhoria de LCP.

## Sessão e escolha de privacidade — decisões fechadas

Em relação à proposta da etapa 2, a escolha é deliberadamente mais restrita: permissão apenas em memória, sem cookie/localStorage. Uma recarga, descarte do documento ou pagehide revoga a escolha; nova permissão é necessária. O fechamento perfeito da aba não é detectável, por isso não é prometido. Restauração BFCache revoga e classifica nova captura como back_forward; recarga/reabertura não reaproveita a referência original como nova aquisição.

Durante o mesmo documento e navegação cliente compatível, categorias persistem em sessionStorage, sem ID e com janela de 30 minutos de inatividade. Interação de ponteiro/teclado/rolagem atualiza atividade, sem gerar evento de audiência. Expiração troca origem para unknown/unavailable em vez de inventar nova entrada externa. Falha de armazenamento também gera unknown, sem fallback para cookies ou fingerprint. Aba duplicada não herda permissão, embora o navegador possa copiar sessionStorage: a nova escolha limpa o registro. Não há atribuição entre dispositivos ou entre dias.

Uma entrada é classificada em memória e só categorias são conservadas; URL/referrer completos não são guardados nem transmitidos. O POST usa `referrerPolicy: no-referrer` e `credentials: omit`; nenhuma chave privada vai ao navegador. Consultas UTM desconhecidas/duplicadas são descartadas. A ferramenta própria não acrescenta URL/referrer automaticamente como um SDK.

## Configuração para preview, ainda não executada remotamente

1. Criar banco D1 exclusivo de preview e aplicar `migrations/0001_measurement.sql`; vincular ao Pages como `MEASUREMENT_DB`.
2. Runtime: `MEASUREMENT_ENABLED=true`, `MEASUREMENT_ORIGINS` com origens exatas, `MEASUREMENT_RATE_SECRET` aleatório com 32 ou mais caracteres como segredo (nunca NEXT_PUBLIC).
3. Agendar `workers/measurement-cleanup.js` a cada hora, com mesmo binding D1. Limpeza efetiva ocorre no ciclo seguinte: os prazos são alvos operacionais, não remoção instantânea no segundo exato.
4. Build de preview: `NEXT_PUBLIC_MEASUREMENT_ENABLED=true`. Validar primeiro a política de privacidade condicional e as opções PT/EN. Produção continua desligada.
5. Conferir rede real no preview: antes da escolha, zero requests ao coletor; depois, somente campos fechados; após revogar/recarregar, zero eventos novos. Testar parâmetros fictícios, falha de rede/DB, limite e limpeza.
6. Consultar relatórios pelo painel D1 autorizado, sem criar endpoint público. Exemplo: `SELECT day,source,medium,event,channel,SUM(n) AS actions FROM measurement_counts GROUP BY day,source,medium,event,channel ORDER BY day DESC;`. Não interpretar a razão registered/start como taxa universal de conversão: erros, recargas, participação e perdas podem distorcer contagens.

Confirmar plano e franquias da conta antes de criar recursos. Não foi contratado serviço pago. Não habilitar a flag se a coleta/limpeza ainda não foi provisionada; métricas são complementares ao Search Console, não substituem seus relatórios.

## Validação e limites

- Testes unitários exercitam referências/campanhas, origem ausente/enganosa, sessão/expiração/histórico/armazenamento, campos proibidos, esquema do coletor, limite e limpeza com SQLite real.
- Teste do módulo de navegador com ambiente simulado captura os requests: sem permissão não envia; com permissão envia somente JSON categórico; não inclui campos fictícios sensíveis; revogar impede novos envios. Isso não equivale a inspeção de rede no runtime Cloudflare real.
- Build local habilitado para QA: lint, TypeScript, export e 22 testes aprovados. A entrega padrão continua desabilitada.
- Validação final desabilitada: `npm run check` aprovado com 23 testes, incluindo modo desligado sem acesso a armazenamento/rede. Revogar e reativar no mesmo documento passa a unknown em vez de reaproveitar uma referência antiga. Compilação das Functions pelo Wrangler aprovada; ingestão no Cloudflare da conta correta ainda não comprovada.
- Prévia estática local em navegador: páginas de serviços PT/EN conferidas, incluindo desktop e viewport 390x844; screenshot EN mobile salva fora do Git. Na página EN landing não houve overflow horizontal (conteúdo384px/viewport390px). Escolha opcional alternou e retornou falsa após recarga. Não foram enviados contatos reais. A prévia estática não contém D1 e não serve para provar ingestão.
- Conta Cloudflare aberta foi inspecionada somente em leitura: Workers & Pages mostrou “No projects found” sem filtro de busca. Portanto, a conta acessível não forneceu evidência do projeto digitals-d-website nem permitiu validar seu deploy/robots. Isso não prova inexistência do projeto em outra conta. Não criar projeto substituto.
- Search Console/Bing e logs do projeto correto continuam pendentes. Sem esses dados, não há confirmação de indexação, ranking, tráfego ou citações por IA. As políticas Google-Extended e Content-Signal não foram alteradas.
- Comparação de bytes dos exports via script é diagnóstico de recursos, não Lighthouse/CrUX. Sem métrica de campo atual, não declarar aprovação de Core Web Vitals.

## Condições antes de publicar/ativar

Revisão independente, conferência da conta Cloudflare correta e branch/commit de produção, configuração de D1/segredos/limpeza, verificação de privacidade e rede no preview real, dados de indexação, política consciente de robôs e reversão. Preservar caminhos e queries se futuramente consolidar www/pages.dev; nenhuma regra de host foi aplicada agora. Permanecem pendências externas: perfis oficiais, provas reais de clientes e decisões comerciais internacionais.
