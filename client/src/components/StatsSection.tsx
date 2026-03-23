/*
 * Design: Advocacia Digital Contemporânea
 * Barra de estatísticas com contadores animados em fundo ice
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-serif text-4xl lg:text-5xl font-bold text-navy">
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </div>
  );
}

function StatItem({ value, prefix, suffix, label }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      <p className="text-muted-foreground text-sm mt-2 max-w-[180px] mx-auto leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="areas" className="bg-ice py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <StatItem value={3000} prefix="+" label="clientes atendidos" />
          <StatItem value={3500} prefix="+" label="casos de sucesso" />
          <StatItem value={27} label="estados atendidos" />
          <StatItem value={18} prefix="+" label="anos ajudando brasileiros a conquistar direitos" />
        </div>
      </div>
    </section>
  );
}
