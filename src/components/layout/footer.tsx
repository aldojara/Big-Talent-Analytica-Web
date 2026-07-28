import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { mainNavigation } from "@/config/navigation";
import { domainNavItems } from "@/data/domains";
import { aiTechnologyNavItems } from "@/data/ia-tecnologia/navigation";
import { resourceNavItems } from "@/data/resources";
import { talentSubpageNavItems } from "@/data/talent-subpages";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[var(--bta-blue-deeper)] text-white">
      <Container className="py-9">
        <div className="grid gap-8 border-b border-white/15 pb-8 md:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1.15fr_1.1fr_1.15fr_1fr_1fr]">
          <div>
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

          <div>
            <h2 className="text-xs font-bold">Navegación</h2>
            <ul className="mt-3 grid grid-cols-2 gap-1.5">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-xs text-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold">Recursos y blog</h2>
            <ul className="mt-3 space-y-1.5">
              {resourceNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-xs text-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2"
                    href={item.href}
                  >
                    {item.menuLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold">Talento</h2>
            <ul className="mt-3 space-y-1.5">
              {talentSubpageNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-xs text-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold">Dominios</h2>
            <ul className="mt-3 space-y-1.5">
              {domainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-xs text-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2"
                    href={item.href}
                  >
                    {item.menuLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold">IA y Tecnología</h2>
            <ul className="mt-3 space-y-1.5">
              {aiTechnologyNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-xs text-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold">Contacto</h2>
            <ul className="mt-3 space-y-2.5 text-xs text-blue-100">
              <li className="flex gap-2">
                <Icon className="mt-0.5 size-3.5" name="mail" />
                <Link
                  className="hover:text-white focus-visible:outline focus-visible:outline-2"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </Link>
              </li>
              <li className="flex gap-2">
                <Icon className="mt-0.5 size-3.5" name="calendar" />
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
        <p className="pt-5 text-center text-[0.68rem] text-blue-100">
          © 2026 Big Talent Analytica. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
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
