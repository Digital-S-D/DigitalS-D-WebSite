# Passo 2 — Descoberta, indexação e identidade da Digital S&D

Implementação local em 03/11/2026. A publicação e o processamento pelo Google são etapas separadas.

## O que foi preparado

- `app/sitemap.ts`: sitemap com as oito páginas públicas existentes, incluindo atendimento, FAQ, equipe e os dois projetos demonstrativos. Sem URLs de teste, parâmetros de orçamento ou página 404. Não gera datas fictícias a cada compilação.
- `app/robots.ts`: permite rastrear páginas e recursos públicos e indica o sitemap do domínio principal.
- `lib/seo.ts`: domínio oficial, lista de páginas, metadados compartilhados e identidade da empresa.
- Cada página define canonical, título, descrição, URL e prévia de compartilhamento próprios. As URLs canônicas usam HTTPS, domínio sem www e barra final, conforme os redirecionamentos públicos e a exportação estática. Previews e builds em subdiretório continuam apontando para o domínio principal.
- Home: JSON-LD `Organization` com marca, logo existente, e-mail, telefone, fundadores e link de atendimento. Os nomes completos dos fundadores também aparecem no texto visível e vêm da mesma fonte usada pela página Sobre. Não foram adicionadas avaliações, perfis sociais, endereço físico, CNPJ, disponibilidade 24/7 ou especialização sem evidência.
- Verificação por tag preparada opcionalmente em `GOOGLE_SITE_VERIFICATION`. A variável só deve receber o conteúdo real fornecido pelo Search Console. Não é necessária para propriedade já verificada por DNS.
- `tests/seo-export.test.mjs`: verifica o HTML e os arquivos finais de `out/`, incluindo cobertura de todas as rotas, canonical correto, previews, imagens existentes, JSON-LD e ausência de bloqueios nas páginas públicas. A página de erro continua com noindex.

Isso facilita descoberta e identificação. Não atribui uma nota à empresa nem garante indexação ou recomendação em respostas de IA.

## Estado público consultado

Consulta HTTP em 03/11/2026:

| URL | Resultado |
| --- | --- |
| `https://digitalsd.com.br/` | 200, sem canonical ou JSON-LD no HTML consultado |
| `https://digitalsd.com.br/robots.txt` | 404 |
| `https://digitalsd.com.br/sitemap.xml` | 404 |
| `http://digitalsd.com.br/` | Redireciona para HTTPS sem www |
| `https://www.digitalsd.com.br/` | Redireciona para HTTPS sem www |

A Home pública ainda não continha o novo prazo de primeira resposta. Portanto, a publicação precisa incluir também as mudanças de atendimento do passo anterior.

## Publicação e acesso externo

O site existente usa Netlify e o repositório `Digital-S-D/DigitalS-D-WebSite`. Esta implementação não criou outra hospedagem e não publicou ou enviou commits. O checkout inclui alterações anteriores do portfólio Alvorada, preservadas; uma publicação desse checkout também as inclui e deve considerar esse conjunto.

O navegador conseguiu abrir o Search Console, mas a sessão pediu login. O usuário informou que a conta administradora está com o sócio e que receberá retorno depois. Nenhuma propriedade foi criada, nenhuma verificação foi concluída, nenhum sitemap foi enviado e nenhuma solicitação de indexação foi feita nesta execução.

## Roteiro para o sócio, depois da publicação

