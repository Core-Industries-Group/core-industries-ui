"use client";

import React from "react";

export function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-1.5 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04]"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF602D] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF602D]" />
      </span>
      <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-foreground dark:text-white/60">
        {children}
      </span>
    </span>
  );
}
