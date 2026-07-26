import { PillarCard } from "@/components/cards/pillar-card";
import { Container } from "@/components/layout/container";
import { pillars } from "@/data/home";

export function PillarsSection() {
  return (
    <section className="bg-white py-9 sm:py-10">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-[var(--bta-text)] sm:text-2xl">
            <span className="block">Explora los pilares</span>
            <span className="block text-[var(--bta-blue)]">
              de Big Talent Analytica
            </span>
          </h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
}
