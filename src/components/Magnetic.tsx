"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";

type MagneticProps = {
  as?: "div" | "article";
  className?: string;
  style?: CSSProperties;
  /** Fraction of the pointer's offset from the centre the block follows. */
  strength?: number;
  /** Largest shift in px, whatever the block's size. */
  max?: number;
  children: ReactNode;
};

/**
 * Nudges a block a few pixels toward the pointer while it hovers, then
 * springs it back into place when the pointer leaves.
 */
export function Magnetic({
  as = "div",
  className,
  style,
  strength = 0.12,
  max = 10,
  children,
}: MagneticProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 22, mass: 0.6 });

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    x.set(Math.max(-max, Math.min(max, dx)));
    y.set(Math.max(-max, Math.min(max, dy)));
  };
  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = as === "article" ? motion.article : motion.div;
  return (
    <Tag
      className={className}
      style={{ ...style, x: sx, y: sy }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </Tag>
  );
}
