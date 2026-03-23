import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/[0.58]",
        className,
      )}
    >
      {children}
    </span>
  );
}
