import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FeaturedUseCase, UseCaseAccent } from "@/types/use-case";

const accentStyles: Record<UseCaseAccent, string> = {
  blue: "bg-[var(--bta-blue)]",
  cyan: "bg-[var(--bta-turquoise)]",
  violet: "bg-violet-600",
  orange: "bg-orange-500",
};

export function FeaturedUseCases({ cases }: { cases: FeaturedUseCase[] }) {
  return (
    <section className="bg-white pb-7 sm:pb-8" id="casos-destacados">
      <Container>
        <SectionHeading align="center" title="Casos destacados" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((useCase) => (
            <article
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[var(--bta-border)] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgb(8_23_63/0.08)]"
              key={useCase.id}
            >
              <UseCaseVisual useCase={useCase} />
              <div className="flex flex-1 flex-col p-3.5">
                <h2 className="text-[0.95rem] font-black leading-tight text-[var(--bta-text)]">
                  {useCase.title}
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-[var(--bta-muted)]">
                  {useCase.description}
                </p>
                <span className="mt-auto inline-flex min-h-7 w-fit items-center rounded-full bg-blue-50 px-2.5 text-[0.68rem] font-bold text-[var(--bta-blue)]">
                  {useCase.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function UseCaseVisual({ useCase }: { useCase: FeaturedUseCase }) {
  return (
    <div className="relative aspect-[1.9] overflow-hidden bg-[var(--bta-blue-deeper)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgb(29_115_255/0.35),transparent_28%),linear-gradient(135deg,rgb(2_18_54),rgb(4_33_90))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <span
        className={`absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-[0.6rem] font-black uppercase tracking-[0.08em] text-white ${accentStyles[useCase.accent]}`}
      >
        {useCase.category}
      </span>
      {useCase.id === "ai-talent-selection" ? (
        <TalentScene icon={useCase.icon} />
      ) : useCase.id === "critical-process-automation" ? (
        <ProcessScene icon={useCase.icon} />
      ) : useCase.id === "digital-adoption-upskilling" ? (
        <CapabilitiesScene icon={useCase.icon} />
      ) : (
        <AnalyticsScene icon={useCase.icon} />
      )}
    </div>
  );
}

function TalentScene({ icon }: Pick<FeaturedUseCase, "icon">) {
  return (
    <>
      <div className="absolute bottom-0 left-5 h-24 w-16 rounded-t-[3rem] bg-white/15" />
      <div className="absolute bottom-8 left-8 size-10 rounded-full bg-blue-100/25" />
      <div className="absolute right-4 top-11 grid w-28 gap-1.5">
        {["Perfil A", "Perfil B", "Perfil C"].map((label, index) => (
          <span
            className="flex items-center gap-1.5 rounded-md border border-blue-200/20 bg-white/10 px-2 py-1 text-[0.55rem] font-bold text-blue-50"
            key={label}
          >
            <span className="size-3 rounded-full bg-blue-200/45" />
            {label}
            <span className="ml-auto text-cyan-200">{index + 82}</span>
          </span>
        ))}
      </div>
      <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl border border-blue-200/30 bg-white/10 text-blue-100 backdrop-blur">
        <Icon className="size-7" name={icon} />
      </div>
    </>
  );
}

function ProcessScene({ icon }: Pick<FeaturedUseCase, "icon">) {
  return (
    <>
      <svg aria-hidden="true" className="absolute inset-x-5 bottom-7 h-20 text-cyan-100" fill="none" viewBox="0 0 210 90">
        <path d="M28 45h44M94 45h44M160 45h28" stroke="currentColor" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="3" />
        {[28, 94, 160].map((x) => (
          <rect fill="rgb(255 255 255 / 0.12)" height="38" key={x} rx="10" stroke="currentColor" strokeOpacity="0.35" width="44" x={x - 22} y="26" />
        ))}
        <path d="M92 21h24v15H92zM95 69h18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
      <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl border border-cyan-100/30 bg-white/10 text-cyan-100 backdrop-blur">
        <Icon className="size-7" name={icon} />
      </div>
    </>
  );
}

function CapabilitiesScene({ icon }: Pick<FeaturedUseCase, "icon">) {
  return (
    <>
      <div className="absolute bottom-0 left-8 h-16 w-12 rounded-t-[2rem] bg-white/16" />
      <div className="absolute bottom-0 left-[4.6rem] h-20 w-14 rounded-t-[2.6rem] bg-white/20" />
      <div className="absolute bottom-0 right-8 h-16 w-12 rounded-t-[2rem] bg-white/14" />
      <div className="absolute left-8 top-12 right-8 rounded-lg border border-blue-200/20 bg-white/10 p-2">
        <div className="mb-2 h-1.5 w-20 rounded bg-blue-100/40" />
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              className="h-3 rounded bg-blue-100/25"
              key={`learning-grid-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl border border-blue-200/30 bg-white/10 text-blue-100 backdrop-blur">
        <Icon className="size-7" name={icon} />
      </div>
    </>
  );
}

function AnalyticsScene({ icon }: Pick<FeaturedUseCase, "icon">) {
  return (
    <>
      <svg aria-hidden="true" className="absolute inset-x-5 bottom-5 h-24 text-blue-100" fill="none" viewBox="0 0 220 100">
        <path d="M12 83h190M26 73V46M55 73V28M84 73V55M113 73V21M142 73V39M171 73V15" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
        <path d="M16 29c25 18 48 12 70-8 29-26 52-4 75 10 18 11 32 4 48-14" stroke="rgb(34 211 238 / 0.75)" strokeLinecap="round" strokeWidth="3" />
      </svg>
      <div className="absolute right-4 top-10 size-16 rounded-full border-[10px] border-blue-100/20 border-t-cyan-200/75" />
      <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl border border-blue-200/30 bg-white/10 text-blue-100 backdrop-blur">
        <Icon className="size-7" name={icon} />
      </div>
    </>
  );
}
