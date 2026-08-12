/**
 * Design: autoridade serena — serviços organizados por decisão, não por uma grade genérica.
 */
import { ArrowRight, BriefcaseBusiness, FileText, HeartPulse, Landmark } from "lucide-react";

const services = [
  {
    icon: Landmark,
    category: "Previdenciário",
    title: "Planejamento previdenciário",
    description: "Entenda quando se aposentar, quanto poderá receber e quais decisões merecem atenção agora.",
    href: "/previdenciario",
    featured: true,
  },
  {
    icon: FileText,
    category: "Previdenciário",
    title: "Aposentadorias e benefícios",
    description: "Análise de requisitos, documentos e caminhos para requerimentos e revisões.",
    href: "#contato",
    featured: false,
  },
  {
    icon: HeartPulse,
    category: "Trabalhista",
    title: "Auxílio-acidente e incapacidade",
    description: "Orientação para situações em que a saúde ou uma sequela afetam a vida profissional.",
    href: "#contato",
    featured: false,
  },
  {
    icon: BriefcaseBusiness,
    category: "Trabalhista",
    title: "Direitos do trabalhador",
    description: "Atuação e orientação para decisões relacionadas ao vínculo e à proteção profissional.",
    href: "#contato",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 border-b border-navy/10 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Como podemos ajudar</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
              O próximo passo fica mais simples quando o caminho é explicado.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-navy/55 lg:text-right">
            Escolha o tema mais próximo da sua situação e converse com o escritório para entender a análise adequada.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          {services.map(({ icon: Icon, category, title, description, href, featured }) => (
            <a
              key={title}
              href={href}
              className={`group relative overflow-hidden rounded-[1.5rem] border p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                featured
                  ? "border-navy bg-navy text-white lg:col-span-6 lg:row-span-2 lg:p-8"
                  : "border-navy/10 bg-[#fbfaf7] text-navy lg:col-span-3"
              }`}
            >
              <div className={`grid h-10 w-10 place-items-center rounded-full ${featured ? "bg-gold text-navy" : "bg-[#f3eee3] text-gold"}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">{category}</p>
              <h3 className={`mt-3 font-serif leading-tight ${featured ? "text-3xl lg:text-4xl" : "text-2xl"}`}>{title}</h3>
              <p className={`mt-4 max-w-md text-sm leading-6 ${featured ? "text-white/65" : "text-navy/60"}`}>{description}</p>
              <span className={`mt-8 inline-flex items-center gap-2 text-sm font-bold ${featured ? "text-gold" : "text-navy"}`}>
                Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
              {featured && <span className="pointer-events-none absolute -bottom-16 -right-8 h-44 w-44 rounded-full border border-gold/20" aria-hidden="true" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
