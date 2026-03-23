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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-aposentadoria-antecipada-real-7UWURce28Sdibe2mG2Fv8h.webp",
    content: `
      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>O que é Aposentadoria Antecipada?</strong></h2>
      <p style="margin-bottom: 16px;">A aposentadoria antecipada é um benefício previdenciário que permite ao trabalhador se aposentar antes de atingir a idade mínima estabelecida pela legislação. Existem várias modalidades de aposentadoria antecipada, cada uma com seus próprios critérios e requisitos.</p>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Tipos de Aposentadoria Antecipada</strong></h2>
      <h3 style="margin-top: 20px; margin-bottom: 12px;"><strong>1. Aposentadoria por Tempo de Contribuição</strong></h3>
      <p style="margin-bottom: 16px;">Permite que o trabalhador se aposente após cumprir um período mínimo de contribuição ao INSS, independentemente da idade. Os requisitos variam conforme o gênero e a data de filiação ao INSS.</p>

      <h3 style="margin-top: 20px; margin-bottom: 12px;"><strong>2. Aposentadoria Especial</strong></h3>
      <p style="margin-bottom: 16px;">Destinada a trabalhadores que exercem atividades em condições prejudiciais à saúde ou integridade física. Requer comprovação de exposição a agentes nocivos durante o período de trabalho.</p>

      <h3 style="margin-top: 20px; margin-bottom: 12px;"><strong>3. Aposentadoria por Invalidez</strong></h3>
      <p style="margin-bottom: 16px;">Concedida ao segurado que se torna incapaz de exercer suas atividades laborais. Requer perícia médica do INSS para comprovação da incapacidade.</p>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Critérios Essenciais</strong></h2>
      <ul style="margin-top: 12px; margin-bottom: 16px; padding-left: 24px;">
        <li style="margin-bottom: 8px;"><strong>Tempo de Contribuição:</strong> Varia de acordo com a modalidade, geralmente entre 25 e 35 anos.</li>
        <li style="margin-bottom: 8px;"><strong>Carência:</strong> Número mínimo de contribuições necessárias antes de requerer o benefício.</li>
        <li style="margin-bottom: 8px;"><strong>Filiação ao INSS:</strong> Deve estar regularizado e em dia com as contribuições.</li>
      </ul>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Como o Planejamento Previdenciário Ajuda</strong></h2>
      <p style="margin-bottom: 16px;">Um planejamento previdenciário adequado pode antecipar sua aposentadoria em vários anos. Através de uma análise detalhada do seu histórico contributivo, é possível:</p>
      <ul style="margin-top: 12px; margin-bottom: 16px; padding-left: 24px;">
        <li style="margin-bottom: 8px;">Identificar oportunidades de aposentadoria que você não conhecia</li>
        <li style="margin-bottom: 8px;">Otimizar o tempo de contribuição</li>
        <li style="margin-bottom: 8px;">Maximizar o valor do seu benefício</li>
        <li style="margin-bottom: 8px;">Evitar erros que prejudiquem seu direito</li>
      </ul>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Passos para Solicitar</strong></h2>
      <ol style="margin-top: 12px; margin-bottom: 16px; padding-left: 24px;">
        <li style="margin-bottom: 8px;">Consulte um especialista em direito previdenciário</li>
        <li style="margin-bottom: 8px;">Reúna toda a documentação necessária</li>
        <li style="margin-bottom: 8px;">Faça uma análise completa do seu histórico contributivo</li>
        <li style="margin-bottom: 8px;">Protocole o pedido junto ao INSS</li>
        <li style="margin-bottom: 8px;">Acompanhe o processo até a concessão do benefício</li>
      </ol>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Conclusão</strong></h2>
      <p style="margin-bottom: 16px;">A aposentadoria antecipada é um direito que muitos trabalhadores desconhecem. Com o planejamento adequado, você pode se aposentar anos antes do previsto. Não deixe esse direito passar despercebido. Entre em contato conosco para uma análise gratuita do seu caso.</p>
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-auxilio-acidente-real-3PSaWH6MSa3BxmdWyq9djJ.webp",
    content: `<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>1. O Infortúnio que Não Avisa e o Direito que Poucos Usam</strong></h2>
