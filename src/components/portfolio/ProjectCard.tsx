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
      className="ambient-ring h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
    >
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_12.5rem] xl:items-start xl:gap-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-4 max-w-xl font-display text-3xl tracking-[-0.06em] text-ink sm:text-[2.4rem]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-white/[0.78] sm:text-lg">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
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

        <ProjectVisual visual={project.visual} accent={accent} />
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
      <div className="relative h-44 sm:h-48">
        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.02]" />
        <div className={`absolute inset-0 rounded-[2rem] border border-white/10 ${accent.outer}`} />
        <div className={`absolute inset-6 rounded-[1.35rem] border border-white/10 ${accent.inner}`} />
        <div className="absolute left-1/2 top-7 h-12 w-12 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04]" />
        <div className="absolute left-1/2 top-16 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-white/30 to-transparent" />
        <div className="absolute bottom-8 left-1/2 grid w-16 -translate-x-1/2 grid-cols-4 gap-1">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="aspect-square rounded-[2px] bg-white/[0.14]" />
          ))}
        </div>
      </div>
    );
  }

  if (visual === "sniffi") {
    return (
      <div className="relative h-44 sm:h-48">
        <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.02]" />
        <div className={`absolute inset-0 rounded-[2rem] border border-white/10 ${accent.outer}`} />
        <div className="absolute left-6 top-8 right-12 rounded-[1.2rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-xs text-white/[0.66]">
          Navigation
        </div>
        <div className="absolute left-14 top-24 right-6 rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white/[0.58]">
          Booking + tele-consults
        </div>
        <div className="absolute inset-y-12 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/22 to-transparent" />
        <div className="absolute bottom-7 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04]" />
      </div>
    );
  }

  return (
    <div className="relative h-44 sm:h-48">
      <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.02]" />
      <div className={`absolute inset-0 rounded-[2rem] border border-white/10 ${accent.outer}`} />
      <div className={`absolute inset-6 rounded-[1.35rem] border border-white/10 ${accent.inner}`} />
      <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/22 to-transparent" />
      <div className="absolute bottom-9 left-8 right-8 flex items-end justify-between gap-1">
        {[32, 18, 42, 26, 48, 22, 36].map((height, index) => (
          <span
            key={index}
            className="w-3 rounded-full bg-white/[0.18]"
            style={{ height }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-8 h-16 w-16 rounded-full border border-white/10" />
    </div>
  );
}
