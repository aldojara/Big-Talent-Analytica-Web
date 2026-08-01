import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import type { UseCasesFinalCta as UseCasesFinalCtaData } from "@/types/use-case";

export function UseCasesFinalCta({ cta }: { cta: UseCasesFinalCtaData }) {
  return (
    <section className="bg-white pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.16)] sm:p-6 lg:grid lg:grid-cols-[15rem_1fr_auto] lg:items-center lg:gap-7 lg:px-7 lg:py-5">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_4%_42%,rgb(29_115_255/0.28),transparent_26%),radial-gradient(circle_at_94%_42%,rgb(29_115_255/0.25),transparent_24%)]"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-72 opacity-30 [background-image:radial-gradient(rgb(255_255_255/0.7)_1px,transparent_1px)] [background-size:18px_18px]"
          />
          <CtaVisual />
          <div className="relative min-w-0">
            <h2 className="max-w-2xl text-2xl font-black leading-tight tracking-tight sm:text-[1.8rem]">
              {cta.title}
              <span className="block text-[var(--bta-blue-bright)]">
                {cta.highlightedTitle}
              </span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50">
              {cta.description}
            </p>
          </div>
          <div className="relative mt-5 grid gap-2.5 sm:max-w-xs lg:mt-0 lg:w-60">
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--bta-blue)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_18px_36px_rgb(0_87_255/0.26)] transition hover:bg-[var(--bta-blue-bright)] focus-visible:outline focus-visible:outline-2"
              href={cta.primaryCta.href}
            >
              {cta.primaryCta.label}
              <Icon className="size-4" name="calendar" />
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/45 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2"
              href={cta.secondaryCta.href}
            >
              {cta.secondaryCta.label}
              <Icon className="size-4" name="arrow-right" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CtaVisual() {
  return (
    <div className="relative mb-5 hidden h-28 min-w-0 lg:mb-0 lg:block" aria-hidden="true">
      <div className="absolute bottom-0 left-3 h-24 w-16 rounded-t-[3.5rem] bg-white/13" />
      <div className="absolute bottom-0 left-[4.8rem] h-20 w-14 rounded-t-[3rem] bg-white/17" />
      <div className="absolute left-7 top-2 size-8 rounded-full bg-blue-100/25" />
      <div className="absolute left-[5.7rem] top-6 size-7 rounded-full bg-blue-100/30" />
      <div className="absolute bottom-4 left-16 h-10 w-20 rounded-lg border border-white/15 bg-white/10 backdrop-blur" />
      <div className="absolute right-6 top-4 rounded-xl border border-white/15 bg-white/10 p-2.5 text-blue-100 backdrop-blur">
        <Icon className="size-8" name="consulting" />
      </div>
    </div>
  );
}
