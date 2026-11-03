# Auditoria da landing page Alvorada

Data: 03/11/2026. Natureza confirmada pelo responsável: projeto demonstrativo da Digital S&D.

## Parecer

O projeto é uma boa base de apresentação para o portfólio, mas não está pronto para captar contatos de uma operação imobiliária real. Os principais problemas são promessas de funcionamento que o código ainda não entrega. Esta revisão analisou os quatro HTMLs, CSS, JavaScript e README locais. A inspeção visual e os testes de interação no navegador ficaram pendentes porque o aplicativo informou que o acesso ao navegador local está desativado. Não foi possível confirmar a publicação pública nesta sessão.

## O que está bem encaminhado

- Identidade consistente no código: paleta azul profundo/dourado, tipografia e ilustrações vetoriais com referências arquitetônicas.
- Jornada organizada: proposta, diferenciais, tipologias, localização, comparação, depoimentos, FAQ e contato.
- HTML, CSS e JavaScript sem dependências de pacote: publicação estática simples e poucos componentes externos; as fontes vêm do Google Fonts.
- Regras de adaptação para celular, CTA mobile e preferência por movimento reduzido já previstas. A qualidade visual precisa ser confirmada no navegador.
- Campos com rótulos e validação local; escolhas de cookies persistidas com tratamento de indisponibilidade do armazenamento.
- Páginas de privacidade, termos e cookies com referências locais válidas. A existência dessas páginas não comprova adequação jurídica.

## Achados e prioridades

| Prioridade | Evidência no projeto Alvorada | Efeito e ação recomendada |
| --- | --- | --- |
| Alta | `script.js:129–145`: o envio é impedido, há apenas um comentário de futura integração e a tela de sucesso aparece | Não há entrega de contato. Para a demo, mostrar explicitamente “simulação, nenhum dado enviado”. Para uso real, integrar destino, confirmar recebimento e tratar falha antes de mostrar sucesso. |
| Alta | `script.js:156–157`: WhatsApp aponta para `5500000000000`; rodapés usam `href="#"` | CTAs sem destino útil. Remover controles de canais inexistentes ou identificá-los como demonstração; só usar telefone verificado numa implantação real. |
| Alta | `index.html:282` promete assistir ao tour; `script.js:76–83` apenas rola até o formulário | A ação contradiz a promessa e pode diminuir confiança. Implementar vídeo real ou mudar título, ícone e texto do botão para a ação que existe. |
| Alta | Estatísticas, depoimentos, promessa de retorno em uma hora, localização e JSON-LD `RealEstateAgent` usam conteúdo fictício; home permite indexação | Exibir aviso de demonstração na própria landing page e não apresentar números fictícios como prova social. Considerar noindex na demo e retirar dados estruturados de empresa real. O case da Digital S&D pode permanecer indexável e explicar a natureza do projeto. |
| Média | `script.js:45–70`: ao fechar menu por link, `aria-expanded` não é atualizado; FAQ só alterna classes | Sincronizar estados acessíveis, esconder conteúdo recolhido da navegação por teclado e prever Escape/retorno de foco. Verificar manualmente teclado e leitor de tela. |
| Média | Máscara limita a 11 dígitos antes de normalizar DDI; validação verifica apenas quantidade mínima | Colar um telefone com +55 pode cortar o número. Normalizar DDI e validar o formato esperado. Associar mensagens de erro aos campos e direcionar foco ao primeiro erro. |
| Média | `.reveal` começa oculta e depende de JavaScript | Uma falha de script pode ocultar seções. Deixar conteúdo visível por padrão e ativar animação como melhoria progressiva. |
| Média | Eventos são enviados somente ao array `dataLayer`; `applyConsent` registra preferência, sem ativar ferramentas | Não há comprovação de analytics, CRM ou Consent Mode em operação. Numa implantação, integrar e testar eventos/consentimento antes de afirmar que estão configurados. |
| Baixa | Metadados não têm imagem de compartilhamento, URL Open Graph ou canonical | Preparar metadados para o destino definitivo. Para o case, usar imagem raster de captura após liberar o navegador. |
| Baixa | README descreve arquivo único com CSS/JS embutidos, mas há arquivos separados e páginas adicionais | Atualizar o resumo e instruções de execução no repositório da Alvorada. Não transformar o README em histórico de alterações. |

## Ordem sugerida

1. **Tornar a demonstração honesta e coerente:** aviso visível, simulação de envio, contatos e tour. Resolve expectativas falsas antes de aumentar a exposição.
2. **Revisar a experiência de uso:** acessibilidade, telefone, menu, FAQ e estados sem JavaScript; conferir desktop, celular e teclado. Permite mostrar uma experiência mais confiável.
3. **Preparar uma eventual campanha real:** conteúdo aprovado, integração de leads, tratamento de erros, métricas e metadados. Esses investimentos dependem do objetivo e do cliente; não são necessários para exibir uma amostra visual identificada como demonstração.

Essas prioridades são conclusões da leitura do código e da diferença entre o texto dos controles e suas ações. Não são resultados de testes de conversão ou uma auditoria jurídica/de segurança completa.

## Inclusão no site Digital S&D

- Card Alvorada antes do OdontoHub, alinhado à prioridade comercial de sites e landing pages.
- Página `/portfolio/alvorada/`, com explicação do conceito, escopo e CTA para orçamento de Landing Page.
- Duas ilustrações SVG extraídas do próprio HTML, com legendas que explicam sua origem; não são capturas da interface.
- Sem promessas de vendas, métricas de cliente ou formulário funcional no case.
- Código original da Alvorada preservado. Nenhum commit, push ou publicação foi realizado.

## Verificações realizadas e pendências

- Sintaxe de `script.js`: aprovada por `node --check`.
- Quatro páginas HTML: 112 referências locais verificadas, sem arquivos/âncoras ausentes. Outros 32 links `#` são placeholders e não foram classificados como destinos válidos.
- Build de produção do Digital S&D concluído, incluindo a nova rota, com compilação e verificação de tipos aprovadas.
- Git da Alvorada: consulta fora da restrição inicial confirmou árvore limpa; o erro inicial de acesso não comprovava problema no repositório.
- Pendente: capturas reais, revisão visual responsiva, navegação por teclado, interações e confirmação da URL publicada. Não considerar a revisão visual concluída antes desses testes.

## Complemento de portfólio — 03/11/2026

Com o navegador disponível, foram feitas capturas reais do projeto original em desktop, seção de apartamentos e mobile para o case Digital S&D. O original continua preservado e os achados funcionais acima não foram corrigidos por esta inclusão. A página do case e a Home agora usam essas capturas; as ilustrações extraídas permanecem como assets de origem. A revisão responsiva e o CTA do case foram conferidos no site Digital S&D. Registro: [passo-3-provas-e-medicao.md](passo-3-provas-e-medicao.md).
