/**
 * Design: autoridade serena — contato como próxima ação clara, não como formulário genérico.
 */
import { Mail, MapPin, Phone } from "lucide-react";

const offices = [
  {
    city: "Porto Alegre · RS",
    address: "Av. Carlos Gomes, 111 · 11º andar · CEP 90480-003",
    phone: "(51) 99285-1828",
    tel: "+5551992851828",
  },
  {
    city: "São Paulo · SP",
    address: "Av. Nações Unidas, 8501 · 17º andar · Pinheiros",
    phone: "(11) 96383-6040",
    tel: "+5511963836040",
  },
];

export default function ContactSection() {
  return (
    <section id="contato" className="bg-[#f3eee3] py-14 sm:py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Vamos conversar</p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
              Uma boa orientação começa com a sua história.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-navy/60 sm:text-lg">
              Envie uma mensagem pelo WhatsApp e conte, em poucas palavras, o que está acontecendo. A equipe orientará o melhor canal para a análise inicial.
            </p>
            <a
              href="https://wa.me/5551992851828?text=Olá%2C%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-petrol"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
            <a href="mailto:contato@candidonuske.adv.br" className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-gold">
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              contato@candidonuske.adv.br
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {offices.map((office) => (
              <div key={office.city} className="rounded-[1.5rem] border border-navy/10 bg-white p-6">
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl text-navy">{office.city}</h3>
                <p className="mt-3 text-sm leading-6 text-navy/55">{office.address}</p>
                <a href={`tel:${office.tel}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {office.phone}
                </a>
              </div>
            ))}
            <div className="rounded-[1.5rem] bg-navy p-6 text-white sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Atendimento</p>
              <p className="mt-3 max-w-xl font-serif text-2xl leading-tight">Online para qualquer estado do Brasil, com reunião agendada.</p>
              <p className="mt-3 text-sm leading-6 text-white/60">O primeiro contato serve para entender o contexto e direcionar a análise adequada.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
