# Etapa 2 — serviços e especificação da mensuração

Branch `codex/seo-geo-etapa-2`, baseada no commit revisado `8d03ef6`. Trabalho local; sem push/deploy, conta externa, novo rastreador ou integração Make. O checkout principal e a branch da etapa 1 foram preservados.

## Conteúdo implementado

- `/criacao-de-sites/` e `/landing-pages/`, com pares `/en/`, metadados próprios, canonical e alternates recíprocos, sitemap atualizado, Service e BreadcrumbList coerentes com a trilha visível.
- Um componente compartilhado mantém estrutura e classes PT/EN. Conteúdo distinto por intenção: apresentação de vários serviços versus oferta/campanha. Materiais, escopo, limites, atualização, fatores de investimento/prazo e suporte explicados sem preços, resultados ou capacidades inventados.
- Links a Advocacia Digital/Alvorada identificam demonstrações, não trabalhos de clientes. Links cruzados entre formatos, FAQ e atendimento. Home e rodapé levam às páginas; CTAs mantêm o formulário existente com intenção de serviço e idioma.
- Não houve criação de avaliações, cases de clientes ou perfis oficiais: isso continua dependente de evidência e autorização. Não há novas páginas por cidade/setor nem redesign.

## Especificação de aquisição para implementar na etapa 3

Complementa e prevalece sobre as dimensões incompletas do plano da etapa 1. Fonte, meio e canal de contato são campos independentes. Atribuição representa a **origem observada da visita atual**, não toda a jornada nem causalidade comercial.

| Campo | Valores/categorias permitidos |
|---|---|
| source | google, bing, instagram, facebook, linkedin, chatgpt, perplexity, other_external, direct_or_unknown, unknown |
| medium | paid_search, paid_social, email, referral, search_unclassified, ai_referral, none_or_unknown, unknown |
| contact_channel | form, whatsapp, email |
| attribution_basis | approved_campaign, external_referrer, no_referrer, unavailable |
| campaign_id | Somente identificador de um cadastro interno aprovado; ausente por padrão |
| page / locale | Apenas pathname de rota pública conhecida, sem query/hash, e pt/en |

Antes da implementação, cadastrar a lista de campanhas reais com os trios de parâmetros aceitos e seu mapeamento exato para source/medium/campaign_id. Registro vazio por padrão: não inventar campanhas. Fonte/meio inválidos ou parâmetros desconhecidos não são armazenados nem autorizam classificação como anúncio. A lista pode adicionar fontes só após revisão; valor livre nunca vira dimensão.

Os três parâmetros candidatos são utm_source, utm_medium e utm_campaign: só um trio cadastrado é aceito. Não guardar seus valores brutos nem preencher campos de analytics automaticamente com eles. Hosts iniciais para a referência: google.com e google.com.br → google; bing.com → bing; instagram.com → instagram; facebook.com → facebook; linkedin.com → linkedin; chatgpt.com → chatgpt; perplexity.ai → perplexity. Subdomínios delimitados dessas bases podem ser reconhecidos. Outros domínios nacionais do Google e encurtadores permanecem other_external até inclusão explícita; não seguir redirecionamentos para tentar descobrir a origem. Redes sociais sem campanha reconhecida usam referral, não paid_social. No processamento transitório, extrair apenas o hostname e descartar a referência original; nenhum referrer livre é transmitido.

### Precedência

1. Conjunto completo de parâmetros de campanha com correspondência exata no cadastro aprovado: usar o mapeamento. Parâmetros são evidência operacional, não autenticação da origem; podem ser copiados/forjados. Não capturar gclid, fbclid ou outros identificadores de publicidade.
2. Sem campanha reconhecida, classificar somente o hostname do referrer externo. Usar comparação exata ou subdomínio delimitado, nunca includes: google.com.evil.example não é Google. Manter uma lista explícita de hosts de busca por país; não presumir qualquer domínio começado por google.
3. Google/Bing sem campanha reconhecida: source correspondente e search_unclassified. Não deduzir orgânico versus anúncio nem Modo IA pela referência sozinha. Ferramenta que adote inferência automática deve mantê-la separada deste campo observado.
4. Referrer chatgpt.com/perplexity.ai: fonte correspondente e ai_referral. Isso indica um link proveniente do serviço, não recomendação, presença em resposta ou treinamento. Outro referrer externo vira other_external/referral; não conservar o domínio arbitrário.
5. Referrer ausente na entrada: direct_or_unknown/none_or_unknown. Não alegar acesso direto confirmado. Erro de captura com causa conhecida: unknown/unknown, basis unavailable. Não adivinhar se foi bloqueio, aplicativo ou digitação.
6. Links internos preservam a classificação inicial. Canonical, www, previews e hostnames locais reconhecidos não viram fontes externas. Uma campanha interna não substitui a aquisição inicial.

