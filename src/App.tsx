import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LocationsSection } from './components/LocationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { FboSection } from './components/FboSection';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [initialBookingData, setInitialBookingData] = useState<any>(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleOpenReservation = (data?: any) => {
    if (data) {
      setInitialBookingData(data);
    }
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
    setInitialBookingData(null);
  };

  const handleSelectVehicle = (vehicleName: string) => {
    setInitialBookingData({ vehicle: vehicleName });
    setIsReservationOpen(true);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-[#171717] dark:text-[#F8F6F2] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Content Area */}
      <main>
        {/* Section 1: Hero Video & Reservation Widget */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* Section 2: Premier Market Locations (Editorial Split Layout) */}
        <LocationsSection onOpenReservation={handleOpenReservation} />

        {/* Section 3: Sanctuary Experience (Full-Bleed Parallax Editorial Layout) */}
        <ExperienceSection />

        {/* Section 4: Bespoke Mobility Services (Executive Service Accordion List Layout) */}
        <ServicesSection onOpenReservation={() => handleOpenReservation()} />

        {/* Section 5: Flagship Fleet Collection (Interactive Vehicle Stage Showcase) */}
        <FleetSection onSelectVehicle={handleSelectVehicle} />

        {/* Section 6: Private Aviation & FBO Tarmac Access */}
        <FboSection onOpenReservation={() => handleOpenReservation()} />

        {/* Section 7: Executive Reviews & Trust Metrics */}
        <TrustSection />

        {/* Section 8: Concierge FAQ */}
        <FaqSection />
      </main>

      {/* Section 9: Executive Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* Reservation Engine Modal Overlay */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
        initialData={initialBookingData}
      />
    </div>
  );
};

export default App;
