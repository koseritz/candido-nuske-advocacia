/**
 * Design: autoridade serena — footer editorial compartilhado por blog e artigos.
 */
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function BlogFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-serif text-3xl">Cândido Nüske</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">Conteúdo jurídico sobre planejamento previdenciário, aposentadoria, auxílio-acidente e direitos do trabalhador.</p>
            <a href="https://instagram.com/candidonuske.previdenciario" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-light"><Instagram className="h-4 w-4" /> @candidonuske.previdenciario</a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Continue navegando</p>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <a href="/" className="hover:text-gold">← Página inicial</a>
              <a href="/blog" className="hover:text-gold">Todos os artigos</a>
              <a href="/previdenciario" className="hover:text-gold">Planejamento previdenciário</a>
              <a href="/#contato" className="hover:text-gold">Contato do escritório</a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Fale com o escritório</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <a href="mailto:contato@candidonuske.adv.br" className="flex items-start gap-2 hover:text-gold"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> contato@candidonuske.adv.br</a>
              <a href="tel:+5551992851828" className="flex items-start gap-2 hover:text-gold"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> (51) 99285-1828</a>
              <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Porto Alegre · São Paulo · online</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cândido Nüske Advocacia. OAB/RS 7.089.</p>
          <a href="/" className="inline-flex items-center gap-1 hover:text-gold">Voltar ao escritório <ArrowUpRight className="h-3 w-3" /></a>
        </div>
      </div>
    </footer>
  );
}
