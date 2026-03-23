"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";

import type { StackItem } from "@/content/portfolio";

import { InteractiveSurface } from "@/components/ui/InteractiveSurface";

type AnimatedStackProps = {
  items: readonly StackItem[];
};

export function AnimatedStack({ items }: AnimatedStackProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 1500);

    return () => {
      window.clearInterval(interval);
    };
  }, [items.length, shouldReduceMotion]);

  return (
    <InteractiveSurface
      glow="cool"
      className="ambient-ring rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8"
    >
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pulse-line absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-soft/55 to-transparent opacity-80" />

      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
            Rotating highlight
          </p>
          <AnimatePresence mode="wait">
            <m.p
              key={items[activeIndex]?.label}
              className="mt-4 font-display text-2xl tracking-[-0.05em] text-white sm:text-[2rem]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {items[activeIndex]?.label}
            </m.p>
          </AnimatePresence>
        </div>

        <p className="text-sm text-white/[0.35]">
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-3">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <m.button
              key={item.label}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              className="rounded-full border px-4 py-2 text-left text-sm transition focus-visible:outline-white/60"
              animate={
                isActive
                  ? {
                      y: -4,
                      scale: 1.02,
                      borderColor: "rgba(141, 167, 200, 0.55)",
                      backgroundColor: "rgba(141, 167, 200, 0.12)",
                      color: "rgba(255,255,255,0.96)",
                    }
                  : {
                      y: 0,
                      scale: 1,
                      borderColor: "rgba(255,255,255,0.08)",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      color: "rgba(255,255,255,0.62)",
                    }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.label}
            </m.button>
          );
        })}
      </div>
    </InteractiveSurface>
  );
}
