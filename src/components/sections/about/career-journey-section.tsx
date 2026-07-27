import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { careerMilestones } from "@/data/about";

export function CareerJourneySection() {
  return (
    <section className="bg-white py-8 sm:py-10" id="trayectoria">
      <Container>
        <SectionHeading
          description="Un recorrido de aprendizaje y práctica que alimenta cada proyecto que construyo."
          title="Trayectoria que respalda mi visión"
        />
        <ol className="relative mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-5 hidden h-px bg-blue-200 lg:block"
          />
          {careerMilestones.map((milestone) => (
            <li className="relative min-w-0 pl-12 lg:pl-0 lg:text-center" key={milestone.number}>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-5 top-10 w-px bg-blue-100 lg:hidden"
              />
              <span className="absolute left-0 top-0 z-10 flex size-10 items-center justify-center rounded-full bg-[var(--bta-blue)] text-sm font-black text-white shadow-[0_8px_20px_rgb(0_87_255/0.28)] lg:relative lg:left-auto lg:mx-auto">
                {milestone.number}
              </span>
              <h3 className="mt-1 text-sm font-black leading-5 text-[var(--bta-blue-deeper)] lg:mt-4">
                {milestone.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-[var(--bta-muted)]">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
