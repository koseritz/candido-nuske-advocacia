/*
 * Design: Advocacia Digital Contemporânea
 * Seção de depoimentos com cards em carrossel/grid
 * Fundo ice com cards brancos
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gregori C. G.",
    text: "Encontrei o escritório do Dr. Cândido no Google e fiz contato, foi um ótimo profissional e uma pessoa maravilhosa! Sempre me ajudou e sempre prestativo. Se eu fosse dar uma nota a ele, 10 seria pouco pela prestação que ele fez por mim e pela minha causa!",
    rating: 5,
  },
  {
    name: "Emilia S.",
    text: "Melhor advogado que já conheci na vida, nota 10 seria pouco pelo atendimento e atenção. Conheci o seu trabalho pela internet e o contratei em longa distância. Ele não se esteve em me ajudar. Super indico esse homem competente!",
    rating: 5,
  },
  {
    name: "Barbara S.",
    text: "Maravilhoso o atendimento! Já estou com saudades, parece até que fizemos uma grande amizade, só pela atenção e respeito que vocês tiveram. Cândido em especial, sempre pronto a esclarecer as minhas dúvidas e questionamentos.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-ice">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-bold text-navy text-lg">Excelente</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm">Somos nota máxima no Google</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <span className="font-semibold text-navy text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5551992851828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors text-sm shadow-lg shadow-navy/20"
          >
            Venha fazer parte de nossos casos de sucesso!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
