import Link from "next/link";

import type { HeroContent, PersonInfo } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { InteractiveSurface } from "@/components/ui/InteractiveSurface";
import { FadeIn, RevealText, Stagger, StaggerItem } from "@/components/ui/motion";
import { Tag } from "@/components/ui/Tag";

type HeroSectionProps = {
  person: PersonInfo;
  hero: HeroContent;
};

export function HeroSection({ person, hero }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:items-end lg:gap-12">
          <div className="max-w-5xl">
            <FadeIn delay={0.08}>
              <p className="mb-5 text-[10px] uppercase tracking-[0.36em] text-white/[0.42]">
                {hero.eyebrow}
              </p>
            </FadeIn>

            <RevealText
              as="h1"
              text={hero.lines}
              delay={0.14}
              className="font-display text-[clamp(3.7rem,11vw,8.2rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-ink"
            />

            <FadeIn delay={0.36}>
              <p className="mt-7 text-base uppercase tracking-[0.28em] text-white/[0.56] sm:text-[0.9rem]">
                {person.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.44}>
              <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-muted sm:text-xl">
                {person.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.52}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={hero.primaryAction.href}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.1]"
                >
                  {hero.primaryAction.label}
                </Link>
                <Link
                  href={hero.secondaryAction.href}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/[0.72] transition hover:border-white/20 hover:text-white"
                >
                  {hero.secondaryAction.label}
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-4">
            <FadeIn delay={0.28}>
              <InteractiveSurface
                glow="warm"
                className="ambient-ring rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-7"
              >
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
                  Current focus
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {hero.focus.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <p className="mt-7 text-base leading-7 text-white/[0.78]">
                  {hero.description}
                </p>
              </InteractiveSurface>
            </FadeIn>

            <Stagger className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" delay={0.32}>
              {hero.stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <InteractiveSurface
                    glow="cool"
                    className="ambient-ring rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md"
                  >
                    <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.4]">
                      {stat.label}
                    </p>
                    <p className="mt-4 font-display text-3xl tracking-[-0.06em] text-white">
                      {stat.value}
                    </p>
                  </InteractiveSurface>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}

