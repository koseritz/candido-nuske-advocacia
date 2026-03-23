/**
 * Design: Advocacia Digital Contemporânea
 * Página de Blog com grid de artigos sobre direito previdenciário e trabalhista
 */
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

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
    excerpt: "Entenda os critérios para aposentadoria antecipada e como o planejamento previdenciário pode antecipar sua aposentadoria em anos.",
    date: "15 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "5 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/office-interior-WjvXPx29Lxi3PJtChZXf4V.webp",
  },
  {
    id: "auxilio-acidente-direitos",
    title: "Auxílio-Acidente: Conheça seus direitos e como solicitar",
    excerpt: "Guia completo sobre o auxílio-acidente, quem tem direito, como solicitar e quais documentos são necessários para o processo.",
    date: "12 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "6 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/team-meeting-WjvXPx29Lxi3PJtChZXf4V.webp",
  },
  {
    id: "doenca-ocupacional-inss",
    title: "Doença Ocupacional: Como comprovar e receber benefício do INSS",
    excerpt: "Saiba como comprovar uma doença ocupacional, quais são os procedimentos e como garantir seu direito ao benefício.",
    date: "8 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Trabalhista",
    readTime: "7 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/justice-abstract-WjvXPx29Lxi3PJtChZXf4V.webp",
  },
  {
    id: "revisao-aposentadoria",
    title: "Revisão da Aposentadoria: Como aumentar seu benefício",
    excerpt: "Descubra as possibilidades de revisão da aposentadoria e como um planejamento adequado pode aumentar significativamente seu benefício.",
    date: "5 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "8 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/client-consultation-WjvXPx29Lxi3PJtChZXf4V.webp",
  },
  {
    id: "direitos-trabalhador-demissao",
    title: "Direitos do Trabalhador na Demissão: O que você precisa saber",
    excerpt: "Conheça todos os seus direitos quando é demitido, incluindo indenizações, multa do FGTS e como recorrer de uma demissão injusta.",
    date: "1º de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Trabalhista",
    readTime: "6 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/hero-lawyer-WjvXPx29Lxi3PJtChZXf4V.webp",
  },
  {
    id: "planejamento-previdenciario-beneficios",
    title: "Planejamento Previdenciário: Os 5 benefícios que você não conhecia",
    excerpt: "Descubra como um planejamento previdenciário adequado pode economizar dinheiro e garantir uma aposentadoria tranquila.",
    date: "25 de fevereiro de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "5 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/office-interior-WjvXPx29Lxi3PJtChZXf4V.webp",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-xs lg:text-sm font-semibold uppercase tracking-widest mb-3">
              Blog & Artigos
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl mb-4 leading-tight">
              Conhecimento Jurídico ao seu Alcance
            </h1>
            <p className="text-white/70 text-base lg:text-lg">
              Artigos, dicas e orientações sobre direito previdenciário, trabalhista e consultoria jurídica para proteger seus direitos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-ice">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-gold text-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 lg:p-5">
                  <h3 className="font-serif text-lg lg:text-xl text-navy mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                      <span className="text-gold">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={`/blog/${post.id}`}>
                    <a className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors group/link">
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-ice">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl lg:text-3xl text-navy mb-3">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="text-muted-foreground text-base mb-6">
              Nossos especialistas estão prontos para analisar seu caso e encontrar a melhor solução jurídica para você.
            </p>
            <a
              href="https://wa.me/5551992851828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy/90 transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale Conosco no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
