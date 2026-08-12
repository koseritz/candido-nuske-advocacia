# Achados da auditoria e ajustes executados

## Problemas identificados

- Homepage com hero fragmentado por foto e espaço vazio; resolvido com composição contínua, imagem real maior e painel de prova integrado.
- H1 longo e genérico; substituído por mensagem com intenção de busca: "Planejamento previdenciário para decidir sua aposentadoria com segurança".
- Estatísticas antigas continham números promocionais sem fonte explícita; substituídas por experiência, registro, método e atendimento nacional.
- Serviços tinham peso visual uniforme e muitos cards; reorganizados em uma oferta principal e três caminhos complementares.
- Depoimentos nominais foram removidos da interface pública por não haver fonte/autorização verificável no projeto; substituídos por uma explicação do método de atendimento.
- Blog funcionava como catálogo; reformulado com destaque editorial, filtros por categoria, imagens fotográficas, metadados, CTA e rodapé informativo.
- Artigos tinham leitura visual inconsistente; adicionada classe `blog-article` com títulos em negrito, espaçamento entre títulos e parágrafos, listas e blockquotes.
- Blog e artigos receberam breadcrumb, links de retorno para a homepage/blog e dados do escritório no rodapé.
- Página previdenciária recebeu hero em duas colunas com foto real e números sem fonte na seção de contexto foram trocados por benefícios concretos da análise.
- SEO global reforçado com H1 mais objetivo, palavras-chave, canonical, Open Graph, Twitter Card e JSON-LD `LegalService`.

## Validação

- `pnpm check`: aprovado.
- `pnpm build`: aprovado; permanece apenas o alerta de chunk JavaScript acima de 500 kB, sem falha de compilação.
- Rotas visualizadas: `/`, `/blog`, `/blog/auxilio-acidente-direitos` e `/previdenciario`.
