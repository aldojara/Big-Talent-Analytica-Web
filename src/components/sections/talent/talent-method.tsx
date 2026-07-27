import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { talentSteps } from "@/data/talent";

import { accentStyles } from "@/components/cards/talent-card-styles";

export function TalentMethod() {
  return (
    <section className="bg-[var(--bta-soft)] py-8 sm:py-9">
      <Container>
        <SectionHeading
          description="Del diagnóstico a la evolución continua: una forma práctica de convertir aprendizaje en acción."
          title="Cómo abordo el desarrollo del talento"
        />
        <div className="mt-6 grid gap-3 md:grid-cols-5 md:gap-2">
          {talentSteps.map((step, index) => {
            const accent = accentStyles[step.accent];

            return (
              <article
                className="relative grid min-w-0 grid-cols-[3.25rem_1fr] gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-3.5 shadow-[0_8px_22px_rgb(8_23_63/0.04)] md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none"
                key={step.id}
              >
                <div className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-blue-100 bg-white shadow-[0_10px_28px_rgb(8_23_63/0.08)]">
                  <span className={`absolute -left-1 -top-1 flex size-5 items-center justify-center rounded-full ${accent.icon} text-[0.65rem] font-black`}>
                    {index + 1}
                  </span>
                  <Icon className={`size-7 ${accent.text}`} name={step.icon} />
                </div>
                <div className="min-w-0 md:mt-3">
                  <h3 className="text-xs font-black text-[var(--bta-text)]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.7rem] leading-5 text-[var(--bta-muted)]">
                    {step.description}
                  </p>
                </div>
                {index < talentSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 top-7 hidden h-px w-6 bg-blue-200 md:block"
                  />
                ) : null}
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-6 w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-center text-[0.68rem] font-black uppercase tracking-[0.08em] text-[var(--bta-blue)]">
          CAPACIDADES CON PROPÓSITO — <span className="normal-case tracking-normal text-[var(--bta-blue-deeper)]">Aprender · Aplicar · Transformar</span>
        </div>
      </Container>
    </section>
  );
}
