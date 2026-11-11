import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, ShieldCheck, Video, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const whatsappUrl =
    'https://wa.me/5575991212220?text=Ol%C3%A1%2C%20Jacilma!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico%20e%20possibilidades%20de%20agendamento.';

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F3EDE3]/40 to-[#FAF9F6]"
    >
      {/* Delicate background botanical aura */}
      <div
        className="absolute top-12 right-0 -mr-24 w-96 h-96 rounded-full bg-[#A3B18A]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#899B70]/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Professional identification tag (Unboxed metadata with subtle separator) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#59684D] uppercase mb-4">
              <span>Jacilma Lopes Carneiro</span>
              <span aria-hidden="true" className="text-[#899B70]">·</span>
              <span>CRP 03/33397</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#384330] leading-[1.12] tracking-tight mb-6">
              Cuidar da mente é{' '}
              <span className="italic font-normal text-[#59684D] relative">
                transformar
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-[#A3B18A]/50"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              vidas.
            </h1>

            {/* Welcoming Narrative */}
            <p className="text-base sm:text-lg text-[#59684D] leading-relaxed max-w-2xl mb-8 font-light">
              Um espaço de acolhimento, escuta e cuidado, onde você pode compreender suas
              emoções, ressignificar experiências e construir novas possibilidades para sua vida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-[#899B70] hover:bg-[#74825E] active:scale-[0.99] rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#899B70] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Agendar Atendimento Online</span>
              </a>

              <a
                href="#sobre"
                onClick={handleScrollToAbout}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#384330] bg-[#F3EDE3] hover:bg-[#E2D7C5] active:scale-[0.99] rounded-full border border-[#A3B18A]/25 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Conheça Meu Trabalho</span>
                <ArrowDown className="w-4 h-4 text-[#59684D] shrink-0" />
              </a>
            </div>

            {/* Care modality indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#A3B18A]/20">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE3] flex items-center justify-center text-[#59684D] shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#384330]">
                    Atendimento Online
                  </h4>
                  <p className="text-xs text-[#77776F] mt-0.5">
                    Conforto e sigilo para pacientes em qualquer lugar do Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE3] flex items-center justify-center text-[#59684D] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#384330]">
                    Presencial Hospital HPRO
                  </h4>
                  <p className="text-xs text-[#77776F] mt-0.5">
                    Conceição do Coité – BA com estrutura clínica completa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Therapist's Office & Portrait Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative leaf frame accent */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#A3B18A]/40 -z-10 hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Office Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#A3B18A]/20 bg-[#F3EDE3] aspect-[4/3] lg:aspect-[4/4.5]">
                <img
                  src="/src/assets/images/hero_psychologist_office_1794363085587.jpg"
                  alt="Consultório acolhedor de psicologia com iluminação natural, plantas e poltrona verde-sálvia"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle scrim for warm contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#384330]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                  <p className="font-serif italic text-sm text-[#F3EDE3]">
                    "Um ambiente seguro pensado para acolher cada história com respeito e calma."
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Portrait Snippet */}
              <div className="sm:absolute sm:-bottom-8 sm:-left-8 mt-4 sm:mt-0 bg-[#FAF9F6] p-3.5 rounded-2xl shadow-lg border border-[#A3B18A]/30 max-w-xs flex items-center gap-3.5 backdrop-blur-xs">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#899B70] bg-[#F3EDE3] shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/jacilma_transparente.png"
                    alt="Jacilma Lopes Carneiro, psicóloga clínica"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#384330] leading-snug">
                    Jacilma Carneiro
                  </p>
                  <p className="text-[11px] text-[#59684D] leading-tight">
                    Escuta empática & Ética
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-[#899B70] font-medium">
                    <ShieldCheck className="w-3 h-3 text-[#59684D]" />
                    <span>Registro Ativo CRP 03/33397</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
