import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/makeupData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = 'Olá Patrick! Gostaria de consultar datas e informações sobre maquiagem no Patrick Alcântara Beauty.';
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-[#EADFD5] text-xs font-medium text-[#261B17] transition-all">
        <span className="w-2 h-2 rounded-full bg-[#128C7E] animate-ping" />
        <span>Agendar com Patrick</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Patrick Alcântara no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
