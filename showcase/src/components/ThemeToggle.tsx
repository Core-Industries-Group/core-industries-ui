import { Sun, Moon } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-8 w-16 items-center rounded-full border border-border bg-surface-raised p-0.5 transition-colors duration-300 dark:border-white/[0.08] dark:bg-white/[0.06]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span
        className="absolute flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 dark:bg-white/[0.12]"
        style={{ transform: theme === "dark" ? "translateX(32px)" : "translateX(0)" }}
      >
        {theme === "light" ? (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        ) : (
          <Moon className="h-3.5 w-3.5 text-blue-400" />
        )}
      </span>
    </button>
  );
}
