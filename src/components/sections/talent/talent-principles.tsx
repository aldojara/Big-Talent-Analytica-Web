import { TalentPrincipleCard } from "@/components/cards/talent-principle-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { talentPrinciples } from "@/data/talent";

export function TalentPrinciples() {
  return (
    <section className="bg-[var(--bta-soft)] py-8 sm:py-9">
      <Container>
        <SectionHeading title="Principios del desarrollo de talento" />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {talentPrinciples.map((principle) => (
            <TalentPrincipleCard principle={principle} key={principle.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
