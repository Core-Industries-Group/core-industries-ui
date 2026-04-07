import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FlipText } from "@ui/components/animation/flip-text";
import { FlipWords } from "@ui/components/animation/flip-words";
import { AnimatedGroup } from "@ui/components/animation/animated-group";
import { AnimatedGridPattern } from "@ui/components/animation/animated-grid";
import { TextEffect } from "@ui/components/animation/text-effect";
import { Highlight } from "@ui/components/animation/hero-highlight";
import { ScrollProgress } from "@ui/components/animation/scroll-progress";
import { Button } from "@ui/components/ui/button";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

const groupPresets = [
  "fade", "slide", "scale", "blur", "blur-slide",
  "zoom", "flip", "bounce", "rotate", "swing",
] as const;

const textPresets = ["blur", "shake", "scale", "fade", "slide"] as const;
const textPer = ["word", "char", "line"] as const;

export function AnimationSection() {
  const [groupPreset, setGroupPreset] = useState<(typeof groupPresets)[number]>("blur-slide");
  const [groupKey, setGroupKey] = useState(0);
  const [textPreset, setTextPreset] = useState<(typeof textPresets)[number]>("blur");
  const [textPerMode, setTextPerMode] = useState<(typeof textPer)[number]>("word");
  const [textKey, setTextKey] = useState(0);

  return (
    <SectionWrapper id="animation" title="Animation" description="Motion components powered by Framer Motion.">
      {/* ScrollProgress */}
      <ComponentCard title="ScrollProgress" description="Fixed progress bar at the top of the page — scroll to see it" className="mb-6">
        <ScrollProgress />
        <p className="text-sm text-muted-foreground">Active at the top of this page. Scroll up and down to see the orange progress bar.</p>
      </ComponentCard>

      {/* FlipText */}
      <ComponentCard title="FlipText" description="3D rotateX flip on hover — wrap inside a button or link" className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="group">
            <FlipText>Hover Me</FlipText>
            <ArrowRight />
          </Button>
          <Button variant="outline" size="lg" className="group">
            <FlipText>Flip Effect</FlipText>
          </Button>
        </div>
      </ComponentCard>

      {/* FlipWords */}
      <ComponentCard title="FlipWords" description="Auto-cycling word animation with exit effects" className="mb-6">
        <p className="font-display text-3xl font-bold text-foreground">
          We build{" "}
          <FlipWords words={["software", "systems", "platforms", "infrastructure"]} duration={3000} />
        </p>
      </ComponentCard>

      {/* AnimatedGroup */}
      <ComponentCard title="AnimatedGroup" description="Staggered entrance animations with 10 presets" className="mb-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <select
            value={groupPreset}
            onChange={(e) => {
              setGroupPreset(e.target.value as typeof groupPreset);
              setGroupKey((k) => k + 1);
            }}
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
          >
            {groupPresets.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <Button variant="outline" size="sm" onClick={() => setGroupKey((k) => k + 1)}>
            Replay
          </Button>
        </div>
        <AnimatedGroup key={groupKey} animationType={groupPreset} className="flex flex-wrap gap-3">
          {["Alpha", "Beta", "Gamma", "Delta", "Epsilon"].map((label) => (
            <div
              key={label}
              className="flex h-20 w-20 items-center justify-center rounded-xl border border-border bg-surface-raised text-sm font-medium text-foreground"
            >
              {label}
            </div>
          ))}
        </AnimatedGroup>
      </ComponentCard>

      {/* TextEffect */}
      <ComponentCard title="TextEffect" description="Text splitting with animation presets" className="mb-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <select
            value={textPreset}
            onChange={(e) => {
              setTextPreset(e.target.value as typeof textPreset);
              setTextKey((k) => k + 1);
            }}
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
          >
            {textPresets.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <select
            value={textPerMode}
            onChange={(e) => {
              setTextPerMode(e.target.value as typeof textPerMode);
              setTextKey((k) => k + 1);
            }}
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
          >
            {textPer.map((p) => (
              <option key={p} value={p}>per: {p}</option>
            ))}
          </select>
          <Button variant="outline" size="sm" onClick={() => setTextKey((k) => k + 1)}>
            Replay
          </Button>
        </div>
        <TextEffect
          key={textKey}
          preset={textPreset}
          per={textPerMode}
          className="font-display text-2xl font-bold text-foreground"
        >
          Operational infrastructure for growing companies.
        </TextEffect>
      </ComponentCard>

      {/* Highlight */}
      <ComponentCard title="Highlight" description="Animated gradient background expansion behind text" className="mb-6">
        <p className="font-display text-2xl font-bold text-foreground">
          We make the <Highlight>complex feel simple</Highlight> for your team.
        </p>
      </ComponentCard>

      {/* AnimatedGridPattern */}
      <ComponentCard title="AnimatedGridPattern" description="SVG grid with randomly highlighting squares">
        <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border bg-surface">
          <AnimatedGridPattern
            width={40}
            height={40}
            numSquares={30}
            maxOpacity={0.3}
            duration={3}
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}
