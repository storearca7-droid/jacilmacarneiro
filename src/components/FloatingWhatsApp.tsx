import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsappUrl =
    'https://wa.me/5575991212220?text=Ol%C3%A1%2C%20Jacilma!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico%20e%20possibilidades%20de%20agendamento.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF9F6] text-[#384330] py-2 px-3.5 rounded-full shadow-lg border border-[#A3B18A]/40 text-xs font-medium animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Olá! Agende sua consulta aqui</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#77776F] hover:text-[#384330] p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={directWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#899B70] hover:bg-[#74825E] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#59684D]"
        aria-label="Conversar no WhatsApp com Jacilma Lopes Carneiro"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Soft breathing pulse effect */}
        <span
          className="absolute inset-0 rounded-full bg-[#899B70] opacity-40 animate-ping -z-10 pointer-events-none"
          style={{ animationDuration: '3s' }}
        />
      </a>
    </div>
  );
};
