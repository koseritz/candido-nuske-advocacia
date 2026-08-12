/**
 * Design: autoridade serena — blog editorial com destaque, filtros simples e caminhos claros.
 */
import { useEffect, useMemo, useState } from "react";
import { Calendar, Clock3, ArrowRight, BookOpen } from "lucide-react";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import BlogFooter from "@/components/BlogFooter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "aposentadoria-anticipada",
    title: "Aposentadoria Antecipada: Saiba se você tem direito",
    excerpt: "Entenda os critérios para aposentadoria antecipada e como o planejamento previdenciário pode orientar uma decisão mais segura.",
    date: "15 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "5 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-aposentadoria-antecipada-real-7UWURce28Sdibe2mG2Fv8h.webp",
  },
  {
    id: "auxilio-acidente-direitos",
    title: "Auxílio-Acidente: Conheça seus direitos e como solicitar",
    excerpt: "Guia completo sobre auxílio-acidente, requisitos, documentação e pontos que costumam gerar dúvidas.",
    date: "12 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "6 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-auxilio-acidente-real-3PSaWH6MSa3BxmdWyq9djJ.webp",
  },
  {
    id: "doenca-ocupacional-inss",
    title: "Doença Ocupacional: Como comprovar e receber benefício do INSS",
    excerpt: "Saiba como organizar documentos e demonstrar a relação entre a doença e a atividade profissional.",
    date: "8 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Trabalhista",
    readTime: "7 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-doenca-ocupacional-real-4jVcyNrfAKzG2syRKKNj69.webp",
  },
  {
    id: "revisao-aposentadoria",
    title: "Revisão da Aposentadoria: Como avaliar seu benefício",
    excerpt: "Conheça situações que podem justificar uma análise de revisão e quais documentos ajudam na investigação.",
    date: "5 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "8 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-revisao-aposentadoria-real-NafmZBkv3r5ZM8udNSBRmA.webp",
  },
  {
    id: "direitos-trabalhador-demissao",
    title: "Direitos do Trabalhador na Demissão: O que você precisa saber",
    excerpt: "Um panorama dos principais pontos para revisar quando o vínculo de trabalho chega ao fim.",
    date: "1º de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Trabalhista",
    readTime: "6 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-direitos-trabalhador-real-PaTqye6ewSuR9j7iRuoFVF.webp",
  },
  {
    id: "planejamento-previdenciario-beneficios",
    title: "Planejamento Previdenciário: 5 benefícios de olhar antes",
    excerpt: "Como uma análise previdenciária pode organizar escolhas, prazos, contribuições e expectativas de aposentadoria.",
    date: "25 de fevereiro de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "5 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-beneficios-planejamento-real-GRfW7KEPToKkcUWrYbDtrY.webp",
  },
];

const categories = ["Todos", "Previdenciário", "Trabalhista"];

function ArticleCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white ${featured ? "lg:grid lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
      <div className="overflow-hidden bg-ice">
        <img src={post.image} alt={post.title} className="block h-auto max-h-[40vh] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className={`flex flex-col ${featured ? "p-6 sm:p-8 lg:p-10" : "p-5"}`}>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          {post.category}
        </div>
        <h2 className={`mt-4 font-serif leading-tight text-navy ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{post.title}</h2>
        <p className="mt-4 text-sm leading-6 text-navy/60">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-navy/45">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
          <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" /> {post.readTime}</span>
        </div>
        <a href={`/blog/${post.id}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
          Ler artigo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    document.title = "Blog de Direito Previdenciário e Trabalhista | Cândido Nüske";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", "Artigos sobre planejamento previdenciário, aposentadoria, auxílio-acidente e direitos do trabalhador, escritos por Dr. Cândido Nüske.");
  }, []);
  const filteredPosts = useMemo(
    () => activeCategory === "Todos" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory],
  );
  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <div className="flex min-h-screen flex-col bg-[#fbfaf7]">
      <BlogBreadcrumb items={[]} />
      <main className="flex-1">
        <section className="bg-navy py-14 text-white sm:py-18 lg:py-24">
          <div className="container">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Conteúdo para decidir melhor</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Blog jurídico sobre previdência e trabalho</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">Informação organizada para quem precisa entender aposentadoria, planejamento previdenciário, auxílio-acidente e direitos do trabalhador.</p>
          </div>
        </section>

        <section className="container py-10 sm:py-12 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy/10 pb-5">
            <p className="text-sm text-navy/55">Artigos assinados por Dr. Cândido Nüske</p>
            <div className="flex flex-wrap gap-2" aria-label="Filtrar artigos por categoria">
              {categories.map((category) => (
                <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${activeCategory === category ? "bg-navy text-white" : "border border-navy/15 text-navy hover:border-gold hover:text-gold"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {featured ? (
            <div className="mt-8">
              <ArticleCard post={featured} featured />
              {rest.length > 0 && <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{rest.map((post) => <ArticleCard key={post.id} post={post} />)}</div>}
            </div>
          ) : (
            <p className="py-16 text-center text-navy/55">Nenhum artigo encontrado nesta categoria.</p>
          )}
        </section>

        <section className="bg-[#f3eee3] py-12 sm:py-14">
          <div className="container flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Ainda ficou alguma dúvida?</p>
              <h2 className="mt-2 font-serif text-3xl text-navy">Converse com o escritório sobre o seu contexto.</h2>
            </div>
            <a href="https://wa.me/5551992851828?text=Olá%2C%20vim%20pelo%20blog%20e%20gostaria%20de%20orientação." target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white hover:bg-petrol">Falar pelo WhatsApp <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  );
}
