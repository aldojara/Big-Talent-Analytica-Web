import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { learningFormats } from "@/data/home";

export function LearningFormatsSection() {
  const nodePositions = [
    "left-1/2 top-[10%]",
    "left-[84%] top-[30%]",
    "left-[78%] top-[72%]",
    "left-1/2 top-[90%]",
    "left-[16%] top-[72%]",
    "left-[16%] top-[30%]",
  ];

  return (
    <section className="bg-[var(--bta-soft)] py-9 sm:py-10">
      <Container className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
        <div>
          <SectionHeading title="Aprende en múltiples formatos" />
          <div className="mt-5 grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningFormats.map((format) => (
              <Link
                className="flex gap-3 rounded-xl p-1.5 transition hover:bg-white focus-visible:outline focus-visible:outline-2"
                href={format.href}
                key={format.href}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-white text-[var(--bta-blue)]">
                  <Icon className="size-4" name={format.icon} />
                </span>
                <span>
                  <span className="block text-xs font-bold text-[var(--bta-text)]">
                    {format.title}
                  </span>
                  <span className="mt-0.5 block text-[0.68rem] leading-4 text-[var(--bta-muted)]">
                    {format.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[var(--bta-shadow)] sm:p-6">
          <div className="grid gap-5 sm:grid-cols-[1fr_12rem] sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Únete a la comunidad</h2>
              <p className="mt-2 max-w-lg text-xs leading-5 text-blue-100">
                Recibe cada semana ideas, casos de uso y tendencias sobre IA,
                tecnología, datos y talento.
              </p>
              <form
                action="/comunidad/newsletter"
                className="mt-5 flex flex-col gap-2.5 sm:flex-row"
                method="get"
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Tu correo electrónico
                </label>
                <input
                  className="min-h-10 min-w-0 rounded-lg border border-white/20 bg-white px-3 text-xs text-[var(--bta-text)] placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2"
                  id="newsletter-email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  type="email"
                />
                <button
                  className="min-h-10 rounded-lg bg-[var(--bta-blue)] px-4 text-xs font-bold text-white transition hover:bg-[var(--bta-blue-bright)] focus-visible:outline focus-visible:outline-2"
                  type="submit"
                >
                  Suscribirme
                </button>
              </form>
              <p className="mt-2 text-[0.68rem] text-blue-100">
                Sin spam. Solo contenido de valor.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="relative mx-auto aspect-square w-full max-w-44 rounded-full border border-white/15"
            >
              <span className="absolute inset-8 rounded-full border border-blue-300/30" />
              <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--bta-blue)]">
                <Icon className="size-7" name="community" />
              </span>
              {nodePositions.map((position) => (
                <span
                  className={`absolute flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 ${position}`}
                  key={position}
                >
                  <Icon className="size-3.5" name="talent" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
