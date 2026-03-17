"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  blurIntensity?: number;
}

function ProgressiveBlur({
  className = "",
  blurIntensity = 10,
}: ProgressiveBlurProps) {
  return (
    <div
      className={cn(className)}
      style={{
        backdropFilter: `blur(${blurIntensity}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity}px)`,
        mask: "linear-gradient(to top, black 0%, black 60%, rgba(0,0,0,0.95) 65%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0.1) 95%, transparent 100%)",
        WebkitMask:
          "linear-gradient(to top, black 0%, black 60%, rgba(0,0,0,0.95) 65%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0.1) 95%, transparent 100%)",
      }}
    />
  );
}

interface ProgressiveBlurCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  href?: string;
  className?: string;
}

export function ProgressiveBlurCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  href,
  className,
}: ProgressiveBlurCardProps) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <div
      className={cn(
        "group/card relative aspect-square w-[380px] overflow-hidden rounded-3xl border-8 border-white transition-all duration-500 hover:scale-[1.02] dark:border-[#1A1A24]",
        className
      )}
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 12px 48px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
      />

      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full rounded-b-[20px]"
        blurIntensity={8}
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent transition-colors duration-300 group-hover/card:from-black/60">
        <div className="flex items-end justify-between px-6 py-6">
          <div className="flex flex-col transition-transform duration-300 group-hover/card:-translate-y-0.5">
            <h2 className="text-lg font-semibold text-white transition-all duration-300 group-hover/card:text-xl">
              {title}
            </h2>
            <p className="text-sm text-white/90 transition-colors duration-300 group-hover/card:text-white">
              {subtitle}
            </p>
          </div>

          <Wrapper
            {...wrapperProps}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl active:scale-95"
          >
            <ArrowRight className="h-5 w-5 text-gray-800 transition-colors duration-300 group-hover/card:text-[#FF602D]" />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
