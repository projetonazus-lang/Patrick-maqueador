import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/makeupData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F4EFEB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#A57364] uppercase">
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#261B17] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-[#786156]">
            Tudo o que você precisa saber sobre o atendimento, prazos e produtos.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openFaqId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[#EADFD5] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#261B17]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#786156] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#261B17] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#4B3932] leading-relaxed border-t border-[#F4EFEB]">
                    <div className="pt-3">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
