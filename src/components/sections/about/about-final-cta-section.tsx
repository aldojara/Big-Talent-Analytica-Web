import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { aboutHero, aboutSocialLinks } from "@/data/about";

export function AboutFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgb(0_87_255/0.22),transparent_48%),radial-gradient(circle_at_85%_25%,rgb(29_115_255/0.18),transparent_20%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 opacity-20 [background-image:linear-gradient(120deg,rgb(255_255_255/0.22)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <Container className="relative grid gap-6 py-9 sm:py-11 lg:grid-cols-[1fr_22rem] lg:items-center">
        <div>
          <h2 className="max-w-3xl text-2xl font-black leading-tight tracking-tight sm:text-4xl">
            No construyo solo una marca personal.
          </h2>
          <p className="mt-2 max-w-3xl text-2xl font-black leading-tight text-[var(--bta-blue-bright)] sm:text-4xl">
            Construyo un ecosistema de ideas, experiencias y proyectos.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100">
            Si compartes esta visión o quieres colaborar en algo significativo,
            conversemos. El futuro se construye en comunidad.
          </p>
        </div>
        <div className="lg:text-center">
          <ButtonLink
            className="min-h-12 px-7"
            href={aboutHero.ctas.primary.href}
          >
            Conectar conmigo
          </ButtonLink>
          {aboutSocialLinks.length ? (
            <div className="mt-5">
              <p className="text-xs text-blue-100">
                También puedes encontrarme en:
              </p>
              <div className="mt-3 flex gap-2 lg:justify-center">
                {aboutSocialLinks.map((link) => (
                  <Link
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2"
                    href={link.href}
                    key={link.label}
                  >
                    <span className="sr-only">{link.label}</span>
                    <Icon className="size-4" name={link.icon} />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
