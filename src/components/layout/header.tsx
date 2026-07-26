import Link from "next/link";

import { Container } from "@/components/layout/container";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex min-h-20 items-center justify-between gap-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-950"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/agenda"
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Agenda una sesión
        </Link>
      </Container>
    </header>
  );
}
