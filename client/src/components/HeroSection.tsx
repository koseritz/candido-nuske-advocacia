/**
 * Design: autoridade serena — hero editorial com uma mensagem, uma prova e uma ação.
 * A fotografia usa altura automática para não criar áreas vazias ou cortes artificiais.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, ShieldCheck, Star } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/candido-photo-nobg_57466052.png";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] pt-28 pb-8 sm:pt-32 lg:pt-36 lg:pb-14">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[0.93fr_1.07fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:pb-8"
          >
            <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Cândido Nüske Advocacia
            </div>
            <h1 className="max-w-[620px] font-serif text-[2.55rem] leading-[1.05] text-navy sm:text-5xl lg:text-[4rem]">
              Planejamento previdenciário para decidir sua aposentadoria com segurança
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-navy/65 sm:text-lg">
              O mapa estratégico e personalizado para garantir o seu futuro previdenciário e de sua família. 
Apuramos o patrimônio previdenciário atual e planejamos os melhores cenários previdenciários, baseados em leis, contornando riscos.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5551992851828?text=Olá%2C%20quero%20entender%20minhas%20opções%20previdenciárias."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy/15 transition-all hover:-translate-y-0.5 hover:bg-petrol"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Conversar sobre meu caso
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/previdenciario"
                className="inline-flex items-center justify-center rounded-full border border-navy/20 px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:border-gold hover:text-gold"
              >
                Conhecer o planejamento
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="border-l-2 border-gold pl-3">
                <p className="font-serif text-2xl text-navy">18 anos</p>
                <p className="mt-1 text-xs leading-4 text-navy/55">de experiência prática</p>
              </div>
              <div className="border-l-2 border-gold pl-3">
                <p className="font-serif text-2xl text-navy">Brasil e Exterior</p>
                <p className="mt-1 text-xs leading-4 text-navy/55">atendimento online</p>
              </div>
              <div className="col-span-2 border-l-2 border-gold pl-3 sm:col-span-1">
                <p className="font-serif text-2xl text-navy">OAB/RS</p>
                <p className="mt-1 text-xs leading-4 text-navy/55">7.089</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eef2f3] px-4 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
              <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-[11px] font-bold text-navy shadow-sm backdrop-blur sm:left-8 sm:top-8">
                <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                Planejamento personalizado
              </div>
              <motion.img
                src={HERO_IMG}
                alt="Dr. Cândido Nüske, advogado especialista em planejamento previdenciário"
                onLoad={() => setImageLoaded(true)}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{
                  opacity: imageLoaded ? 1 : 0.2,
                  filter: imageLoaded ? "blur(0px)" : "blur(10px)",
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mx-auto block h-auto max-h-[40vh] w-full max-w-[564px] origin-[50%_16%] scale-[1.16] object-contain object-bottom lg:max-h-[72vh] lg:scale-[1.28]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                  <span className="text-sm font-bold text-navy">5,0</span>
                  <span className="text-xs text-navy/55">Avaliações 5 Estrelas Google</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-navy/60">
                  <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                  Brasil · Exterior - Porto Alegre · São Paulo
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
