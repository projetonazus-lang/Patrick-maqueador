import React from 'react';
import { Award, CheckCircle2, ArrowUpRight, Star, Heart } from 'lucide-react';
import { ARTIST_IMAGE, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../data/makeupData';

interface AboutSectionProps {
  onOpenBookingModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  const pillars = [
    {
      title: 'Atendimento Personalizado',
      desc: 'Cada produção é planejada com escuta atenta, alinhando suas preferências, o estilo do seu evento e a harmonia do look.'
    },
    {
      title: 'Cuidado & Preparação da Pele',
      desc: 'Técnicas que respeitam a textura natural da pele, proporcionando viço saudável, conforto e excelente durabilidade.'
    },
    {
      title: 'Higiene & Biossegurança',
      desc: 'Compromisso absoluto com a limpeza e esterilização de pincéis, aplicadores e produtos de procedência comprovada.'
    },
    {
      title: 'Valorização da Sua Essência',
      desc: 'Maquiagens sofisticadas que destacam seus pontos fortes e trazem autoconfiança sem esconder quem você é.'
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-[#E6D2C9]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Architectural Arch Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Arched Frame Container */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-t-[12rem] rounded-b-3xl overflow-hidden border-2 border-white shadow-2xl bg-[#EDE6E2]">
              <img
                src={ARTIST_IMAGE}
                alt="Patrick Alcântara - Maquiador Profissional em Campo Grande MS"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261B17]/65 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg text-left">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#A57364]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#261B17]">
                    Patrick Alcântara
                  </span>
                </div>
                <p className="text-[11px] text-[#786156] mt-0.5">
                  Patrick Alcântara Beauty • Maquiador Profissional
                </p>
              </div>
            </div>

            {/* Decorative Floating Google Badge */}
            <div className="hidden sm:block absolute -top-4 -right-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFD5] shadow-xl text-left max-w-[180px]">
              <div className="flex items-center gap-1 text-[#D0AF84] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-lg font-serif font-bold text-[#261B17]">
                5,0 Estrelas
              </div>
              <p className="text-[10px] text-[#786156] leading-tight mt-0.5">
                Classificação máxima com {GOOGLE_REVIEW_COUNT} avaliações no Google.
              </p>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-[0.25em] text-[#A57364] uppercase">
              Sobre Patrick Alcântara
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#261B17] tracking-tight">
              Dedicado a valorizar a beleza e a personalidade de cada cliente
            </h2>

            <p className="text-sm sm:text-base text-[#4B3932] leading-relaxed">
              À frente do <strong>Patrick Alcântara Beauty</strong>, Patrick Alcântara atua como maquiador profissional com uma proposta centrada na elegância, no cuidado personalizado e na sofisticação.
            </p>

            <blockquote className="p-4 sm:p-5 rounded-2xl bg-[#F4EFEB] border-l-2 border-[#A57364] text-xs sm:text-sm italic text-[#4B3932] leading-relaxed">
              &ldquo;Minha missão é transformar a maquiagem em uma experiência acolhedora, onde cada traço é valorizado para que você se sinta radiante, confiante e autêntica em suas ocasiões mais importantes.&rdquo;
            </blockquote>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-[#EADFD5] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A57364] shrink-0" />
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#261B17]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#786156] leading-relaxed pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#261B17] hover:bg-[#3E2D27] transition-all shadow-sm cursor-pointer"
              >
                <span>Falar com Patrick no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E6D2C9]" />
              </button>

              <span className="text-xs text-[#786156]">
                Atendimento em Campo Grande - MS
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
