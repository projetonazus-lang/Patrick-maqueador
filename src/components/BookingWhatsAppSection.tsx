import React, { useState } from 'react';
import { MessageCircle, MapPin, Instagram, Star, Clock } from 'lucide-react';
import {
  WHATSAPP_PHONE,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  STUDIO_ADDRESS,
  STUDIO_CITY,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT
} from '../data/makeupData';

interface BookingSectionProps {
  preselectedService?: string;
}

export const BookingWhatsAppSection: React.FC<BookingSectionProps> = ({ preselectedService = 'noivas' }) => {
  const [serviceType, setServiceType] = useState(preselectedService);
  const [clientName, setClientName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [readyTime, setReadyTime] = useState('16:00');
  const [locationType, setLocationType] = useState<'espaco' | 'domicilio'>('espaco');
  const [locationAddress, setLocationAddress] = useState('');
  const [notes, setNotes] = useState('');

  const servicesMap: Record<string, string> = {
    noivas: 'Maquiagem de Noivas',
    social: 'Maquiagem Social',
    eventos: 'Maquiagem para Eventos',
  };

  const selectedServiceName = servicesMap[serviceType] || 'Maquiagem Profissional';

  // Construct structured WhatsApp message
  const generateWhatsAppMessage = () => {
    let msg = `Olá, Patrick! Gostaria de consultar disponibilidade para agendamento no Patrick Alcântara Beauty:\n\n`;
    msg += `✨ *Serviço:* ${selectedServiceName}\n`;
    if (clientName.trim()) msg += `👤 *Nome:* ${clientName.trim()}\n`;
    if (eventDate) msg += `📅 *Data:* ${eventDate}\n`;
    if (readyTime) msg += `⏰ *Horário desejado de prontidão:* ${readyTime}\n`;
    msg += `📍 *Local:* ${locationType === 'espaco' ? `No espaço Patrick Alcântara (${STUDIO_CITY})` : `A domicílio / No evento: ${locationAddress || 'A combinar'}`}\n`;
    if (notes.trim()) msg += `💬 *Detalhes:* ${notes.trim()}\n`;
    msg += `\nPoderia me informar sobre a disponibilidade de horário e os detalhes do atendimento?`;
    return msg;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#A57364] uppercase">
            Atendimento & Agendamento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#261B17] tracking-tight">
            Agende seu horário pelo WhatsApp
          </h2>
          <p className="text-sm text-[#786156] leading-relaxed">
            Monte os detalhes da sua produção para gerar sua mensagem personalizada e entrar em contato direto com Patrick Alcântara.
          </p>
        </div>

        {/* Main Booking Container */}
        <div className="rounded-[2.5rem] bg-white border border-[#EADFD5] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Interactive Form */}
          <form onSubmit={handleSendToWhatsApp} className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-2">
                1. Selecione o Tipo de Maquiagem
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(servicesMap).map(([key, name]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setServiceType(key)}
                    className={`p-3 text-center sm:text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      serviceType === key
                        ? 'border-[#261B17] bg-[#F4EFEB] text-[#261B17] font-semibold ring-1 ring-[#261B17]'
                        : 'border-[#EADFD5] text-[#4B3932] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-1.5">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Silva"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DAC7B7] bg-[#FAF7F2] text-xs text-[#261B17] focus:outline-none focus:border-[#261B17] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-1.5">
                  Data do Evento
                </label>
                <input
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DAC7B7] bg-[#FAF7F2] text-xs text-[#261B17] focus:outline-none focus:border-[#261B17] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-1.5">
                  Horário de Prontidão Desejado
                </label>
                <input
                  type="time"
                  value={readyTime}
                  onChange={(e) => setReadyTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DAC7B7] bg-[#FAF7F2] text-xs text-[#261B17] focus:outline-none focus:border-[#261B17] transition-colors"
                />
                <span className="text-[10px] text-[#786156]">Horário em que precisa estar pronta</span>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-1.5">
                  Local de Preferência
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocationType('espaco')}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-center cursor-pointer transition-all ${
                      locationType === 'espaco'
                        ? 'border-[#261B17] bg-[#261B17] text-white'
                        : 'border-[#EADFD5] text-[#4B3932] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    No Espaço
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocationType('domicilio')}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-center cursor-pointer transition-all ${
                      locationType === 'domicilio'
                        ? 'border-[#261B17] bg-[#261B17] text-white'
                        : 'border-[#EADFD5] text-[#4B3932] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    No Evento / Hotel
                  </button>
                </div>
              </div>
            </div>

            {locationType === 'domicilio' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-1.5">
                  Endereço ou Local do Evento
                </label>
                <input
                  type="text"
                  placeholder="Bairro, hotel ou espaço em Campo Grande - MS"
                  value={locationAddress}
                  onChange={(e) => setLocationAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DAC7B7] bg-[#FAF7F2] text-xs text-[#261B17] focus:outline-none focus:border-[#261B17]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#261B17] mb-1.5">
                Observações ou Detalhes do Evento (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Casamento civil, formatura, vestido champanhe, referências de make..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-[#DAC7B7] bg-[#FAF7F2] text-xs text-[#261B17] focus:outline-none focus:border-[#261B17]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] active:scale-98 transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enviar Solicitação pelo WhatsApp</span>
            </button>
          </form>

          {/* Right Column: Real-Time WhatsApp Bubble Preview & Commercial Info */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#EADFD5] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EADFD5]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#128C7E]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#261B17]">
                    Mensagem que será enviada
                  </span>
                </div>
                <span className="text-[11px] text-[#786156]">WhatsApp</span>
              </div>

              {/* Chat Simulation Bubble */}
              <div className="p-4 rounded-2xl bg-white border border-[#EADFD5] shadow-xs text-xs space-y-2 text-[#261B17] font-sans">
                <div className="text-[10px] font-semibold text-[#128C7E] uppercase">
                  Prévia para o WhatsApp:
                </div>
                <div className="whitespace-pre-line text-[11px] sm:text-xs text-[#3E2D27] bg-[#E7F8F0] p-3.5 rounded-xl border border-[#C5ECD6] leading-relaxed">
                  {generateWhatsAppMessage()}
                </div>
              </div>
            </div>

            {/* Commercial Info Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#EADFD5] space-y-3.5 text-xs">
              <div className="font-semibold text-[#261B17] uppercase tracking-wider text-[11px] pb-2 border-b border-[#F4EFEB]">
                Informações Comerciais
              </div>

              <div className="space-y-2 text-[11px] text-[#4B3932]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A57364] shrink-0 mt-0.5" />
                  <span>{STUDIO_ADDRESS}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0" />
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#128C7E] transition-colors underline decoration-[#DAC7B7]"
                  >
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#A57364] shrink-0" />
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#A57364] transition-colors underline decoration-[#DAC7B7]"
                  >
                    Instagram: {INSTAGRAM_HANDLE}
                  </a>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <div className="flex text-[#D0AF84]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-[#261B17]">
                    Google: {GOOGLE_RATING.toFixed(1).replace('.', ',')} ({GOOGLE_REVIEW_COUNT} avaliações)
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
