import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import type { UseCaseImpactItem } from "@/types/use-case";

export function UseCasesImpact({ items }: { items: UseCaseImpactItem[] }) {
  return (
    <section className="bg-white pb-7 sm:pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.16)] sm:p-6 lg:px-7 lg:py-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_87%_50%,rgb(29_115_255/0.3),transparent_28%),linear-gradient(120deg,transparent,rgb(0_87_255/0.12))]"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-72 opacity-30 [background-image:radial-gradient(rgb(255_255_255/0.7)_1px,transparent_1px)] [background-size:16px_16px]"
          />
          <div className="relative grid gap-5 lg:grid-cols-[1fr_11rem] lg:items-center">
            <div className="min-w-0">
              <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                Impacto que generamos
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                  <article className="min-w-0" key={item.id}>
                    <span className="mb-2 flex size-6 items-center justify-center rounded-full border border-[var(--bta-blue-bright)] text-[var(--bta-blue-bright)]">
                      <Icon className="size-3.5" name={item.icon} />
                    </span>
                    <h3 className="text-xs font-black sm:text-sm">{item.title}</h3>
                    <p className="mt-1 text-[0.68rem] leading-4 text-blue-100">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <TargetVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TargetVisual() {
  return (
    <svg
      aria-hidden="true"
      className="mx-auto hidden size-40 text-[var(--bta-blue-bright)] lg:block"
      fill="none"
      viewBox="0 0 190 190"
    >
      <circle cx="86" cy="104" r="64" stroke="currentColor" strokeWidth="2" opacity="0.26" />
      <circle cx="86" cy="104" r="45" stroke="currentColor" strokeWidth="2" opacity="0.38" />
      <circle cx="86" cy="104" r="24" stroke="currentColor" strokeWidth="2.4" opacity="0.62" />
      <circle cx="86" cy="104" r="7" fill="currentColor" />
      <path d="m92 98 60-60" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
      <path d="M142 48V26h22M142 48h22V26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" />
    </svg>
  );
}
