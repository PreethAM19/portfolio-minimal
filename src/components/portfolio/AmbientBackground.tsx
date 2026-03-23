"use client";

import { useEffect } from "react";

import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const pointerGlowSize = 520;

export function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 75, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 75, damping: 20, mass: 0.6 });
  const pointerLeft = useTransform(smoothX, (value) => value - pointerGlowSize / 2);
  const pointerTop = useTransform(smoothY, (value) => value - pointerGlowSize / 2);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    pointerX.set(window.innerWidth * 0.5);
    pointerY.set(window.innerHeight * 0.22);

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [pointerX, pointerY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_28%,transparent_72%,rgba(255,255,255,0.02))]" />

      {!shouldReduceMotion ? (
        <m.div
          className="absolute h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(141,167,200,0.16),rgba(141,167,200,0.08)_35%,transparent_72%)] blur-[90px]"
          style={{ left: pointerLeft, top: pointerTop }}
        />
      ) : null}

      <m.div
        className="absolute -top-16 left-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(207,180,134,0.14),transparent_68%)] blur-[72px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 20, -16, 0],
                y: [0, 24, 12, 0],
                scale: [1, 1.06, 0.98, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <m.div
        className="absolute right-[8%] top-[26%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(141,167,200,0.14),transparent_72%)] blur-[84px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -24, 18, 0],
                y: [0, 32, -14, 0],
                scale: [1, 0.96, 1.08, 1],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute bottom-[-8rem] left-1/2 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.045),transparent_72%)] blur-[96px]" />
    </div>
  );
}

