export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Talento", href: "/talento" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "IA y Tecnología", href: "/ia-tecnologia" },
  { label: "Dominios", href: "/dominios" },
  { label: "Recursos", href: "/recursos" },
  { label: "Comunidad", href: "/comunidad" },
];
