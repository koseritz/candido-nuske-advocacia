/*
 * Design: Advocacia Digital Contemporânea
 * Seção "Quem Somos" com texto à esquerda e cards de áreas à direita
 * Similar ao layout da Arraes & Centeno
 */
import { motion } from "framer-motion";
import { Scale, Shield, Phone, ArrowRight } from "lucide-react";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/team-meeting-QrDEaj3q4CMMmy5e4wDKyN.webp";

const areas = [
  {
    icon: Scale,
    title: "Direito Trabalhista",
    description: "Advogamos exclusivamente para trabalhadores. Cuidamos do seu processo onde quer que você esteja.",
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    description: "Somos determinados em conquistar a melhor aposentadoria e benefícios previdenciários. Atendimento online e presencial.",
  },
];

export default function AboutSection() {
  return (
    <section id="quem-somos" className="py-8 lg:py-16 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl text-navy mb-3 lg:mb-4 leading-tight">
              Descubra como podemos ajudar na sua causa!
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-3 lg:mb-4">
              Com 18 anos de experiência, o advogado Dr. Cândido Nüske tem se dedicado a atender clientes em questões de extrema relevância. Sua vasta experiência prática lhe permitiu adquirir um conhecimento profundo das leis e julgamentos atuais, garantindo assim a proteção dos direitos de seus clientes.
            </p>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4 lg:mb-6">
              Com uma abordagem centrada no cliente e em suas necessidades específicas, Dr. Cândido Nüske e toda sua equipe têm ajudado pessoas e empresas de todos os portes nos desafios legais a encontrar soluções eficazes para a proteção do seu patrimônio.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={TEAM_IMG}
                alt="Equipe Cândido Nüske Advocacia"
                className="w-full h-auto max-h-[40vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Area Cards */}
          <div className="space-y-3 lg:space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs lg:text-sm font-semibold text-gold uppercase tracking-widest mb-2"
            >
              Conheça nossas áreas de atuação
            </motion.p>

            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-ice rounded-xl p-4 lg:p-6 border border-border/50 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center mb-2 lg:mb-3 group-hover:bg-navy/15 transition-colors">
                  <area.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-serif text-lg lg:text-xl text-navy mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed mb-3 lg:mb-4">
                  {area.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-navy text-white text-xs lg:text-sm font-medium rounded-full hover:bg-navy-light transition-colors"
                  >
                    Ver serviços
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
                  </a>
                  <a
                    href="https://wa.me/5551992851828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-navy text-navy text-xs lg:text-sm font-medium rounded-full hover:bg-navy hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                    Falar com um Advogado
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
