# Análise de Layout de Blog - Concorrentes

## Arraes & Centeno Advocacia (arraesecenteno.com.br/blog)

### Características Observadas:
1. **Página de Listagem:**
   - Cards com imagem, título, data, autor, excerpt
   - Espaçamento generoso entre cards
   - Botão "Ler mais" em cada card
   - Sidebar com CTA (YouTube, Instagram)

2. **Tipografia:**
   - Títulos em azul escuro (navy)
   - Subtítulos e metadados em cinza
   - Boa hierarquia visual

3. **Espaçamento:**
   - Margem superior/inferior entre seções
   - Padding interno nos cards
   - Espaço visual bem distribuído

---

## Robson Gonçalves Advocacia (robsongoncalves.adv.br/blog)

### Características Observadas:
1. **Página de Listagem:**
   - Hero section com "BLOG" em grande destaque
   - Cards com imagem à esquerda, conteúdo à direita
   - Data e resumo do artigo
   - Fundo escuro na hero section

2. **Tipografia:**
   - Títulos em preto/escuro, em negrito
   - Subtítulos em cinza
   - Boa legibilidade

3. **Espaçamento:**
   - Espaço generoso entre cards
   - Padding interno bem definido
   - Separação clara entre elementos

---

## Recomendações para Cândido Nüske Advocacia

### 1. **Títulos (H2, H3)**
   - ✅ SEMPRE em negrito (`<strong>` ou `font-weight: bold`)
   - ✅ Cor: Navy (#1a3a52) ou similar
   - ✅ Tamanho: H2 = 24-28px, H3 = 20-24px
   - ✅ Margin-top: 24px (espaço antes do título)
   - ✅ Margin-bottom: 12px (espaço depois do título)

### 2. **Parágrafos**
   - ✅ Margin-bottom: 16px (espaço entre parágrafos)
   - ✅ Line-height: 1.6-1.8 (legibilidade)
   - ✅ Font-size: 16px (body)
   - ✅ Cor: #333 ou #444 (texto escuro)

### 3. **Listas (UL, OL)**
   - ✅ Margin-top: 12px
   - ✅ Margin-bottom: 16px
   - ✅ Padding-left: 24px
   - ✅ List-item margin-bottom: 8px

### 4. **Citações/Blockquotes**
   - ✅ Margin: 24px 0
   - ✅ Padding-left: 16px
   - ✅ Border-left: 4px solid #gold
   - ✅ Background: #f9f9f9
   - ✅ Font-style: italic

### 5. **Espaçamento Geral**
   - ✅ Margin-top entre seções: 24-32px
   - ✅ Padding interno: 16-24px
   - ✅ Max-width do conteúdo: 800px

---

## Template HTML Padrão para Artigos

```html
<article class="blog-article">
  <header>
    <h1>Título do Artigo</h1>
    <div class="article-meta">
      <span class="date">Data</span>
      <span class="author">Autor</span>
      <span class="read-time">Tempo de leitura</span>
    </div>
  </header>

  <div class="article-content">
    <h2>Seção Principal</h2>
    <p>Parágrafo introdutório...</p>

    <h3>Subseção</h3>
    <p>Parágrafo com conteúdo...</p>

    <blockquote>
      <p>Citação importante com aspas</p>
    </blockquote>

    <ul>
      <li>Ponto 1</li>
      <li>Ponto 2</li>
    </ul>

    <h2>Próxima Seção</h2>
    <p>Mais conteúdo...</p>
  </div>

  <footer>
    <!-- Compartilhamento social -->
  </footer>
</article>
```

---

## CSS Padrão para Artigos

```css
.blog-article h2 {
  font-weight: bold;
  font-size: 24px;
  color: #1a3a52;
  margin-top: 24px;
  margin-bottom: 12px;
}

.blog-article h3 {
  font-weight: bold;
  font-size: 20px;
  color: #1a3a52;
  margin-top: 20px;
  margin-bottom: 12px;
}

.blog-article p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 16px;
}

.blog-article ul,
.blog-article ol {
  margin-top: 12px;
  margin-bottom: 16px;
  padding-left: 24px;
}

.blog-article li {
  margin-bottom: 8px;
}

.blog-article blockquote {
  margin: 24px 0;
  padding-left: 16px;
  border-left: 4px solid #d4af37;
  background: #f9f9f9;
  font-style: italic;
  color: #555;
}
```

---

## Próximas Ações

1. ✅ Criar um Skill "blog-layout-standards" com essas configurações
2. ✅ Aplicar o padrão a todos os artigos existentes
3. ✅ Usar o Skill como template para novos artigos
4. ✅ Documentar no README do projeto
