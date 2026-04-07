import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "colors", label: "Color Palette" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "cards", label: "Cards" },
  { id: "forms", label: "Form Elements" },
  { id: "overlays", label: "Overlays & Layout" },
  { id: "animation", label: "Animation" },
  { id: "effects", label: "Effects" },
  { id: "display", label: "Display" },
  { id: "templates", label: "Templates" },
  { id: "tokens", label: "Design Tokens" },
  { id: "utilities", label: "Utilities" },
];

export function ShowcaseLayout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const [activeId, setActiveId] = useState("colors");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 hidden h-screen w-60 flex-col border-r border-border bg-surface-raised p-6 lg:flex">
        <div className="mb-8">
          <img
            src={theme === "dark" ? "/wordmark-light.webp" : "/wordmark-dark.webp"}
            alt="Core Industries"
            className="h-7 w-auto"
          />
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 ${
                activeId === id
                  ? "bg-brand/10 text-brand"
                  : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <span className="text-[11px] text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile header */}
      <header className="fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between border-b border-border bg-surface-overlay px-4 backdrop-blur-md lg:hidden">
        <img
          src={theme === "dark" ? "/wordmark-light.webp" : "/wordmark-dark.webp"}
          alt="Core Industries"
          className="h-5 w-auto"
        />
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className="w-full pt-14 lg:pl-60 lg:pt-0">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12">
          {children}
        </div>
      </main>
    </div>
  );
}
