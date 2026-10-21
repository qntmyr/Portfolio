"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

/** Resting diameter, and how much it grows over something worth clicking or looking at. */
const SIZE = 20;
const GROW = 2.4;
const IMPORTANT =
  "a, button, [role='button'], .card, .frame, .stop, .life-item";

/**
 * A small round cursor that trails the pointer closely and inverts whatever
 * is under it (mix-blend-mode: difference). It grows over links, buttons,
 * cards, photos and journey stops. Only on devices with a real mouse; touch
 * screens and people who asked for reduced motion keep the native cursor.
 */
export function Cursor() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const [big, setBig] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Stiff spring: the dot stays right under the pointer with only a hint of lag.
  const sx = useSpring(x, { stiffness: 2200, damping: 90, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 2200, damping: 90, mass: 0.25 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches || reduced) return;
    setActive(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
      const target = e.target as Element | null;
      setBig(Boolean(target?.closest(IMPORTANT)));
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
      animate={{ scale: big ? GROW : 1 }}
      transition={{ type: "spring", stiffness: 600, damping: 32 }}
    />
  );
}
