/**
 * Design: autoridade serena — uma faixa de prova curta, factual e sem números inventados.
 */
import { ArrowRight, Check, Compass, Scale } from "lucide-react";

const highlights = [
  {
    icon: Compass,
    eyebrow: "Experiência",
    value: "18 anos",
    text: "de atuação jurídica e leitura estratégica de casos",
  },
  {
    icon: Scale,
    eyebrow: "Registro",
    value: "OAB/RS 7.089",
    text: "atuação profissional com atendimento em todo o Brasil",
  },
  {
    icon: Check,
    eyebrow: "Método",
    value: "Clareza antes da decisão",
    text: "orientação organizada para você saber o próximo passo",
  },
];

export default function StatsSection() {
  return (
    <section id="areas" className="border-y border-navy/10 bg-white">
      <div className="container grid gap-0 lg:grid-cols-3">
        {highlights.map(({ icon: Icon, eyebrow, value, text }, index) => (
          <div
            key={value}
            className={`flex items-start gap-4 py-6 sm:py-7 lg:px-7 ${index > 0 ? "border-t border-navy/10 lg:border-l lg:border-t-0" : ""}`}
          >
            <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f3eee3] text-gold">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{eyebrow}</p>
              <p className="mt-1 font-serif text-xl leading-tight text-navy">{value}</p>
              <p className="mt-1 max-w-xs text-sm leading-5 text-navy/55">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container flex flex-col gap-3 border-t border-navy/10 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-navy/55">Previdência, trabalho e decisões que merecem análise.</p>
        <a href="#servicos" className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold">
          Ver como podemos ajudar <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
