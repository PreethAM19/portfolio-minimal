import type { AboutContent } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading eyebrow="About" title={about.title} />

          <FadeIn delay={0.08}>
            <p className="max-w-2xl text-balance text-xl leading-9 text-white/90 sm:text-2xl">
              {about.summary}
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">
              {about.detail}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {about.pillars.map((pillar) => (
                <Tag key={pillar}>{pillar}</Tag>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
