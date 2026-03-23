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
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_11rem] lg:items-start">
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

        <div className="relative hidden h-44 lg:block">
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.02]" />
          <div
            className={`absolute inset-0 rounded-[2rem] border border-white/10 ${accent.outer}`}
          />
          <div
            className={`absolute inset-5 rounded-[1.4rem] border border-white/10 ${accent.inner}`}
          />
          <div className="absolute inset-[30%] rounded-full border border-white/10" />
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </InteractiveSurface>
  );
}

