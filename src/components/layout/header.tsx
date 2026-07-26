import Link from "next/link";

import { Container } from "@/components/layout/container";
import { DesktopNavigation } from "@/components/navigation/desktop-navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { ctaNavigation, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--bta-border)] bg-white/95 backdrop-blur">
      <Container className="relative flex min-h-16 items-center justify-between gap-3 xl:gap-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2"
        >
          <span className="grid size-8 shrink-0 grid-cols-3 gap-0.5 text-[var(--bta-blue)]">
            {Array.from({ length: 9 }).map((_, index) => (
              <span className="size-1.5 rounded-full bg-current" key={index} />
            ))}
          </span>
          <span>
            <span className="block whitespace-nowrap text-sm font-bold tracking-tight text-[var(--bta-text)] xl:text-base">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.66rem] leading-4 text-[var(--bta-muted)] sm:block">
              by {siteConfig.founder}
            </span>
          </span>
        </Link>

        <DesktopNavigation items={mainNavigation} />

        <Link
          href={ctaNavigation.href}
          className="hidden min-h-9 shrink-0 items-center justify-center rounded-lg bg-[var(--bta-blue)] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_24px_rgb(0_87_255/0.2)] transition hover:bg-[var(--bta-blue-bright)] focus-visible:outline focus-visible:outline-2 lg:inline-flex xl:px-5"
        >
          {ctaNavigation.label}
        </Link>

        <MobileNavigation cta={ctaNavigation} items={mainNavigation} />
      </Container>
    </header>
  );
}
