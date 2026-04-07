import { NoiseTexture } from "@ui/components/effects/NoiseTexture";
import { FlickeringGrid } from "@ui/components/effects/FlickeringGrid";
import { Spotlight } from "@ui/components/effects/Spotlight";
import { AuroraBackground } from "@ui/components/effects/AuroraBackground";
import GradientBarsBackground from "@ui/components/effects/GradientBarsBackground";
import { ProgressiveBlurCard } from "@ui/components/effects/ProgressiveBlurCard";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

export function EffectsSection() {
  return (
    <SectionWrapper id="effects" title="Effects" description="Background effects, textures, and visual treatments.">
      {/* NoiseTexture */}
      <ComponentCard title="NoiseTexture" description="SVG noise overlay — adds subtle grain to surfaces" className="mb-6">
        <div className="relative h-32 overflow-hidden rounded-xl bg-brand">
          <div className="relative z-10 flex h-full items-center justify-center">
            <p className="text-lg font-bold text-white">Surface with noise overlay</p>
          </div>
          <div className="absolute inset-0" style={{ position: "absolute" }}>
            <NoiseTexture />
          </div>
        </div>
      </ComponentCard>

      {/* FlickeringGrid */}
      <ComponentCard title="FlickeringGrid" description="Canvas-based flickering grid pattern" className="mb-6">
        <div className="relative h-48 overflow-hidden rounded-xl border border-border">
          <FlickeringGrid
            squareSize={4}
            gridGap={6}
            flickerChance={0.3}
            color="rgb(255, 96, 45)"
            maxOpacity={0.2}
          />
        </div>
      </ComponentCard>

      {/* Spotlight */}
      <ComponentCard title="Spotlight" description="Three animated radial gradient spotlights" className="mb-6">
        <div className="relative h-64 overflow-hidden rounded-xl bg-[#06060A]">
          <Spotlight />
          <div className="relative z-10 flex h-full items-center justify-center">
            <p className="font-display text-2xl font-bold text-white">Spotlight Effect</p>
          </div>
        </div>
      </ComponentCard>

      {/* AuroraBackground */}
      <ComponentCard title="AuroraBackground" description="Aurora-like animated gradient effect" className="mb-6">
        <div className="relative max-h-[400px] overflow-hidden rounded-xl">
          <AuroraBackground>
            <div className="relative z-10 flex h-64 items-center justify-center">
              <p className="font-display text-2xl font-bold text-foreground">Aurora Background</p>
            </div>
          </AuroraBackground>
        </div>
      </ComponentCard>

      {/* GradientBarsBackground */}
      <ComponentCard title="GradientBarsBackground" description="Animated vertical gradient bars" className="mb-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative h-48 overflow-hidden rounded-xl border border-border bg-surface">
            <GradientBarsBackground numBars={12} />
            <div className="relative z-10 flex h-full items-center justify-center">
              <p className="text-sm font-medium text-foreground">Normal</p>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden rounded-xl border border-border bg-surface">
            <GradientBarsBackground numBars={12} flipped />
            <div className="relative z-10 flex h-full items-center justify-center">
              <p className="text-sm font-medium text-foreground">Flipped</p>
            </div>
          </div>
        </div>
      </ComponentCard>

      {/* ProgressiveBlurCard */}
      <ComponentCard title="ProgressiveBlurCard" description="Image card with progressive blur fade at the bottom">
        <div className="max-w-sm">
          <ProgressiveBlurCard
            imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
            imageAlt="Modern office space"
            title="CoreDocs"
            subtitle="Document automation, simplified."
          />
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}
