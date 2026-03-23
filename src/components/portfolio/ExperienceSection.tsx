import type { ExperienceContent } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { InteractiveSurface } from "@/components/ui/InteractiveSurface";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { Tag } from "@/components/ui/Tag";

type ExperienceSectionProps = {
  experience: ExperienceContent;
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 h-px w-full section-rule" />
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <SectionHeading
            eyebrow={experience.eyebrow}
            title={experience.title}
            description={experience.description}
          />

          <Stagger className="relative pl-7" delay={0.12}>
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

            {experience.items.map((item) => (
              <StaggerItem key={`${item.role}-${item.organization}`} className="relative pb-5 last:pb-0">
                <span className="absolute left-0 top-7 h-5 w-5 rounded-full border border-white/20 bg-canvas shadow-[0_0_0_6px_rgba(5,6,8,0.9)]" />
                <InteractiveSurface
                  glow="cool"
                  className="ambient-ring rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl tracking-[-0.05em] text-white">
                        {item.role}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.26em] text-white/[0.45]">
                        {item.organization}
                      </p>
                    </div>
                    <Tag>{item.period}</Tag>
                  </div>

                  <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/[0.76]">
                    {item.summary}
                  </p>

                  {item.impact ? (
                    <p className="mt-6 text-sm text-white/[0.42]">{item.impact}</p>
                  ) : null}
                </InteractiveSurface>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

