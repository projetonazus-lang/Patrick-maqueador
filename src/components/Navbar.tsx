import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/makeupData';

interface NavbarProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre Patrick', href: '#sobre' },
    { label: 'Avaliações', href: '#avaliacoes' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#EADFD5]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark (single text element) */}
            <a
              href="#inicio"
              className="text-lg sm:text-xl font-serif tracking-[0.2em] text-[#261B17] font-semibold uppercase whitespace-nowrap shrink-0 hover:text-[#A57364] transition-colors"
            >
              PATRICK ALCÂNTARA
            </a>

            {/* Zone 2: Clean single-line text nav links */}
            <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wider uppercase text-[#786156]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#261B17] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A57364] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#261B17] hover:bg-[#3E2D27] active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E6D2C9]" />
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-[#261B17] hover:bg-[#EADFD5]/60 transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-xs transition-opacity">
          <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#FAF7F2] border-l border-[#EADFD5] p-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6 pt-16">
              <div className="text-xs uppercase tracking-[0.2em] text-[#786156] font-semibold pb-3 border-b border-[#EADFD5]">
                Patrick Alcântara Beauty
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif text-[#261B17] hover:text-[#A57364] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#EADFD5]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#261B17] hover:bg-[#3E2D27] transition-all shadow-sm"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#E6D2C9]" />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Olá Patrick! Gostaria de consultar disponibilidade para maquiagem.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#261B17] bg-[#EADFD5]/70 hover:bg-[#DAC7B7] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#786156]" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
