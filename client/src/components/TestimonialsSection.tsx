/**
 * Design: autoridade serena — prova de processo em vez de depoimentos não verificáveis.
 * Não são exibidas avaliações ou testemunhos sem fonte e autorização.
 */
import { ArrowUpRight, ClipboardCheck, MessageSquareText, Route } from "lucide-react";

const experience = [
  {
    icon: MessageSquareText,
    title: "Você é ouvido",
    text: "A primeira conversa começa pelo contexto, não por uma resposta pronta.",
  },
  {
    icon: ClipboardCheck,
    title: "Você recebe clareza",
    text: "Documentos, prazos e alternativas são organizados em uma linguagem compreensível.",
  },
  {
    icon: Route,
    title: "Você sabe o próximo passo",
    text: "A orientação termina com uma decisão possível e um caminho de acompanhamento.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-navy py-14 text-white sm:py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">A experiência de atendimento</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Menos promessa. Mais clareza para decidir.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/60">
              Em temas previdenciários e trabalhistas, confiança nasce quando você entende o que está acontecendo e por que cada passo foi escolhido.
            </p>
            <a
              href="https://wa.me/5551992851828?text=Olá%2C%20gostaria%20de%20entender%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-light"
            >
              Começar uma conversa <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {experience.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="border-t border-gold/60 pt-5">
                <span className="font-serif text-3xl text-gold">0{index + 1}</span>
                <Icon className="mt-8 h-5 w-5 text-white/70" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