### Duração e privacidade

Proposta: uma janela de visita termina após 30 minutos de inatividade ou encerramento da aba, o que vier primeiro. Não é identidade de pessoa: abas podem ser visitas distintas. Sem correlação entre dispositivos, fingerprint, identificação Google ou histórico entre dias. Se houver armazenamento no navegador, guardar somente categorias normalizadas, caminho conhecido, idioma e timestamps necessários; definir comportamento em navegação/restauração e armazenamento indisponível antes da implementação. Se a classificação se perder durante uma navegação interna, usar unknown/unavailable em vez de registrar novo direto confirmado.

Sem consentimento/base/configuração exigida para a ferramenta escolhida, não enviar eventos; não criar rastreamento alternativo para contornar a escolha. Não coletar nome, telefone, e-mail, empresa, conteúdo do formulário, URL completa, query livre, fragmento, texto de WhatsApp, busca digitada, referrer completo, token de formulário ou corpo de erro do provedor. Minimização não implica anonimização garantida; revisar retenção, permissões e política da ferramenta na etapa 3.

Eventos da etapa 1 recebem os campos acima já normalizados. contact_start ocorre uma vez por tentativa; contact_registered só após aceite explícito do endpoint; contact_error usa categoria genérica. Um clique em WhatsApp/e-mail não prova envio, e registro não é venda. A qualificação comercial permanece com a equipe, sem copiar dados pessoais para analytics.

### Casos de aceite da etapa 3

| Entrada/cenário | Resultado esperado |
|---|---|
| Referência Google → serviço → WhatsApp | google/search_unclassified, canal whatsapp; não atribuir automaticamente a orgânico ou IA |
| Referência Bing → FAQ → formulário | bing/search_unclassified preservado até o registro |
| Campanha paga cadastrada com trio completo | Fonte/meio/id exatamente conforme cadastro |
| UTM com e-mail, texto arbitrário ou cadastro desconhecido | Descartar parâmetros; usar referência ou classificação ausente |
| chatgpt.com → landing page → e-mail | chatgpt/ai_referral, canal email; não chamar de recomendação |
| Site externo não cadastrado | other_external/referral; sem domínio livre nos eventos |
| Entrada sem referrer | direct_or_unknown/none_or_unknown, basis no_referrer |
| Falha de armazenamento durante navegação | unknown/unknown, basis unavailable; sem reconstrução inventada |
| google.com.evil.example | other_external/referral, nunca google |
| Troca PT/EN ou mudança de página interna | Mesma aquisição; idioma e página do evento atualizados |
| Visita expirada após inatividade | Nova janela; não herdar atribuição antiga como origem atual |
| Rastreamento não autorizado/desabilitado | Nenhum evento, nenhum fallback oculto |

Créditos Make, dashboards e métricas de conversão serão tratados na etapa 3; esta especificação não habilita analytics nem recupera origens históricas que não foram registradas.

## Dependências que continuam abertas

Validação local: `npm run check` aprovado (lint, build padrão Turbopack, TypeScript e 17 testes). Export de 22 páginas públicas, pares PT/EN, metadados, sitemap sem duplicatas, Service/BreadcrumbList, contatos e links/âncoras internos conferidos pelos testes. `git diff --check` sem erros. Não houve conferência visual em navegador nesta rodada; testes de elementos/classes não comprovam renderização em todos os tamanhos. Não houve envio real do formulário, teste de ranking, consulta de conta privada ou validação de implementação de analytics — esta última ainda não existe.

Dados Search Console/Bing, política Cloudflare/Google-Extended, titularidade de perfis, evidências de clientes, estratégia internacional e escolha/configuração da ferramenta de mensuração. Ausência desses acessos não vira evidência de zero tráfego, penalização ou ausência de backlinks. Antes de publicação futura, revisar visual desktop/mobile, build e diff integrado, credenciais/contato, HTML e robots reais. Nenhuma publicação está autorizada por esta etapa.
