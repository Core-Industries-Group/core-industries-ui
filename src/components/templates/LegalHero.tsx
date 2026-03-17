"use client";

import { GradientBars } from "../effects/GradientBarsBackground";

export interface LegalHeroProps {
  title: string;
  /** Number of gradient bars */
  numBars?: number;
}

export function LegalHero({ title, numBars = 7 }: LegalHeroProps) {
  return (
    <div className="relative -mt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44vh]">
        <GradientBars
          numBars={numBars}
          gradientFrom="rgb(255, 96, 45)"
          gradientTo="transparent"
          animationDuration={2}
          flipped
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backdropFilter: "blur(80px)",
            WebkitBackdropFilter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 z-[2] h-32"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-[3] mx-auto max-w-4xl px-6 pt-32 pb-8 text-center md:pt-36 md:pb-10">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
