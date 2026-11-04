# Site bilíngue com um único layout

Revisão de 04/11/2026. A versão inglesa anterior utilizava `EnglishCaseStudy`, com cabeçalho, rodapé, tamanhos e composição próprios. Esse componente foi removido. Cada idioma agora usa os mesmos nove templates de `components/pages/`, com os mesmos componentes de seção, classes CSS e imagens.

## Endereços e navegação

- Português mantém todos os endereços existentes na raiz; inglês usa o prefixo `/en/`.
- Os caminhos e IDs de seção existentes são preservados, inclusive nos endereços ingleses, evitando quebrar links compartilhados.
- O seletor PT | EN aparece no cabeçalho em desktop e mobile. Alterna para a página equivalente e preserva parâmetros e hash no clique, inclusive por teclado.
- Links internos e CTAs mantêm a navegação no idioma escolhido. Os valores comerciais do formulário continuam estáveis; muda apenas a apresentação traduzida.
- Não há redirecionamento por navegador ou IP, serviços externos de tradução ou substituição de conteúdo por manipulação do DOM.

## Organização do código

`app/(pt)/` e `app/en/` fornecem rotas e layouts de documento com `lang="pt-BR"` e `lang="en"`. `(pt)` é um grupo interno e não aparece nos endereços. `DocumentLayout` conserva fontes, fundo e estilo global. `LanguageSwitcher` implementa o controle visível e os links reais de idioma.

`lib/i18n.ts` fornece `createTranslator`, `localePath` e `localizedHref`. O catálogo inglês fica em `lib/translations/en.json`, indexado pelo texto português normalizado. A tradução ocorre na renderização React, incluindo a geração estática do HTML, não depois do carregamento. Não se traduzem classes, IDs, atributos de comportamento, arquivos ou valores digitados pelo visitante. Nomes próprios e marcas são preservados. Ao modificar ou incluir texto português, mantenha a tradução correspondente no catálogo.

Além do conteúdo principal, são traduzidos navegação, legendas, textos alternativos, rótulos acessíveis, opções visíveis, mensagens do formulário, documentos institucionais e metadados. As imagens continuam sendo capturas dos projetos em português; a tradução do site de portfólio não modifica as aplicações demonstrativas.

As nove páginas em cada idioma têm canonical próprio e alternates `pt-BR`, `en` e `x-default`. Os 18 endereços são incluídos no sitemap. Não foi necessário adicionar dependências de tradução ou modificar o CSS global.

## Formulário e proteção contra submissão nativa

O endpoint do Formspree, o corpo da requisição e as regras de validação são preservados. Telefone continua usando o formato brasileiro informado no texto de ajuda. Os erros em inglês levam o foco ao primeiro campo inválido. Valores das opções continuam compatíveis com os CTAs e o atendimento, enquanto seus rótulos visíveis são traduzidos.

Durante a revisão, recompilar com o servidor estático aberto deixou o índice da prévia apontando para arquivos anteriores, impedindo a hidratação. A prévia foi reiniciada para testar o build final. O formulário também usa `method="dialog"` para impedir um GET nativo acidental com valores na URL quando o JavaScript não estiver disponível. Um aviso sem JavaScript oferece WhatsApp e e-mail. O envio normal continua via fetch para o endpoint já configurado. Nenhum contato real foi enviado nesta revisão.

## Verificações

- Lint sem avisos, build com TypeScript e exportação das 18 páginas concluídos.
- Quinze testes aprovados, incluindo nove pares com a mesma sequência de elementos e classes no conteúdo principal, as mesmas imagens, idioma do documento, canonical, hreflang, sitemap e caminhos RSC usados pelo roteador.
- A verificação dos segmentos estáticos usa a codificação do roteador Next.js para contemplar o grupo interno `(pt)`, preservando a correção da exportação Windows.
- Todas as 18 páginas em 320, 390, 768, 1024 e 1440 px: 90 verificações sem transbordamento horizontal, sem sobreposição do cabeçalho e com um H1 por página.
- Troca EN → PT no case Alvorada preservou `?ref=qa#telas`; a troca pelo cabeçalho mobile também foi conferida.
- CTA da Advocacia em inglês seleciona “Site Institucional” no formulário inglês. Validação vazia anuncia erros em inglês e foca nome.
- Menu inglês abre e fecha por Escape com retorno de foco; FAQ abre por Enter.
- Capturas comparativas de Advocacia Digital em português e inglês registram o layout compartilhado.

O comprimento das traduções pode mudar quebras de linha e altura do texto. Fontes, tamanhos, cores, espaçamentos, disposição, imagens e componentes são compartilhados; não há uma composição alternativa para inglês.
