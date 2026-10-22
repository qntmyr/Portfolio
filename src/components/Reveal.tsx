"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type Tag = "div" | "article" | "li" | "footer";

const tags = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  footer: motion.footer,
};

type RevealProps = {
  as?: Tag;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** Seconds to wait once in view, to stagger siblings. */
  delay?: number;
  children: ReactNode;
};

/**
 * Fades and slides a block into place the first time it scrolls into view.
 * People who asked for reduced motion see it in place straight away.
 */
export function Reveal({
  as = "div",
  id,
  className,
  style,
  delay = 0,
  children,
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = tags[as];
  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