1. Entrar no [Search Console](https://search.google.com/search-console/) e selecionar a propriedade existente de `digitalsd.com.br`. Se a propriedade de domínio já existir, usá-la. Evitar criar outra conta ou conceder acesso desnecessário.
2. Confirmar que `https://digitalsd.com.br/sitemap.xml` e `https://digitalsd.com.br/robots.txt` abrem publicamente com sucesso. No relatório **Sitemaps**, enviar `https://digitalsd.com.br/sitemap.xml` uma vez e acompanhar o processamento.
3. Na **Inspeção de URL**, consultar a Home, `/atendimento/`, `/perguntas-frequentes/`, `/sobre/` e as páginas de portfólio. Registrar: presença no Google, última visita do rastreador, possibilidade de rastreamento/indexação e canônica escolhida pelo Google. A canônica declarada pelo site é um sinal; o Google decide qual usar.
4. Para páginas novas ou alteradas, executar **Testar URL publicada** e, se o resultado permitir, **Solicitar indexação**. Priorizar Home e atendimento. Não repetir pedidos diariamente; solicitação não garante inclusão e pode levar tempo.
5. Validar a Home publicada no [Teste de pesquisa aprimorada](https://search.google.com/test/rich-results) e inspecionar o bloco Organization. A validação local confirma JSON e coerência; não substitui a leitura do site pelos testes do Google.
6. Guardar os resultados e acompanhar **Indexação > Páginas** e **Desempenho > Resultados da pesquisa**, tipo **Web**, após o processamento. Não usar apenas uma consulta `site:` como comprovação de indexação.

Se a propriedade ainda não estiver verificada, o administrador deve escolher um método oferecido pelo Search Console. Para propriedade de domínio, a comprovação costuma envolver o DNS. Para prefixo de URL com tag HTML, configurar apenas o valor de `content` em `GOOGLE_SITE_VERIFICATION` no ambiente de build do Netlify e publicar novamente antes de verificar. Não alterar DNS nem inserir um token inventado.

Resultados a devolver: propriedade selecionada, resultado/data do sitemap, estado das URLs prioritárias, última visita e canônica escolhida. Não compartilhar senha, código de acesso ou cookies.

## Verificação local

Executar na raiz:

```powershell
npm run build
node --test tests/contact.test.mts tests/seo-export.test.mjs
```

Os testes de contato exigem Node.js 22.18 ou superior; a verificação do HTML exportado usa APIs disponíveis no Node.js 20. O build gera `out/`, conforme a configuração atual do Netlify.

### Resultado desta execução

- Compilação de produção concluída com as oito páginas públicas, sitemap e robots exportados.
- Dez testes passaram: seis verificações do export e quatro testes existentes do formulário.
- Verificação de espaços em branco nas alterações rastreadas desta etapa passou. O aviso anterior de linha em branco em `lib/portfolio.ts` pertence a alterações preexistentes e foi preservado.
- Navegador local: Home revisada em 320 e 1440 px, atendimento em 320 e 390 px, sem transbordamento horizontal nas dimensões conferidas. As URLs canônicas de Home e atendimento foram confirmadas no documento carregado.
- Captura de atendimento em celular: `C:/Users/alvar/.codex/visualizations/2026/11/03/01a19f89-8b41-7551-adc9-d9b64c158986/passo-2-atendimento-mobile.jpg`.
- O navegador voltou a estar disponível; essa conferência local complementa a limitação registrada no passo 1. Não foi feito novo envio real de formulário nem teste de indexação autenticado no Google.

## Fontes oficiais e motivo de cada decisão

- [Google: criar e enviar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): URLs absolutas e canônicas; datas de atualização devem ser reais. Um sitemap ajuda a descobrir URLs, sem garantir indexação.
- [Google: consolidar URLs duplicadas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): canonical e redirecionamentos comunicam a URL preferida; o Google pode selecionar outra.
- [Google: Organization](https://developers.google.com/search/docs/appearance/structured-data/organization): identidade e contatos da empresa podem ajudar na desambiguação.
- [Google: recursos de IA e seu site](https://developers.google.com/search/docs/appearance/ai-features): conteúdo acessível e coerente; não há arquivo ou schema especial obrigatório para IA. Aparições em recursos de IA entram no desempenho Web do Search Console.
- [Google: solicitar novo rastreamento](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl): pedidos podem levar dias ou semanas e não garantem inclusão imediata.
- [Next.js 14: sitemap](https://nextjs.org/docs/14/app/api-reference/file-conventions/metadata/sitemap), [robots](https://nextjs.org/docs/14/app/api-reference/file-conventions/metadata/robots) e [metadados](https://nextjs.org/docs/14/app/api-reference/functions/generate-metadata): implementação compatível com a versão instalada e exportação estática.
