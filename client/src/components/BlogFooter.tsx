/**
 * BlogFooter Component
 * Design: Advocacia Digital Contemporânea
 * Footer com informações do escritório para as páginas do blog
 */

import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function BlogFooter() {
  return (
    <footer className="bg-navy text-white py-12 lg:py-16 mt-16">
      <div className="container max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Escritório Porto Alegre */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-gold">Escritório Porto Alegre</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p>Endereço do escritório em Porto Alegre, RS</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+555133334444" className="hover:text-gold transition-colors">
                  (51) 3333-4444
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@candidonuske.adv.br" className="hover:text-gold transition-colors">
                  contato@candidonuske.adv.br
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p>Seg-Sex: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Escritório São Paulo */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-gold">Escritório São Paulo</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p>Endereço do escritório em São Paulo, SP</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+551196383640" className="hover:text-gold transition-colors">
                  (11) 9638-3640
                </a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:sp@candidonuske.adv.br" className="hover:text-gold transition-colors">
                  sp@candidonuske.adv.br
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p>Seg-Sex: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-gold">Links Rápidos</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-gold transition-colors">
                ← Voltar para Início
              </Link>
              <Link href="/blog" className="block hover:text-gold transition-colors">
                ← Todos os Artigos
              </Link>
              <Link href="/#contact" className="block hover:text-gold transition-colors">
                Contato
              </Link>
              <a href="https://wa.me/5551999999999" target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://instagram.com/candidonuske.previdenciario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" title="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/candidonuske" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/candidonuske" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" title="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>&copy; 2026 Cândido Nüske Advocacia. Todos os direitos reservados.</p>
            <p className="text-xs mt-1">OAB/RS 7.089 | Especialista em Direito Previdenciário</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
