import Image from "next/image";
import Link from "next/link";

import type { HeroContent, PersonInfo } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { InteractiveSurface } from "@/components/ui/InteractiveSurface";
import { FadeIn, RevealText } from "@/components/ui/motion";
import { Tag } from "@/components/ui/Tag";

type HeroSectionProps = {
  person: PersonInfo;
  hero: HeroContent;
};

export function HeroSection({ person, hero }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.14fr)_minmax(280px,0.64fr)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.62fr)]">
          <div className="max-w-5xl">
            <RevealText
              as="h1"
              text={hero.lines}
              delay={0.1}
              className="font-display text-[clamp(3.25rem,9.4vw,6.9rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-ink"
            />

            <FadeIn delay={0.28}>
              <p className="mt-7 text-base uppercase tracking-[0.28em] text-white/[0.56] sm:text-[0.9rem]">
                {person.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.36}>
              <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted sm:text-[1.05rem]">
                {person.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.44}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={hero.primaryAction.href}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.1]"
                >
                  {hero.primaryAction.label}
                </Link>
                <Link
                  href={hero.secondaryAction.href}
                  target={hero.secondaryAction.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={hero.secondaryAction.href.endsWith(".pdf") ? "noreferrer" : undefined}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/[0.72] transition hover:border-white/20 hover:text-white"
                >
                  {hero.secondaryAction.label}
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:h-full lg:max-w-[21.75rem] lg:justify-self-end lg:grid-rows-[minmax(0,1fr)_auto]">
            <FadeIn delay={0.28}>
              <InteractiveSurface
                glow="cool"
                className="ambient-ring h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-md"
              >
                <div className="relative aspect-[4/4.45] overflow-hidden rounded-[1.45rem] lg:h-full lg:min-h-0 lg:aspect-auto">
                  <Image
                    src={hero.photo.src}
                    alt={hero.photo.alt}
                    width={900}
                    height={1100}
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 348px"
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%,rgba(5,6,8,0.28)_100%)]" />
                </div>
              </InteractiveSurface>
            </FadeIn>

            <FadeIn delay={0.36}>
              <InteractiveSurface
                glow="warm"
                className="ambient-ring rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
                  Current focus
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hero.focus.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </InteractiveSurface>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
