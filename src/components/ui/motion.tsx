"use client";

import type { ElementType, ReactNode } from "react";
import type { HTMLMotionProps, Variants } from "framer-motion";

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

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

type RevealTextProps = {
  as?: ElementType;
  text: string | readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
};

type HoverPanelProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
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
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay,
        ease,
      }}
    >
      {children}
    </m.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0.08,
  stagger = 0.08,
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={shouldReduceMotion ? undefined : itemVariants}
    >
      {children}
    </m.div>
  );
}

export function RevealText({
  as,
  text,
  className,
  lineClassName,
  delay = 0,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = as ?? "div";
  const lines: readonly string[] =
    typeof text === "string" ? text.split("\n") : text;

  return (
    <Component className={className}>
      {lines.map((line: string, index: number) => (
        <span key={`${line}-${index}`} className="block overflow-hidden">
          <m.span
            className={cn("block", lineClassName)}
            initial={shouldReduceMotion ? false : { y: "110%", opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
            transition={{
              duration: 0.95,
              delay: delay + index * 0.08,
              ease,
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </Component>
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
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{
        duration: 0.45,
        ease,
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function PageReveal() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[120]">
      <div className="relative h-full w-full overflow-hidden">
        <m.div
          className="absolute inset-x-0 top-0 h-1/2 origin-top bg-canvas"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
        />
        <m.div
          className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-canvas"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <m.div
            className="relative h-px w-32 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="shimmer-line absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </m.div>
        </div>
      </div>
    </div>
  );
}
