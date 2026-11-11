import React from 'react';
import { Video, Building2, MapPin, Phone, MessageCircle, Instagram, ExternalLink, Check } from 'lucide-react';

export const ServiceModalities: React.FC = () => {
  const hospitalWhatsappUrl =
    'https://wa.me/5575999881522?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20e%20agendamento%20para%20consulta%20presencial%20com%20a%20psic%C3%B3loga%20Jacilma%20Lopes%20Carneiro%20no%20Hospital%20HPRO.';

  const conexaUrl = 'https://www.conexasaude.com.br/psicologia-clinica/jacilma-carneiro';

  return (
    <section id="atendimento" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#899B70] font-semibold">
            Opções de Cuidado
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#384330] mt-2 mb-4">
            Modalidades de atendimento
          </h2>
          <p className="text-base text-[#59684D] font-light leading-relaxed">
            Escolha o formato que melhor se alinha à sua rotina, com todo o sigilo ético, conforto e
            atenção que seu momento exige.
          </p>
        </div>

        {/* 2 Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CARD 1 — ONLINE */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#FAF9F6] to-[#F3EDE3] border border-[#A3B18A]/35 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#899B70] text-white flex items-center justify-center shadow-xs">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-[#59684D] tracking-wide uppercase bg-[#FAF9F6] px-3.5 py-1.5 rounded-full border border-[#899B70]/20">
                  Online & Planos
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#384330] mb-3">
                Psicoterapia Online
              </h3>

              <p className="text-base text-[#59684D] font-light leading-relaxed mb-6">
                Cuide da sua saúde mental de onde estiver, com comodidade, privacidade e
                acolhimento. Atendimento online e por planos de saúde através da plataforma{' '}
                <strong className="font-semibold text-[#384330]">Conexa Saúde</strong>.
              </p>

              {/* Benefits list */}
              <div className="space-y-3 mb-8 pt-4 border-t border-[#A3B18A]/20">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#59684D]">
                  <Check className="w-4 h-4 text-[#899B70] shrink-0" />
                  <span>Sessões semanais por videochamada segura e criptografada</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#59684D]">
                  <Check className="w-4 h-4 text-[#899B70] shrink-0" />
                  <span>Flexibilidade de horários sem tempo perdido no trânsito</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#59684D]">
                  <Check className="w-4 h-4 text-[#899B70] shrink-0" />
                  <span>Disponível para pacientes particulares e convênios credenciados</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#A3B18A]/20">
              <a
                href={conexaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-[#899B70] hover:bg-[#74825E] active:scale-[0.99] rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Agendar Atendimento Online</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-[#77776F] mt-2.5">
                Redirecionamento oficial para o perfil profissional na Conexa Saúde
              </p>
            </div>
          </div>

          {/* CARD 2 — PRESENCIAL NO HOSPITAL HPRO */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#FAF9F6] border border-[#A3B18A]/35 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#59684D] text-white flex items-center justify-center shadow-xs">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-[#59684D] tracking-wide uppercase bg-[#F3EDE3] px-3.5 py-1.5 rounded-full border border-[#899B70]/20">
                  Presencial
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#384330] mb-3">
                Atendimento Presencial
              </h3>

              <p className="text-base text-[#59684D] font-light leading-relaxed mb-6">
                Atendimento presencial no{' '}
                <strong className="font-semibold text-[#384330]">Hospital HPRO</strong>, em
                Conceição do Coité – BA. Um espaço acolhedor e com suporte hospitalar de referência.
              </p>

              {/* Hospital Contact Info with clean discreet icons */}
              <div className="space-y-3.5 mb-8 pt-4 border-t border-[#A3B18A]/20 text-xs sm:text-sm text-[#59684D]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#899B70] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-[#384330]">Hospital HPRO</span>
                    <p className="text-xs text-[#77776F]">Conceição do Coité – Bahia</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#899B70] shrink-0" />
                  <div>
                    <span className="text-xs text-[#77776F] mr-2">Telefone:</span>
                    <a
                      href="tel:+557532621522"
                      className="font-medium text-[#384330] hover:text-[#59684D] transition-colors"
                    >
                      (75) 3262-1522
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#899B70] shrink-0" />
                  <div>
                    <span className="text-xs text-[#77776F] mr-2">WhatsApp do Hospital:</span>
                    <a
                      href="https://wa.me/5575999881522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#384330] hover:text-[#59684D] transition-colors"
                    >
                      (75) 99988-1522
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#899B70] shrink-0" />
                  <div>
                    <span className="text-xs text-[#77776F] mr-2">Instagram:</span>
                    <a
                      href="https://instagram.com/hospitalhpro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#384330] hover:text-[#59684D] transition-colors"
                    >
                      @hospitalhpro
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#A3B18A]/20">
              <a
                href={hospitalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-[#59684D] hover:bg-[#384330] active:scale-[0.99] rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Atendimento Presencial</span>
              </a>
              <p className="text-center text-[11px] text-[#77776F] mt-2.5">
                Contato direto via WhatsApp da central de agendamentos do Hospital HPRO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
