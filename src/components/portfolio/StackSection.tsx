import type { StackGroup } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { FadeIn, HoverPanel } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

type StackSectionProps = {
  stackGroups: readonly StackGroup[];
};

export function StackSection({ stackGroups }: StackSectionProps) {
  return (
    <section id="stack" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Stack"
            title="A practical toolkit across product, platform, and cloud."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {stackGroups.map((group, index) => (
              <FadeIn key={group.title} delay={0.08 + index * 0.06}>
                <HoverPanel className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                    {group.title}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/[0.72]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </HoverPanel>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