<p style="margin-bottom: 16px;">Imagine a seguinte situação: um domingo de lazer em família termina em um acidente doméstico ou em uma colisão no trânsito. O susto imediato passa, mas a recuperação deixa uma marca permanente — uma limitação no movimento do braço, uma perda de força ou um desgaste que antes não existia. Para muitos brasileiros, esse é o fim da história. No entanto, o que a maioria desconhece é que essas sequelas podem gerar um direito a uma compensação financeira mensal de longo prazo. O erro mais comum é acreditar que esse benefício, chamado auxílio-acidente, serve apenas para quem se machuca "dentro da empresa". A verdade é que este é um dos recursos mais estratégicos da Previdência Social, funcionando como um amparo que pode durar décadas, cessando apenas com a jubilação (aposentadoria) ou óbito.</p>

<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>2. Não é só sobre trabalho: O "Acidente de Qualquer Natureza"</strong></h2>
<p style="margin-bottom: 16px;">Desde a promulgação da Lei 8.213/1991, o auxílio-acidente deixou de ser restrito ao ambiente laboral. Hoje, a proteção abrange o chamado "acidente de qualquer natureza", o que inclui incidentes ocorridos em casa, no lazer, em atividades esportivas ou no trânsito. O fator determinante para o INSS não é o local ou a hora do evento, mas sim a natureza da lesão: ela deve ser traumática ou súbita.</p>
<p style="margin-bottom: 16px;">É importante destacar que o benefício também cobre as chamadas doenças do trabalho ou ocupacionais (como a LER/DORT), desde que comprovado o nexo causal entre a atividade e a sequela. Isso diferencia o acidente das doenças puramente degenerativas, que não dão direito a este benefício específico. Essa expansão do direito, que passou a incluir também os empregados domésticos em 2015 (através da Lei Complementar 150), reflete o conceito de justiça social da Constituição de 1988, protegendo o indivíduo contra o risco social da perda de integridade física, independentemente da origem do trauma.</p>

<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>3. O Benefício que Você Recebe Enquanto Trabalha</strong></h2>
<p style="margin-bottom: 16px;">Uma das características mais fundamentais do auxílio-acidente é a sua natureza indenizatória. Ao contrário do auxílio por incapacidade temporária (antigo auxílio-doença), que visa substituir o seu salário enquanto você está afastado, o auxílio-acidente é uma compensação. Isso significa que o segurado pode — e deve — continuar trabalhando e recebendo seu salário normalmente enquanto recebe o benefício do INSS.</p>
<p style="margin-bottom: 16px;"><strong>"Diferente de outras prestações previdenciárias que visam substituir o rendimento do trabalho, o auxílio-acidente coexiste com o salário, funcionando como uma compensação financeira pela redução da eficiência laborativa."</strong></p>
<p style="margin-bottom: 16px;">O valor não é suspenso pelo retorno ao trabalho e, por ser uma indenização, não é tributado pelo Imposto de Renda, funcionando como um reforço financeiro pelo maior esforço que o trabalhador agora precisa despender para realizar suas funções.</p>

<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>4. Sem Tempo de Espera: A Isenção de Carência</strong></h2>
<p style="margin-bottom: 16px;">Para a maioria dos benefícios do INSS, exige-se um número mínimo de contribuições (carência). No auxílio-acidente, vigora a regra da "carência zero". Se um trabalhador sofrer um acidente logo no seu primeiro dia de emprego formal, ele já possui cobertura previdenciária.</p>
<p style="margin-bottom: 16px;">Essa segurança é fundamental e se estende inclusive para quem está no "período de graça". Esse é o intervalo (que varia de 12 a 36 meses) no qual o trabalhador mantém todos os seus direitos perante o INSS mesmo após parar de contribuir, seja por desemprego ou término de contrato. Se o acidente ocorrer dentro dessa janela de proteção, o direito à indenização permanece intacto.</p>

