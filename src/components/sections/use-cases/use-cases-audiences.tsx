import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type { UseCaseAudience } from "@/types/use-case";

export function UseCasesAudiences({
  audiences,
}: {
  audiences: UseCaseAudience[];
}) {
  return (
    <section className="bg-white pb-6 sm:pb-7">
      <Container>
        <SectionHeading align="center" title="¿Para quién es?" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article
              className="flex min-w-0 items-center gap-3 rounded-lg border border-[var(--bta-border)] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_22px_rgb(8_23_63/0.07)]"
              key={audience.id}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-6" name={audience.icon} />
              </span>
              <div className="min-w-0">
                <h2 className="text-sm font-black text-[var(--bta-text)]">
                  {audience.title}
                </h2>
                <p className="mt-1 text-[0.68rem] leading-4 text-[var(--bta-muted)]">
                  {audience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
