import Link from "@/components/ui/no-prefetch-link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { domainNavItems } from "@/data/domains";
import { aiTechnologyNavItems } from "@/data/ia-tecnologia/navigation";
import { resourceNavItems } from "@/data/resources";
import { talentSubpageNavItems } from "@/data/talent-subpages";
import { siteConfig } from "@/config/site";

const exploreLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Comunidad", href: "/comunidad" },
  { label: "Contacto", href: "/agenda" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bta-blue-deeper)] text-white">
      <Container className="py-9">
        <div className="grid gap-x-10 gap-y-8 border-b border-white/15 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.45fr_repeat(5,minmax(0,1fr))]">
          <div className="min-w-0">
            <Link className="inline-flex items-center gap-2.5" href="/">
              <span className="grid size-8 grid-cols-3 gap-0.5 text-[var(--bta-blue-bright)]">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    className="size-1.5 rounded-full bg-current"
                    key={index}
                  />
                ))}
              </span>
              <span>
                <span className="block text-base font-bold">{siteConfig.name}</span>
                <span className="text-[0.68rem] text-blue-100">
                  by {siteConfig.founder}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-5 text-blue-100">
              Conocimiento aplicable para transformar talento, tecnología y
              negocios.
            </p>
            <div className="mt-4 flex gap-2.5">
              {siteConfig.socialLinks.map((link) => (
                <Link
                  className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2"
                  href={link.href}
                  key={link.label}
                >
                  <span className="sr-only">{link.label}</span>
                  <SocialGlyph glyph={link.glyph} />
                </Link>
              ))}
            </div>
          </div>

          <FooterColumn title="Explorar">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Talento">
            {talentSubpageNavItems.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Dominios">
            {domainNavItems.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.menuLabel}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="IA y Tecnología">
            {aiTechnologyNavItems.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <div className="min-w-0">
            <h2 className="text-xs font-bold">Recursos y contacto</h2>
            <div className="mt-3">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-blue-200">
                Recursos
              </h3>
              <ul className="mt-2 space-y-1.5">
                {resourceNavItems.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.menuLabel}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-blue-200">
                Contacto
              </h3>
              <ul className="mt-2 space-y-2.5 text-xs leading-5 text-blue-100">
                <li>
                  <Link
                    className="break-words hover:text-white focus-visible:outline focus-visible:outline-2"
                    href={`mailto:${siteConfig.contactEmail}`}
                  >
                    {siteConfig.contactEmail}
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white focus-visible:outline focus-visible:outline-2"
                    href="/agenda"
                  >
                    Agenda una sesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="pt-5 text-center text-[0.68rem] text-blue-100">
          © 2026 Big Talent Analytica. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="min-w-0">
      <h2 className="text-xs font-bold">{title}</h2>
      <ul className="mt-3 space-y-1.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      className="block whitespace-normal break-normal text-xs leading-5 text-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2"
      href={href}
    >
      {children}
    </Link>
  );
}

function SocialGlyph({ glyph }: { glyph: string }) {
  if (glyph === "play") {
    return (
      <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 16 16">
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
