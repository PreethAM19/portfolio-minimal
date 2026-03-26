import type { ProjectsContent } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/motion";

import { ProjectCard } from "./ProjectCard";

type ProjectsSectionProps = {
  projects: ProjectsContent;
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 h-px w-full section-rule" />
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
        />

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.items.map((project, index) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
