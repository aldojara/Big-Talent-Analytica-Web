import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

export function TalentFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(120deg,transparent_0%,rgb(0_87_255/0.18)_55%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-52 w-96 opacity-30 [background-image:radial-gradient(rgb(29_115_255/0.6)_1px,transparent_1px)] [background-size:18px_18px]"
      />
      <Container className="relative grid gap-7 py-9 sm:py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <h2 className="max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
            El talento no se desarrolla por accidente.
            <span className="block text-[var(--bta-blue-bright)]">
              Se construye con estrategia, aprendizaje y acción.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100">
            Si buscas desarrollar capacidades, formar equipos o impulsar transformación con utilidad real, conversemos.
          </p>
        </div>
        <div className="min-w-0">
          <ButtonLink className="w-full px-8 sm:w-auto" href="/agenda">
            Agenda una sesión
          </ButtonLink>
          <p className="mt-4 text-xs text-blue-100">
            Estoy listo para colaborar en tu próximo paso.
          </p>
          <div className="mt-4 flex gap-2.5">
            {siteConfig.socialLinks.map((link) => (
              <Link
                className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2"
                href={link.href}
                key={link.label}
              >
                <span className="sr-only">{link.label}</span>
                <SocialGlyph glyph={link.glyph} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialGlyph({ glyph }: { glyph: string }) {
  if (glyph === "play") {
    return (
      <svg
        aria-hidden="true"
        className="size-4"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M5.2 3.5v9l7-4.5z" />
      </svg>
    );
  }

  if (glyph === "mail") {
    return <Icon className="size-4" name="mail" />;
  }

  if (glyph === "music") {
    return (
      <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
        <path
          d="M9.5 2.5v7.2a2.2 2.2 0 1 1-1.4-2.1V4.1l4.2.9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  return <span className="text-xs font-bold leading-none">in</span>;
}
