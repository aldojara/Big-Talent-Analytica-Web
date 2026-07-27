import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { ecosystemSteps } from "@/data/about";

export function EcosystemFlowSection() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <SectionHeading
          description="Un sistema integrado donde cada elemento alimenta y amplifica al siguiente."
          title="Cómo se conecta todo"
        />
        <div className="mt-6 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-sm sm:p-5">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:items-start">
            {ecosystemSteps.map((step, index) => (
              <li className="relative min-w-0" key={step.title}>
                <div className="flex min-h-28 items-center gap-3 rounded-xl bg-[var(--bta-soft)] p-3 lg:block lg:bg-transparent lg:p-0 lg:text-center">
                  <span className="mx-auto flex size-14 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[var(--bta-blue)] shadow-sm">
                    <Icon className="size-6" name={step.icon} />
                  </span>
                  <div className="min-w-0 lg:mt-3">
                    <h3 className="text-sm font-black text-[var(--bta-blue-deeper)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.72rem] leading-5 text-[var(--bta-muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < ecosystemSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-7 hidden text-blue-300 lg:block"
                  >
                    -&gt;
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-5 max-w-sm rounded-2xl border border-blue-100 bg-white px-5 py-3 text-center shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--bta-blue)]">
              Proyectos con propósito
            </p>
            <p className="mt-1 text-xs font-semibold text-[var(--bta-muted)]">
              Utilidad real · Impacto positivo · Libertad creativa
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
