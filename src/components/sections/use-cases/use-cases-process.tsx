import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type { UseCaseProcessStep } from "@/types/use-case";

export function UseCasesProcess({ steps }: { steps: UseCaseProcessStep[] }) {
  return (
    <section className="bg-white pb-7 sm:pb-8">
      <Container>
        <SectionHeading align="center" title="Cómo trabajamos" />
        <ol className="mt-5 grid gap-4 md:grid-cols-5 md:gap-4">
          {steps.map((step, index) => (
            <li className="relative min-w-0" key={step.id}>
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[calc(50%+1.75rem)] top-[2.75rem] hidden h-px w-[calc(100%-3rem)] border-t border-dashed border-[var(--bta-blue)]/55 md:block"
                />
              ) : null}
              <article className="relative flex gap-3 rounded-lg border border-blue-100 bg-white p-3.5 shadow-sm md:block md:border-0 md:p-0 md:text-center md:shadow-none">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-xs font-black text-[var(--bta-blue)] md:mx-auto">
                  {step.number}
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[var(--bta-blue)] md:mx-auto md:mt-3">
                  <Icon className="size-7" name={step.icon} />
                </span>
                <div className="min-w-0 md:pt-2">
                  <h2 className="text-sm font-black text-[var(--bta-text)]">
                    {step.title}
                  </h2>
                  <p className="mt-1 text-[0.68rem] leading-4 text-[var(--bta-muted)]">
                    {step.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
