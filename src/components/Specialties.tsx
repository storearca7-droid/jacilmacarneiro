import React, { useState } from 'react';
import { Brain, Compass, Heart, Baby, CheckCircle2, ArrowRight } from 'lucide-react';

interface SpecialtiesProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialty }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const specialties = [
    {
      id: 'tcc',
      title: 'Terapia Cognitivo-Comportamental (TCC)',
      shortTitle: 'TCC',
      description:
        'Uma abordagem terapêutica que trabalha a relação entre pensamentos, emoções e comportamentos, auxiliando no desenvolvimento de estratégias para lidar com diferentes desafios.',
      details:
        'A TCC oferece ferramentas práticas e colaborativas para identificar padrões disfuncionais, reestruturar crenças limitantes e promover respostas mais saudáveis frente às demandas da rotina.',
      focus: [
        'Identificação de padrões de pensamento',
        'Regulação e manejo emocional',
        'Estratégias práticas para enfrentamento de desafios',
        'Autonomia e resolução de problemas',
      ],
      icon: Brain,
      isPerinatal: false,
    },
    {
      id: 'psicanalise',
      title: 'Psicanálise',
      shortTitle: 'Psicanálise',
      description:
        'Uma abordagem que busca compreender aspectos da história, dos sentimentos, dos conflitos e dos processos inconscientes que influenciam a experiência humana.',
      details:
        'Por meio da fala livre e da escuta atenta, a psicanálise convida a olhar para o que muitas vezes não é dito, permitindo ressignificar vivências passadas e compreender repetições no presente.',
      focus: [
        'Compreensão de processos inconscientes',
        'Elaboração de conflitos e angústias',
        'Ressignificação de histórias e vivências',
        'Escuta aprofundada da singularidade',
      ],
      icon: Compass,
      isPerinatal: false,
    },
    {
      id: 'sexualidade',
      title: 'Sexualidade Humana',
      shortTitle: 'Sexualidade Humana',
      description:
        'Acolhimento e orientação em questões relacionadas à sexualidade, afetividade, identidade, relacionamentos e desenvolvimento sexual.',
      details:
        'Um espaço respeitoso e livre de tabus para falar sobre intimidade, vínculos afetivos, conflitos relacionais e autodescoberta com total privacidade e acolhimento.',
      focus: [
        'Acolhimento de dúvidas e dilemas íntimos',
        'Saúde sexual e bem-estar afetivo',
        'Comunicação e dinâmicas relacionais',
        'Desconstrução de mitos e culpas',
      ],
      icon: Heart,
      isPerinatal: false,
    },
    {
      id: 'perinatal',
      title: 'Psicologia Perinatal',
      shortTitle: 'Psicologia Perinatal',
      description:
        'Acompanhamento psicológico durante as diferentes etapas da experiência da maternidade.',
      details:
        'O nascimento de um filho transforma a psique familiar. O cuidado perinatal oferece suporte emocional contínuo desde o planejamento até os desafios do puerpério e da parentalidade.',
      subdivisions: [
        'Pré-natal psicológico',
        'Perinatalidade',
        'Gestação',
        'Puerpério',
        'Maternidade',
        'Saúde mental materna',
        'Parentalidade',
      ],
      focus: [
        'Prevenção e cuidado com a depressão pós-parto e ansiedade materna',
        'Acolhimento das transformações do corpo e da rotina',
        'Fortalecimento do vínculo mãe-bebê e da rede de apoio',
        'Elaboração do luto perinatal e incertezas parentais',
      ],
      icon: Baby,
      isPerinatal: true,
    },
  ];

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-[#F3EDE3]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#899B70] font-semibold">
            Abordagens e Foco Terapêutico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#384330] mt-2 mb-4">
            Áreas de atuação e cuidado
          </h2>
          <p className="text-base text-[#59684D] font-light leading-relaxed">
            Cada fase da vida apresenta desafios e necessidades particulares. O acompanhamento
            psicológico oferece um espaço de escuta, compreensão e desenvolvimento emocional.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {specialties.map((item) => {
            const Icon = item.icon;
            const isPerinatal = item.isPerinatal;
            const isExpanded = activeCard === item.id;

            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 border ${
                  isPerinatal
                    ? 'bg-gradient-to-br from-[#FAF9F6] via-[#FAF9F6] to-[#F3EDE3] border-[#899B70]/40 shadow-xs hover:shadow-md'
                    : 'bg-[#FAF9F6] border-[#A3B18A]/25 shadow-xs hover:shadow-md hover:border-[#899B70]/50'
                }`}
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isPerinatal
                          ? 'bg-[#899B70] text-white'
                          : 'bg-[#F3EDE3] text-[#59684D]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {isPerinatal && (
                      <span className="text-[11px] font-medium tracking-wide text-[#59684D] bg-[#F3EDE3] px-3 py-1 rounded-full border border-[#899B70]/20">
                        Cuidado Especializado
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-serif text-[#384330] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#59684D] leading-relaxed mb-5 font-light">
                    {item.description}
                  </p>

                  {/* Special Visual Subdivisions for Perinatal Psychology */}
                  {isPerinatal && item.subdivisions && (
                    <div className="mb-6 p-4 rounded-xl bg-[#FAF9F6] border border-[#899B70]/20">
                      <p className="text-xs uppercase tracking-wider text-[#59684D] font-semibold mb-3">
                        Etapas e dimensões do cuidado maternal:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {item.subdivisions.map((sub) => (
                          <div
                            key={sub}
                            className="flex items-center gap-1.5 text-xs text-[#384330] py-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#899B70] shrink-0" />
                            <span className="truncate">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key points */}
                  <div className="space-y-2 mb-6">
                    {item.focus.map((point) => (
                      <div key={point} className="flex items-start gap-2.5 text-xs text-[#59684D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#899B70] mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable clinical context */}
                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-[#A3B18A]/20 text-xs text-[#77776F] leading-relaxed animate-in fade-in duration-200">
                      <p>{item.details}</p>
                    </div>
                  )}
                </div>

                {/* Card Action footer */}
                <div className="pt-5 mt-4 border-t border-[#A3B18A]/15 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveCard(isExpanded ? null : item.id)}
                    className="text-xs font-medium text-[#59684D] hover:text-[#2D3328] transition-colors py-1 cursor-pointer"
                  >
                    {isExpanded ? 'Recolher detalhes' : 'Saber mais sobre esta abordagem'}
                  </button>

                  <button
                    onClick={() => onSelectSpecialty(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#59684D] hover:text-[#384330] hover:underline cursor-pointer"
                  >
                    <span>Agendar nesta área</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
