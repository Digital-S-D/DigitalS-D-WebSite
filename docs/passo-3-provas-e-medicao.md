# Passo 3 — Provas do trabalho e medição de visibilidade

Rodada inicial executada em 03/11/2026. Público confirmado pelo usuário: pequenas empresas e profissionais autônomos em geral. Os dois projetos demonstrativos não foram usados para anunciar especialização setorial.

## 1. Alvorada concluída no portfólio local

O card e uma apresentação já existiam no checkout com ilustrações extraídas do projeto. Nesta rodada, a apresentação foi completada com capturas reais do HTML original em execução:

- Abertura no computador: 1425 × 940 px.
- Apresentação dos apartamentos: 1425 × 940 px.
- Abertura no celular: 375 × 812 px.

Os três WebP totalizam 121.198 bytes, aproximadamente 118 KiB. A capa da Home e a prévia de compartilhamento agora mostram a interface. A página `/portfolio/alvorada/` inclui galeria com ampliação, natureza do projeto, escopo e chamada de orçamento com Landing Page selecionada.

O projeto original em `../Construtora-Alvorada_LandingPage` foi apenas lido e servido temporariamente para capturas. Não foi alterado. O case identifica empresa, empreendimento, números, depoimentos e condições como fictícios e explica que o formulário da demonstração não envia contatos. Não foram anunciadas vendas, leads de campanha ou clientes reais. A revisão da demonstração original continua documentada em `auditoria-alvorada.md`; não se deve interpretar a captura como correção de todos os achados daquele projeto.

## 2. Inventário e rotina de evidências

[provas-do-trabalho.md](provas-do-trabalho.md) registra o que Alvorada, OdontoHub e o site próprio permitem comprovar, seus limites e um modelo para futuros trabalhos autorizados. Não foram obtidos novos depoimentos ou resultados comerciais nesta execução.

[monitoramento/README.md](monitoramento/README.md) define consultas, condições da amostra, acompanhamento de oportunidades e comparação entre períodos. O CSV comercial começa somente com cabeçalhos; não há dados de conversão, receita ou contatos inventados. Não foi instalado novo analytics, enviado contato a clientes ou criado monitor agendado.

## 3. Linha de base realmente executada no Modo IA

Dez consultas, uma por conversa nova: sete sem citar a Digital S&D e três com a marca/domínio explícitos. A primeira tentativa de navegação duplicou uma pergunta na mesma conversa e foi descartada; Q01 foi reiniciada e só a conversa independente entrou no registro.

Condições: navegador do aplicativo, conta empresarial Google autenticada, português, localização física e personalização não controladas. A pesquisa de Belo Horizonte foi apenas uma pergunta explícita da amostra. Conversas novas não eliminam o histórico e a personalização da conta. Os resultados são qualitativos e não representam o conjunto de usuários ou uma classificação oficial.

| Grupo | Resultado observado |
| --- | --- |
| Q01–Q07, descoberta sem citar a marca | Nenhuma das sete respostas mencionou Digital S&D ou digitalsd.com.br. Não houve link para o domínio nos links visíveis capturados. |
| Q08, serviços da empresa | Reconheceu sites, landing pages e soluções complementares, com link para o site. A expressão seção única para landing page é imprecisa: uma página pode ter várias seções. |
| Q09, atendimento e atualizações | Reconheceu canais e condições por proposta, mas reproduziu o horário antigo de 9h às 18h. A política atual ainda não estava publicada; não tratar automaticamente como invenção da IA. |
| Q10, projetos | Reconheceu corretamente OdontoHub como demonstração interna com dados fictícios, não como cliente ativo. Não citou Alvorada, ainda não publicada no domínio. |

As três perguntas com a marca não contam como descoberta espontânea. Também não são três recomendações espontâneas. A ausência de menção em sete perguntas não mede uma participação de mercado nem permite concluir que ninguém recebe recomendações da empresa.

Registros: [texto e links observados](monitoramento/linha-base-2026-11-03.json) e [resumo por consulta](monitoramento/linha-base-2026-11-03.csv). Os arquivos guardam conteúdo visível; a lista de links inclui referências e resultados relacionados exibidos, não uma lista auditada de todas as fontes internas do Google. As recomendações e alegações sobre concorrentes dentro dessas respostas não foram adotadas como fatos neste relatório.

## 4. Comparação com o site publicado

Consulta HTTP registrada em [estado-publico-2026-11-03.json](monitoramento/estado-publico-2026-11-03.json), às 20:01 no horário de Brasília:

- Home, FAQ e case OdontoHub: 200.
- Home ainda contém o horário antigo, sem o novo prazo de primeira resposta e sem Alvorada.
- Atendimento, case Alvorada, robots.txt e sitemap.xml: 404.
- Os três HTMLs públicos consultados ainda não apresentam canonical.

Portanto, essa rodada não mede efeito das alterações locais. É uma referência anterior à publicação. Não podemos concluir que o Google ignorou melhorias que ainda não estão no domínio.

## Verificação local

- Build de produção concluído e dez testes aprovados após a compilação.
- Case revisado no navegador em desktop de 1280 px e celular de 390 e 320 px, sem transbordamento horizontal nas dimensões verificadas.
- Capturas principais carregadas, URL canônica correta e CTA do case navegando para o formulário com Landing Page selecionada. Não houve novo envio real de formulário.
- Capturas de revisão em `C:/Users/alvar/.codex/visualizations/2026/11/03/01a19f89-8b41-7551-adc9-d9b64c158986/passo-3-alvorada-desktop.jpg` e `passo-3-alvorada-mobile.jpg`.
- Alterações anteriores preservadas. Nenhum commit, push ou deploy realizado nesta rodada.

## Próxima coleta

Publicar o conjunto aprovado dos passos 1–3. Depois, o administrador consulta as páginas no Search Console e envia o sitemap conforme o roteiro do passo 2. Guardar data da publicação, estado de indexação e última visita do Google. Repetir as dez perguntas sob condições registradas após processamento, em uma nova rodada sem sobrescrever esta. Comparar também períodos equivalentes de 28 dias no Search Console e contatos comerciais qualificados quando houver dados.

A fase contínua — acumular casos de clientes autorizados e medir evolução no tempo — depende de trabalhos reais, publicação e observação futura. A rodada inicial, o portfólio local e o procedimento de coleta foram executados; não foi demonstrada melhora de recomendações nesta data.

Para o sócio, a explicação curta está em [explicacao-search-console.md](explicacao-search-console.md). O Search Console ajuda a observar rastreamento, indexação e buscas; não é obrigatório para aparecer no Google e não atribui pontuação ou garante recomendação. Fonte: [Sobre o Search Console](https://support.google.com/webmasters/answer/9128668?hl=pt-BR).

A decisão de apresentar evidências originais e o cuidado com alegações seguem [conteúdo útil e confiável do Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). O protocolo de dez consultas é uma escolha deste projeto. Segundo [recursos de IA e seu site](https://developers.google.com/search/docs/appearance/ai-features), essas experiências entram nos relatórios Web; o Search Console não isola todas as recomendações do Modo IA.
