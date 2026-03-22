# Brainstorm de Design - Cândido Nüske Advocacia

<response>
<idea>

## Abordagem 1: "Autoridade Jurídica Clássica"

**Design Movement**: Neo-Classicismo Digital — inspira-se na sobriedade e imponência dos tribunais e escritórios tradicionais de advocacia, traduzidos para a linguagem digital moderna.

**Core Principles**:
1. Hierarquia visual rígida com tipografia serifada para títulos e sans-serif para corpo
2. Espaçamento generoso que transmite confiança e organização
3. Contraste deliberado entre seções claras e escuras para criar ritmo
4. Elementos geométricos angulares que ecoam o logotipo hexagonal da marca

**Color Philosophy**: Paleta baseada em azul-marinho profundo (#0B1D3A) como cor de autoridade, combinado com dourado sutil do logotipo original (#C4963C) para acentos de prestígio. Fundos alternados entre branco puro e um cinza-azulado muito claro (#F0F4F8). O dourado aparece apenas em detalhes — linhas divisórias, ícones e hover states — para não competir com o conteúdo.

**Layout Paradigm**: Layout assimétrico com blocos de conteúdo deslocados. O hero section usa uma composição diagonal onde o texto ocupa 55% à esquerda com alinhamento à esquerda, e uma imagem profissional ocupa 45% à direita com um recorte geométrico que ecoa o logo. Seções subsequentes alternam entre full-width com fundo escuro e conteúdo contido com fundo claro.

**Signature Elements**:
1. Linhas diagonais sutis inspiradas no ângulo do logotipo CN, usadas como divisores entre seções
2. Bordas douradas finas em cards e botões que aparecem no hover
3. Ícones com estilo line-art monocromático em azul-marinho

**Interaction Philosophy**: Interações contidas e profissionais. Hover states revelam bordas douradas. Botões têm transição suave de preenchimento. Scroll revela conteúdo com fade-in sutil, sem movimentos bruscos.

**Animation**: Entrada de elementos com fade-in + translate-y de 20px, duração 600ms, easing ease-out. Contadores numéricos animam de 0 ao valor final em 2s. Parallax sutil (5%) na imagem do hero. Cards de serviço têm elevação suave no hover (shadow cresce).

**Typography System**: 
- Títulos: "Playfair Display" (serif) — peso 700 para H1/H2, 600 para H3
- Corpo: "Source Sans 3" (sans-serif) — peso 400 para texto, 600 para destaques
- Subtítulos/labels: "Source Sans 3" em caixa alta com letter-spacing 2px

</idea>
<text>Uma abordagem clássica e sóbria que transmite autoridade jurídica através de tipografia serifada, paleta azul-marinho com acentos dourados e layout assimétrico com elementos geométricos inspirados no logotipo.</text>
<probability>0.07</probability>
</response>

<response>
<idea>

## Abordagem 2: "Advocacia Digital Contemporânea"

**Design Movement**: Corporate Modernism Brasileiro — fusão entre a estética clean de escritórios internacionais e a acessibilidade visual brasileira, com foco em clareza e conversão.

**Core Principles**:
1. Clareza absoluta na comunicação — cada seção tem um propósito direto
2. Fundo predominantemente branco com blocos de cor estratégicos
3. Tipografia sans-serif moderna com variações de peso para criar hierarquia
4. Cards e componentes com bordas suaves e sombras delicadas

**Color Philosophy**: Azul-petróleo escuro (#0C3547) como cor primária de texto e cabeçalhos, transmitindo seriedade sem ser opressivo. Azul médio (#1A6B8A) para CTAs e links. Fundo principal branco (#FFFFFF) com seções alternadas em cinza-gelo (#F7FAFB). Acentos em dourado-bronze (#B8860B) do logotipo aparecem em ícones e detalhes decorativos. Verde-azulado (#0D7377) para badges e indicadores de sucesso.

**Layout Paradigm**: Grid modular de 12 colunas com breakpoints responsivos. Hero section split 50/50 com texto à esquerda e imagem à direita. Seções de serviços em grid 3 colunas. Estatísticas em barra horizontal full-width com fundo diferenciado. Blog em grid assimétrico (1 grande + 2 pequenos).

**Signature Elements**:
1. Botões com cantos arredondados e preenchimento sólido azul com texto branco, hover escurece
2. Cards de serviço com borda superior colorida (4px) e ícone circular
3. Selo de confiança (Google Reviews, OAB) com design integrado ao hero

**Interaction Philosophy**: Interações responsivas e imediatas. Botões com scale(1.02) no hover. Cards com elevação progressiva. Menu mobile com slide-in suave. Scroll suave entre seções via âncoras.

**Animation**: Elementos entram com IntersectionObserver — fade-in + slide-up de 30px, stagger de 100ms entre itens de lista. Contadores com easing cubic-bezier. Header fixa com backdrop-blur ao scrollar. Botão WhatsApp pulsa suavemente.

**Typography System**:
- Títulos: "DM Sans" — peso 700 para H1, 600 para H2/H3
- Corpo: "DM Sans" — peso 400 para texto, 500 para destaques
- Labels/CTAs: "DM Sans" peso 600, tamanho menor

</idea>
<text>Estética corporativa moderna e limpa, inspirada diretamente no layout da Arraes & Centeno, com paleta azul-petróleo, cards com bordas coloridas e tipografia DM Sans. Foco em clareza, conversão e acessibilidade.</text>
<probability>0.08</probability>
</response>

<response>
<idea>

## Abordagem 3: "Minimalismo Estrutural Geométrico"

**Design Movement**: Swiss-Brutalist Refinado — inspirado no design suíço com toques de brutalismo tipográfico, onde a geometria do logotipo CN dita toda a linguagem visual.

**Core Principles**:
1. A forma hexagonal/angular do logotipo CN como DNA visual de todo o site
2. Tipografia como elemento gráfico — tamanhos extremos para criar impacto
3. Espaço negativo como protagonista do design
4. Monocromia com um único acento de cor

**Color Philosophy**: Preto (#111111) e branco (#FAFAFA) como base absoluta, com o dourado do logotipo (#C4963C) como única cor de acento. Gradientes sutis de cinza (#E5E5E5 a #F5F5F5) para separar seções. O dourado aparece em elementos interativos, linhas e detalhes que guiam o olhar.

**Layout Paradigm**: Layout em blocos maciços com alinhamento à esquerda dominante. Hero section ocupa viewport inteira com texto gigante sobreposto a uma imagem com overlay escuro. Seções usam composição em Z — alternando conteúdo esquerda/direita. Grid assimétrico 7/5 para seções de conteúdo.

**Signature Elements**:
1. Padrão geométrico derivado do logotipo CN usado como textura de fundo em seções escuras
2. Linhas angulares de 60° (ângulo do hexágono) como divisores e decorações
3. Números estatísticos em tamanho display (120px+) com peso ultra-bold

**Interaction Philosophy**: Interações precisas e mecânicas. Hover revela underlines animados. Cursor customizado em seções interativas. Transições com timing functions lineares para sensação de precisão.

**Animation**: Clip-path reveals para imagens. Texto aparece letra por letra em títulos principais. Scroll-triggered animations com threshold preciso. Parallax em camadas (foreground/background) para profundidade.

**Typography System**:
- Títulos: "Space Grotesk" — peso 700, tamanhos grandes (48-72px)
- Corpo: "Space Grotesk" — peso 400, 16-18px
- Display/Stats: "Space Grotesk" peso 700, 96-120px

</idea>
<text>Abordagem brutalista-suíça refinada onde a geometria do logotipo CN dita toda a linguagem visual. Monocromia preto/branco com acentos dourados, tipografia como elemento gráfico e composições angulares.</text>
<probability>0.05</probability>
</response>
