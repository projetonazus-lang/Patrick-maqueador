import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Info } from 'lucide-react';
import { SERVICES_DATA } from '../data/makeupData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-20 lg:py-28 relative">
      {/* Background soft ambient accents */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#E6D2C9]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-3">
            <div className="text-xs font-semibold tracking-[0.25em] text-[#A57364] uppercase">
              Serviços & Atendimento
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#261B17] tracking-tight">
              Produções sob medida para valorizar sua essência
            </h2>
          </div>
          <p className="text-sm text-[#786156] max-w-md leading-relaxed">
            Atendimento personalizado por Patrick Alcântara, com técnicas precisas para noivas, maquiagem social e grandes eventos, ressaltando o que há de melhor em cada traço.
          </p>
        </div>

        {/* 3 Services Cards Grid (Noivas, Social, Eventos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-white border border-[#EADFD5] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 sm:h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* Subtle chip */}
                {service.badge && (
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-medium tracking-wider bg-white/90 backdrop-blur-md text-[#261B17] shadow-sm">
                    {service.badge}
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#E6D2C9]" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                <div className="space-y-4">
                  <div className="text-[11px] uppercase tracking-wider text-[#A57364] font-medium">
                    {service.idealFor}
                  </div>

                  <h3 className="text-2xl font-serif font-semibold text-[#261B17] group-hover:text-[#A57364] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B3932] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights bullet points */}
                  <div className="pt-2 space-y-2 border-t border-[#F4EFEB]">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#786156]">
                        <Check className="w-4 h-4 text-[#A57364] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-6 mt-6 border-t border-[#F4EFEB] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedServiceForModal(service)}
                    className="text-xs font-semibold text-[#4B3932] hover:text-[#261B17] underline decoration-[#DAC7B7] underline-offset-4 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#A57364]" />
                    <span>Ver Detalhes</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#261B17] hover:bg-[#3E2D27] active:scale-95 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Consultar</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E6D2C9]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Consultation Notice */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#EDE6E2] border border-[#DAC7B7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#A57364]">
              Atendimento Personalizado
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-[#261B17]">
              Tem uma ocasião especial ou deseja alinhar detalhes da sua produção?
            </h3>
            <p className="text-xs sm:text-sm text-[#786156] max-w-xl">
              Entre em contato direto pelo WhatsApp para conversarmos sobre o seu evento, estilo de maquiagem e disponibilidade de horários.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectServiceForBooking('social')}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#261B17] bg-white hover:bg-[#FAF7F2] border border-[#DAC7B7] transition-all shadow-xs cursor-pointer"
          >
            Falar pelo WhatsApp
          </button>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border border-[#EADFD5] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-[#EADFD5]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A57364] font-semibold">
                  Detalhes do Atendimento
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#261B17] mt-1">
                  {selectedServiceForModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedServiceForModal(null)}
                className="p-2 rounded-full text-[#786156] hover:bg-[#EADFD5] transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={selectedServiceForModal.image}
                  alt={selectedServiceForModal.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#261B17] uppercase tracking-wider mb-2">
                  Sobre a Produção
                </h4>
                <p className="text-sm text-[#4B3932] leading-relaxed">
                  {selectedServiceForModal.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4EFEB]">
                <div className="text-[11px] uppercase tracking-wider text-[#786156]">Indicado para</div>
                <div className="text-sm font-semibold text-[#261B17] mt-0.5">{selectedServiceForModal.idealFor}</div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#261B17] uppercase tracking-wider mb-3">
                  Destaques do Cuidado
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {selectedServiceForModal.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B3932]">
                      <Check className="w-4 h-4 text-[#A57364] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EADFD5] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedServiceForModal(null)}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-[#786156] hover:bg-[#EADFD5] transition-colors"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={() => {
                  const id = selectedServiceForModal.id;
                  setSelectedServiceForModal(null);
                  onSelectServiceForBooking(id);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#261B17] hover:bg-[#3E2D27] transition-all shadow-sm"
              >
                <span>Agendar com Patrick</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E6D2C9]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
