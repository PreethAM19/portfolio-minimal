import Link from "next/link";

import type { HeroContent, PersonInfo } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/motion";

type HeroSectionProps = {
  person: PersonInfo;
  hero: HeroContent;
};

export function HeroSection({ person, hero }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100vh-2rem)] items-center pt-24 sm:pt-28"
    >
      <Container>
        <div className="grid gap-12 pb-14 pt-8 sm:pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div className="max-w-4xl">
            <FadeIn delay={0.05}>
              <p className="mb-5 text-xs uppercase tracking-[0.34em] text-white/[0.45]">
                {person.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="max-w-5xl text-balance text-[clamp(3.75rem,11vw,8rem)] font-medium leading-[0.92] tracking-[-0.06em] text-ink">
                {person.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-muted sm:text-xl">
                {person.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={hero.primaryAction.href}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.1]"
                >
                  {hero.primaryAction.label}
                </Link>
                <Link
                  href={hero.secondaryAction.href}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  {hero.secondaryAction.label}
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {hero.focusAreas.map((item, index) => (
              <FadeIn
                key={item}
                delay={0.25 + index * 0.08}
                className="surface-panel rounded-[1.75rem] p-5"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                  Focus
                </p>
                <p className="mt-5 text-lg font-medium tracking-[-0.03em] text-white">
                  {item}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
