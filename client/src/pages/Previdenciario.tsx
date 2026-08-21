/*
 * Design: Advocacia Digital Contemporânea
 * Página de Planejamento Previdenciário — rota /previdenciario
 * Paleta: navy, petrol, gold, ice | Tipografia: DM Sans + DM Serif Display
 * Conteúdo adaptado da apresentação HTML original fornecida pelo cliente
 */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  FileText,
  Calendar,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  Star,
} from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/Logotipo_Dr_Cândido_Nuske_adv_preto_13100e13.webp";
const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/Logotipo_Dr_Cândido_Nuske_adv_simp_branco_4af1dae0.webp";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/candido-photo-nobg_57466052.png";
const OFFICE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/office-interior-3J3tza3LGJVDXFjKGCLstJ.webp";

/* ─── Animated Counter ─── */
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

/* ─── Scenario Tabs ─── */
function ScenarioTabs() {
  const [active, setActive] = useState(0);

  const tabs = [
    { label: "Cenário 1 — Contribuição Atual", id: 0 },
    { label: "Cenário 2 — Teto INSS", id: 1 },
    { label: "Cenário 3 — Comparativo", id: 2 },
  ];

  const scenarios = [
    {
      title: "Aposentadoria com contribuição atual",
      subtitle: "Mantendo a contribuição mensal atual de R$ 310,64",
      items: [
        { key: "Data de aposentadoria", value: "30/04/2041", highlight: true },
        { key: "Idade ao se aposentar", value: "63 anos e 3 meses", highlight: false },
        { key: "Benefício mensal estimado", value: "R$ 3.107,59", highlight: true },
        { key: "Total investido até lá", value: "R$ 60.885,44", highlight: false },
        { key: "Retorno total até 78 anos", value: "R$ 601.525,84", highlight: true },
        { key: "Retorno sobre investimento", value: "20 meses", highlight: false },
      ],
    },
    {
      title: "Aposentadoria contribuindo no teto",
      subtitle: "Elevando para R$ 897,32/mês (teto do INSS com alíquota 11%)",
      items: [
        { key: "Data de aposentadoria", value: "30/04/2041", highlight: true },
        { key: "Idade ao se aposentar", value: "63 anos e 3 meses", highlight: false },
        { key: "Benefício mensal estimado", value: "R$ 5.229,22", highlight: true },
        { key: "Total investido até lá", value: "R$ 175.874,72", highlight: false },
        { key: "Retorno total até 78 anos", value: "R$ 1.012.202,69", highlight: true },
        { key: "Retorno sobre investimento", value: "34 meses", highlight: false },
      ],
    },
    {
      title: "INSS no teto vs Tesouro Direto IPCA+",
      subtitle:
        "Comparativo: e se investisse os R$ 600/mês extras no Tesouro ao invés do INSS?",
      items: [
        { key: "Investimento no INSS (extra)", value: "R$ 114.989,28", highlight: false },
        { key: "Investimento no Tesouro", value: "R$ 112.200,00", highlight: false },
        { key: "Retorno INSS", value: "R$ 1.012.202,69", highlight: true },
        { key: "Retorno Tesouro (líquido IR)", value: "R$ 233.760,68", highlight: false },
      ],
      footer: {
        key: "Diferença a favor do INSS",
        value: "R$ 410.676,85",
      },
      note: "Além disso: a renda do INSS é vitalícia. O Tesouro se encerra no resgate.",
    },
  ];

  const current = scenarios[active];

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
              active === tab.id
                ? "bg-gold text-navy"
                : "bg-navy-light/60 text-white/50 hover:text-white/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="bg-navy-light/40 p-6 lg:p-8">
        <h3 className="font-serif text-xl lg:text-2xl text-gold mb-2">
          {current.title}
        </h3>
        <p className="text-white/50 text-sm mb-6">{current.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {current.items.map((item, i) => (
            <div key={i} className="bg-navy/60 p-4">
              <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">
                {item.key}
              </p>
              <p
                className={`text-base lg:text-lg font-medium ${
                  item.highlight
                    ? "text-gold font-serif text-xl"
                    : "text-white"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
          {current.footer && (
            <div className="bg-navy/60 p-4 sm:col-span-2">
              <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">
                {current.footer.key}
              </p>
              <p className="text-gold font-serif text-2xl lg:text-3xl font-semibold">
                {current.footer.value}
              </p>
            </div>
          )}
        </div>
        {current.note && (
          <p className="text-white/30 text-xs mt-4">{current.note}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page Component ─── */
export default function Previdenciario() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    {
      num: "01",
      title: "Análise completa do CNIS e histórico contributivo",
      desc: "Revisão minuciosa de todos os vínculos, contribuições e eventuais pendências — incluindo períodos não reconhecidos pelo INSS.",
    },
    {
      num: "02",
      title: "Data exata de aposentadoria",
      desc: "Calculamos quando você poderá se aposentar em cada regra de transição vigente — por tempo de contribuição, por pontos e por idade.",
    },
    {
      num: "03",
      title: "Três cenários de contribuição com valores de benefício",
      desc: "Projeção do valor do benefício na contribuição atual, no teto do INSS e no salário mínimo — para você decidir com dados concretos.",
    },
    {
      num: "04",
      title: "Cobertura por doença e pensão por morte hoje",
      desc: "Quanto você receberia de auxílio-doença ou aposentadoria por incapacidade se precisar agora. Quanto seu dependente receberia em caso de óbito.",
    },
    {
      num: "05",
      title: "Comparativo de investimento: INSS x Tesouro Direto",
      desc: "Análise financeira do retorno sobre o investimento previdenciário comparado ao Tesouro Direto IPCA+, para você entender onde cada real rende mais.",
    },
    {
      num: "06",
      title: "Planejamento familiar e sucessório",
      desc: "Análise da situação dos seus dependentes, regime de bens, seguros de vida, previdência privada e eventuais direitos a benefícios futuros.",
    },
    {
      num: "07",
      title: "Reunião de 1 hora com o advogado",
      desc: "Após receber o parecer, agendamos uma videoconferência para explicar tudo, tirar dúvidas e orientar os próximos passos — 100% online.",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Você preenche o questionário",
      desc: "Um formulário detalhado cobre toda a sua vida contributiva — vínculos, períodos rurais, serviço militar, atividade no exterior, dependentes, saúde e muito mais. Leva em torno de 20 minutos.",
    },
    {
      num: "2",
      title: "Você envia seus documentos",
      desc: "CNIS atualizado, CTPS e documentos complementares conforme o caso. Orientamos exatamente o que buscar e como obter cada um.",
    },
    {
      num: "3",
      title: "Elaboramos o parecer completo",
      desc: "Em até 7 dias úteis, você recebe o documento com análise completa, datas, valores e cenários de contribuição — tudo personalizado para a sua situação.",
    },
    {
      num: "4",
      title: "Reunião de 1 hora para explicar tudo",
      desc: "Agendamos uma videoconferência exclusiva para apresentar o parecer, responder todas as dúvidas e orientar os próximos passos concretos.",
    },
  ];

  const stakes = [
    { num: "CNIS", label: "Histórico contributivo revisado para identificar vínculos e pendências" },
    { num: "Regras", label: "Cenários de aposentadoria comparados de acordo com a sua história" },
    { num: "Valores", label: "Projeções organizadas para você decidir quanto e como contribuir" },
    { num: "Família", label: "Dependentes, proteção e efeitos da decisão considerados na análise" },
  ];

  const planFeatures = [
    "Análise completa do CNIS e histórico contributivo",
    "Data exata de aposentadoria em cada regra",
    "3 cenários de contribuição com valores de benefício",
    "Cobertura atual por doença e pensão por morte",
    "Comparativo INSS x Tesouro Direto",
    "Análise familiar, de dependentes e sucessória",
    "Identificação de pendências e orientações para regularização",
    "Sugestões de previdência privada e investimentos conservadores",
    "Reunião de 1 hora com o advogado (videoconferência)",
    "Elaborado em até 7 dias úteis",
    "100% online — para qualquer estado do Brasil",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <div className="container flex items-center justify-between h-18 lg:h-20">
          <a href="/" className="flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="Cândido Nüske Advocacia"
              className="h-10 lg:h-12 w-auto"
            />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar ao site
            </a>
            <a
              href="https://wa.me/5551992851828?text=Ol%C3%A1%2C+gostaria+de+contratar+a+An%C3%A1lise+Previd%C3%AAncia+Completa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contratar Análise</span>
              <span className="sm:hidden">Contratar</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden bg-navy py-14 text-white sm:py-16 lg:py-24">
          <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Cândido Nüske Advocacia</p>
              <h1 className="mt-5 max-w-xl font-serif text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Planejamento previdenciário para sua aposentadoria
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
                Entenda datas, cenários de contribuição e possibilidades antes de tomar uma decisão que pode acompanhar você por muitos anos.
              </p>
              <a
                href="https://wa.me/5551992851828?text=Olá%2C%20quero%20entender%20meu%20planejamento%20previdenciário."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-gold-light"
              >
                Contratar análise completa <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-xs text-white/45">Atendimento online em todo o Brasil · Porto Alegre e São Paulo</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="relative overflow-hidden rounded-[1.75rem] bg-[#1c3547] px-5 pt-6 sm:px-10 sm:pt-10"
            >
              <img
                src={HERO_IMG}
                alt="Dr. Cândido Nüske, especialista em planejamento previdenciário"
                className="mx-auto block h-auto max-h-[40vh] w-full object-contain object-bottom"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-navy/85 px-4 py-3 backdrop-blur sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-sm font-bold text-white">Análise individualizada</p>
                <p className="mt-1 text-xs text-white/55">CNIS, regras, cenários e próximos passos em um só parecer.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── O QUE ESTÁ EM JOGO ─── */}
        <section className="bg-navy-light text-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[11px] uppercase tracking-[3px] text-gold mb-4 font-medium">
                O que está em jogo
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4 leading-tight">
                Aposentar-se sem planejamento pode gerar escolhas difíceis de reverter
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-10">
                Uma análise previdenciária organiza o que costuma ficar espalhado: histórico de contribuições, regras aplicáveis, cenários de valor e proteção familiar. O objetivo é decidir com mais clareza antes do requerimento.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
              {stakes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-navy/60 p-6 border-l-2 border-gold"
                >
                  <p className="font-serif text-3xl lg:text-4xl text-gold font-semibold leading-none mb-2">
                    {item.num}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── O QUE ENTREGO ─── */}
        <section className="bg-ice py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[11px] uppercase tracking-[3px] text-gold mb-4 font-medium">
                O que você recebe
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-4 leading-tight">
                Análise Previdenciária Completa
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Um parecer técnico completo, elaborado individualmente para a sua
                situação, com todos os dados que você precisa para tomar as melhores
                decisões sobre sua aposentadoria.
              </p>
            </motion.div>

            <ul className="space-y-0">
              {deliverables.map((item, i) => (
                <motion.li
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-5 py-6 border-b border-border/60 last:border-b-0"
                >
                  <span className="font-serif text-2xl text-gold font-semibold min-w-[36px] leading-none pt-1">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-medium text-navy text-[15px] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── CENÁRIOS ─── */}
        <section className="bg-navy text-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-[11px] uppercase tracking-[3px] text-gold mb-4 font-medium">
                Exemplo real
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4 leading-tight">
                Veja como os cenários são apresentados
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Baseado em parecer real entregue a um cliente de 47 anos, com 25
                anos e 5 meses de contribuição. Clique nas abas para explorar as
                situações.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ScenarioTabs />
            </motion.div>
          </div>
        </section>

        {/* ─── COMO FUNCIONA ─── */}
        <section className="bg-ice-dark py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[11px] uppercase tracking-[3px] text-gold mb-4 font-medium">
                O processo
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-4 leading-tight">
                Como funciona, passo a passo
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Tudo online, sem burocracia, sem sair de casa.
              </p>
            </motion.div>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 py-7 border-b border-black/6 last:border-b-0"
                >
                  <span className="font-serif text-5xl font-semibold text-gold/20 leading-none min-w-[48px]">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-medium text-navy text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SOBRE O ESPECIALISTA ─── */}
        <section className="bg-navy text-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden"
              >
                <img
                  src={HERO_IMG}
                  alt="Dr. Cândido Nüske"
                  className="w-full aspect-[3/4] object-contain object-bottom"
                  style={{marginTop: '7px', marginRight: '18px', marginBottom: '-14px', marginLeft: '1px', width: '310px', height: '384px'}}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-[11px] uppercase tracking-[3px] text-gold mb-4 font-medium">
                  O especialista
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl text-white mb-1 leading-tight">
                  Dr. Cândido Nüske
                </h2>
                <p className="text-gold text-sm mb-6 leading-relaxed">
                  Advogado &middot; Especialista em Planejamento Previdenciário &middot; Especialista em Direito Tributário - 18 Anos de experiência!
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Atua a mais de 18 anos no direito previdenciário, com foco em planejamento previdenciário personalizado para autônomos, servidores públicos e trabalhadores CLT em todo o Brasil.
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-7">
                  Cada análise é elaborada individualmente, considerando a
                  legislação vigente e as particularidades da história
                  contributiva de cada cliente — com atenção ao que está além do
                  CNIS.
                </p>

                <div className="grid grid-cols-3 gap-4 border-t border-gold/20 pt-6">
                  <div>
                    <span className="font-serif text-2xl font-semibold leading-none text-gold">18</span>
                    <p className="mt-1 text-[11px] text-white/40">anos de experiência</p>
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-semibold leading-none text-gold">OAB/RS</span>
                    <p className="mt-1 text-[11px] text-white/40">7.089</p>
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-semibold leading-none text-gold">Brasil</span>
                    <p className="mt-1 text-[11px] text-white/40">atendimento online</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── INVESTIMENTO ─── */}
        <section className="bg-navy-light text-white py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[11px] uppercase tracking-[3px] text-gold mb-4 font-medium">
                Investimento
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4 leading-tight">
                Análise Previdenciária Completa
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-10">
                Para a grande maioria dos casos, a Análise Previdenciária
                entrega tudo que você precisa — com a mesma profundidade do
                Planejamento Completo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-navy/60 border border-gold/30 p-8 lg:p-10 relative"
            >
              <span className="absolute -top-3 left-8 bg-gold text-navy text-[11px] font-semibold uppercase tracking-[2px] px-4 py-1">
                Recomendado
              </span>

              <p className="font-serif text-5xl lg:text-6xl text-gold font-semibold leading-none mb-2 mt-2">
                <span className="text-2xl align-super">R$</span>1.000
              </p>
              <p className="text-white/40 text-sm mb-8">
                Pagamento único &middot; Parcelamento disponível
              </p>

              <ul className="space-y-0 mb-8">
                {planFeatures.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-2.5 border-b border-white/6 text-white/75 text-sm"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0 mt-2" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gold/20">
                <p className="text-gold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  Garantia de 3 anos: se a legislação mudar, refazemos o
                  planejamento sem custo adicional.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <a
                href="https://wa.me/5551992851828?text=Ol%C3%A1%2C+gostaria+de+contratar+a+An%C3%A1lise+Previd%C3%AAncia+Completa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-navy px-10 py-4 text-[15px] font-semibold hover:bg-gold-light transition-colors"
              >
                Contratar agora via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/30 text-sm mt-4">
                Resposta em até 24 horas &middot; Porto Alegre e São Paulo
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-navy text-white">
        <div className="container py-10 text-center">
          <p className="font-serif text-xl text-gold mb-2">Cândido Nüske</p>
          <p className="text-white/35 text-sm leading-loose">
            Advogado &middot; Especialista em Planejamento Previdenciário
            &middot; Especialista em Direito Tributário
            <br />
            Brasil & Exterior &nbsp;&middot;&nbsp; Porto Alegre – RS &nbsp;&middot;&nbsp; São Paulo – SP
            <br />
            51 99285-1828 &nbsp;&middot;&nbsp; 11 96383-6040 &nbsp;&middot;&nbsp; contato@candidonuske.adv.br
            <br />
            candidonuske.adv.br &nbsp;&middot;&nbsp; @candidonuske.previdenciario
          </p>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-4">
            <p className="text-white/30 text-xs text-center">
              Copyright &copy; {new Date().getFullYear()} Cândido Nüske - Todos
              os direitos reservados. CNPJ: 31.724.779/0001-11 | OAB/RS 7.089
            </p>
          </div>
        </div>
      </footer>

      {/* ─── WhatsApp Float ─── */}
      <a
        href="https://wa.me/5551992851828?text=Ol%C3%A1%2C+gostaria+de+contratar+a+An%C3%A1lise+Previd%C3%AAncia+Completa"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
