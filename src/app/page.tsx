import Link from "next/link";

import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Big Talent Analytica
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Conocimiento que transforma talento en resultados
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Plataforma de conocimiento aplicado sobre inteligencia artificial,
            analítica, tecnología, talento y transformación de negocios.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/recursos"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explorar contenidos
            </Link>

            <Link
              href="/casos-de-uso"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-900"
            >
              Ver casos de uso
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
