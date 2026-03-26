"use client";

import { useState } from "react";

import type { ExperienceContent } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { InteractiveSurface } from "@/components/ui/InteractiveSurface";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

type ExperienceSectionProps = {
  experience: ExperienceContent;
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = experience.items[activeIndex] ?? experience.items[0];

  if (!activeItem) {
    return null;
  }

  return (
    <section id="experience" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 h-px w-full section-rule" />
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={experience.eyebrow}
              title={experience.title}
              description={experience.description}
            />

            <InteractiveSurface
              glow="warm"
              className="ambient-ring mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-xl">
                  <p className="font-display text-[2rem] leading-[1.02] tracking-[-0.06em] text-white sm:text-[2.35rem]">
                    {activeItem.role}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.26em] text-white/[0.45]">
                    {activeItem.organization}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/[0.34]">
                    {activeItem.location}
                  </p>
                </div>
                <Tag>{activeItem.period}</Tag>
              </div>

              <ul
                key={`${activeItem.role}-${activeItem.organization}`}
                className="mt-6 space-y-3"
              >
                {activeItem.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="relative pl-4 text-pretty text-sm leading-7 text-white/[0.76] sm:text-base"
                  >
                    <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-white/[0.38]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </InteractiveSurface>
          </div>

          <div className="relative pl-7">
            <div className="absolute left-2.5 top-4 bottom-4 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

            <div className="space-y-3">
              {experience.items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${item.role}-${item.organization}`}
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative w-full rounded-[1.6rem] border px-5 py-5 text-left transition sm:px-6 ${
                      isActive
                        ? "translate-y-[-2px] scale-[1.01] border-white/18 bg-white/[0.06] text-white"
                        : "border-white/8 bg-white/[0.025] text-white/[0.74] hover:border-white/14 hover:bg-white/[0.04] hover:translate-y-[-1px]"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 h-5 w-5 -translate-x-[1.72rem] -translate-y-1/2 rounded-full border shadow-[0_0_0_6px_rgba(5,6,8,0.9)] ${
                        isActive
                          ? "border-white/30 bg-white/[0.16]"
                          : "border-white/20 bg-canvas"
                      }`}
                    />

                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="pr-3">
                        <p className="font-display text-[1.45rem] leading-[1.08] tracking-[-0.05em] text-current sm:text-[1.6rem]">
                          {item.role}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.26em] text-white/[0.42]">
                          {item.organization}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/[0.28]">
                          {item.location}
                        </p>
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.28em] text-white/[0.4]">
                        {item.period}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
