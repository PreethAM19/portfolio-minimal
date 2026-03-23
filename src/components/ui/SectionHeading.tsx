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
      <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-white/[0.45]">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "max-w-xl font-display text-balance text-3xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.75rem]",
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
