import type { Project } from "@/content/portfolio";

import { HoverPanel } from "@/components/ui/motion";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <HoverPanel
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-panel backdrop-blur-sm sm:p-8",
        featured && "lg:col-span-2 lg:p-10",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,196,152,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_65%)] opacity-75 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.34em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </p>
          <Tag className="border-accent/20 bg-accent/10 text-accent">
            {project.metric}
          </Tag>
        </div>

        <div
          className={cn(
            "mt-10 grid gap-10",
            featured && "lg:grid-cols-[1.15fr_0.85fr] lg:gap-12",
          )}
        >
          <div>
            <h3 className="max-w-3xl text-balance text-2xl font-medium tracking-[-0.04em] text-ink sm:text-[2rem]">
              {project.title}
            </h3>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-white/[0.86]">
              {project.summary}
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted">
              {project.description}
            </p>
          </div>

          <div className="grid gap-7">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                Highlights
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.highlights.map((highlight) => (
                  <Tag key={highlight}>{highlight}</Tag>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HoverPanel>
  );
}
