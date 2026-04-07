"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Slot } from "radix-ui";

import { cn } from "../../lib/utils";

const shimmerGradients = {
  white: {
    background:
      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.12) 52%, transparent 60%)",
  },
  orange: {
    background:
      "linear-gradient(105deg, transparent 40%, rgba(255,96,45,0.08) 48%, rgba(255,96,45,0.14) 50%, rgba(255,96,45,0.08) 52%, transparent 60%)",
  },
} as const;

interface ShimmerButtonProps extends React.ComponentProps<"button"> {
  shimmerColor?: keyof typeof shimmerGradients;
  asChild?: boolean;
}

function ShimmerButton({
  shimmerColor = "white",
  asChild = false,
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="shimmer-button"
      className={cn(
        "relative inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        shimmerColor === "white"
          ? "bg-[#272727] text-white dark:bg-[#272727]"
          : "bg-white text-foreground border border-border dark:bg-white dark:text-[#272727]",
        className
      )}
      {...props}
    >
      {/* Shimmer sweep overlay */}
      <motion.span
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          ...shimmerGradients[shimmerColor],
          backgroundSize: "300% 100%",
        }}
        animate={{ backgroundPosition: ["300% 0%", "-300% 0%"] }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      />
      {/* Content above shimmer */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </Comp>
  );
}

export { ShimmerButton };
export type { ShimmerButtonProps };
