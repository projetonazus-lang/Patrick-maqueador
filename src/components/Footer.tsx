import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Star, ArrowUp } from 'lucide-react';
import {
  WHATSAPP_PHONE,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  STUDIO_ADDRESS,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT
} from '../data/makeupData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#261B17] text-[#EADFD5] pt-16 pb-12 border-t border-[#3E2D27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#3E2D27]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-serif tracking-[0.2em] font-semibold text-white uppercase block">
              PATRICK ALCÂNTARA
            </span>
            <p className="text-xs tracking-widest uppercase text-[#DAC7B7]">
              Patrick Alcântara Beauty • Maquiagem Profissional
            </p>
            <p className="text-xs text-[#DAC7B7] max-w-sm leading-relaxed">
              Dedicado a valorizar sua essência e transformar momentos especiais em lembranças inesquecíveis com maquiagem profissional de alta sofisticação.
            </p>

            {/* Social Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3E2D27] hover:bg-[#A57364] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram de Patrick Alcântara"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3E2D27] hover:bg-[#128C7E] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp de Patrick Alcântara"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DAC7B7]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre Patrick</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações no Google</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Agendamento via WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Contact & Commercial Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Informações Comerciais
            </h4>
            <div className="space-y-3 text-xs text-[#DAC7B7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A57364] shrink-0 mt-0.5" />
                <span>{STUDIO_ADDRESS}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#A57364] shrink-0 mt-0.5" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#A57364] shrink-0 mt-0.5" />
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-[#DAC7B7]">
                <div className="flex text-[#D0AF84]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>Classificação {GOOGLE_RATING.toFixed(1).replace('.', ',')} no Google ({GOOGLE_REVIEW_COUNT} avaliações)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#DAC7B7]">
          <div>
            © {new Date().getFullYear()} Patrick Alcântara Beauty. Todos os direitos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#DAC7B7] hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
