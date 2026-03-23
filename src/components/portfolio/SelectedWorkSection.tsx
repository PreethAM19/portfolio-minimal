import type { Project } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { ProjectCard } from "./ProjectCard";

type SelectedWorkSectionProps = {
  projects: readonly Project[];
};

export function SelectedWorkSection({
  projects,
}: SelectedWorkSectionProps) {
  return (
    <section
      id="selected-work"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that improved day-to-day operations."
          description="Three focused builds across visitor operations, ERP systems, and AI-assisted product flows."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={0.08 + index * 0.08}
              className={index === 0 ? "lg:col-span-2" : undefined}
            >
              <ProjectCard
                project={project}
                index={index}
                featured={index === 0}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