<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>5. Até a Perda Mínima Conta: O Entendimento do STJ</strong></h2>
<p style="margin-bottom: 16px;">Muitos segurados deixam de buscar o benefício por acreditarem que sua sequela é "pequena demais" para ser indenizada. No entanto, o entendimento consolidado do Superior Tribunal de Justiça (STJ), através do Tema Repetitivo 156, encerrou anos de discussões judiciais: não importa o percentual da sequela. Se houve redução da capacidade laborativa ou se o trabalhador precisa de maior esforço para realizar as mesmas tarefas, o direito existe.</p>
<p style="margin-bottom: 16px;">A perícia médica analisa o contexto profissional. A perda de um dedo tem um impacto funcional devastador para um cirurgião ou um pianista, enquanto para um gestor administrativo o impacto biomecânico é diferente. O que a lei protege não é apenas a integridade física em si, mas a perda da funcionalidade em relação à profissão que o segurado exercia no momento do trauma.</p>

<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>6. Um Investimento na Aposentadoria Futura</strong></h2>
<p style="margin-bottom: 16px;">O auxílio-acidente é um benefício estratégico para a estabilidade econômica a longo prazo. O valor corresponde a 50% do salário-de-benefício — que, após a Reforma da Previdência de 2019 (EC 103), é calculado com base na média aritmética de 100% de todas as contribuições do segurado desde julho de 1994.</p>
<p style="margin-bottom: 16px;">A grande vantagem é que o valor mensal do auxílio-acidente integra o salário de contribuição para fins de cálculo de aposentadoria futura. Funciona em uma lógica de "benefício-sobre-benefício": se você recebe um salário de R\$ 3.000,00 e um auxílio-acidente de R\$ 1.500,00, o INSS considerará que sua base de contribuição é de R\$ 4.500,00. No momento de se aposentar, sua média será muito superior. É importante esclarecer que o trabalhador não paga INSS sobre o valor do auxílio; essa integração é um bônus legal que eleva o valor final da sua futura aposentadoria.</p>

<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>7. O Lado B: Quem Fica de Fora da Proteção?</strong></h2>
<p style="margin-bottom: 16px;">Apesar de sua importância social, a legislação brasileira ainda exclui certas categorias, o que é alvo de fortes críticas doutrinárias. Atualmente, não possuem direito ao auxílio-acidente:</p>
<ul style="margin-top: 12px; margin-bottom: 16px; padding-left: 24px;">
<li style="margin-bottom: 8px;"><strong>Contribuintes Individuais:</strong> Autônomos, profissionais liberais e empresários.</li>
<li style="margin-bottom: 8px;"><strong>Segurados Facultativos:</strong> Estudantes ou donas de casa que contribuem por conta própria.</li>
</ul>
<p style="margin-bottom: 16px;">A justificativa estatal para essa exclusão reside na "ausência de fonte de custeio específica" e na dificuldade de fiscalização da redução da capacidade funcional nesses grupos. Para os juristas, essa distinção fere a isonomia, já que o risco de um acidente impactar a vida laboral é igual para todos os trabalhadores.</p>

