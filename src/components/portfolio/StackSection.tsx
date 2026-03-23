import type { StackContent } from "@/content/portfolio";

import { AnimatedStack } from "@/components/portfolio/AnimatedStack";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type StackSectionProps = {
  stack: StackContent;
};

export function StackSection({ stack }: StackSectionProps) {
  return (
    <section id="stack" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 h-px w-full section-rule" />
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <SectionHeading
            eyebrow={stack.eyebrow}
            title={stack.title}
            description={stack.description}
          />
          <AnimatedStack items={stack.items} />
        </div>
      </Container>
    </section>
  );
}
