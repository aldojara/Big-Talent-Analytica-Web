import { WorkPrincipleCard } from "@/components/cards/work-principle-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { workPrinciples } from "@/data/about";

export function WorkPrinciplesSection() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <SectionHeading title="Principios que guían mi trabajo" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workPrinciples.map((principle) => (
            <WorkPrincipleCard key={principle.title} principle={principle} />
          ))}
        </div>
      </Container>
    </section>
  );
}
