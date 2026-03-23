/*
 * Design: Advocacia Digital Contemporânea
 * Header fixo com backdrop-blur, logo à esquerda, nav central, CTA à direita
 * Paleta: navy (#0B1D3A), petrol (#0C3547), gold (#C4963C), ice (#F7FAFB)
 * Font: DM Sans
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028569025/APPvKdKh2CfPDVSnn6tn24/Logotipo_Dr_Cândido_Nuske_adv_preto_13100e13.webp";

const navLinks = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Blog", href: "/blog" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Cândido Nüske Advocacia"
            className="h-10 lg:h-12 w-auto" style={{paddingLeft: '18px', marginTop: '7px', marginRight: '16px', marginBottom: '1px', marginLeft: '2px', width: '192px', height: '64px'}}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/5551992851828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-light transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            Fale com um Advogado
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-navy hover:text-gold transition-colors py-2 border-b border-ice"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5551992851828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-full mt-2"
          >
            <Phone className="w-4 h-4" />
            Fale com um Advogado
          </a>
        </nav>
      </div>
    </header>
  );
}
