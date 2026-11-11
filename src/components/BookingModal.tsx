import React, { useEffect } from 'react';
import { X, Video, Building2, ExternalLink, MessageCircle, Shield } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSpecialty?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedSpecialty,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const directWhatsappUrl = preselectedSpecialty
    ? `https://wa.me/5575991212220?text=Ol%C3%A1%2C%20Jacilma!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20psicol%C3%B3gico%20na%20%C3%A1rea%20de%20${encodeURIComponent(
        preselectedSpecialty
      )}.`
    : 'https://wa.me/5575991212220?text=Ol%C3%A1%2C%20Jacilma!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico%20e%20possibilidades%20de%20agendamento.';

  const hospitalWhatsappUrl =
    'https://wa.me/5575999881522?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20e%20agendamento%20para%20consulta%20presencial%20com%20a%20psic%C3%B3loga%20Jacilma%20Lopes%20Carneiro%20no%20Hospital%20HPRO.';

  const conexaUrl = 'https://www.conexasaude.com.br/psicologia-clinica/jacilma-carneiro';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#384330]/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#FAF9F6] border border-[#A3B18A]/30 p-6 sm:p-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#59684D] hover:text-[#384330] hover:bg-[#F3EDE3] transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <BrandLogo size="sm" showSubtitle={false} />
          <h3
            id="booking-modal-title"
            className="text-2xl font-serif text-[#384330] mt-3"
          >
            Como prefere ser atendido(a)?
          </h3>
          <p className="text-xs text-[#77776F] mt-1 leading-relaxed">
            {preselectedSpecialty
              ? `Interesse na área: ${preselectedSpecialty}. Escolha a modalidade:`
              : 'Selecione abaixo a modalidade ideal para o seu momento:'}
          </p>
        </div>

        {/* Modality Options */}
        <div className="space-y-3.5 mb-6">
          {/* Option 1: WhatsApp Online Direto */}
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-[#F3EDE3] hover:bg-[#E2D7C5] border border-[#A3B18A]/30 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#899B70] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#384330]">
                  Atendimento Online (WhatsApp)
                </h4>
                <ExternalLink className="w-3.5 h-3.5 text-[#59684D]" />
              </div>
              <p className="text-xs text-[#77776F] mt-0.5">
                Contato direto com a psicóloga Jacilma. Sessões virtuais particulares.
              </p>
            </div>
          </a>

          {/* Option 2: Conexa Saúde */}
          <a
            href={conexaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-white hover:bg-[#F3EDE3]/50 border border-[#A3B18A]/25 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#59684D] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Video className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#384330]">
                  Conexa Saúde (Planos & Convênios)
                </h4>
                <ExternalLink className="w-3.5 h-3.5 text-[#59684D]" />
              </div>
              <p className="text-xs text-[#77776F] mt-0.5">
                Agendamento via plataforma Conexa com cobertura de convênios credenciados.
              </p>
            </div>
          </a>

          {/* Option 3: Presencial Hospital HPRO */}
          <a
            href={hospitalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-white hover:bg-[#F3EDE3]/50 border border-[#A3B18A]/25 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#384330] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#384330]">
                  Presencial — Hospital HPRO
                </h4>
                <ExternalLink className="w-3.5 h-3.5 text-[#59684D]" />
              </div>
              <p className="text-xs text-[#77776F] mt-0.5">
                Conceição do Coité – BA. Contato direto com a recepção do hospital.
              </p>
            </div>
          </a>
        </div>

        {/* Modal Footer note */}
        <div className="pt-3 border-t border-[#A3B18A]/20 flex items-center gap-2 text-[11px] text-[#77776F]">
          <Shield className="w-3.5 h-3.5 text-[#899B70] shrink-0" />
          <span>Atendimento 100% ético, sigiloso e respaldado pelo CRP 03/33397.</span>
        </div>
      </div>
    </div>
  );
};
