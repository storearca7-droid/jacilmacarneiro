import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Specialties } from './components/Specialties.tsx';
import { PsychotherapyBenefits } from './components/PsychotherapyBenefits.tsx';
import { ServiceModalities } from './components/ServiceModalities.tsx';
import { Education } from './components/Education.tsx';
import { CtaBanner } from './components/CtaBanner.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { BookingModal } from './components/BookingModal.tsx';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const handleOpenBookingModal = (specialty?: string) => {
    setSelectedSpecialty(specialty || null);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedSpecialty(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D3328] flex flex-col font-sans selection:bg-[#A3B18A]/30 selection:text-[#2D3328]">
      {/* Smart Sticky Header */}
      <Header onOpenBookingModal={() => handleOpenBookingModal()} />

      <main className="flex-1">
        {/* 1. Hero / Apresentação */}
        <Hero onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 2. Sobre Mim */}
        <About />

        {/* 3. Especialidades e Áreas de Atuação */}
        <Specialties onSelectSpecialty={(title) => handleOpenBookingModal(title)} />

        {/* 4. A Importância da Psicoterapia */}
        <PsychotherapyBenefits onStartTherapy={() => handleOpenBookingModal()} />

        {/* 5. Modalidades de Atendimento (Online e Presencial Hospital HPRO) */}
        <ServiceModalities />

        {/* 6. Cursos e Capacitações */}
        <Education />

        {/* 7. Chamada para Agendamento */}
        <CtaBanner />

        {/* 8. Contato e Assistente de Mensagem */}
        <Contact />
      </main>

      {/* 9. Rodapé Institucional */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        preselectedSpecialty={selectedSpecialty}
      />
    </div>
  );
}
