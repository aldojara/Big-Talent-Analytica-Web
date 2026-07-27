import { ProjectEcosystemCard } from "@/components/cards/project-ecosystem-card";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectEcosystem } from "@/data/about";

export function ProjectsEcosystemSection() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <SectionHeading
          description="Iniciativas propias que nacen de la intersección entre educación, tecnología y experiencias reales."
          title="Ecosistema de proyectos"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {projectEcosystem.map((project) => (
            <ProjectEcosystemCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
