/**
 * Design: Advocacia Digital Contemporânea
 * Página individual de artigo do blog com conteúdo completo
 */
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

const articles: Record<string, Article> = {
  "aposentadoria-anticipada": {
    id: "aposentadoria-anticipada",
    title: "Aposentadoria Antecipada: Saiba se você tem direito",
    excerpt: "Entenda os critérios para aposentadoria antecipada e como o planejamento previdenciário pode antecipar sua aposentadoria em anos.",
    date: "15 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "5 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/office-interior-WjvXPx29Lxi3PJtChZXf4V.webp",
    content: `
      <h2>O que é Aposentadoria Antecipada?</h2>
      <p>A aposentadoria antecipada é um benefício previdenciário que permite ao trabalhador se aposentar antes de atingir a idade mínima estabelecida pela legislação. Existem várias modalidades de aposentadoria antecipada, cada uma com seus próprios critérios e requisitos.</p>

      <h2>Tipos de Aposentadoria Antecipada</h2>
      <h3>1. Aposentadoria por Tempo de Contribuição</h3>
      <p>Permite que o trabalhador se aposente após cumprir um período mínimo de contribuição ao INSS, independentemente da idade. Os requisitos variam conforme o gênero e a data de filiação ao INSS.</p>

      <h3>2. Aposentadoria Especial</h3>
      <p>Destinada a trabalhadores que exercem atividades em condições prejudiciais à saúde ou integridade física. Requer comprovação de exposição a agentes nocivos durante o período de trabalho.</p>

      <h3>3. Aposentadoria por Invalidez</h3>
      <p>Concedida ao segurado que se torna incapaz de exercer suas atividades laborais. Requer perícia médica do INSS para comprovação da incapacidade.</p>

      <h2>Critérios Essenciais</h2>
      <ul>
        <li><strong>Tempo de Contribuição:</strong> Varia de acordo com a modalidade, geralmente entre 25 e 35 anos.</li>
        <li><strong>Carência:</strong> Número mínimo de contribuições necessárias antes de requerer o benefício.</li>
        <li><strong>Filiação ao INSS:</strong> Deve estar regularizado e em dia com as contribuições.</li>
      </ul>

      <h2>Como o Planejamento Previdenciário Ajuda</h2>
      <p>Um planejamento previdenciário adequado pode antecipar sua aposentadoria em vários anos. Através de uma análise detalhada do seu histórico contributivo, é possível:</p>
      <ul>
        <li>Identificar oportunidades de aposentadoria que você não conhecia</li>
        <li>Otimizar o tempo de contribuição</li>
        <li>Maximizar o valor do seu benefício</li>
        <li>Evitar erros que prejudiquem seu direito</li>
      </ul>

      <h2>Passos para Solicitar</h2>
      <ol>
        <li>Consulte um especialista em direito previdenciário</li>
        <li>Reúna toda a documentação necessária</li>
        <li>Faça uma análise completa do seu histórico contributivo</li>
        <li>Protocole o pedido junto ao INSS</li>
        <li>Acompanhe o processo até a concessão do benefício</li>
      </ol>

      <h2>Conclusão</h2>
      <p>A aposentadoria antecipada é um direito que muitos trabalhadores desconhecem. Com o planejamento adequado, você pode se aposentar anos antes do previsto. Não deixe esse direito passar despercebido. Entre em contato conosco para uma análise gratuita do seu caso.</p>
    `,
  },
  "auxilio-acidente-direitos": {
    id: "auxilio-acidente-direitos",
    title: "Auxílio-Acidente: Conheça seus direitos e como solicitar",
    excerpt: "Guia completo sobre o auxílio-acidente, quem tem direito, como solicitar e quais documentos são necessários para o processo.",
    date: "12 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "6 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/team-meeting-WjvXPx29Lxi3PJtChZXf4V.webp",
    content: `
      <h2>O que é Auxílio-Acidente?</h2>
      <p>O auxílio-acidente é um benefício previdenciário destinado ao segurado que sofre um acidente de trabalho ou doença ocupacional e fica com sequelas que reduzem sua capacidade de trabalho. Diferente da aposentadoria por invalidez, o auxílio-acidente permite que o trabalhador continue exercendo suas atividades.</p>

      <h2>Quem tem Direito?</h2>
      <p>Tem direito ao auxílio-acidente o segurado que:</p>
      <ul>
        <li>Sofreu acidente de trabalho ou doença ocupacional</li>
        <li>Apresenta sequelas que reduzem sua capacidade de trabalho</li>
        <li>Está filiado ao INSS há pelo menos 12 meses</li>
        <li>Já recebeu auxílio-doença por mais de 15 dias</li>
      </ul>

      <h2>Como Solicitar</h2>
      <p>O processo de solicitação envolve os seguintes passos:</p>
      <ol>
        <li>Compareça ao INSS com a documentação necessária</li>
        <li>Solicite o agendamento para perícia médica</li>
        <li>Realize a perícia com o médico do INSS</li>
        <li>Aguarde a decisão do INSS</li>
      </ol>

      <h2>Documentos Necessários</h2>
      <ul>
        <li>Documento de identidade e CPF</li>
        <li>Carteira de trabalho</li>
        <li>Comprovante de residência</li>
        <li>Relatório médico descrevendo as sequelas</li>
        <li>Exames complementares</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Se você sofreu um acidente de trabalho e ficou com sequelas, você pode ter direito ao auxílio-acidente. Entre em contato conosco para uma análise do seu caso.</p>
    `,
  },
  "doenca-ocupacional-inss": {
    id: "doenca-ocupacional-inss",
    title: "Doença Ocupacional: Como comprovar e receber benefício do INSS",
    excerpt: "Saiba como comprovar uma doença ocupacional, quais são os procedimentos e como garantir seu direito ao benefício.",
    date: "8 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Trabalhista",
    readTime: "7 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/justice-abstract-WjvXPx29Lxi3PJtChZXf4V.webp",
    content: `
      <h2>O que é Doença Ocupacional?</h2>
      <p>Doença ocupacional é aquela que resulta da exposição a agentes nocivos durante o exercício da atividade profissional. Diferente do acidente de trabalho, a doença ocupacional desenvolve-se gradualmente.</p>

      <h2>Como Comprovar</h2>
      <p>Para comprovar uma doença ocupacional, você precisa de:</p>
      <ul>
        <li>Diagnóstico médico comprovado</li>
        <li>Histórico de exposição aos agentes nocivos</li>
        <li>Documentação do ambiente de trabalho</li>
        <li>Perícia técnica quando necessário</li>
      </ul>

      <h2>Benefícios Disponíveis</h2>
      <ul>
        <li>Auxílio-doença</li>
        <li>Aposentadoria por invalidez</li>
        <li>Auxílio-acidente</li>
        <li>Indenização por danos morais e materiais</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Se você desenvolveu uma doença ocupacional, você tem direitos que precisam ser protegidos. Consulte um especialista para garantir que você receba todos os benefícios que merece.</p>
    `,
  },
  "revisao-aposentadoria": {
    id: "revisao-aposentadoria",
    title: "Revisão da Aposentadoria: Como aumentar seu benefício",
    excerpt: "Descubra as possibilidades de revisão da aposentadoria e como um planejamento adequado pode aumentar significativamente seu benefício.",
    date: "5 de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "8 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/client-consultation-WjvXPx29Lxi3PJtChZXf4V.webp",
    content: `
      <h2>O que é Revisão da Aposentadoria?</h2>
      <p>A revisão da aposentadoria é um processo legal que permite ao aposentado requerer o recálculo do seu benefício, visando aumentar o valor mensal recebido.</p>

      <h2>Tipos de Revisão</h2>
      <ul>
        <li>Revisão da Vida Toda</li>
        <li>Revisão por Erro Administrativo</li>
        <li>Revisão por Mudança de Legislação</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Se você já é aposentado, pode ter direito a uma revisão que aumente seu benefício. Consulte-nos para uma análise gratuita.</p>
    `,
  },
  "direitos-trabalhador-demissao": {
    id: "direitos-trabalhador-demissao",
    title: "Direitos do Trabalhador na Demissão: O que você precisa saber",
    excerpt: "Conheça todos os seus direitos quando é demitido, incluindo indenizações, multa do FGTS e como recorrer de uma demissão injusta.",
    date: "1º de março de 2026",
    author: "Dr. Cândido Nüske",
    category: "Trabalhista",
    readTime: "6 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/hero-lawyer-WjvXPx29Lxi3PJtChZXf4V.webp",
    content: `
      <h2>Direitos na Demissão</h2>
      <p>Quando você é demitido, tem direitos que precisam ser respeitados. Conheça todos eles.</p>

      <h2>Conclusão</h2>
      <p>Se você foi demitido injustamente, você tem direitos. Entre em contato conosco para protegê-los.</p>
    `,
  },
  "planejamento-previdenciario-beneficios": {
    id: "planejamento-previdenciario-beneficios",
    title: "Planejamento Previdenciário: Os 5 benefícios que você não conhecia",
    excerpt: "Descubra como um planejamento previdenciário adequado pode economizar dinheiro e garantir uma aposentadoria tranquila.",
    date: "25 de fevereiro de 2026",
    author: "Dr. Cândido Nüske",
    category: "Previdenciário",
    readTime: "5 min",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/office-interior-WjvXPx29Lxi3PJtChZXf4V.webp",
    content: `
      <h2>Os 5 Benefícios do Planejamento Previdenciário</h2>
      <p>Descubra como um planejamento adequado pode transformar sua aposentadoria.</p>

      <h2>Conclusão</h2>
      <p>Não deixe sua aposentadoria ao acaso. Planeje agora e colha os benefícios no futuro.</p>
    `,
  },
};

export default function BlogArticle() {
  const params = useParams();
  const articleId = (params as any)?.id || "";
  const article = articles[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-navy mb-4">Artigo não encontrado</h1>
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="container">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </a>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-gold text-navy text-xs font-semibold px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <span>{article.readTime} de leitura</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="h-64 lg:h-96 overflow-hidden bg-ice">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
            <span className="text-sm font-semibold text-navy">Compartilhar:</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-ice flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Compartilhar no Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-navy">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${article.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-ice flex items-center justify-center hover:bg-gold/20 transition-colors"
              aria-label="Compartilhar no Twitter"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-navy">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/?text=${article.title}%20${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-ice flex items-center justify-center hover:bg-green-600/20 transition-colors"
              aria-label="Compartilhar no WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-600">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-12 lg:py-16 bg-ice">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-serif text-2xl lg:text-3xl text-navy mb-3">
              Precisa de Ajuda Profissional?
            </h2>
            <p className="text-muted-foreground text-base mb-6">
              Nossos especialistas estão prontos para analisar seu caso e encontrar a melhor solução jurídica.
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
