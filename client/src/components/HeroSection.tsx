/*
 * Design: Advocacia Digital Contemporânea
 * Hero split: texto à esquerda (55%) + imagem à direita (45%)
 * CTA principal + badges de confiança (Google Reviews, OAB)
 */
import { Phone, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/candido-photo-nobg_57466052.png";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-24 lg:pt-28 pb-12 lg:pb-0 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl leading-tight text-navy mb-6">
              Advogados especialistas em aposentadorias e direitos do trabalhador, dedicados a garantir a proteção e os benefícios que você merece.
            </h1>

            <p className="text-muted-foreground text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
              Contamos com um time de especialistas dedicados em áreas específicas, com supervisão e atuação direta do Dr. Cândido Nüske.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/5551992851828"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all duration-200 text-sm shadow-lg shadow-navy/20"
              >
                <Phone className="w-4 h-4" />
                Marcar uma consulta online
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Google Reviews */}
              <div className="flex items-center gap-3 bg-ice rounded-xl px-4 py-3">
                <div>
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" style={{paddingTop: '2px', marginTop: '-1px', marginBottom: '4px', width: '28px', height: '38px'}}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-navy text-sm" style={{fontSize: '34px'}}>5</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">100% avaliações</p>
                </div>
              </div>

              {/* OAB Badge */}
              <div className="flex items-center gap-2 bg-ice rounded-xl px-4 py-3">
                <MapPin className="w-5 h-5 text-gold" />
                <div>
                  <p className="font-semibold text-navy text-sm">OAB/RS 7.089</p>
                  <p className="text-xs text-muted-foreground">Atuação em todo Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden lg:rounded-bl-[4rem] bg-gradient-to-b from-ice to-white">
              <img
                src={HERO_IMG}
                alt="Dr. Cândido Nüske - Advogado"
                className="w-full h-[400px] lg:h-[560px] object-contain object-bottom" style={{marginTop: '2px', width: '583px', height: '780px'}}
              />
            </div>
            {/* Decorative element */}
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
            <div className="hidden lg:block absolute -top-4 -right-4 w-16 h-16 bg-navy/5 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
