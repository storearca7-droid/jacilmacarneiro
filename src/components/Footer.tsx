import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { MessageCircle, HeartHandshake, Shield, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre mim', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Cursos e Capacitações', href: '#formacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#384330] text-[#FAF9F6] pt-16 pb-12 border-t border-[#59684D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer: Brand, Quote, Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#59684D]/60 items-start">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="dark" size="lg" />

            <p className="font-serif italic text-lg text-[#E2D7C5] max-w-sm pt-2">
              “Cuidar da mente é transformar vidas.”
            </p>

            <p className="text-xs text-[#C4CFA9] font-light leading-relaxed max-w-md">
              Atendimento psicológico clínico fundamentado na ética, responsabilidade e respeito à
              singularidade de cada paciente. Atendimentos online para todo o Brasil e presenciais em
              Conceição do Coité – BA.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C4CFA9] font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#FAF9F6]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C4CFA9] font-semibold mb-4">
              Canais Oficiais
            </h4>
            <div className="text-xs text-[#FAF9F6]/80 space-y-2">
              <p>
                <strong className="text-white">Online & Particular:</strong> (75) 99121-2220
              </p>
              <p>
                <strong className="text-white">Hospital HPRO:</strong> (75) 3262-1522 / (75) 99988-1522
              </p>
              <p>
                <strong className="text-white">Local:</strong> Conceição do Coité – Bahia
              </p>
              <p>
                <strong className="text-white">Conexa Saúde:</strong> Telepsicologia & Planos
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5575991212220"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#384330] bg-[#C4CFA9] hover:bg-white rounded-full transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ethical disclaimer regarding emergency mental health (CFP requirement) */}
        <div className="py-6 border-b border-[#59684D]/60 text-[11px] text-[#C4CFA9]/80 leading-relaxed space-y-2">
          <p>
            <strong>Aviso importante:</strong> Este site possui caráter exclusivamente informativo e
            institucional, em total conformidade com o Código de Ética Profissional do Psicólogo
            (Resolução CFP nº 010/05) e a Resolução CFP nº 11/2018 (atendimento psicológico online).
            Não substitui acompanhamento de emergência médica.
          </p>
          <p>
            Em caso de crise grave, risco à integridade ou emergência psiquiátrica imediata, dirija-se
            ao pronto-socorro mais próximo ou entre em contato com o{' '}
            <strong className="text-white">CVV (Centro de Valorização da Vida)</strong> pelo telefone{' '}
            <strong className="text-white">188</strong> (ligação gratuita, 24 horas por dia).
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C4CFA9]/70">
          <div>
            <span>© 2026 Jacilma Lopes Carneiro · CRP 03/33397. Todos os direitos reservados.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
