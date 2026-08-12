/**
 * Design: autoridade serena — narrativa institucional em dois movimentos: método e confiança.
 */
import { ArrowUpRight, Check, FileSearch, Handshake } from "lucide-react";

const OFFICE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/office-interior-3J3tza3LGJVDXFjKGCLstJ.webp";

const principles = [
  { icon: FileSearch, title: "Leitura do caso", text: "Antes de sugerir um caminho, organizamos documentos, histórico e objetivos." },
  { icon: Handshake, title: "Orientação próxima", text: "Você entende as alternativas, os limites e o que realmente muda a decisão." },
  { icon: Check, title: "Estratégia possível", text: "A orientação é construída para a sua realidade, não para um modelo pronto." },
];

export default function AboutSection() {
  return (
    <section id="quem-somos" className="bg-[#fbfaf7] py-14 sm:py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] bg-ice">
              <img
                src={OFFICE_IMG}
                alt="Ambiente profissional de atendimento jurídico"
                className="block h-auto max-h-[40vh] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[220px] rounded-2xl bg-navy p-5 text-white shadow-xl sm:right-8">
              <p className="font-serif text-3xl text-gold">18</p>
              <p className="mt-1 text-sm leading-5 text-white/70">anos transformando dúvidas complexas em decisões mais claras.</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">O escritório</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
              Você não precisa decidir no escuro.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-navy/65 sm:text-lg">
              O trabalho do escritório é transformar o emaranhado de documentos, regras e possibilidades em uma visão compreensível do seu caso — com atuação em planejamento previdenciário, aposentadorias e direitos do trabalhador.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-navy/65 sm:text-lg">
              Cândido Nüske acompanha a estratégia de perto, com linguagem direta e foco no que muda sua decisão de verdade.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {principles.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-t-2 border-gold pt-4">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-5 text-navy/55">{text}</p>
                </div>
              ))}
            </div>

            <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
              Conhecer o escritório <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
