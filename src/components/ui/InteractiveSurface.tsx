"use client";

import type { PointerEvent, ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";

import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { cn } from "@/lib/utils";

type InteractiveSurfaceProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  glow?: "cool" | "warm";
};

const glowPalette = {
  cool: "rgba(141, 167, 200, 0.22)",
  warm: "rgba(207, 180, 134, 0.2)",
};

export function InteractiveSurface({
  children,
  className,
  glow = "cool",
  onPointerMove,
  onPointerLeave,
  ...props
}: InteractiveSurfaceProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const springX = useSpring(pointerX, { stiffness: 260, damping: 30, mass: 0.35 });
  const springY = useSpring(pointerY, { stiffness: 260, damping: 30, mass: 0.35 });
  const backgroundImage = useMotionTemplate`radial-gradient(420px circle at ${springX}% ${springY}%, ${glowPalette[glow]}, transparent 55%)`;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    onPointerMove?.(event);

    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    pointerX.set(x);
    pointerY.set(y);
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    onPointerLeave?.(event);
    pointerX.set(50);
    pointerY.set(50);
  }

  return (
    <m.div
      className={cn("group relative overflow-hidden", className)}
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {!shouldReduceMotion ? (
        <m.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{ backgroundImage }}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.08]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </m.div>
  );
}

