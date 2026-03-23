import { cn } from "@/lib/utils";

import { FadeIn } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={className}>
      <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "max-w-2xl font-display text-balance text-3xl font-medium leading-[1.02] tracking-[-0.05em] text-ink sm:text-4xl lg:text-[3rem]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
