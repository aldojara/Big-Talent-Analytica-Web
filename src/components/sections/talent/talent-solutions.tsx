import Link from "@/components/ui/no-prefetch-link";

import { accentStyles } from "@/components/cards/talent-card-styles";
import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { talentSolutions } from "@/data/talent";

export function TalentSolutions() {
  return (
    <section className="bg-white py-8 sm:py-9">
      <Container>
        <SectionHeading title="Soluciones para personas y organizaciones" />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {talentSolutions.map((solution) => {
            const accent = accentStyles[solution.accent];

            return (
              <article
                className="min-w-0 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[0_8px_22px_rgb(8_23_63/0.045)]"
                key={solution.id}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${accent.soft} ${accent.text}`}>
                    <Icon className="size-5" name={solution.icon} />
                  </span>
                  <h3 className="pt-1 text-sm font-black text-[var(--bta-text)]">
                    {solution.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-xs leading-5 text-[var(--bta-text)]">
                  {solution.items.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <span className={`mt-2 size-1.5 shrink-0 rounded-full ${accent.soft} ring-2 ring-current ${accent.text}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-5 inline-flex items-center gap-1.5 rounded text-xs font-bold text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2"
                  href={solution.cta.href}
                >
                  {solution.cta.label}
                  <Icon className="size-3.5" name="arrow-right" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
