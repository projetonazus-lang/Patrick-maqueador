import React, { useState } from 'react';
import { Sparkles, Eye, X, SlidersHorizontal, ArrowRight, Heart } from 'lucide-react';
import { PORTFOLIO_DATA, NATURAL_GLOW_IMAGE, HERO_IMAGE } from '../data/makeupData';
import { PortfolioItem } from '../types';

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'noivas' | 'festas' | 'social'>('todos');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  // Before & After comparison state
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const filterTabs = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'noivas', label: 'Noivas' },
    { id: 'festas', label: 'Eventos & Festas' },
    { id: 'social', label: 'Maquiagem Social' },
  ] as const;

  const filteredItems = activeFilter === 'todos'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => {
        if (activeFilter === 'festas') {
          return item.category === 'festas' || item.category === 'formandas';
        }
        return item.category === activeFilter;
      });

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setSliderPosition(percentage);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F4EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#A57364] uppercase">
            Galeria & Acabamentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#261B17] tracking-tight">
            Portfólio de Maquiagens Profissionais
          </h2>
          <p className="text-sm text-[#786156] leading-relaxed">
            Fotografias com detalhes de pele, olhos e acabamentos de alto padrão realizados por Patrick Alcântara.
          </p>
        </div>

        {/* Interactive Before & After Transformation Slider Section */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-white border border-[#EADFD5] shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A57364]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interativo • Arraste o cursor</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#261B17]">
                Onde a técnica encontra a perfeição.
              </h3>
              <p className="text-xs sm:text-sm text-[#4B3932] leading-relaxed">
                Nosso compromisso é valorizar seus traços com leveza e elegância. Observe o respeito à textura da pele, proporcionando acabamento sofisticado e conforto impecável.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-medium text-[#786156]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DAC7B7]" />
                  <span>Antes: Cuidados & Skincare</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#261B17]" />
                  <span>Depois: Glamour Acetinado</span>
                </div>
              </div>
            </div>

            {/* Slider container */}
            <div
              className="relative w-full lg:w-[540px] aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#EADFD5] shadow-inner"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={(e) => {
                if (isDragging || e.buttons === 1) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  handleSliderMove(e.clientX, rect);
                }
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                handleSliderMove(e.touches[0].clientX, rect);
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                handleSliderMove(e.clientX, rect);
              }}
            >
              {/* After image (full base) */}
              <img
                src={HERO_IMAGE}
                alt="Produção de maquiagem profissional por Patrick Alcântara Beauty"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#261B17]/85 text-white backdrop-blur-xs">
                Depois • Glam
              </span>

              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={NATURAL_GLOW_IMAGE}
                  alt="Antes dos cuidados e preparação de pele"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/90 text-[#261B17] backdrop-blur-xs">
                  Antes • Skincare
                </span>
              </div>

              {/* Slider separator bar & handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md z-20 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-[#EADFD5] flex items-center justify-center text-[#261B17] -ml-4">
                  <SlidersHorizontal className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="p-1 bg-[#EADFD5]/70 rounded-full flex gap-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#261B17] text-white shadow-xs'
                    : 'text-[#4B3932] hover:text-[#261B17]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-white border border-[#EADFD5] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] sm:aspect-[3/4] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top category label */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/80 backdrop-blur-md text-[#261B17]">
                  {item.categoryLabel}
                </div>

                {/* Inspect button overlay */}
                <button
                  type="button"
                  onClick={() => setActiveLightboxItem(item)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-[#261B17] text-white backdrop-blur-md flex items-center justify-center transition-all opacity-90 group-hover:opacity-100 cursor-pointer"
                  title="Ver detalhes da produção"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Bottom details card on photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="text-xs font-medium text-[#E6D2C9]">
                    {item.finishType}
                  </div>
                  <h4 className="text-lg font-serif font-semibold leading-snug">
                    {item.title}
                  </h4>
                  <div className="text-[11px] text-[#DAC7B7] truncate">
                    {item.clientName} • {item.eventDate}
                  </div>
                </div>
              </div>

              {/* Bottom product tag preview */}
              <div className="p-4 bg-white border-t border-[#F4EFEB] flex items-center justify-between text-xs">
                <span className="text-[#786156] truncate max-w-[200px]">
                  {item.productsUsed[0]}, {item.productsUsed[1]}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveLightboxItem(item)}
                  className="text-xs font-semibold text-[#A57364] hover:text-[#261B17] transition-colors whitespace-nowrap shrink-0"
                >
                  Ver Ficha
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl border border-[#EADFD5] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col md:flex-row">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#261B17] flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Info */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#A57364]">
                  {activeLightboxItem.categoryLabel} • {activeLightboxItem.finishType}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#261B17]">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B3932] leading-relaxed">
                  {activeLightboxItem.description}
                </p>

                <div className="p-3 rounded-xl bg-[#F4EFEB] text-xs space-y-1">
                  <div className="text-[#786156]">Cliente & Data</div>
                  <div className="font-semibold text-[#261B17]">{activeLightboxItem.clientName} ({activeLightboxItem.eventDate})</div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-2">
                    Principais Produtos Utilizados:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLightboxItem.productsUsed.map((prod, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#EADFD5] text-[#4B3932]"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EADFD5] flex items-center justify-between">
                <span className="text-xs text-[#786156]">Gostou dessa make?</span>
                <a
                  href={`#contato`}
                  onClick={() => setActiveLightboxItem(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#261B17] hover:bg-[#3E2D27] transition-all"
                >
                  <span>Pedir Inspiração Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
