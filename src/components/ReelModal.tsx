import React, { useState } from 'react';
import { X, Sparkles, Volume2, VolumeX, CheckCircle, ArrowRight } from 'lucide-react';
import { HERO_IMAGE, BRIDAL_IMAGE, FESTA_IMAGE, ARTIST_IMAGE } from '../data/makeupData';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const scenes = [
    {
      title: '01. Preparação & Drenagem Facial',
      subtitle: 'Massagem lifting e hidratação multicamadas com ácido hialurônico para um viço acetinado.',
      image: ARTIST_IMAGE,
    },
    {
      title: '02. Técnica Pele Blindada',
      subtitle: 'Camada ultrafina à prova de suor, lágrimas e calor, mantendo a textura real da pele.',
      image: HERO_IMAGE,
    },
    {
      title: '03. Olhos Esculpidos & Cílios 3D',
      subtitle: 'Esfumado harmônico em tons terrosos, champagne e ouro rosé com cílios sob medida.',
      image: FESTA_IMAGE,
    },
    {
      title: '04. O Resultado Final Radiante',
      subtitle: 'Elegância que transparece segurança e dura até o amanhecer com acabamento luxuoso.',
      image: BRIDAL_IMAGE,
    },
  ];

  const currentScene = scenes[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#261B17] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        
        {/* Top controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex gap-1.5 grow max-w-[200px]">
            {scenes.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 grow rounded-full transition-all duration-300 ${
                  idx === activeStep ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative aspect-[4/5] sm:aspect-[9/11] overflow-hidden">
          <img
            src={currentScene.image}
            alt={currentScene.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#261B17] via-[#261B17]/20 to-black/40" />

          {/* Subtitle & Step Info */}
          <div className="absolute bottom-6 left-6 right-6 space-y-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#D0AF84]">
              Patrick Alcântara Beauty • Passo {activeStep + 1} de {scenes.length}
            </div>
            <h3 className="text-2xl font-serif font-bold text-white leading-tight">
              {currentScene.title}
            </h3>
            <p className="text-xs text-[#EADFD5] leading-relaxed">
              {currentScene.subtitle}
            </p>

            <div className="pt-2 flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                >
                  Próximo
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#261B17] hover:bg-[#FAF7F2] transition-all cursor-pointer"
              >
                <span>Agendar Make</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
