import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-24 py-12 first:pt-0">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
