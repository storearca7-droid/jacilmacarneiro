import React from 'react';
import { MessageCircle, HeartHandshake, Shield, Sparkles } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const directWhatsappUrl =
    'https://wa.me/5575991212220?text=Ol%C3%A1%2C%20Jacilma!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico%20e%20possibilidades%20de%20agendamento.';

  return (
    <section className="py-20 lg:py-24 bg-[#59684D] text-white relative overflow-hidden">
      {/* Delicate background aura and organic rings */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#899B70]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#A3B18A]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle decorative leaf mark */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 mb-6">
          <HeartHandshake className="w-6 h-6 text-[#F3EDE3]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF9F6] font-normal leading-tight mb-6">
          Sua saúde emocional merece atenção.
        </h2>

        <p className="text-base sm:text-lg text-[#F3EDE3]/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
          Dar o primeiro passo pode ser desafiador, mas você não precisa enfrentar tudo sozinho(a).
          Permita-se viver uma experiência de acolhimento, escuta e autoconhecimento.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#384330] bg-[#FAF9F6] hover:bg-white active:scale-[0.99] rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-5 h-5 text-[#59684D]" />
            <span>Agendar Minha Consulta</span>
          </a>
        </div>

        {/* Reassuring trust badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/15 text-xs text-[#F3EDE3]/80">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#C4CFA9]" />
            <span>Sigilo Profissional Absoluto</span>
          </div>
          <span className="hidden sm:inline text-white/40">·</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C4CFA9]" />
            <span>Atendimento Humanizado</span>
          </div>
          <span className="hidden sm:inline text-white/40">·</span>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#C4CFA9]" />
            <span>Respeito ao Seu Tempo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
