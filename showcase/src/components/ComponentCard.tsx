import type { ReactNode } from "react";

interface ComponentCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function ComponentCard({ title, description, children, className }: ComponentCardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 ${className ?? ""}`}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <h3 className="font-display text-sm font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
      <div className="mt-4">{children}</div>
    </div>
  );
}
