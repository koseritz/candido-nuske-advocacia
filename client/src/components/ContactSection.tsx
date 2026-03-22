/*
 * Design: Advocacia Digital Contemporânea
 * Seção de contato com informações de escritórios e formulário
 */
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CONSULT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/client-consultation-WjvXPx29Lxi3PJtChZXf4V.webp";

const offices = [
  {
    city: "Porto Alegre - RS",
    address: "Av. Carlos Gomes, 111 – 11º Andar",
    cep: "90.480-003",
    phone: "51 992.851.828",
  },
  {
    city: "São Paulo - SP",
    address: "Av. Nações Unidas, 8501 – 17º Andar – Pinheiros",
    cep: "05.425-070",
    phone: "11 963.836.040",
  },
];

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-ice">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">
              Entre em Contato
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-4 leading-tight">
              Estamos ao seu lado, onde quer que você esteja!
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Atendemos todo o Brasil e estamos sempre disponíveis para o atendimento em casos emergenciais 24 horas. Livre-se de suas preocupações, conte conosco!
            </p>

            {/* Offices */}
            <div className="space-y-6 mb-8">
              {offices.map((office) => (
                <div key={office.city} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-base mb-1">{office.city}</h4>
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                    <p className="text-muted-foreground text-sm">CEP: {office.cep}</p>
                    <a
                      href={`tel:+55${office.phone.replace(/\D/g, "")}`}
                      className="text-sm text-navy font-medium hover:text-gold transition-colors mt-1 inline-flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Email & Hours */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-navy" />
                <a
                  href="mailto:contato@candidonuske.adv.br"
                  className="text-sm text-navy font-medium hover:text-gold transition-colors"
                >
                  contato@candidonuske.adv.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-navy" />
                <span className="text-sm text-muted-foreground">
                  Atendimento emergencial 24h
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Image + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={CONSULT_IMG}
                alt="Consulta jurídica"
                className="w-full h-[300px] lg:h-[360px] object-cover"
              />
            </div>

            {/* Contact CTA Card */}
            <div className="bg-navy rounded-2xl p-6 lg:p-8 text-white">
              <h3 className="font-serif text-2xl mb-3">Fale com um Advogado!</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Agende uma consulta online ou presencial. Nossos especialistas estão prontos para analisar o seu caso e encontrar a melhor solução jurídica.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/5551992851828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-full hover:bg-ice transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+5551992851828"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Ligar Agora
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
