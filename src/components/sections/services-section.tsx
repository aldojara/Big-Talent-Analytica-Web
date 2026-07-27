import { ServiceCard } from "@/components/cards/service-card";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/home";

export function ServicesSection() {
  return (
    <section className="bg-white py-9 sm:py-10" id="servicios">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_15rem] lg:items-end">
          <SectionHeading
            description="Acompaño a líderes y equipos a acelerar su transformación con conocimiento, estrategia y experiencia práctica."
            title="¿Cómo puedo ayudarte?"
          />
          <div className="rounded-xl bg-[var(--bta-blue)] p-5 text-center text-white shadow-[0_16px_36px_rgb(0_87_255/0.22)] lg:row-span-2">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <Icon className="size-6" name="calendar" />
            </span>
            <h2 className="mt-4 text-base font-bold">Agenda una sesión</h2>
            <p className="mt-1.5 text-xs text-blue-50">
              Conversemos sobre tu proyecto
            </p>
            <ButtonLink className="mt-5 w-full" href="/agenda" variant="light">
              Agendar ahora
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.href} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
