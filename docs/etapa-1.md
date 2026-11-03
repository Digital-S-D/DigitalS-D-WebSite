# Etapa 1 — Confiança, identidade e contato

Implementação local em 03/11/2026. Nenhuma publicação foi executada.

## Alterações

- Removidos os links de Instagram, LinkedIn e YouTube sem contas oficiais e o link para o blog inexistente.
- Corrigido o WhatsApp da solução customizada. Todos os CTAs de WhatsApp usam o contato de `COMPANY`.
- Removidos os cinco projetos fictícios, instruções de imagens e resultados sem comprovação. Os acessos ao portfólio foram retirados até a etapa 2.
- Recortadas versões da marca oficial para cabeçalho, abertura e rodapé; originais preservados.
- Reduzidos a marca e os espaçamentos da abertura. CTA principal passa a dizer “Pedir orçamento”.
- Revisadas as promessas de PageSpeed, tempo universal de carregamento, popularidade, entregas em várias cidades e resposta imediata. Os prazos de resposta não confirmados foram retirados.
- Menu mobile com diálogo nativo: Escape, estado expandido, foco inicial, fundo inerte, restauração de foco, fechamento ao mudar para desktop e ausência dos controles fechados na navegação.
- Rótulos associados aos sete campos, preenchimento automático, validação de nome/e-mail/telefone, erros descritos junto aos campos e foco no primeiro erro.
- Envio com limite de espera, preservação dos dados em falha, bloqueio de submissão duplicada e confirmação somente após sucesso do serviço. Ausência de configuração oferece canais alternativos sem instruções técnicas ao visitante.
- Imagem real de compartilhamento, com referências para Open Graph e Twitter.
- Indicador de foco visível, acesso direto ao conteúdo, marcos de cabeçalho/rodapé fora do conteúdo principal, campos com texto de 16 px e respeito à preferência de movimento reduzido.

## Verificação

- Build de produção e exportação estática concluídos para Home, Sobre, Privacidade e Termos.
- TypeScript sem erros.
- Quatro testes automatizados cobrem contatos válidos e inválidos, fixo/celular, +55, preservação de números longos e configuração ausente/incorreta.
- Verificados os links internos, âncoras e imagens das quatro páginas exportadas.
- Conferidos no navegador o menu, Escape, foco de retorno, Tab com menu fechado e associação dos sete rótulos.
- Conferidas mensagens de obrigatoriedade e telefone incompleto sem enviar mensagem externa.
- Nas larguras 320, 768 e 1440 px, com altura de 900 px: sem rolagem horizontal e botão principal inteiramente visível, com base em 537, 573 e 513 px, respectivamente.

## Teste real autorizado — envio e recebimento confirmados

O JavaScript público de `https://digitalsd.com.br/` contém o endpoint existente `https://formspree.io/f/xnppgnvw`. A cópia local usa esse mesmo endpoint em `.env.local`, ignorado pelo Git. Não foi criado outro formulário ou alterado o destinatário.

Em 03/11/2026, após autorização explícita do usuário, foi realizado um único envio pela interface local compilada, usando o mesmo serviço do site público:

- Nome: “Teste técnico Digital S&D”.
- Empresa: “Digital S&D”.
- E-mail e telefone: dados públicos da própria empresa.
- Mensagem identificada como “TESTE TÉCNICO — etapa 1 — não é uma solicitação comercial”.
- Identificador: `DSD-ETAPA1-20261103-010851`.

O serviço retornou sucesso e a interface exibiu “Mensagem enviada!”. O formulário saiu da tela, o foco foi para o título da confirmação e a região de status anunciou o sucesso. O botão “Enviar outra mensagem” também foi conferido: reabre os campos vazios e devolve o foco ao nome, sem realizar outro envio. Não houve erros registrados no navegador. Uma captura da confirmação foi salva como evidência na pasta de visualizações desta conversa.

**Recebimento confirmado pelo usuário em 03/11/2026:** o teste `DSD-ETAPA1-20261103-010851` chegou à caixa de entrada de `digitalsd.contato@gmail.com`, sem cair no spam. Essa confirmação foi fornecida pelo usuário nesta conversa; a caixa da empresa não está conectada ao agente. Não foram alteradas contas, encaminhamentos ou regras do Formspree.

**Etapa 1 concluída no projeto local**, incluindo envio funcional e confirmação de recebimento. Não foi declarada conformidade integral de acessibilidade nem realizada publicação.
