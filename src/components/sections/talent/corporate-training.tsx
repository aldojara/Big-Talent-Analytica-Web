import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { talentFormats } from "@/data/talent";

export function CorporateTraining() {
  return (
    <section className="bg-[var(--bta-soft)] py-8 sm:py-9" id="corporate-training">
      <Container>
        <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-[linear-gradient(135deg,#ffffff_0%,#edf5ff_100%)] p-5 text-center shadow-[0_8px_22px_rgb(8_23_63/0.055)] sm:p-6">
          <div
            aria-hidden="true"
            className="absolute right-7 top-5 size-20 opacity-50 [background-image:radial-gradient(rgb(0_87_255/0.45)_1px,transparent_1px)] [background-size:10px_10px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-xl font-black leading-tight text-[var(--bta-blue-deeper)] sm:text-2xl">
              Formación corporativa para desarrollar capacidades con impacto real
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--bta-muted)]">
              Diseño experiencias de aprendizaje para empresas y equipos que necesitan desarrollar liderazgo, adopción de IA, nuevas competencias y transformación cultural.
            </p>
          </div>
          <div className="relative mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {talentFormats.map((format) => (
              <div
                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white/90 p-2.5 text-[0.72rem] font-black leading-4 text-[var(--bta-text)] shadow-[0_6px_16px_rgb(8_23_63/0.035)]"
                key={format.id}
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-blue-50 text-[var(--bta-blue)]">
                  <Icon className="size-5" name={format.icon} />
                </span>
                {format.title}
              </div>
            ))}
          </div>
          <ButtonLink className="relative mt-5 px-8" href="/talento/formacion-corporativa">
            Solicitar una propuesta
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
