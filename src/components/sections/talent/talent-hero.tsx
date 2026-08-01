import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { talentAreas, talentHero } from "@/data/talent";

const orbitPositions = [
  "left-2 top-8 sm:left-2 sm:top-11",
  "right-2 top-9 sm:right-3 sm:top-12",
  "left-0 top-32 sm:left-4 sm:top-34",
  "right-0 top-32 sm:right-4 sm:top-34",
  "left-4 bottom-10 sm:left-5 sm:bottom-12",
  "right-4 bottom-10 sm:right-5 sm:bottom-12",
];

export function TalentHero() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid gap-6 border-b border-[var(--bta-border)] py-8 sm:py-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-10">
        <div className="min-w-0">
          <p className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-[var(--bta-blue)]">
            {talentHero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-[41rem] text-3xl font-black leading-[1.08] tracking-tight text-[var(--bta-blue-deeper)] sm:text-4xl lg:text-[2.48rem] xl:text-[2.65rem]">
            {talentHero.title}
          </h1>
          <p className="mt-3 max-w-[36rem] text-sm leading-6 text-[var(--bta-muted)] sm:text-[0.95rem]">
            {talentHero.description}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={talentHero.ctas[0].href}>
              {talentHero.ctas[0].label}
            </ButtonLink>
            <Link
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[var(--bta-blue)] bg-white px-4 py-2.5 text-xs font-semibold text-[var(--bta-blue)] transition hover:bg-blue-50 hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2 sm:text-sm"
              href={talentHero.ctas[1].href}
            >
              {talentHero.ctas[1].label}
              <Icon className="size-3.5" name="arrow-right" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto min-h-[23rem] w-full max-w-[34.5rem] sm:min-h-[26rem]">
          <div
            aria-hidden="true"
            className="absolute inset-10 rounded-full border border-blue-100"
          />
          <svg
            aria-hidden="true"
            className="absolute inset-0 size-full text-blue-300/80"
            fill="none"
            viewBox="0 0 620 500"
          >
            <path d="M110 250h108M402 250h108M310 126v82M310 292v82" stroke="currentColor" strokeDasharray="5 8" strokeWidth="2.4" />
            <path d="M174 136c80-62 190-62 272 0M174 364c82 58 190 58 272 0" stroke="currentColor" strokeWidth="2.2" />
            <path d="M190 188 245 218M430 188l-55 30M190 312l55-30M430 312l-55-30" stroke="currentColor" strokeDasharray="4 8" strokeWidth="2" />
            <circle cx="310" cy="250" r="142" stroke="currentColor" strokeDasharray="4 10" strokeWidth="2" />
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-white bg-[var(--bta-blue)] text-white shadow-[0_18px_38px_rgb(0_87_255/0.22)] sm:size-28">
            <Icon className="size-10" name="talent" />
          </div>

          <div className="absolute left-1/2 top-1/2 grid size-64 -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-3 text-white sm:size-72">
            {["analytics", "strategy", "community", "domain"].map((icon, index) => (
              <div
                className="flex items-center justify-center rounded-2xl border border-white/35 bg-gradient-to-br from-blue-700 to-blue-500 shadow-[0_12px_26px_rgb(0_87_255/0.16)]"
                key={icon}
              >
                <Icon
                  className={`size-8 ${index === 0 || index === 3 ? "opacity-70" : "opacity-95"}`}
                  name={icon as "analytics" | "strategy" | "community" | "domain"}
                />
              </div>
            ))}
          </div>

          {talentAreas.map((area, index) => (
            <div
              className={`absolute z-20 flex max-w-[10.5rem] items-center gap-2 rounded-lg border border-blue-100 bg-white/96 p-2.5 text-[0.66rem] font-black leading-4 text-[var(--bta-text)] shadow-[0_8px_22px_rgb(8_23_63/0.075)] backdrop-blur ${orbitPositions[index]}`}
              key={area.id}
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-4.5" name={area.icon} />
              </span>
              {area.title}
            </div>
          ))}
        </div>

        <nav
          aria-label="Accesos rápidos a áreas de talento"
          className="lg:col-span-2"
        >
          <ul className="flex gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible md:grid-cols-3 lg:grid-cols-6">
            {talentAreas.map((area) => (
              <li className="min-w-[10.5rem] sm:min-w-0" key={area.id}>
                <Link
                  className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--bta-border)] bg-white px-3 text-center text-[0.68rem] font-bold text-[var(--bta-text)] shadow-[0_6px_18px_rgb(8_23_63/0.035)] transition hover:border-blue-200 hover:bg-blue-50 hover:text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2"
                  href="#talent-areas"
                >
                  <Icon className="size-4 shrink-0 text-[var(--bta-blue)]" name={area.icon} />
                  <span>{area.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
