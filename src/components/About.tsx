import React from 'react';
import { Award, BookOpen, HeartHandshake, Shield, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative leaf branch SVG in background */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-80 h-80 opacity-20 pointer-events-none text-[#A3B18A]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 180 Q80 120 100 40" strokeLinecap="round" />
          <path d="M50 140 Q30 130 35 110 Q55 125 50 140 Z" fill="currentColor" opacity="0.4" />
          <path d="M70 110 Q90 100 85 80 Q65 95 70 110 Z" fill="currentColor" opacity="0.4" />
          <path d="M85 75 Q70 60 75 45 Q90 55 85 75 Z" fill="currentColor" opacity="0.4" />
          <path d="M98 45 Q115 35 110 20 Q95 30 98 45 Z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Vertical Portrait & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Offset decorative border */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-[#899B70]/30 -z-10"
                aria-hidden="true"
              />

              {/* Portrait architectural container with soft warm backdrop */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#F3EDE3] via-[#FAF9F6] to-[#E2D7C5]/50 border border-[#A3B18A]/30 pt-6 px-4 pb-0 flex flex-col items-center justify-end min-h-[460px] sm:min-h-[520px]">
                {/* Subtle botanical aura behind Jacilma */}
                <div
                  className="absolute top-12 w-64 h-64 rounded-full bg-[#A3B18A]/20 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Jacilma's transparent photo cutout with realistic drop shadow */}
                <img
                  src="/assets/jacilma_transparente.png"
                  alt="Jacilma Lopes Carneiro, psicóloga clínica com jaleco branco bordado e sorriso acolhedor"
                  className="relative z-10 w-full h-auto max-h-[520px] object-contain object-bottom drop-shadow-[0_20px_25px_rgba(56,67,48,0.28)] drop-shadow-[0_8px_10px_rgba(0,0,0,0.1)] transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Identification Badge below portrait */}
              <div className="mt-4 p-4 rounded-xl bg-[#F3EDE3] border border-[#A3B18A]/25 text-center shadow-xs">
                <p className="font-serif text-lg text-[#384330] font-medium">
                  Jacilma Lopes Carneiro
                </p>
                <p className="text-xs text-[#59684D] uppercase tracking-wider font-semibold mt-0.5">
                  Psicóloga Clínica · CRP 03/33397
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#A3B18A]/20 flex items-center justify-center gap-4 text-[11px] text-[#77776F]">
                  <span>Graduada FARESI</span>
                  <span aria-hidden="true">·</span>
                  <span>Hospital HPRO</span>
                  <span aria-hidden="true">·</span>
                  <span>Conexa Saúde</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Biographical Narrative & Ethics */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Section lead */}
            <span className="text-xs uppercase tracking-widest text-[#899B70] font-semibold mb-2">
              Trajetória e Propósito
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#384330] leading-tight mb-6">
              Muito prazer, sou <span className="italic text-[#59684D]">Jacilma Carneiro</span>.
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base text-[#59684D] leading-relaxed font-light">
              <p>
                Sou psicóloga, graduada pela <strong>FARESI – Faculdade da Região Sisaleira</strong>,
                com pós-graduações em <strong>Psicologia Hospitalar</strong> e{' '}
                <strong>Sexualidade Humana</strong>.
              </p>

              <p>
                Atualmente, estou pós-graduanda nas áreas de{' '}
                <strong>Terapia Cognitivo-Comportamental (TCC)</strong>,{' '}
                <strong>Psicologia Perinatal</strong> e <strong>Psicanálise</strong>, ampliando
                continuamente meus conhecimentos e perspectivas sobre o cuidado com a saúde mental e
                o desenvolvimento humano.
              </p>

              <p>
                Ao longo da minha trajetória, tenho aprimorado minha formação por meio de capacitações
                e cursos em TCC, Educação Afetiva e Sexual, Perinatalidade, Gravidez e Parentalidade na
                Adolescência, Saúde Mental Materna, Puerpério, Psicologia da Aprendizagem e Educação,
                entre outros.
              </p>

              <p>
                Acredito que cuidar da saúde mental é um passo essencial para uma vida mais saudável,
                equilibrada e consciente. Como profissional de Psicologia, priorizo um atendimento
                empático, pautado na ética, na responsabilidade e no respeito à singularidade de cada
                paciente.
              </p>

              <p>
                Compreendo que cada indivíduo possui uma história única, com vivências, sentimentos,
                necessidades e formas próprias de perceber o mundo. Por isso, considero fundamental
                oferecer uma <strong>escuta acolhedora, livre de julgamentos</strong>, respeitando o
                tempo de cada pessoa em seu processo de cuidado.
              </p>

              <p>
                Meu propósito é contribuir para que cada indivíduo encontre na terapia um espaço seguro
                de expressão, reflexão e transformação.
              </p>
            </div>

            {/* Highlight quote box (no heavy left border, using delicate organic surface) */}
            <div className="mt-8 p-6 rounded-2xl bg-[#F3EDE3] border border-[#A3B18A]/30 relative">
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl text-[#899B70] leading-none shrink-0" aria-hidden="true">
                  “
                </span>
                <div>
                  <p className="font-serif italic text-lg sm:text-xl text-[#384330] leading-snug">
                    Cada pessoa possui uma história única. Cada processo terapêutico também.
                  </p>
                  <p className="text-xs text-[#59684D] font-medium mt-2 uppercase tracking-wider">
                    — Jacilma Lopes Carneiro
                  </p>
                </div>
              </div>
            </div>

            {/* Ethical commitments strip */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#A3B18A]/20">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#899B70] shrink-0" />
                <span className="text-xs text-[#59684D] font-medium">Escuta sem julgamentos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#899B70] shrink-0" />
                <span className="text-xs text-[#59684D] font-medium">Sigilo ético profissional</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#899B70] shrink-0" />
                <span className="text-xs text-[#59684D] font-medium">Cuidado individualizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
