import React from 'react';
import { Star, CheckCircle, ShieldCheck, MessageCircle, ArrowUpRight } from 'lucide-react';
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, WHATSAPP_LINK } from '../data/makeupData';

export const TestimonialsSection: React.FC = () => {
  const highlights = [
    {
      title: 'Nota Máxima no Google',
      desc: 'Classificação de 5,0 estrelas com 7 avaliações espontâneas registradas no perfil oficial do Google.'
    },
    {
      title: 'Atendimento Personalizado',
      desc: 'Cada cliente recebe atenção exclusiva, com escuta atenta para alinhar estilo, ocasião e preferências.'
    },
    {
      title: 'Pontualidade e Cuidado',
      desc: 'Compromisso com o seu horário para que sua preparação aconteça com tranquilidade e serenidade.'
    },
    {
      title: 'Acabamento & Durabilidade',
      desc: 'Técnicas que mantêm a maquiagem impecável e confortável durante todo o seu evento ou celebração.'
    }
  ];

  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#A57364] uppercase">
            Reconhecimento & Confiança
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#261B17] tracking-tight">
            Avaliações no Google
          </h2>
          <p className="text-sm text-[#786156] leading-relaxed">
            A satisfação de cada cliente é a maior prioridade do Patrick Alcântara Beauty.
          </p>
        </div>

        {/* Central Google Trust Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#EADFD5] shadow-lg p-8 sm:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#F4EFEB]">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              {/* Score Display */}
              <div className="w-24 h-24 rounded-2xl bg-[#FAF7F2] border border-[#EADFD5] flex flex-col items-center justify-center shrink-0 shadow-inner">
                <span className="text-4xl font-serif font-bold text-[#261B17] tabular-nums">
                  5,0
                </span>
                <span className="text-[10px] text-[#A57364] font-semibold uppercase tracking-wider">
                  Estrelas
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#D0AF84]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#261B17]">
                  Classificação 5,0 no Google
                </h3>
                <p className="text-xs text-[#786156]">
                  Perfil oficial verificado com <strong>{GOOGLE_REVIEW_COUNT} avaliações</strong> com nota máxima.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] transition-all shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#EADFD5] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#A57364]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#261B17]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#786156] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Badge Strip */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#EADFD5] text-xs text-[#4B3932]">
            <ShieldCheck className="w-4 h-4 text-[#A57364]" />
            <span>Compromisso com pontualidade, biossegurança e valorização da sua beleza</span>
          </div>
        </div>

      </div>
    </section>
  );
};
