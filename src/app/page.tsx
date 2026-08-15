import { Hero } from '@/components/Hero';
import { LocationsSection } from '@/components/LocationsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FleetSection } from '@/components/FleetSection';
import { InMotionSection } from '@/components/InMotionSection';
import { FboSection } from '@/components/FboSection';
import { FaqSection } from '@/components/FaqSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocationsSection />
      <ExperienceSection />
      <ServicesSection />
      <FleetSection />
      <InMotionSection />
      <FboSection />
      <FaqSection />
    </>
  );
}
