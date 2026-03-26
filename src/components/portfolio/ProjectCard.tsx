import Link from "next/link";

import type { Project } from "@/content/portfolio";

import { InteractiveSurface } from "@/components/ui/InteractiveSurface";
import { Tag } from "@/components/ui/Tag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const accentStyles = {
  cool: {
    glow: "cool" as const,
    outer:
      "bg-[linear-gradient(145deg,rgba(141,167,200,0.18),transparent_70%)]",
    inner:
      "bg-[linear-gradient(145deg,rgba(141,167,200,0.32),rgba(141,167,200,0.02))]",
  },
  warm: {
    glow: "warm" as const,
    outer:
      "bg-[linear-gradient(145deg,rgba(207,180,134,0.2),transparent_70%)]",
    inner:
      "bg-[linear-gradient(145deg,rgba(207,180,134,0.28),rgba(207,180,134,0.03))]",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = accentStyles[project.accent];

  return (
    <InteractiveSurface
      glow={accent.glow}
      className="ambient-ring h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5"
    >
      <div className="flex h-full flex-col">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/30 px-5 pb-5 pt-14 sm:px-6 sm:pb-6">
          <p className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.34em] text-white/[0.42] sm:left-6 sm:top-6">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <ProjectVisual visual={project.visual} accent={accent} />
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-6 sm:px-3">
          <h3 className="max-w-[28rem] font-display text-[2rem] leading-[1.02] tracking-[-0.06em] text-ink sm:text-[2.25rem]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-[34rem] text-pretty text-[0.98rem] leading-7 text-white/[0.76] sm:min-h-[6.25rem] sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2.5 pt-8">
            {project.links.map((link) =>
              link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/[0.78] transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key={link.label}
                  aria-disabled="true"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/[0.34]"
                >
                  {link.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </InteractiveSurface>
  );
}

function ProjectVisual({
  visual,
  accent,
}: {
  visual: Project["visual"];
  accent: {
    outer: string;
    inner: string;
  };
}) {
  if (visual === "visitor") {
    return (
      <div className="relative h-48 sm:h-52" aria-hidden="true">
        <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_top,rgba(141,167,200,0.18),transparent_58%)]" />
        <div className={`absolute inset-0 rounded-[1.4rem] border border-white/10 ${accent.outer}`} />
        <div className="absolute inset-4 rounded-[1.2rem] border border-white/10 bg-black/30" />
        <div className="absolute left-8 top-8 h-24 w-32 rounded-[1rem] border border-white/10 bg-white/[0.05]" />
        <div className="absolute left-12 top-12 h-10 w-10 rounded-full border border-white/10 bg-white/[0.08]" />
        <div className="absolute left-12 top-[5.6rem] h-2 w-14 rounded-full bg-white/[0.18]" />
        <div className="absolute left-12 top-[6.5rem] h-2 w-20 rounded-full bg-white/[0.1]" />
        <div className="absolute right-8 top-8 grid w-[4.6rem] grid-cols-5 gap-1 rounded-[0.9rem] border border-white/10 bg-white/[0.04] p-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="aspect-square rounded-[2px] bg-white/[0.14]" />
          ))}
        </div>
        <div className="absolute bottom-10 left-8 right-8 flex items-center justify-between gap-4">
          <div className="h-12 flex-1 rounded-[0.9rem] border border-white/10 bg-white/[0.03]" />
          <div className="h-12 w-16 rounded-[0.9rem] border border-dashed border-white/16 bg-white/[0.02]" />
          <div className="h-12 flex-1 rounded-[0.9rem] border border-white/10 bg-white/[0.03]" />
        </div>
        <div className="absolute bottom-6 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-white/18 to-transparent" />
      </div>
    );
  }

  if (visual === "sniffi") {
    return (
      <div className="relative h-48 sm:h-52" aria-hidden="true">
        <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_top,rgba(207,180,134,0.2),transparent_58%)]" />
        <div className={`absolute inset-0 rounded-[1.4rem] border border-white/10 ${accent.outer}`} />
        <div className="absolute inset-4 rounded-[1.2rem] border border-white/10 bg-black/30" />
        <div className="absolute left-1/2 top-6 h-[10.5rem] w-[9.1rem] -translate-x-1/2 rounded-[1.65rem] border border-white/10 bg-[#0b1018]" />
        <div className="absolute left-1/2 top-[2.1rem] h-[9.5rem] w-[8rem] -translate-x-1/2 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,27,36,0.95),rgba(10,14,19,0.95))]" />
        <div className="absolute left-[calc(50%-3.4rem)] top-[3rem] h-2.5 w-7 rounded-full bg-white/[0.14]" />
        <div className="absolute left-[calc(50%-3rem)] top-[4.25rem] h-7 w-20 rounded-[0.85rem] border border-white/10 bg-white/[0.05]" />
        <div className="absolute left-[calc(50%-1.7rem)] top-[6rem] h-7 w-[5.7rem] rounded-[0.85rem] border border-white/10 bg-white/[0.08]" />
        <div className="absolute left-[calc(50%-2.9rem)] top-[7.85rem] h-7 w-[6.2rem] rounded-[0.85rem] border border-white/10 bg-white/[0.05]" />
        <div className="absolute left-[calc(50%-3.75rem)] top-[10rem] flex w-[7.5rem] items-center justify-between">
          <span className="h-3 w-3 rounded-full bg-[#d1b58a]/80" />
          <span className="h-px flex-1 bg-gradient-to-r from-[#d1b58a]/65 to-transparent" />
          <span className="h-3 w-3 rounded-full border border-white/20 bg-white/[0.06]" />
          <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="h-3 w-3 rounded-full border border-white/20 bg-white/[0.06]" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 sm:h-52" aria-hidden="true">
      <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_top,rgba(141,167,200,0.16),transparent_60%)]" />
      <div className={`absolute inset-0 rounded-[1.4rem] border border-white/10 ${accent.outer}`} />
      <div className="absolute inset-4 rounded-[1.2rem] border border-white/10 bg-black/30" />
      <div className="absolute left-1/2 top-[2.8rem] h-20 w-20 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04]" />
      <div className="absolute left-1/2 top-[4rem] h-11 w-7 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06]" />
      <div className="absolute left-1/2 top-[5.25rem] h-6 w-px -translate-x-1/2 bg-gradient-to-b from-white/30 to-transparent" />
      <div className="absolute inset-x-10 top-[8.4rem] h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="absolute bottom-9 left-8 right-8 flex items-end justify-between gap-1.5">
        {[22, 34, 18, 40, 28, 44, 24, 36, 20].map((height, index) => (
          <span
            key={index}
            className="w-2.5 rounded-full bg-white/[0.18]"
            style={{ height }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-[2rem] h-[7.75rem] w-[7.75rem] -translate-x-1/2 rounded-full border border-white/10" />
    </div>
  );
}
