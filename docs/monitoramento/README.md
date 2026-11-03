# Medição de visibilidade e oportunidades comerciais

Público confirmado em 03/11/2026: pequenas empresas e profissionais autônomos em geral. Alvorada e OdontoHub demonstram capacidade de desenvolvimento; não definem especialização setorial nem comprovam resultados comerciais de clientes.

## Como interpretar a linha de base

O arquivo `linha-base-2026-11-03.json` guarda o texto exibido e os links visíveis de cada consulta válida realizada no Modo IA do Google. Não reproduz uma auditoria factual de cada concorrente citado. Não guarda cookies, senha ou parâmetros de sessão dos URLs do Google.

Dez consultas fixas: sete de descoberta sem citar a Digital S&D e três sobre a marca. Cada consulta começa por **Nova conversa**, sem enviar a transcrição antiga, sugerir nota, apresentar concorrente favorito ou corrigir a resposta antes de registrá-la. Uma tentativa inicial duplicou a pergunta na mesma conversa e foi descartada; a Q01 foi reiniciada.

Condição desta rodada: navegador do aplicativo, sessão Google autenticada na conta da empresa, interface em português. Localização física, histórico, personalização e modelo não foram controlados. Belo Horizonte aparece explicitamente só na Q07. Uma conversa nova não elimina personalização da conta. A seleção das perguntas é nossa, não uma metodologia oficial do Google.

As mudanças dos passos 1 e 2 e as novas capturas ainda são locais. Estes resultados não medem o efeito da implementação. Repetir as mesmas consultas após publicação e processamento pelo Google; registrar nova data e as mesmas condições sem sobrescrever a rodada anterior. Se trocar conta/localização, identificar a rodada separadamente. Não calcular crescimento com ausência de dados de referência.

## O que medir

| Medida | Regra | Limite |
| --- | --- | --- |
| Menção espontânea | Menção à empresa ou domínio na resposta das Q01–Q07, conferida no texto | Não conta perguntas com a marca; não é participação de mercado |
| Link para a empresa | Link visível para digitalsd.com.br na resposta/fontes | Não prova recomendação positiva ou tráfego |
| Precisão sobre a marca | Q08–Q10 comparadas às evidências do site e da operação | Ausência de evidência é diferente de falsidade comprovada |
| Impressões e cliques | Search Console, tipo Web, mesmo período e filtros | Inclui recursos de IA; não isola todas as recomendações do Modo IA |
| Contatos qualificados | Pedido real de serviço oferecido, de potencial cliente, deduplicado no período | Excluir teste técnico, spam, fornecedores e duplicatas |
| Orçamentos e contratos | Proposta efetivamente enviada e contratação confirmada | Não atribuir origem ao Google sem informação confiável |

## Rotina manual

1. Após a publicação, registrar a data e consultar a indexação com o administrador do Search Console. Guardar o estado e a última visita; não confundir um deploy com indexação.
2. Semanalmente, registrar solicitações e oportunidades no arquivo `oportunidades.csv` usando códigos internos, sem nome, telefone, e-mail ou conteúdo sensível. A base de contato continua no canal comercial autorizado.
3. No primeiro contato, quando fizer sentido, perguntar de modo opcional: “Como você conheceu a Digital S&D?”. Registrar “não informado” quando não houver resposta. Autodeclaração é uma pista de origem; não prova atribuição técnica.
4. Comparar períodos de 28 dias, depois que houver dados suficientes, com os mesmos filtros no Search Console. Registrar marca e buscas sem marca separadamente. Não usar a expressão “Modo IA” para todo o tráfego Web.
5. Repetir a amostra de dez consultas após cerca de 30 dias da publicação e processamento, como referência de trabalho, sem exigir mudança de resultado. Guardar resposta, fontes e condições. Não há automação agendada por este documento.
6. Investigar erros recorrentes de identidade ou oferta, corrigir conteúdo comprovável e anotar o que foi publicado. Não inventar avaliações, números de vendas, clientes ou atendimento dedicado para mudar a resposta da IA.

## Campos comerciais

`oportunidades.csv` começa apenas com o cabeçalho; não existem métricas comerciais preenchidas nesta execução. Usar data, código interno, canal, origem autodeclarada, necessidade, qualificação, proposta e contratação. Testes e demonstrações não são contatos comerciais. Sem acesso à caixa empresarial ou CRM, o agente não verificou volume, conversão ou receita.

## Fontes

- [Google: recursos de IA e seu site](https://developers.google.com/search/docs/appearance/ai-features): desempenho de experiências de IA entra em Web; não há requisito especial de arquivo ou schema para IA.
- [Google: conteúdo útil e confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): originalidade, evidência e apresentação para pessoas.
- O protocolo de dez consultas e a rotina de oportunidades são escolhas operacionais deste projeto, não orientações oficiais de pontuação.
