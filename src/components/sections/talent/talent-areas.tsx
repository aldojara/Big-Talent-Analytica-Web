import { TalentAreaCard } from "@/components/cards/talent-area-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { talentAreas } from "@/data/talent";

export function TalentAreas() {
  return (
    <section className="bg-white py-8 sm:py-9" id="talent-areas">
      <Container>
        <SectionHeading
          description="Seis dimensiones para desarrollar capacidades con foco humano, estratégico y aplicado."
          title="Áreas de talento que impulso"
        />
        <div className="mt-5 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {talentAreas.map((area) => (
            <TalentAreaCard area={area} key={area.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
