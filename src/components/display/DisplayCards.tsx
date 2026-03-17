"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Sparkles, FileText, BarChart3, Zap } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "bg-primary/15 text-primary",
  titleClassName = "text-primary",
}: DisplayCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative flex h-40 w-[22rem] select-none flex-col justify-between rounded-2xl border border-border/60 bg-card/90 px-5 py-4 shadow-lg backdrop-blur-md transition-shadow duration-500 hover:shadow-xl dark:border-white/[0.08] dark:bg-white/[0.06]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-xl p-2",
            iconClassName
          )}
        >
          {icon}
        </span>
        <p className={cn("text-base font-semibold", titleClassName)}>
          {title}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80 dark:text-white/70">
        {description}
      </p>
      <p className="text-xs text-muted-foreground dark:text-white/30">{date}</p>
    </motion.div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      icon: <FileText className="size-4" />,
      title: "Document Generated",
      description: "Construction permit package auto-filled from project data",
      date: "2 minutes ago",
      iconClassName: "bg-primary/15 text-primary",
      titleClassName: "text-primary",
      className: "translate-x-4 -translate-y-8 rotate-[-2deg]",
    },
    {
      icon: <BarChart3 className="size-4" />,
      title: "Compliance Check",
      description: "All 14 required fields validated against county standards",
      date: "Just now",
      iconClassName:
        "bg-emerald-500/15 text-emerald-500 dark:bg-emerald-400/15 dark:text-emerald-400",
      titleClassName: "text-emerald-600 dark:text-emerald-400",
      className: "translate-x-12 translate-y-4 rotate-[1deg]",
    },
    {
      icon: <Zap className="size-4" />,
      title: "Workflow Active",
      description: "Client onboarding sequence running for Meridian Properties",
      date: "5 minutes ago",
      iconClassName:
        "bg-blue-500/15 text-blue-500 dark:bg-blue-400/15 dark:text-blue-400",
      titleClassName: "text-blue-600 dark:text-blue-400",
      className: "translate-x-20 translate-y-16 rotate-[-1deg]",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="relative h-[500px] w-full">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg,
              transparent 10%,
              rgba(255, 96, 45, 0.06) 25%,
              rgba(255, 96, 45, 0.1) 45%,
              rgba(255, 96, 45, 0.06) 65%,
              transparent 80%)`,
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `linear-gradient(135deg,
              transparent 10%,
              rgba(255, 96, 45, 0.08) 25%,
              rgba(255, 96, 45, 0.14) 45%,
              rgba(255, 96, 45, 0.08) 65%,
              transparent 80%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: "420px", height: "400px" }}>
            {displayCards.map((cardProps, index) => (
              <div
                key={index}
                className="absolute left-0 top-0"
                style={{ zIndex: index }}
              >
                <DisplayCard {...cardProps} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export { DisplayCard };
export type { DisplayCardProps, DisplayCardsProps };
