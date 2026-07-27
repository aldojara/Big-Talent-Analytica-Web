import { TalentAudienceCard } from "@/components/cards/talent-audience-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { talentAudiences } from "@/data/talent";

export function TalentAudiences() {
  return (
    <section className="bg-white py-8 sm:py-9" id="talent-audiences">
      <Container>
        <SectionHeading title="Para quién está pensado" />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {talentAudiences.map((audience) => (
            <TalentAudienceCard audience={audience} key={audience.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