<h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>8. Conclusão: Cidadania e Vigilância</strong></h2>
<p style="margin-bottom: 16px;">É vital compreender dois marcos temporais importantes: o auxílio-acidente é pago até a véspera da aposentadoria. Desde 1997 (Lei 9.528), é proibido acumular os dois valores, exceto para acidentes ocorridos antes daquela data, em respeito ao direito adquirido. Portanto, o benefício funciona como uma ponte financeira até o momento da sua jubilação.</p>
<p style="margin-bottom: 16px;">O auxílio-acidente não é uma caridade, mas um direito garantido pela sua qualidade de segurado. Para buscá-lo, o passo inicial é organizar seu Prontuário Médico de Evolução — o documento que detalha todo o histórico do seu tratamento e a consolidação da lesão. Revise seus laudos e históricos de acidentes passados; a justiça social começa com a sua vigilância.</p>
<p style="margin-bottom: 16px;"><strong>Se a lei reconhece que seu esforço agora é maior para realizar as mesmas tarefas, por que você ainda não buscou a compensação que é sua por direito?</strong></p>`,
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
      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>O que é Doença Ocupacional?</strong></h2>
      <p style="margin-bottom: 16px;">Doença ocupacional é aquela que resulta da exposição a agentes nocivos durante o exercício da atividade profissional. Diferente do acidente de trabalho, a doença ocupacional desenvolve-se gradualmente.</p>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Como Comprovar</strong></h2>
      <p style="margin-bottom: 16px;">Para comprovar uma doença ocupacional, você precisa de:</p>
      <ul style="margin-top: 12px; margin-bottom: 16px; padding-left: 24px;">
        <li style="margin-bottom: 8px;">Diagnóstico médico comprovado</li>
        <li style="margin-bottom: 8px;">Histórico de exposição aos agentes nocivos</li>
        <li style="margin-bottom: 8px;">Documentação do ambiente de trabalho</li>
        <li style="margin-bottom: 8px;">Perícia técnica quando necessário</li>
      </ul>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Benefícios Disponíveis</strong></h2>
      <ul style="margin-top: 12px; margin-bottom: 16px; padding-left: 24px;">
        <li style="margin-bottom: 8px;">Auxílio-doença</li>
        <li style="margin-bottom: 8px;">Aposentadoria por invalidez</li>
        <li style="margin-bottom: 8px;">Auxílio-acidente</li>
        <li style="margin-bottom: 8px;">Indenização por danos morais e materiais</li>
      </ul>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Conclusão</strong></h2>
      <p style="margin-bottom: 16px;">Se você desenvolveu uma doença ocupacional, você tem direitos que precisam ser protegidos. Consulte um especialista para garantir que você receba todos os benefícios que merece.</p>
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-revisao-aposentadoria-real-NafmZBkv3r5ZM8udNSBRmA.webp",
    content: `
      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>O que é Revisão da Aposentadoria?</strong></h2>
      <p style="margin-bottom: 16px;">A revisão da aposentadoria é um processo legal que permite ao aposentado requerer o recálculo do seu benefício, visando aumentar o valor mensal recebido.</p>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Tipos de Revisão</strong></h2>
      <ul style="margin-top: 12px; margin-bottom: 16px; padding-left: 24px;">
        <li style="margin-bottom: 8px;">Revisão da Vida Toda</li>
        <li style="margin-bottom: 8px;">Revisão por Erro Administrativo</li>
        <li style="margin-bottom: 8px;">Revisão por Mudança de Legislação</li>
      </ul>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Conclusão</strong></h2>
      <p style="margin-bottom: 16px;">Se você já é aposentado, pode ter direito a uma revisão que aumente seu benefício. Consulte-nos para uma análise gratuita.</p>
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-direitos-trabalhador-real-PaTqye6ewSuR9j7iRuoFVF.webp",
    content: `
      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Direitos na Demissão</strong></h2>
      <p style="margin-bottom: 16px;">Quando você é demitido, tem direitos que precisam ser respeitados. Conheça todos eles.</p>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Conclusão</strong></h2>
      <p style="margin-bottom: 16px;">Se você foi demitido injustamente, você tem direitos. Entre em contato conosco para protegê-los.</p>
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
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/blog-beneficios-planejamento-real-GRfW7KEPToKkcUWrYbDtrY.webp",
    content: `
      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Os 5 Benefícios do Planejamento Previdenciário</strong></h2>
      <p style="margin-bottom: 16px;">Descubra como um planejamento adequado pode transformar sua aposentadoria.</p>

      <h2 style="margin-top: 24px; margin-bottom: 12px;"><strong>Conclusão</strong></h2>
      <p style="margin-bottom: 16px;">Não deixe sua aposentadoria ao acaso. Planeje agora e colha os benefícios no futuro.</p>
    `,
  },
};

export default function BlogArticle() {
  const params = useParams();
  const articleId = (params as any)?.id || "";
  const article = articles[articleId];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl text-navy mb-4">Artigo não encontrado</h1>
        <a href="/blog" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Blog
        </a>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white pt-12 lg:pt-16 pb-8 lg:pb-12">
        <div className="container">
          <a href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </a>
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
          <div className="mt-12 pt-8 border-t border-border">
            <span className="text-sm font-semibold text-navy block mb-4">Compartilhar este artigo:</span>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice hover:bg-blue-100 transition-colors text-sm font-medium text-navy"
                aria-label="Compartilhar no Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-navy">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${article.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice hover:bg-blue-100 transition-colors text-sm font-medium text-navy"
                aria-label="Compartilhar no Twitter"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-navy">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice hover:bg-blue-100 transition-colors text-sm font-medium text-navy"
                aria-label="Compartilhar no LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-navy">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice hover:bg-green-100 transition-colors text-sm font-medium text-green-600"
                aria-label="Compartilhar no WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-600">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
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
