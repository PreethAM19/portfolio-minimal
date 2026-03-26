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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:items-end lg:gap-12">
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
              </InteractiveSurface>
            </FadeIn>

            <FadeIn delay={0.36}>
              <InteractiveSurface
                glow="cool"
                className="ambient-ring overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md"
              >
                <div className="relative aspect-[4/4.8] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src={hero.photo.src}
                    alt={hero.photo.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%,rgba(5,6,8,0.28)_100%)]" />
                </div>
              </InteractiveSurface>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
