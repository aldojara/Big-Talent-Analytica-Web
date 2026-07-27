import { TalentContentCard } from "@/components/cards/talent-content-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { talentContentItems } from "@/data/talent";

export function TalentContent() {
  return (
    <section className="bg-[var(--bta-soft)] py-8 sm:py-9">
      <Container>
        <SectionHeading title="Cursos, rutas y contenidos relacionados" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {talentContentItems.map((item) => (
            <TalentContentCard item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
