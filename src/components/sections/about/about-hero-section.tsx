import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { aboutHero } from "@/data/about";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--bta-border)] bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgb(245_248_252/0.9),transparent_42%),radial-gradient(circle_at_78%_16%,rgb(0_87_255/0.09),transparent_22%)]"
      />
      <Container className="relative grid gap-8 py-10 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-14">
        <div className="min-w-0">
          <p className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-[var(--bta-blue)]">
            {aboutHero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-[2.45rem] font-black leading-[1.02] tracking-tight text-[var(--bta-blue-deeper)] sm:text-5xl lg:text-[4rem]">
            {aboutHero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-2xl font-black leading-tight tracking-tight text-[var(--bta-blue-deeper)] sm:text-3xl">
            Transformo conocimiento, datos e inteligencia artificial en
            proyectos con{" "}
            <span className="text-[var(--bta-blue)]">utilidad real.</span>
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--bta-muted)] sm:text-base sm:leading-7">
            {aboutHero.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={aboutHero.ctas.primary.href}>
              {aboutHero.ctas.primary.label}
            </ButtonLink>
            <ButtonLink
              className="border border-[var(--bta-blue)] bg-white text-[var(--bta-blue)] hover:bg-blue-50"
              href={aboutHero.ctas.secondary.href}
              variant="light"
            >
              {aboutHero.ctas.secondary.label}
            </ButtonLink>
          </div>
        </div>

        <div className="min-w-0">
          <div className="relative mx-auto max-w-[28rem]">
            <div className="absolute inset-4 rounded-[4rem] border border-blue-100" />
            <div className="absolute -inset-2 rounded-[4.5rem] border border-blue-100/70" />
            <div className="relative mx-auto aspect-[0.86] w-[min(82vw,21rem)] overflow-hidden rounded-[3.25rem] border border-blue-100 bg-[radial-gradient(circle_at_50%_24%,rgb(29_115_255/0.55),transparent_27%),linear-gradient(180deg,#06245f,#021236)] shadow-[0_26px_70px_rgb(8_23_63/0.22)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgb(255_255_255/0.75)_1px,transparent_1px)] [background-size:20px_20px]"
              />
              <div className="absolute inset-x-8 bottom-0 h-[72%] rounded-t-[7rem] bg-[linear-gradient(180deg,rgb(255_255_255/0.2),rgb(255_255_255/0.04))]" />
              <div className="absolute left-1/2 top-[31%] size-24 -translate-x-1/2 rounded-full border border-white/35 bg-white/12" />
              <div className="absolute inset-x-10 bottom-9 rounded-2xl border border-white/20 bg-white/10 p-4 text-center text-white backdrop-blur">
                <p className="text-xs font-bold">Retrato profesional</p>
                <p className="mt-1 text-[0.68rem] leading-4 text-blue-50">
                  Placeholder visual listo para reemplazar por una imagen real
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:absolute sm:inset-0 sm:mt-0">
              {aboutHero.floatingProofs.map((proof, index) => (
                <div
                  className={`flex items-center gap-2 rounded-xl border border-[var(--bta-border)] bg-white/95 p-2.5 text-xs font-bold text-[var(--bta-text)] shadow-[0_10px_28px_rgb(8_23_63/0.08)] sm:absolute sm:max-w-[11rem] ${
                    index === 0
                      ? "sm:left-0 sm:top-8"
                      : index === 1
                        ? "sm:left-1 sm:top-32"
                        : index === 2
                          ? "sm:left-0 sm:bottom-24"
                          : index === 3
                            ? "sm:right-0 sm:top-20"
                            : "sm:right-2 sm:bottom-20"
                  }`}
                  key={proof.label}
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[var(--bta-blue)]">
                    <Icon className="size-4" name={proof.icon} />
                  </span>
                  {proof.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-blue-100 pt-5 lg:col-span-2">
          {aboutHero.chips.map((chip, index) => (
            <span
              className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[var(--bta-border)] bg-white px-3 text-[0.7rem] font-semibold text-[var(--bta-text)] shadow-sm"
              key={chip}
            >
              <Icon
                className="size-3.5 text-[var(--bta-blue)]"
                name={
                  index === 0
                    ? "globe"
                    : index === 1
                      ? "analytics"
                      : index === 2
                        ? "talent"
                        : index === 3
                          ? "diamond"
                          : index === 4
                            ? "course"
                            : "mentor"
                }
              />
              {chip}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
