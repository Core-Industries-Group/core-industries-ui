"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
  delay = 0.5,
  duration = 2,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration,
        ease: "linear",
        delay,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-[rgba(255,96,45,0.35)] via-[rgba(254,141,63,0.28)] to-[rgba(212,80,31,0.38)] dark:from-[rgba(255,96,45,0.4)] dark:via-[rgba(254,141,63,0.32)] dark:to-[rgba(212,80,31,0.42)]",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
