import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/makeupData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialServiceId = 'noivas' }) => {
  const [service, setService] = useState(initialServiceId);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('15:00');
  const [place, setPlace] = useState('No Espaço Patrick Alcântara (Campo Grande - MS)');

  useEffect(() => {
    if (initialServiceId) {
      setService(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const services = [
    { id: 'noivas', label: 'Maquiagem de Noivas' },
    { id: 'social', label: 'Maquiagem Social' },
    { id: 'eventos', label: 'Maquiagem para Eventos' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = services.find((s) => s.id === service)?.label || 'Maquiagem';
    let text = `Olá Patrick! Gostaria de consultar disponibilidade no Patrick Alcântara Beauty:\n\n`;
    text += `✨ *Serviço:* ${serviceName}\n`;
    if (name) text += `👤 *Nome:* ${name}\n`;
    if (date) text += `📅 *Data:* ${date}\n`;
    if (time) text += `⏰ *Horário de prontidão:* ${time}\n`;
    text += `📍 *Local:* ${place}\n\n`;
    text += `Poderia me informar a disponibilidade e os detalhes do atendimento?`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-[#EADFD5] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-[#261B17] hover:bg-[#EADFD5] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1 mb-6">
          <div className="text-xs uppercase tracking-widest text-[#A57364] font-semibold">
            Patrick Alcântara Beauty
          </div>
          <h3 className="text-2xl font-serif text-[#261B17]">
            Agendar pelo WhatsApp
          </h3>
          <p className="text-xs text-[#786156]">
            Preencha seus dados para consultar a agenda diretamente com Patrick Alcântara.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-[#261B17] uppercase tracking-wider mb-1.5">
              Tipo de Maquiagem
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setService(s.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    service === s.id
                      ? 'border-[#261B17] bg-[#261B17] text-white font-medium'
                      : 'border-[#DAC7B7] bg-white text-[#4B3932] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#261B17] uppercase tracking-wider mb-1">
              Seu Nome
            </label>
            <input
              type="text"
              required
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DAC7B7] bg-white text-[#261B17] focus:outline-none focus:border-[#261B17]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#261B17] uppercase tracking-wider mb-1">
                Data do Evento
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#DAC7B7] bg-white text-[#261B17] focus:outline-none focus:border-[#261B17]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#261B17] uppercase tracking-wider mb-1">
                Estar pronta às:
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#DAC7B7] bg-white text-[#261B17] focus:outline-none focus:border-[#261B17]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#261B17] uppercase tracking-wider mb-1">
              Local do Atendimento
            </label>
            <select
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-[#DAC7B7] bg-white text-[#261B17] focus:outline-none focus:border-[#261B17]"
            >
              <option value="No Espaço Patrick Alcântara (Campo Grande - MS)">No Espaço Patrick Alcântara (Campo Grande - MS)</option>
              <option value="A domicílio / Hotel ou Local do Evento">A Domicílio / No Local do Evento</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#075E54] active:scale-98 transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Abrir WhatsApp com Patrick</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
