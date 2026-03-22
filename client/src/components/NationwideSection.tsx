/*
 * Design: Advocacia Digital Contemporânea
 * Seção sobre atendimento digital em todo o Brasil
 * Layout com imagem de fundo e overlay
 */
import { motion } from "framer-motion";
import { Globe, Smartphone, Shield, Clock } from "lucide-react";

const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/office-interior-3J3tza3LGJVDXFjKGCLstJ.webp";

const features = [
  {
    icon: Globe,
    title: "Atuação em todo o Brasil",
    description: "Os processos judiciais no Brasil hoje são todos via internet e à distância. Podemos atender você de qualquer lugar do mundo.",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    description: "A contratação, assinatura de documentos, envio de materiais e pagamento são feitos totalmente online.",
  },
  {
    icon: Shield,
    title: "Segurança e Simplicidade",
    description: "Nosso sistema é rápido, simples e seguro, garantindo uma experiência eficiente e sem complicações.",
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Protegemos seus direitos com atendimento emergencial 24h. Agimos com máxima eficiência para garantir a segurança do seu patrimônio.",
  },
];

export default function NationwideSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={OFFICE_IMG}
                alt="Escritório moderno"
                className="w-full h-[320px] lg:h-[420px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 lg:right-8 bg-white rounded-xl shadow-lg p-4 lg:p-5 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-navy text-lg">27</p>
                  <p className="text-xs text-muted-foreground">Estados + DF</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Cobertura nacional completa</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">
              Atendimento Digital
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-4 leading-tight">
              A distância NÃO é um obstáculo!
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
              Independentemente da sua localização, estamos prontos para atender você. Com apenas um clique, você pode falar conosco e contar com nosso suporte jurídico especializado.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-ice flex-shrink-0 flex items-center justify-center">
                    <feature.icon className="w-4.5 h-4.5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
