# Etapa 1 — base editorial e técnica

10/11/2026. Branch `codex/seo-geo-etapa-1`, baseada em `69e3037`. Trabalho isolado em `preview/seo-geo-etapa-1`; o checkout principal e suas alterações anteriores foram preservados. Sem push, deploy, contratação, alteração de contas ou envio de contatos.

## Implementado nesta branch

- Atendimento exclusivamente online, confirmado anteriormente, substitui base em Belo Horizonte e alcance nacional não confirmados. Rodapé, FAQ, identificação nos documentos legais e traduções alinhados. Nenhuma condição jurídica de contratação ou tratamento de dados foi redefinida.
- Identificação da hospedagem na privacidade atualizada para Cloudflare em PT/EN, preservando a migração que já ocorreu em produção.
- Sobre/Missão/Pilares deixam de comparar preço e qualidade com grandes agências ou anunciar leads/vendas sem comprovação. A apresentação descreve planejamento, conteúdo, desenvolvimento, revisões e condições na proposta. Equipe descrita sem garantir ausência de terceirização não verificada.
- Mesmos componentes, classes, campos, contatos, URLs e layout PT/EN. Make, n8n, redesign e novas páginas de serviço ficaram fora desta branch.
- Robots distingue busca (Googlebot, Bingbot e OAI-SearchBot permitidos) de treinamento (GPTBot bloqueado). A restrição pública atual de Google-Extended é preservada: liberar esse token também envolve usos para treinamento, decisão ainda não confirmada. Nenhuma alteração de WAF foi executada.

## Pendências que exigem conta externa ou decisão

| Achado | Próximo passo | Aceite |
|---|---|---|
| Google-Extended bloqueado | Sócio e proprietário decidem se permitem os usos associados ao token. Só então revisar a política Cloudflare e esta regra local em conjunto. | Decisão registrada e robots servido coerente; não prometer ganho no Modo IA do Search. |
| Content-Signal/use=reference gerenciado | Conferir políticas de busca/agentes/treinamento e Bot Preference Sync na conta, sem liberar todos os robôs indiscriminadamente. | Capturar robots e eventos reais após mudança autorizada. Editar o repositório sozinho não remove conteúdo injetado na borda. |
| Search Console/Bing sem acesso | Sócio fornece acesso de leitura ou exporta os relatórios listados abaixo. | Relatório com URLs indexadas/canonicals/consultas, sem interpretar ausência de dados como zero. |
| Produção diferente do checkout | Conferir no Pages branch, commit e repositório reais. Não presumir que o HEAD desta cópia seja o publicado. | Identificador do deploy documentado. Não publicar nesta etapa. |
| Medição de contatos | Validar o plano mínimo abaixo e escolher ferramenta/configuração de privacidade antes de ativar. | Eventos testados sem conteúdo pessoal. Nenhum script de rastreamento adicionado agora. |

## Relatórios solicitados ao sócio

Search Console: propriedade de domínio, sitemap, indexação de páginas, ações manuais, problemas de segurança e inspeção de Home, Sobre, FAQ, atendimento, um caso e seus pares EN. Registrar canonical escolhido pelo Google, último rastreio, motivo de exclusão e resultado do teste ao vivo. Exportar desempenho por página/consulta, país e dispositivo para 28 dias e período anterior equivalente; separar marca e sem marca. Não solicitar indexação de tudo indiscriminadamente nem prometer prazo.

Bing Webmaster: sitemap, inspeção, rastreamento/indexação e relatórios de IA disponíveis na propriedade. Cloudflare: identificação do deploy, robots gerenciado e eventos dos robôs verificados. Não enviar senhas/tokens pelo chat nem salvar dados de visitantes nos relatórios versionados.

## Plano mínimo de mensuração

| Evento proposto | Gatilho | Dimensões permitidas |
|---|---|---|
| contact_start | Primeira interação no formulário, uma vez por tentativa | Caminho sem query, idioma, canal |
| contact_registered | Somente após confirmação do endpoint do formulário | Caminho sem query, idioma, canal |
| contact_error | Falha de validação/envio com código genérico | Caminho sem query, idioma, categoria do erro |
| contact_click | Clique em WhatsApp ou e-mail | Caminho sem query, idioma, canal |

Nunca incluir nome, e-mail, telefone, empresa, mensagem, URL de WhatsApp com texto, valores digitados, query livre ou resposta bruta do provedor nos eventos. Cliques não são mensagens entregues; registro não é venda. Atribuição pode ser incompleta, especialmente por WhatsApp e perda de referência. Definir indicador de contato qualificado pela equipe, sem associar conteúdo pessoal à ferramenta de audiência. Atualizar privacidade conforme a ferramenta efetivamente escolhida. Manter o Formspree e suas condições atuais.

## Critérios de conclusão

Validação local em 10/11/2026: `npm run check` aprovado (lint, build padrão Turbopack, TypeScript, exportação e 16 testes). `git diff --check` sem erros. As verificações incluem fatos retirados, identificação da hospedagem, pares PT/EN, metadados, Organization, sitemap, acesso dos robôs de busca, restrições de treinamento e comportamento estrutural do formulário. A compilação nesta cópia isolada não reproduziu a falha interna anterior; não foi necessário alterar o comando padrão. Não houve teste de entrega real de e-mail ou inspeção em painel privado.

Parte local: exportação das páginas, testes de metadados/idiomas/contato, ausência de afirmações retiradas no HTML e política de robôs validada. A publicação só poderá ser considerada coerente após inspeção do HTML e do robots no domínio, numa etapa futura autorizada. Search Console, política Cloudflare e métricas permanecem pendentes até os dados externos estarem disponíveis; não declarar a etapa externa concluída com testes locais.

Referências da auditoria: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers ; https://developers.openai.com/api/docs/bots ; https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/ .
