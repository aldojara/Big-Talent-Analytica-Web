import type { MetadataRoute } from "next";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

type SitemapRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const baseUrl = "https://bigtalentanalytica.com";
const lastModified = new Date("2026-08-02");

const routes: SitemapRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/sobre-mi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/talento", changeFrequency: "weekly", priority: 0.8 },
  { path: "/casos-de-uso", changeFrequency: "weekly", priority: 0.8 },
  { path: "/ia-y-tecnologia", changeFrequency: "weekly", priority: 0.8 },
  { path: "/dominios", changeFrequency: "weekly", priority: 0.8 },
  { path: "/recursos", changeFrequency: "weekly", priority: 0.8 },
  { path: "/comunidad", changeFrequency: "weekly", priority: 0.8 },
  { path: "/agenda", changeFrequency: "monthly", priority: 0.8 },
  { path: "/talento/liderazgo-y-cultura", changeFrequency: "monthly", priority: 0.7 },
  { path: "/talento/upskilling-y-reskilling", changeFrequency: "monthly", priority: 0.7 },
  { path: "/talento/talento-e-ia", changeFrequency: "monthly", priority: 0.7 },
  { path: "/talento/formacion-corporativa", changeFrequency: "monthly", priority: 0.7 },
  { path: "/talento/mentoria-profesional", changeFrequency: "monthly", priority: 0.7 },
  { path: "/talento/transformacion-organizacional", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/experiencia-de-cliente", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/marketing-y-ventas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/supply-chain-y-operaciones", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/analitica-y-toma-de-decisiones", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/ia-aplicada-al-negocio", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/finanzas-y-rendimiento", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/transformacion-digital-y-organizacional", changeFrequency: "monthly", priority: 0.7 },
  { path: "/casos-de-uso/talento-y-recursos-humanos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/ia-y-tecnologia/radar", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ia-y-tecnologia/inteligencia-artificial", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ia-y-tecnologia/ia-generativa", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ia-y-tecnologia/datos-y-analitica", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ia-y-tecnologia/automatizacion", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ia-y-tecnologia/herramientas-y-plataformas", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ia-y-tecnologia/transformacion-digital", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ia-y-tecnologia/ia-responsable-y-gobierno", changeFrequency: "weekly", priority: 0.7 },
  { path: "/dominios/marketing-y-ventas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dominios/experiencia-de-cliente-y-servicio", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dominios/supply-chain-y-operaciones", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dominios/procesos-y-transformacion", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dominios/finanzas-y-rendimiento", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dominios/talento-y-recursos-humanos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/recursos/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/recursos/guias-y-plantillas", changeFrequency: "weekly", priority: 0.7 },
  { path: "/recursos/videos", changeFrequency: "weekly", priority: 0.7 },
  { path: "/recursos/podcasts", changeFrequency: "weekly", priority: 0.7 },
  { path: "/recursos/cursos-y-rutas", changeFrequency: "weekly", priority: 0.7 },
  { path: "/recursos/herramientas", changeFrequency: "weekly", priority: 0.7 },
  { path: "/comunidad/newsletter", changeFrequency: "weekly", priority: 0.7 },
  { path: "/comunidad/webinars-y-eventos", changeFrequency: "weekly", priority: 0.7 },
  { path: "/comunidad/canales-y-redes", changeFrequency: "weekly", priority: 0.7 },
  { path: "/comunidad/colaboraciones", changeFrequency: "weekly", priority: 0.7 },
  { path: "/comunidad/comunidad-privada", changeFrequency: "weekly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
