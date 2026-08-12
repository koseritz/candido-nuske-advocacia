/**
 * Design: autoridade serena — navegação editorial, compacta e acessível.
 * O header mantém o logo do escritório, prioriza o WhatsApp e evita alturas fixas.
 */
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/Logotipo_Dr_Cândido_Nuske_adv_preto_13100e13.webp";

const navLinks = [
  { label: "O escritório", href: "#quem-somos" },
  { label: "Atuação", href: "#areas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-navy/10 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white/90 backdrop-blur"
      }`}
    >
      <div className="container flex items-center justify-between gap-6 py-3 lg:py-4">
        <a href="/" className="shrink-0" aria-label="Cândido Nüske — página inicial">
          <img
            src={LOGO_URL}
            alt="Cândido Nüske Advocacia e Consultoria Jurídica"
            className="h-auto w-[150px] sm:w-[170px] lg:w-[184px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold tracking-wide text-navy/75 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5551992851828?text=Olá%2C%20gostaria%20de%20falar%20sobre%20meu%20caso."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-petrol lg:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Falar sobre meu caso
        </a>

        <button
          type="button"
          className="inline-flex rounded-full p-2 text-navy transition-colors hover:bg-ice lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-navy/10 bg-white lg:hidden">
          <nav className="container flex flex-col gap-1 py-3" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-navy/10 py-3 text-sm font-semibold text-navy"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5551992851828?text=Olá%2C%20gostaria%20de%20falar%20sobre%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Falar sobre meu caso
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
