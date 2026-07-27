import Link from "next/link";

import { DomainCard } from "@/components/cards/domain-card";
import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { domains } from "@/data/home";

export function DomainsSection() {
  return (
    <section className="bg-white pb-9 sm:pb-10">
      <Container>
        <SectionHeading title="Explora por dominio" />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {domains.map((domain) => (
            <DomainCard domain={domain} key={domain.href} />
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2"
            href="/dominios"
          >
            Ver todos los dominios
            <Icon className="size-3.5" name="arrow-right" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
