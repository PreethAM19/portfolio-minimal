"use client";

import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";

import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@/lib/utils";

type MotionProviderProps = {
  children: ReactNode;
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

type HoverPanelProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

export function HoverPanel({
  children,
  className,
  ...props
}: HoverPanelProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={cn(className)}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}
