import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  MapPin,
  ExternalLink,
  Instagram,
  Clock,
  Send,
  Building2,
  CheckCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [serviceType, setServiceType] = useState('online');
  const [areaInterest, setAreaInterest] = useState('Terapia Geral');
  const [preferredPeriod, setPreferredPeriod] = useState('Flexível');
  const [userNote, setUserNote] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const directWhatsappNumber = '5575991212220';
  const hospitalWhatsappNumber = '5575999881522';

  const handleSendCustomWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    const targetPhone = serviceType === 'presencial' ? hospitalWhatsappNumber : directWhatsappNumber;

    let text = `Olá! Meu nome é ${patientName || 'um(a) paciente'}.\n`;
    text += `Gostaria de agendar uma consulta psicológica (${
      serviceType === 'presencial' ? 'Presencial no Hospital HPRO' : 'Atendimento Online'
    }).\n`;
    if (areaInterest) {
      text += `Área de interesse principal: ${areaInterest}.\n`;
    }
    if (preferredPeriod !== 'Flexível') {
      text += `Preferência de período: ${preferredPeriod}.\n`;
    }
    if (userNote) {
      text += `Observação: ${userNote}\n`;
    }
    text += `Aguardo retorno sobre as disponibilidades de horários. Obrigado(a)!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#899B70] font-semibold">
            Atendimento e Agendamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#384330] mt-2 mb-4">
            Vamos conversar?
          </h2>
          <p className="text-base text-[#59684D] font-light leading-relaxed">
            Seja para esclarecer dúvidas sobre a terapia ou agendar sua primeira sessão, estou à
            disposição para lhe receber com todo acolhimento.
          </p>
        </div>

        {/* Main Grid: 3 Contact Channels + Interactive Message Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Channel 1: WhatsApp Direto Jacilma */}
            <div className="p-6 rounded-2xl bg-[#F3EDE3] border border-[#A3B18A]/30 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#899B70] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#384330] font-medium leading-none">
                    Agendamento Online & Particular
                  </h3>
                  <span className="text-xs text-[#59684D]">WhatsApp Oficial da Psicóloga</span>
                </div>
              </div>

              <p className="text-xs text-[#77776F] leading-relaxed mb-4">
                Atendimento direto para esclarecimento de dúvidas sobre psicoterapias online, valores
                particulares e primeiras orientações.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#A3B18A]/20">
                <span className="text-sm font-semibold text-[#384330] tracking-wide">
                  (75) 99121-2220
                </span>
                <a
                  href="https://wa.me/5575991212220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#899B70] hover:bg-[#74825E] rounded-full transition-colors"
                >
                  <span>Iniciar Conversa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Channel 2: Hospital HPRO Presencial */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#A3B18A]/25 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#59684D] text-white flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#384330] font-medium leading-none">
                    Atendimento Presencial
                  </h3>
                  <span className="text-xs text-[#59684D]">Hospital HPRO — Conceição do Coité, BA</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#77776F] mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#899B70] shrink-0" />
                  <span>Telefone: (75) 3262-1522</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#899B70] shrink-0" />
                  <span>WhatsApp: (75) 99988-1522</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-[#899B70] shrink-0" />
                  <a
                    href="https://instagram.com/hospitalhpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#59684D]"
                  >
                    @hospitalhpro
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#A3B18A]/20">
                <a
                  href="tel:+557532621522"
                  className="text-xs font-medium text-[#59684D] hover:underline"
                >
                  Ligar para o hospital
                </a>
                <a
                  href="https://wa.me/5575999881522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#59684D] hover:bg-[#384330] rounded-full transition-colors"
                >
                  <span>WhatsApp do Hospital</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Channel 3: Conexa Saúde */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#A3B18A]/25 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F3EDE3] text-[#59684D] flex items-center justify-center shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#384330] font-medium leading-none">
                    Planos de Saúde & Conexa Saúde
                  </h3>
                  <span className="text-xs text-[#59684D]">Plataforma de Telepsicologia</span>
                </div>
              </div>

              <p className="text-xs text-[#77776F] leading-relaxed mb-4">
                Consulte a disponibilidade de convênios médicos credenciados e realize seu
                agendamento de forma prática diretamente pelo portal Conexa.
              </p>

              <a
                href="https://www.conexasaude.com.br/psicologia-clinica/jacilma-carneiro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#59684D] bg-[#F3EDE3] hover:bg-[#E2D7C5] rounded-full transition-colors"
              >
                <span>Acessar Perfil na Conexa Saúde</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form Column: Quick Consultation Inquiry Assistant (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-[#A3B18A]/35 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#899B70]">
                  Assistente de Agendamento
                </span>
                <h3 className="text-2xl font-serif text-[#384330] mt-1">
                  Prepare sua mensagem de contato
                </h3>
                <p className="text-xs sm:text-sm text-[#77776F] font-light mt-1">
                  Preencha os campos abaixo para gerar uma mensagem personalizada e iniciar o
                  atendimento de forma rápida no WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSendCustomWhatsapp} className="space-y-4">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#384330] mb-1">
                    Seu nome completo (ou como prefere ser chamado):
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ex: Ana Silva"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#A3B18A]/30 text-[#2D3328] placeholder:text-[#77776F]/50 focus:outline-none focus:border-[#899B70] focus:ring-1 focus:ring-[#899B70] transition-colors"
                  />
                </div>

                {/* Modalidade */}
                <div>
                  <label className="block text-xs font-medium text-[#384330] mb-1.5">
                    Modalidade desejada:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceType('online')}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                        serviceType === 'online'
                          ? 'bg-[#F3EDE3] border-[#899B70] text-[#384330] shadow-xs'
                          : 'bg-white border-[#A3B18A]/25 text-[#77776F] hover:border-[#899B70]/40'
                      }`}
                    >
                      <span className="font-semibold block text-sm">Online</span>
                      <span>De qualquer local via videochamada</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType('presencial')}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                        serviceType === 'presencial'
                          ? 'bg-[#F3EDE3] border-[#899B70] text-[#384330] shadow-xs'
                          : 'bg-white border-[#A3B18A]/25 text-[#77776F] hover:border-[#899B70]/40'
                      }`}
                    >
                      <span className="font-semibold block text-sm">Presencial</span>
                      <span>Hospital HPRO em Conceição do Coité</span>
                    </button>
                  </div>
                </div>

                {/* Área de interesse */}
                <div>
                  <label htmlFor="area" className="block text-xs font-medium text-[#384330] mb-1">
                    Área ou motivo principal da busca:
                  </label>
                  <select
                    id="area"
                    value={areaInterest}
                    onChange={(e) => setAreaInterest(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-[#A3B18A]/30 text-[#2D3328] focus:outline-none focus:border-[#899B70] focus:ring-1 focus:ring-[#899B70] transition-colors"
                  >
                    <option value="Psicoterapia Individual Geral">Psicoterapia Individual Geral</option>
                    <option value="Terapia Cognitivo-Comportamental (TCC)">Terapia Cognitivo-Comportamental (TCC)</option>
                    <option value="Psicologia Perinatal e Maternidade">Psicologia Perinatal e Maternidade</option>
                    <option value="Sexualidade Humana e Afetividade">Sexualidade Humana e Afetividade</option>
                    <option value="Psicanálise">Psicanálise</option>
                    <option value="Ansiedade, Estresse ou Emoções">Manejo de Ansiedade e Estresse</option>
                    <option value="Outro assunto">Outro assunto</option>
                  </select>
                </div>

                {/* Período de preferência */}
                <div>
                  <label className="block text-xs font-medium text-[#384330] mb-1.5">
                    Melhor período para atendimento:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['Manhã', 'Tarde', 'Noite', 'Flexível'].map((period) => (
                      <button
                        key={period}
                        type="button"
                        onClick={() => setPreferredPeriod(period)}
                        className={`py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          preferredPeriod === period
                            ? 'bg-[#899B70] text-white border-[#899B70]'
                            : 'bg-white border-[#A3B18A]/30 text-[#59684D] hover:bg-[#F3EDE3]'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensagem / Observações */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-medium text-[#384330] mb-1">
                    Mensagem adicional ou dúvida (opcional):
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Sinta-se à vontade para compartilhar um breve resumo do que busca ou horários específicos..."
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-[#A3B18A]/30 text-[#2D3328] placeholder:text-[#77776F]/50 focus:outline-none focus:border-[#899B70] focus:ring-1 focus:ring-[#899B70] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-[#899B70] hover:bg-[#74825E] active:scale-[0.99] rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#899B70]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar pelo WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-[#77776F] pt-1">
                  Ao clicar, você será redirecionado para o WhatsApp com seu texto pronto para envio.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
