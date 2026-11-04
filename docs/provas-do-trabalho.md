# Evidências do trabalho da Digital S&D

Inventário iniciado em 03/11/2026. Distinguir o que foi desenvolvido, o que foi testado e o resultado que um cliente realmente obteve.

| Projeto | Natureza | Evidência disponível | O que permite avaliar | O que não foi comprovado |
| --- | --- | --- | --- | --- |
| Alvorada | Landing page demonstrativa, negócio fictício | HTML/CSS/JS originais, capturas desktop/mobile e apresentação de apartamentos | Organização da oferta, identidade visual, caminhos de contato e adaptação de layout | Cliente atendido, campanha em operação, volume de leads, vendas, retorno financeiro, atendimento imobiliário |
| OdontoHub | Interfaces demonstrativas internas com dados fictícios | Capturas atuais, README PT/EN e roteiro verificado no repositório privado | Agenda com conflito local, busca, odontograma e aparência; somente cor/tema persistem no navegador. Indicadores financeiros são constantes, sem módulo de movimentações | Backend conectado, permissões por usuário, implantação clínica, pagamentos, tratamento de dados reais ou resultados comerciais |
| Advocacia Digital | Site institucional demonstrativo, escritório fictício | 26 páginas exportadas, seis testes, capturas e simulação de contato verificada | Hierarquia editorial, navegação, validação sem envio e estrutura de conteúdo local | Atendimento jurídico, credenciais, clientes, CMS conectado ou retorno comercial |
| Site Digital S&D | Site próprio | Código, exportação estática e teste de formulário anterior confirmado pelo usuário na caixa de entrada | Implementação de site próprio e funcionamento do fluxo de contato no teste realizado | Resultado comercial de terceiros ou cumprimento futuro do prazo de resposta |

## Como transformar um trabalho autorizado em um caso público

Registrar problema real, objetivo, entregas contratadas, participação da equipe, escolhas relevantes e capturas aprovadas. Antes de publicar, obter autorização para marca, imagens, descrição do trabalho e eventual depoimento. Não presumir que uma autorização de desenvolvimento permite divulgar dados de clientes.

Resultados só entram com fonte, período, definição e contexto comparável. Exemplo de registro: contatos qualificados antes/depois no mesmo intervalo, origem dos dados e mudanças de campanha concomitantes. Não converter um teste de formulário em uma venda nem atribuir toda a evolução ao novo site.

Depoimentos devem usar a opinião real, com autoria e permissão registradas. Manter os registros de autorização no ambiente interno adequado; não colocar dados pessoais ou contratos neste repositório público. Menções e links de clientes só quando autorizados e pertinentes.

## Modelo de ficha

- Projeto e natureza: cliente autorizado / projeto próprio / demonstração.
- Problema, público e objetivo.
- Escopo entregue e responsabilidades de cada parte.
- Decisões de conteúdo, navegação, mobile e contato, com suas razões.
- Capturas, datas e versão do projeto.
- Testes efetivamente executados e suas limitações.
- Resultado medido, fonte, intervalo e limites de atribuição; se não houver, declarar não medido internamente e não anunciar ganho.
- Situação da autorização de divulgação.

Não há depoimentos de clientes, métricas de vendas ou novas autorizações de divulgação obtidos nesta execução.

## Revisão dos casos em português e inglês

Os casos atuais usam `lib/case-studies.ts` e rotas pareadas em `/portfolio/` e `/en/portfolio/`. Capturas substituídas por imagens das versões verificadas. Alvorada passou cinco testes de navegador, Advocacia seis testes e build de 26 páginas, e OdontoHub lint, quatro testes e build. A agenda e a aparência do OdontoHub foram verificadas em execução; a distinção entre memória da página e persistência visual é explícita no caso. O site da SD passou lint, build, tipos e 12 testes, incluindo canonical, sitemap e alternância de idioma. Os testes não medem resultados de clientes.
