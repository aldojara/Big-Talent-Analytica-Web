import { DomainsSection } from "@/components/sections/domains-section";
import { FeaturedContentSection } from "@/components/sections/featured-content-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LearningFormatsSection } from "@/components/sections/learning-formats-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { RadarSection } from "@/components/sections/radar-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <RadarSection />
      <FeaturedContentSection />
      <DomainsSection />
      <LearningFormatsSection />
      <ServicesSection />
    </>
  );
}
