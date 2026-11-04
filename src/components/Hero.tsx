import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Play, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { HERO_IMAGE, BRIDAL_IMAGE, FESTA_IMAGE, FORMANDA_IMAGE, SOCIAL_IMAGE, STATS_DATA } from '../data/makeupData';

interface HeroProps {
  onOpenBookingModal: (preselectedService?: string) => void;
  onOpenReelModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenReelModal }) => {
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const heroPreviews = [
    {
      title: 'Noivas',
      tag: 'Produção Especial',
      image: BRIDAL_IMAGE,
      serviceId: 'noivas'
    },
    {
      title: 'Eventos & Festas',
      tag: 'Olhar & Acabamento',
      image: FESTA_IMAGE,
      serviceId: 'eventos'
    },
    {
      title: 'Maquiagem Social',
      tag: 'Beleza Natural',
      image: SOCIAL_IMAGE,
      serviceId: 'social'
    }
  ];

  return (
    <section id="inicio" className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background ambient radial glow matching reference nude & rosé tones */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-tr from-[#E6D2C9]/50 via-[#DAC7B7]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Floating Rounded Canvas Container Inspired by Reference */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#EDE6E2] to-[#DAC7B7]/40 shadow-2xl border border-white/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px] lg:min-h-[700px]">
            
            {/* Left Column: Editorial Headline & Conversion */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between z-10">
              <div className="space-y-6">
                
                {/* Quiet editorial text kicker (Anti-slop: clean unboxed metadata) */}
                <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] text-[#786156] uppercase">
                  <span>Patrick Alcântara Beauty</span>
                  <span aria-hidden="true">·</span>
                  <span>Campo Grande - MS</span>
                  <span aria-hidden="true">·</span>
                  <span>5,0 ★ no Google</span>
                </div>

                {/* Primary Hero Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#261B17] leading-[1.08] tracking-tight text-balance">
                  Sua beleza merece um <br />
                  <span className="italic font-normal text-[#A57364]">toque</span> extraordinário.
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-[#4B3932] max-w-xl leading-relaxed">
                  Maquiagem profissional para valorizar sua essência e transformar momentos especiais em lembranças inesquecíveis.
                </p>

                {/* Primary CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenBookingModal()}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#261B17] hover:bg-[#3E2D27] active:scale-98 transition-all shadow-md cursor-pointer"
                  >
                    <span>Agendar pelo WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E6D2C9]" />
                  </button>

                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wider text-[#261B17] bg-white/80 hover:bg-white border border-[#DAC7B7] transition-all shadow-xs"
                  >
                    <span>Conhecer Serviços</span>
                  </a>
                </div>
              </div>

              {/* Bottom Feature Badges Bar on Left Column */}
              <div className="pt-10 mt-6 border-t border-[#DAC7B7]/60">
                <div className="grid grid-cols-3 gap-4 text-left">
                  <div>
                    <div className="text-xs font-semibold text-[#261B17]">5,0 ★ no Google</div>
                    <div className="text-[11px] text-[#786156]">7 avaliações 5 estrelas</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#261B17]">Atendimento VIP</div>
                    <div className="text-[11px] text-[#786156]">Exclusivo e humanizado</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#261B17]">Campo Grande - MS</div>
                    <div className="text-[11px] text-[#786156]">Ambiente acolhedor</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero High-Impact Photography with Floating Elements */}
            <div className="lg:col-span-6 relative min-h-[460px] sm:min-h-[520px] lg:min-h-full overflow-hidden">
              {/* Main Glamour Portrait */}
              <div className="absolute inset-0">
                <img
                  src={HERO_IMAGE}
                  alt="Maquiagem profissional feminina por Patrick Alcântara Beauty"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle soft gradient scrim to integrate seamlessly with the layout */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#261B17]/60 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-[#EDE6E2]/40 lg:via-transparent lg:to-transparent" />
              </div>

              {/* Floating Circular Rotating Luxury Seal (Inspired by reference top circle graphic) */}
              <div className="hidden sm:flex absolute top-6 right-6 z-20 items-center justify-center w-24 h-24 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/60">
                <svg className="w-full h-full p-1 animate-spin-slow" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[8.2px] uppercase tracking-[0.24em] font-medium fill-[#4B3932]">
                    <textPath href="#circlePath" startOffset="0%">
                      • PATRICK ALCÂNTARA BEAUTY • MAQUIAGEM •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#A57364]" />
                </div>
              </div>

              {/* Interactive Video / Showreel Floating Button */}
              <button
                type="button"
                onClick={onOpenReelModal}
                className="absolute top-6 left-6 sm:left-8 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 hover:bg-white backdrop-blur-md border border-white/80 shadow-md text-xs font-medium text-[#261B17] transition-all hover:scale-105 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#261B17] text-white flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Assistir Bastidores</span>
              </button>

              {/* Carousel Micro-Cards Docked at the Bottom of the Photo */}
              <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="p-3 sm:p-4 rounded-b-[2rem] sm:rounded-b-[2.5rem] bg-white/90 backdrop-blur-md border-t border-white/80 shadow-2xl">
                  <div className="flex items-center justify-between mb-2 sm:mb-2.5 text-xs">
                    <span className="font-semibold text-[#261B17] tracking-wider uppercase text-[10px]">Especialidades em Destaque</span>
                    <span className="text-[#786156] text-[10px] sm:text-[11px]">Clique para detalhes</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {heroPreviews.map((preview, idx) => (
                      <button
                        key={preview.title}
                        type="button"
                        onClick={() => {
                          setActiveThumbnail(idx);
                          onOpenBookingModal(preview.serviceId);
                        }}
                        className={`group relative text-left rounded-xl overflow-hidden p-1.5 sm:p-2 transition-all cursor-pointer ${
                          activeThumbnail === idx
                            ? 'bg-[#F4EFEB] ring-1 ring-[#A57364]'
                            : 'bg-white/70 hover:bg-white'
                        }`}
                      >
                        <div className="aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden mb-1 sm:mb-1.5 relative">
                          <img
                            src={preview.image}
                            alt={preview.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-1 right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/90 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#261B17]" />
                          </div>
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-[#261B17] truncate leading-tight">
                          {preview.title}
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-[#786156] truncate">
                          {preview.tag}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4-Item Quantitative Proof / KPI Strip Below Hero (Full-width row) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#EADFD5]">
          {STATS_DATA.map((stat, i) => (
            <div key={i} className="text-center sm:text-left border-l first:border-l-0 border-[#EADFD5]/80 pl-2 sm:pl-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#261B17] tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#4B3932] mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#786156] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
