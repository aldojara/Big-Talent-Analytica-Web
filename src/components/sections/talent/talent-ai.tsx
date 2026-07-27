import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { talentAiUses } from "@/data/talent";

export function TalentAi() {
  return (
    <section className="bg-white py-8 sm:py-9">
      <Container>
        <SectionHeading
          description="Una evolución necesaria para el desarrollo de personas y organizaciones."
          title="Talento + IA"
        />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {talentAiUses.map((use) => (
            <article
              className="flex min-h-20 min-w-0 items-center gap-3 rounded-lg border border-[var(--bta-border)] bg-white p-3.5 shadow-[0_6px_18px_rgb(8_23_63/0.035)]"
              key={use.id}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-5" name={use.icon} />
              </span>
              <h3 className="text-xs font-black leading-4 text-[var(--bta-text)]">
                {use.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
