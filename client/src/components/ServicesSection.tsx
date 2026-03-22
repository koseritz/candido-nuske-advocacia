/*
 * Design: Advocacia Digital Contemporânea
 * Grid 3x2 de cards de serviço com borda superior colorida
 * Inspirado na seção "De qual destes serviços você precisa?" da Arraes & Centeno
 */
import { motion } from "framer-motion";
import { FileText, AlertTriangle, HeartPulse, HardHat, Users, Brain } from "lucide-react";

const JUSTICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/justice-abstract-ZGArDhsQquBqbZy4TbWTwx.webp";

const services = [
  {
    icon: FileText,
    title: "Planejamento de Aposentadoria",
    description: "Um estudo único e individualizado, feito por nossos especialistas, com o critério técnico e conhecimento necessários à sua aposentadoria.",
  },
  {
    icon: AlertTriangle,
    title: "Auxílio-acidente",
    description: "Sofreu um acidente ou tem uma doença ocupacional? Saiba se você pode ter direito ao auxílio-acidente e garanta seus benefícios.",
  },
  {
    icon: HeartPulse,
    title: "Doença Ocupacional",
    description: "Uma vez comprovada que a doença do trabalhador é ocupacional, ele recebe tratamento diferenciado da lei previdenciária e da lei trabalhista.",
  },
  {
    icon: HardHat,
    title: "Acidente de Trabalho",
    description: "Entenda os seus direitos em caso de acidente de trabalho, os deveres das empresas e como agir para garantir proteção.",
  },
  {
    icon: Users,
    title: "Direito Bancário",
    description: "Protegemos pessoas e empresas das abusividades bancárias, garantindo seus direitos como consumidor de serviços financeiros.",
  },
  {
    icon: Brain,
    title: "Direito Tributário",
    description: "Proteção e melhores opções de tributação para o contribuinte, com planejamento tributário estratégico e defesa fiscal.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      {/* Banner */}
      <div className="relative mb-16 lg:mb-20">
        <div className="relative h-[280px] lg:h-[340px] overflow-hidden">
          <img
            src={JUSTICE_IMG}
            alt="Advocacia digital transformando vidas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-serif text-3xl lg:text-4xl xl:text-5xl text-white mb-4 leading-tight"
              >
                Advocacia de excelência<br />transformando vidas.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 text-base lg:text-lg max-w-2xl mx-auto"
              >
                Oferecemos serviços jurídicos especializados para proteger direitos trabalhistas, previdenciários, bancários e tributários.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white border border-border rounded-2xl p-6 lg:p-7 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy to-petrol opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-lg bg-ice flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors">
                <service.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-semibold text-navy text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <a
                href="https://wa.me/5551992851828"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-full hover:bg-navy-light transition-colors"
              >
                Saber mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
