/**
 * Design: autoridade serena — atendimento nacional explicado sem promessas infladas.
 */
import { ArrowUpRight, Laptop, MapPin, Video } from "lucide-react";

export default function NationwideSection() {
  return (
    <section className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-24">
      <div className="container">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#e9eef0]">
          <div className="grid items-center lg:grid-cols-[1fr_0.8fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Atendimento nacional</p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
                A distância não precisa atrapalhar uma boa orientação.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-navy/60">
                O escritório atende pessoas de diferentes estados por videoconferência, com organização de documentos e acompanhamento próximo em cada etapa.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3"><Video className="mt-1 h-5 w-5 text-gold" aria-hidden="true" /><span className="text-sm leading-5 text-navy/65">Reunião online</span></div>
                <div className="flex items-start gap-3"><Laptop className="mt-1 h-5 w-5 text-gold" aria-hidden="true" /><span className="text-sm leading-5 text-navy/65">Documentos digitais</span></div>
                <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 text-gold" aria-hidden="true" /><span className="text-sm leading-5 text-navy/65">Atendimento no Brasil</span></div>
              </div>
              <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
                Ver formas de atendimento <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="hidden self-stretch bg-navy p-10 lg:flex lg:items-end">
              <p className="max-w-xs font-serif text-3xl leading-tight text-white">Uma conversa bem conduzida já organiza muita coisa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
