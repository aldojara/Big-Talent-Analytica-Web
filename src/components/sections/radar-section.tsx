import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { radarItems } from "@/data/home";

export function RadarSection() {
  return (
    <section className="bg-[var(--bta-soft)] py-9 sm:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[14rem_1fr]">
          <div>
            <p className="mb-2 inline-flex rounded-md bg-blue-100 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[var(--bta-blue)]">
              Novedades
            </p>
            <h2 className="text-xl font-bold text-[var(--bta-text)]">
              Radar de IA y Tecnología
            </h2>
            <p className="mt-3 text-xs leading-5 text-[var(--bta-muted)]">
              Lo más relevante del mundo de la IA, la tecnología y la
              transformación digital, con mi análisis y perspectiva.
            </p>
            <Link
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2"
              href="/ia-tecnologia"
            >
              Ver todas las novedades
              <Icon className="size-3.5" name="arrow-right" />
            </Link>
          </div>

          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {radarItems.map((item, index) => (
              <article
                className="min-w-60 overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-sm lg:min-w-0"
                key={item.href}
              >
                <div className="relative flex aspect-[16/8.5] items-center justify-center bg-[var(--bta-blue-dark)] text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgb(29_115_255/0.75),transparent_34%),linear-gradient(135deg,rgb(24_196_199/0.28),transparent_45%)]" />
                  <span className="absolute left-2.5 top-2.5 rounded-md bg-[var(--bta-blue)] px-2 py-0.5 text-[0.58rem] font-bold uppercase">
                    {item.category}
                  </span>
                  <Icon
                    className="relative size-9"
                    name={index === 0 ? "ai" : index === 1 ? "chart" : index === 2 ? "briefcase" : "automation"}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold leading-5 text-[var(--bta-text)]">
                    <Link
                      className="hover:text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[0.68rem] text-[var(--bta-muted)]">
                    {item.date} <span aria-hidden="true">|</span> {item.topic}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
