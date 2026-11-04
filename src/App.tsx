/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingWhatsAppSection } from './components/BookingWhatsAppSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ReelModal } from './components/ReelModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('noivas');
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);

  const handleOpenBookingModal = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setPreselectedService(serviceId);
    const bookingSection = document.getElementById('contato');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#261B17] flex flex-col font-sans selection:bg-[#E6D2C9] selection:text-[#261B17]">
      {/* Top Navigation Bar */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Area */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onOpenBookingModal={handleOpenBookingModal}
          onOpenReelModal={() => setIsReelModalOpen(true)}
        />

        {/* Services Section */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Portfolio Gallery with Before/After Slider */}
        <PortfolioGallery />

        {/* About Section */}
        <AboutSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Interactive WhatsApp Booking Section */}
        <BookingWhatsAppSection preselectedService={preselectedService} />

        {/* FAQ Accordions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Interactive Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialServiceId={preselectedService}
      />

      {/* Behind-the-Scenes Reel Modal */}
      <ReelModal
        isOpen={isReelModalOpen}
        onClose={() => setIsReelModalOpen(false)}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />
    </div>
  );
}
