import React, { useState } from 'react';
import { GraduationCap, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pos' | 'capacitacao'>('all');

  const educationItems = [
    {
      title: 'Psicologia Hospitalar',
      type: 'pos',
      categoryLabel: 'Pós-Graduação',
      status: 'Concluída',
      description: 'Atuação clínica em contextos de saúde, suporte a pacientes, familiares e equipes multiprofissionais em ambiente hospitalar.',
    },
    {
      title: 'Sexualidade Humana',
      type: 'pos',
      categoryLabel: 'Pós-Graduação',
      status: 'Concluída',
      description: 'Compreensão ampliada sobre dinâmicas da afetividade, desenvolvimento sexual, identidade e saúde relacional.',
    },
    {
      title: 'Terapia Cognitivo-Comportamental (TCC)',
      type: 'pos',
      categoryLabel: 'Pós-Graduação',
      status: 'Em andamento',
      description: 'Aprofundamento técnico em reestruturação cognitiva, formulação de caso e intervenções clínicas baseadas em evidências.',
    },
    {
      title: 'Psicologia Perinatal',
      type: 'pos',
      categoryLabel: 'Pós-Graduação',
      status: 'Em andamento',
      description: 'Cuidado integral das repercussões psíquicas da gestação, parto, pós-parto e primeiras relações parentais.',
    },
    {
      title: 'Psicanálise',
      type: 'pos',
      categoryLabel: 'Pós-Graduação',
      status: 'Em andamento',
      description: 'Estudo continuado da metapsicologia, escuta analítica dos sintomas e processos inconscientes da subjetividade humana.',
    },
    {
      title: 'Educação Afetiva e Sexual',
      type: 'capacitacao',
      categoryLabel: 'Capacitação',
      status: 'Aperfeiçoamento',
      description: 'Orientação preventiva e informativa sobre desenvolvimento socioafetivo, limites e vínculos saudáveis.',
    },
    {
      title: 'Perinatalidade',
      type: 'capacitacao',
      categoryLabel: 'Capacitação',
      status: 'Aperfeiçoamento',
      description: 'Estudo específico sobre a transição para a parentalidade e o desenvolvimento inicial do vínculo materno-filial.',
    },
    {
      title: 'Gravidez e Parentalidade na Adolescência',
      type: 'capacitacao',
      categoryLabel: 'Capacitação',
      status: 'Aperfeiçoamento',
      description: 'Sensibilidade e acolhimento direcionado aos desafios psicossociais da maternidade e paternidade jovens.',
    },
    {
      title: 'Saúde Mental Materna',
      type: 'capacitacao',
      categoryLabel: 'Capacitação',
      status: 'Aperfeiçoamento',
      description: 'Rastreamento, prevenção e intervenção para ansiedade, depressão e transtornos de humor no período gravídico-puerperal.',
    },
    {
      title: 'Puerpério',
      type: 'capacitacao',
      categoryLabel: 'Capacitação',
      status: 'Aperfeiçoamento',
      description: 'Acolhimento da mulher no pós-parto imediato e tardio, amamentação, reorganização identitária e rede de apoio.',
    },
    {
      title: 'Psicologia da Aprendizagem e Educação',
      type: 'capacitacao',
      categoryLabel: 'Capacitação',
      status: 'Aperfeiçoamento',
      description: 'Compreensão dos processos cognitivos, socioemocionais e afetivos que permeiam a aprendizagem ao longo da vida.',
    },
  ];

  const filteredItems = educationItems.filter((item) => {
    if (activeCategory === 'pos') return item.type === 'pos';
    if (activeCategory === 'capacitacao') return item.type === 'capacitacao';
    return true;
  });

  return (
    <section id="formacao" className="py-20 lg:py-28 bg-[#F3EDE3]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#899B70] font-semibold">
            Educação Continuada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#384330] mt-2 mb-4">
            Conhecimento que se transforma em cuidado.
          </h2>
          <p className="text-base text-[#59684D] font-light leading-relaxed">
            A busca constante pelo conhecimento faz parte do meu compromisso com uma prática
            psicológica ética, responsável e atualizada.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex p-1 bg-[#FAF9F6] rounded-full border border-[#A3B18A]/25 shadow-2xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#899B70] text-white shadow-xs'
                  : 'text-[#59684D] hover:text-[#2D3328]'
              }`}
            >
              Todas as Áreas ({educationItems.length})
            </button>
            <button
              onClick={() => setActiveCategory('pos')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === 'pos'
                  ? 'bg-[#899B70] text-white shadow-xs'
                  : 'text-[#59684D] hover:text-[#2D3328]'
              }`}
            >
              Pós-Graduações (5)
            </button>
            <button
              onClick={() => setActiveCategory('capacitacao')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === 'capacitacao'
                  ? 'bg-[#899B70] text-white shadow-xs'
                  : 'text-[#59684D] hover:text-[#2D3328]'
              }`}
            >
              Cursos e Capacitações (6)
            </button>
          </div>
        </div>

        {/* Grid of Education Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isPos = item.type === 'pos';
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#A3B18A]/20 hover:border-[#899B70]/50 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-[#899B70] uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span
                      className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full ${
                        item.status === 'Concluída'
                          ? 'bg-[#A3B18A]/20 text-[#384330]'
                          : item.status === 'Em andamento'
                          ? 'bg-[#F3EDE3] text-[#59684D] border border-[#A3B18A]/30'
                          : 'bg-[#F3EDE3] text-[#77776F]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#384330] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#77776F] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#A3B18A]/15 flex items-center gap-1.5 text-[11px] text-[#59684D]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#899B70] shrink-0" />
                  <span>Prática clínica atualizada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical disclaimer box */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FAF9F6] border border-[#A3B18A]/25 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#77776F] leading-relaxed">
            Formação contínua pautada nas resoluções e diretrizes do Conselho Federal de Psicologia
            (CFP), assegurando acolhimento fundamentado teoricamente e com respeito ético integral.
          </p>
        </div>
      </div>
    </section>
  );
};
