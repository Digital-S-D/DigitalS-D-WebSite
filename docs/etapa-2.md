# Etapa 2 — Oferta, prova e dúvidas de contratação

Implementação local em 03/11/2026. Nenhuma publicação foi executada.

## Experiência entregue

- Home com sites institucionais e landing pages como ofertas principais: público, objetivo, entregáveis de base e materiais necessários.
- Serviços complementares em um bloco secundário, com avaliação de escopo e integrações por projeto.
- Sequência da Home: oferta → trabalho demonstrativo → serviços → processo e fundadores → cinco dúvidas essenciais → contato.
- Card do OdontoHub com imagem real e destino `/portfolio/odontohub/`.
- Case com problema explorado, experiência construída, seis capturas, autoria interna, possibilidades de personalização e limites da demonstração.
- Página `/perguntas-frequentes/` com 13 perguntas em quatro grupos. A Home reutiliza cinco respostas da mesma fonte de conteúdo.
- Navegação e rodapé com acessos reais a serviços, portfólio e FAQ. Menu mobile usado também no tablet para acomodar os novos links.
- CTAs de orçamento de site, landing page e sistema personalizado preservam o interesse no formulário. O parâmetro `servico` só é aceito quando corresponde a uma opção conhecida.
- Opção “Ainda não sei” para serviço e orçamento, sem criar preços ou compromissos novos.

## Conteúdo comercial

O usuário autorizou a seleção das perguntas mais úteis. Foram escolhidas dúvidas sobre formato do site, orçamento, pagamento, prazo, conteúdo, revisões, domínio/hospedagem/código, custos recorrentes, suporte, atualizações, SEO/integrações, atendimento remoto e OdontoHub.

Valores, formas de pagamento, prazo, quantidade de revisões, titularidade e suporte continuam definidos na proposta individual, conforme os termos que já existiam no site. As respostas orientam o que precisa ser combinado, sem inventar tabela de preços, prazo fixo ou suporte ilimitado. SEO técnico de base é descrito sem prometer ranqueamento, leads ou vendas.

Não foi criada marcação de FAQ com promessa de resultado especial no Google. A finalidade da página é esclarecer a contratação.

## Fontes e imagens do OdontoHub

- Fonte de escopo: `OdontoHub/docs/DEMONSTRACAO.md` e código local do projeto.
- Capturas feitas navegando na interface real: visão geral, agenda, odontograma, financeiro, personalização e agenda em lista no celular.
- O projeto original não foi alterado. Foi usada uma cópia temporária em `preview/odontohub/`, com os mesmos componentes e dados fictícios. Apenas a preparação de estilos para essa pasta ignorada e a ocultação do indicador de desenvolvimento foram ajustadas na cópia.
- Capturas de desktop feitas em viewport de 1440 × 950 px, gravadas pelo navegador em 1425 × 940 px; mobile em viewport de 390 × 844 px, gravado em 375 × 812 px.
- Arquivos finais: `public/images/portfolio/odontohub/*.webp`, cerca de 388 KiB para as seis imagens.
- As imagens têm texto alternativo e legendas. As quatro telas da galeria podem ser abertas em tamanho completo por toque ou teclado.
- Nomes, prontuários, consultas e valores são fictícios. A página não atribui resultados comerciais nem implantação em clínica real. Autenticação, dados compartilhados, permissões e integrações são tratados como trabalho de implantação; a demo não recebe dados clínicos reais ou processa pagamentos.

## Organização do conteúdo

- `lib/offers.ts`: duas ofertas principais, serviços complementares, etapas comerciais, FAQ e geração de caminhos para orçamento.
- `lib/portfolio.ts`: dados do case e galeria.
- `lib/constants.ts`: empresa, navegação e opções de formulário. A lista antiga duplicada de serviços foi removida; formulário e rodapé derivam as ofertas da fonte compartilhada.
- `FaqList.tsx`: perguntas nativas com `details`/`summary`, sem depender de JavaScript para expandir o conteúdo.
- `ContactServiceIntent.tsx`: preservação de interesse usando os parâmetros da navegação, dentro de `Suspense` para manter a exportação estática.
- `preview/` segue ignorada pelo Git e passa a ser excluída da verificação de tipos do site.

## Verificação

- Build e exportação estática de Home, Sobre, Privacidade, Termos, FAQ e case.
- TypeScript validado no build; quatro testes existentes de contato passaram.
- Verificados links, âncoras, IDs únicos, um H1 por página, imagens, dimensões dos ativos e imagens sociais das novas páginas.
- Home, FAQ e case sem rolagem horizontal em 320, 390, 768, 1024 e 1440 px, com altura de 900 px.
- Menu: foco inicial, Escape, retorno de foco e ausência de controle invisível na sequência de Tab. Cabeçalho sem sobreposição em 1024 px. O botão principal da Home continua inteiramente visível em 320 × 900 px, com base em 537 px.
- FAQ: abertura com Enter, fechamento com Espaço e indicação de foco visível.
- Formulário: interesse de landing page, troca para site institucional preservando o nome digitado e interesse vindo do case mantido após recarregar.
- Não foi feito outro envio externo de formulário. O recebimento já confirmado na etapa 1 permanece registrado em `docs/etapa-1.md`.

## Próxima etapa

A etapa 2 está implementada no projeto local. Publicação, medição, indexação, desempenho comparativo e atualização de dependências seguem separados desta entrega. O trabalho não declara aumento de conversão medido ou conformidade integral de acessibilidade.
