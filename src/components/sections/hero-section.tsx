import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { heroContent } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_58%_30%,rgb(0_87_255/0.22),transparent_28%),radial-gradient(circle_at_22%_80%,rgb(24_196_199/0.1),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgb(255_255_255/0.45)_1px,transparent_1px)] [background-size:18px_18px]"
      />
      <Container className="relative grid gap-7 py-9 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-11">
        <div className="max-w-[34rem] min-w-0">
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-blue-200">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            <span className="block">Conocimiento que</span>
            <span className="block">
              transforma{" "}
              <span className="text-[var(--bta-blue-bright)]">talento</span>
            </span>
            <span className="block">en resultados</span>
          </h1>
          <p className="mt-4 max-w-[20rem] break-words text-sm leading-6 text-blue-100 sm:max-w-[31rem] sm:text-[0.9rem] sm:leading-6">
            {heroContent.description}
          </p>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href={heroContent.ctas[0].href}>
              {heroContent.ctas[0].label}
            </ButtonLink>
            <ButtonLink href={heroContent.ctas[1].href} variant="secondary">
              {heroContent.ctas[1].label}
            </ButtonLink>
            <ButtonLink href={heroContent.ctas[2].href} variant="ghost">
              <span className="flex size-7 items-center justify-center rounded-full border border-white/40">
                <Icon className="size-3.5" name="play" />
              </span>
              {heroContent.ctas[2].label}
            </ButtonLink>
          </div>
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-[1fr_10.5rem] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-[16rem] rounded-full bg-[radial-gradient(circle_at_50%_40%,#0b65ff_0%,#063a9b_48%,#061b49_72%)] sm:max-w-[18rem] lg:max-w-[20rem]">
            <div className="absolute inset-7 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-[1.35rem] border border-white/20 bg-white/10 backdrop-blur sm:size-32" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgb(255_255_255/0.25),transparent_10%),radial-gradient(circle_at_72%_35%,rgb(24_196_199/0.45),transparent_13%),radial-gradient(circle_at_55%_75%,rgb(29_115_255/0.38),transparent_16%)]" />
            <div className="absolute inset-x-4 bottom-5 rounded-2xl border border-white/20 bg-[var(--bta-blue-dark)]/85 p-3.5 shadow-xl backdrop-blur sm:inset-x-8 sm:bottom-7">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-white text-[var(--bta-blue)]">
                  <Icon className="size-[1.125rem]" name="spark" />
                </span>
                <div>
                  <p className="text-xs font-bold">Placeholder visual</p>
                  <p className="text-[0.68rem] leading-4 text-blue-100">
                    Preparado para reemplazar por next/image
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside aria-label="Especialidades" className="min-w-0 space-y-2">
            {heroContent.specialties.map((specialty, index) => (
              <div
                className="flex min-w-0 items-center gap-2 rounded-xl border border-white/15 bg-white/8 p-2 text-[0.72rem] font-semibold leading-4 text-blue-50"
                key={specialty}
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-white/20 text-[var(--bta-turquoise)]">
                  <Icon
                    className="size-3.5"
                    name={index === 0 ? "analytics" : index === 1 ? "ai" : "strategy"}
                  />
                </span>
                {specialty}
              </div>
            ))}
          </aside>
        </div>
      </Container>
    </section>
  );
}
