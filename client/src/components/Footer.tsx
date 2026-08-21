/**
 * Design: autoridade serena — rodapé editorial, enxuto e útil.
 */
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/Logotipo_Dr_Cândido_Nuske_adv_simp_branco_4af1dae0.webp";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img src={LOGO_WHITE} alt="Cândido Nüske Advocacia" className="h-auto w-[190px]" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">Advocacia e consultoria jurídica com foco em planejamento previdenciário, aposentadorias e direitos do trabalhador.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com/candidonuske.previdenciario" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Navegação</p>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <a href="/" className="hover:text-gold">Início</a>
              <a href="/previdenciario" className="hover:text-gold">Planejamento previdenciário</a>
              <a href="/blog" className="hover:text-gold">Blog</a>
              <a href="#contato" className="hover:text-gold">Contato</a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Contato</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <a href="mailto:contato@candidonuske.adv.br" className="flex items-start gap-2 hover:text-gold"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> contato@candidonuske.adv.br</a>
              <a href="tel:+5551992851828" className="flex items-start gap-2 hover:text-gold"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> (51) 99285-1828</a>
              <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Brasil · Exterior · Porto Alegre · São Paulo</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cândido Nüske Advocacia. OAB/RS 7.089.</p>
          <a href="/blog" className="inline-flex items-center gap-1 hover:text-gold">Conteúdo jurídico <ArrowUpRight className="h-3 w-3" /></a>
        </div>
      </div>
    </footer>
  );
}
