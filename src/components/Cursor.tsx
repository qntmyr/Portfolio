"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

const SIZE = 18;

/**
 * A round cursor that trails the pointer with a small spring and grows over
 * links and buttons. Only on devices with a real mouse; touch screens and
 * people who asked for reduced motion keep the native cursor.
 */
export function Cursor() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 900, damping: 60, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 900, damping: 60, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches || reduced) return;
    setActive(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest("a, button, [role='button']")));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [reduced, x, y]);

  if (!active) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="cursor"
      style={{ x: sx, y: sy, width: SIZE, height: SIZE }}
      animate={{ scale: hovering ? 2.4 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
