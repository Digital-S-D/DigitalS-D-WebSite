# Passo 1 — Atendimento claro para quem não entende de tecnologia

Implementado localmente em 03/11/2026, como primeiro passo do plano de visibilidade. Nenhuma publicação foi executada nesta tarefa.

## Regras confirmadas pelo usuário

- Retorno inicial pelo WhatsApp ou e-mail em até **1 dia útil**.
- **Sem horário fixo** de atendimento.
- Atendimento pela equipe, **sem responsável fixo por projeto**.
- O prazo de execução de um pedido é avaliado e combinado separadamente do primeiro retorno.

O antigo horário “Seg–Sex: 9h às 18h” foi retirado da área de contato para refletir a orientação atual.

## Entregas públicas no código

1. Nova página `/atendimento/` com acompanhamento da primeira conversa à continuidade após a entrega.
2. Cinco etapas com a distinção entre o que a equipe faz e como o cliente participa: conversa, proposta, materiais, revisões/aprovações e entrega.
3. Duas formas de atualização explicadas: painel quando incluído no projeto ou pedidos à equipe com escopo, prazo e eventual custo combinados.
4. Orientações para pedir ajuda: identificar negócio/site, informar a página e o pedido, receber retorno inicial e combinar a execução.
5. Resumo na Home com a mensagem “Você não precisa entender de tecnologia”, canais de resposta e acesso à nova página.
6. FAQ ampliada de 13 para 16 perguntas, com seis dúvidas no resumo da Home. Acrescentadas dúvidas sobre conhecimento técnico, equipe de acompanhamento e prazo/canais de retorno. Respostas de suporte e atualização ficaram mais concretas.
7. Menu “Como funciona”, rodapé, serviços, Sobre e contato ligados à explicação do acompanhamento.
8. Texto de confirmação do formulário alinhado ao retorno inicial de até 1 dia útil.

Não foram anunciados gerente dedicado, atendimento imediato, horário 24/7, suporte ilimitado ou prazo fixo de correção. Condições de entrega, revisões, titularidade e escopo de suporte permanecem registradas na proposta específica.

## Rotina para sustentar a oferta

`docs/rotina-atendimento.md` contém uma rotina compartilhada de fila, primeiro retorno útil, coleta de materiais, revisões/aprovações, entrega e pedidos posteriores, com modelos de mensagem. É um procedimento documentado para a equipe; não foi criada uma ferramenta externa nem enviado aviso a clientes.

O cumprimento do prazo de resposta depende da execução dessa rotina e deve ser acompanhado nos atendimentos reais.

## Organização

- `lib/customer-care.ts`: política confirmada, resumo do acompanhamento, etapas, modalidades de atualização e orientações de ajuda.
- `lib/offers.ts`: perguntas usam a política compartilhada; o resumo comercial reutiliza o conteúdo de atendimento.
- `app/atendimento/page.tsx`: página pública de acompanhamento.
- Home, FAQ, contato e Sobre atualizados sem reconstrução do formulário.

## Validação

- Build de produção e exportação estática concluídos, com verificação de tipos do Next.js.
- Quatro testes existentes de validação do contato passaram.
- Links internos, âncoras, IDs únicos, H1 e imagens verificados nas oito páginas exportadas, incluindo o portfólio que já estava em edição.
- Confirmado no HTML exportado que a nova política aparece e o antigo horário fixo foi removido.
- Revisão visual de celular/desktop e interação por teclado **não executadas nesta rodada**: o navegador local está desativado nas configurações da sessão. Não foram reutilizadas capturas antigas como evidência destas mudanças.
- Nenhum novo envio real do formulário foi feito.

As alterações do portfólio Alvorada que já estavam no diretório de trabalho foram preservadas. O passo 2 do plano (indexação e identificação técnica da empresa) não faz parte desta implementação.
