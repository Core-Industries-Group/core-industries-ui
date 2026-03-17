/**
 * Module-level Set that tracks which pages have played their entrance animations.
 * Persists across Next.js client-side navigations (same JS context).
 * Clears on full page refresh — animations replay once per browser session.
 *
 * NOTE: This is a Next.js utility. Requires next/navigation.
 */
const animatedPages = new Set<string>();

export function shouldAnimatePage(pathname: string): boolean {
  if (animatedPages.has(pathname)) return false;
  animatedPages.add(pathname);
  return true;
}
