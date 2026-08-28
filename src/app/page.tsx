import { Hero } from '@/components/Hero';
import { LocationsSection } from '@/components/LocationsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FleetSection } from '@/components/FleetSection';
import { FboSection } from '@/components/FboSection';
import { FaqSection } from '@/components/FaqSection';
import { faqs } from '@/content/faqs';
import { JsonLd, faqSchema } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      {/* Same array the accordion below renders, so the two cannot drift. */}
      <JsonLd data={faqSchema(faqs)} />

      <Hero />
      <LocationsSection />
      <ExperienceSection />
      <ServicesSection />
      <FleetSection />
      <FboSection />
      <FaqSection />
    </>
  );
}
