import { ContentCard } from "@/components/cards/content-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredContent } from "@/data/home";

export function FeaturedContentSection() {
  return (
    <section className="bg-white py-9 sm:py-10">
      <Container>
        <SectionHeading title="Contenido destacado" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredContent.map((item) => (
            <ContentCard item={item} key={item.href} />
          ))}
        </div>
      </Container>
    </section>
  );
}
