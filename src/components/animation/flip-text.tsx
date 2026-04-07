"use client";

import { type ReactNode, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * 3D rotateX flip — identical physics to the NavLink component.
 * Front face rotates down (from bottom edge), back face rotates up (from top edge).
 * Spring: stiffness 100, damping 20, duration 0.5
 *
 * Automatically listens for hover on the closest <a> or <button> ancestor,
 * so the flip triggers from anywhere on the button — not just the text.
 */

const flipFront = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const flipBack = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const flipSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function FlipText({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parent = el.closest("a, button") as HTMLElement | null;
    if (!parent) return;

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.span
      ref={ref}
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ perspective: "600px" }}
      animate={hovered ? "hover" : "initial"}
    >
      <motion.span
        className="inline-flex items-center gap-2"
        variants={flipFront}
        transition={flipSpring}
        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 inline-flex items-center justify-center gap-2"
        variants={flipBack}
        transition={flipSpring}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
          rotateX: 90,
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
