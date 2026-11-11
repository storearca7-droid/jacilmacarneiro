import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre mim', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Cursos e Capacitações', href: '#formacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#A3B18A]/20 py-3'
          : 'bg-[#FAF9F6]/80 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="group flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#59684D] rounded-lg"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#59684D]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap transition-colors hover:text-[#2D3328] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#899B70] after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Action Button (Direct WhatsApp with pulse animation and hover elevation) */}
            <a
              href="https://wa.me/5575991212220?text=Ol%C3%A1%2C%20Jacilma!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico%20e%20possibilidades%20de%20agendamento."
              target="_blank"
              rel="noopener noreferrer"
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs lg:text-sm font-semibold tracking-wide uppercase text-white bg-[#899B70] hover:bg-[#74825E] rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#899B70] whitespace-nowrap cursor-pointer"
            >
              {/* Soft breathing pulse effect matching the floating WhatsApp button */}
              <span
                className="absolute inset-0 rounded-full bg-[#899B70] opacity-40 animate-ping -z-10 pointer-events-none"
                style={{ animationDuration: '3s' }}
              />
              <MessageCircle className="w-4 h-4 shrink-0 transition-transform group-hover:rotate-12 duration-300" />
              <span>Agendar Consulta</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#59684D] hover:text-[#2D3328] hover:bg-[#F3EDE3]/70 focus-visible:outline-2 focus-visible:outline-[#59684D] transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-[#A3B18A]/25 px-5 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-[#384330] hover:bg-[#F3EDE3] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#899B70]">→</span>
              </a>
            ))}

            <div className="pt-3 border-t border-[#A3B18A]/20 flex flex-col gap-2">
              <a
                href="https://wa.me/5575991212220?text=Ol%C3%A1%2C%20Jacilma!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico%20e%20possibilidades%20de%20agendamento."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white bg-[#899B70] hover:bg-[#74825E] rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Agendar Consulta</span>
              </a>

              <a
                href="https://www.conexasaude.com.br/psicologia-clinica/jacilma-carneiro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#59684D] bg-[#F3EDE3] hover:bg-[#E2D7C5] rounded-full transition-colors"
              >
                <span>Atendimento Conexa Saúde</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
