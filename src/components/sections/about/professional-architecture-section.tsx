import { ProfessionalDimensionCard } from "@/components/cards/professional-dimension-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { professionalDimensions } from "@/data/about";

export function ProfessionalArchitectureSection() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <SectionHeading
          description="Seis dimensiones que se conectan para crear soluciones reales con propósito."
          title="Mi arquitectura profesional"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {professionalDimensions.map((dimension) => (
            <ProfessionalDimensionCard
              dimension={dimension}
              key={dimension.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
