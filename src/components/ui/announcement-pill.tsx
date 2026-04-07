"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "../../lib/utils";

interface AnnouncementPillProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

function AnnouncementPill({
  href,
  children,
  external = false,
  className,
}: AnnouncementPillProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border border-border bg-white py-1.5 pl-5 pr-1 shadow-sm transition-colors duration-300 hover:border-border/80 dark:border-white/[0.08] dark:bg-[#272727] dark:hover:border-white/[0.12]",
        className
      )}
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
    >
      <span className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-white/90">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        {children}
      </span>
      <span className="block h-4 w-px bg-border/60 dark:bg-white/[0.1]" />
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary transition-colors duration-200 group-hover:bg-secondary/80 dark:bg-white/[0.06] dark:group-hover:bg-white/[0.1]">
        <ArrowRight className="h-3 w-3 text-foreground/60 dark:text-white/40" />
      </span>
    </a>
  );
}

export { AnnouncementPill };
export type { AnnouncementPillProps };
