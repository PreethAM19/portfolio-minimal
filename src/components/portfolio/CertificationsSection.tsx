import type { CertificationsContent } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { InteractiveSurface } from "@/components/ui/InteractiveSurface";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/motion";

type CertificationsSectionProps = {
  certifications: CertificationsContent;
};

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      className="scroll-mt-28 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mb-10 h-px w-full section-rule" />
        <SectionHeading
          eyebrow={certifications.eyebrow}
          title={certifications.title}
        />

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {certifications.items.map((item) => (
            <StaggerItem key={`${item.provider}-${item.title}`}>
              <InteractiveSurface
                glow="cool"
                className="ambient-ring h-full rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
                      {item.provider}
                    </p>
                    <p className="mt-5 font-display text-2xl tracking-[-0.05em] text-white">
                      {item.title}
                    </p>
                  </div>
                  <span className="font-display text-4xl text-white/[0.08]">
                    {item.provider.slice(0, 1)}
                  </span>
                </div>

                <p className="mt-6 text-sm text-white/[0.46]">{item.meta}</p>
              </InteractiveSurface>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

