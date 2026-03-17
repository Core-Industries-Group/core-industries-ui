"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] pointer-events-none hidden md:block"
      style={{ height: "4px" }}
    >
      <motion.div
        className="h-full origin-left rounded-r-full"
        style={{
          scaleX,
          background: "#FF602D",
          boxShadow:
            "0 1px 4px rgba(255, 96, 45, 0.4), 0 1px 2px rgba(0, 0, 0, 0.08)",
        }}
      />
    </div>
  );
}
