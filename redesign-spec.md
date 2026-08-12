# Redesign completo — Cândido Nüske Advocacia

## Diagnóstico

A versão atual tem boa base de identidade, mas ficou excessivamente fragmentada: hero com área vazia por causa da imagem recortada, muitos blocos claros sem função, estatísticas genéricas, excesso de cards com o mesmo peso visual, CTA repetido e pouca explicação imediata sobre o diferencial do escritório. O blog também funciona mais como catálogo do que como centro editorial, e alguns dados de contato são placeholders ou inconsistentes.

## Direção escolhida: autoridade serena

A nova interface seguirá uma estética editorial de advocacia contemporânea: fundo marfim e branco quente, azul-ink profundo, azul petróleo e um dourado discreto. O objetivo é transmitir clareza, experiência e proximidade sem aparência de template ou excesso de ornamento.

### Princípios

1. Uma mensagem principal por seção, com hierarquia clara e títulos curtos.
2. Menos cards; mais narrativa, prova de experiência e caminhos de decisão.
3. A foto real do Dr. Cândido será tratada como ativo central, sem cortes artificiais ou espaços vazios.
4. CTA contextual e objetivo: conversar sobre o caso, conhecer o planejamento ou ler um artigo.
5. Mobile como prioridade: conteúdo contínuo, paddings enxutos e imagens com altura automática.

## Arquitetura revisada

| Página | Função | Ação primária |
|---|---|---|
| Homepage | Explicar posicionamento e gerar confiança | Conversar no WhatsApp |
| Planejamento Previdenciário | Converter a demanda de maior valor | Solicitar análise |
| Blog | Organizar conhecimento por temas | Escolher um artigo |
| Artigo | Responder uma dúvida específica e gerar próximo passo | Falar com o escritório |

## Conteúdo e SEO

A homepage usará um H1 curto com as expressões "planejamento previdenciário", "aposentadoria" e "direito trabalhista" distribuídas naturalmente entre H1, subtítulo, serviços e links internos. Cada artigo terá título, resumo, categoria, data, tempo de leitura, breadcrumbs, compartilhamento, CTA, dados do escritório e link de retorno ao blog.

## Padrões técnicos

Todos os componentes devem evitar alturas fixas em containers de conteúdo. Imagens devem usar `height: auto`, `object-fit: contain` ou `object-fit: cover` apenas quando houver enquadramento controlado. Componentes interativos devem ter foco visível, labels acessíveis e estados de hover discretos. Links internos devem usar `Link` sem `<a>` aninhado.
