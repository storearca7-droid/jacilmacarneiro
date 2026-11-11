import React from 'react';
import { Compass, Scale, Sprout, ArrowRight } from 'lucide-react';

interface PsychotherapyBenefitsProps {
  onStartTherapy: () => void;
}

export const PsychotherapyBenefits: React.FC<PsychotherapyBenefitsProps> = ({ onStartTherapy }) => {
  const pillars = [
    {
      title: 'Autoconhecimento',
      description:
        'Reconhecer sua história, clarear padrões emocionais e compreender as motivações por trás de suas escolhas e reações.',
      icon: Compass,
    },
    {
      title: 'Equilíbrio emocional',
      description:
        'Desenvolver recursos internos para acolher momentos de crise, ansiedade e incerteza com serenidade e consciência.',
      icon: Scale,
    },
    {
      title: 'Desenvolvimento pessoal',
      description:
        'Construir relações mais autênticas, fortalecer a autoestima e criar novas perspectivas para sua vida pessoal e profissional.',
      icon: Sprout,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F3EDE3] relative overflow-hidden">
      {/* Background organic shape */}
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#A3B18A]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Asset side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-md bg-[#FAF9F6] border border-[#A3B18A]/30 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/src/assets/images/mindfulness_nature_therapy_1794363087482.jpg"
                  alt="Composição serena com elementos botânicos e pedras naturais simbolizando equilíbrio e serenidade"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Quiet affirmation card */}
              <div className="mt-4 p-4 rounded-xl bg-[#FAF9F6]/90 border border-[#A3B18A]/25 backdrop-blur-xs">
                <p className="font-serif italic text-sm text-[#384330] text-center">
                  “Cuidar de você é o primeiro passo para que tudo ao seu redor encontre harmonia.”
                </p>
              </div>
            </div>
          </div>

          {/* Text & 3 Pillars side */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#899B70] font-semibold mb-2">
              O Processo Terapêutico
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#384330] leading-tight mb-6">
              Olhar para dentro também é uma forma de cuidar de si.
            </h2>

            <div className="space-y-4 text-base text-[#59684D] font-light leading-relaxed mb-8">
              <p>
                A psicoterapia é um espaço de escuta, acolhimento e compreensão. Um ambiente onde
                você pode reconhecer sentimentos, compreender emoções, ressignificar experiências e
                desenvolver novas formas de lidar com seus pensamentos e comportamentos.
              </p>
              <p>
                O processo terapêutico pode contribuir para a vida pessoal, familiar e profissional,
                fortalecendo relacionamentos e promovendo uma relação mais saudável consigo mesmo e
                com o mundo ao seu redor.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-[#FAF9F6] border border-[#A3B18A]/25 shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F3EDE3] text-[#59684D] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-[#384330] mb-1 font-medium">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#77776F] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Closing statement and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#A3B18A]/30">
              <p className="font-serif italic text-lg text-[#384330]">
                Permita-se viver o seu processo de transformação.
              </p>

              <button
                onClick={onStartTherapy}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-[#59684D] hover:bg-[#384330] rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>Quero Começar Minha Terapia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
