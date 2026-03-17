"use client";

import { createContext, useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import { shouldAnimatePage } from "./animation-tracker";

const AnimationContext = createContext(true);

/**
 * Returns whether entrance animations should play on the current page.
 * `true` = first visit this session, animate normally.
 * `false` = already visited, skip entrance animations.
 *
 * NOTE: This is a Next.js utility. Requires next/navigation in the consuming project.
 */
export function usePageAnimation() {
  return useContext(AnimationContext);
}

/**
 * Wrap page content with this provider. It reads the current pathname,
 * checks the module-level tracker, and provides shouldAnimate via context.
 */
export function PageAnimationGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const cache = useRef<{ pathname: string; value: boolean }>({
    pathname: "",
    value: true,
  });

  if (cache.current.pathname !== pathname) {
    cache.current = { pathname, value: shouldAnimatePage(pathname) };
  }

  return (
    <AnimationContext.Provider value={cache.current.value}>
      {children}
    </AnimationContext.Provider>
  );
}
