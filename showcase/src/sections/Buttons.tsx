import { ArrowRight, Mail, Plus, Loader2 } from "lucide-react";
import { Button } from "@ui/components/ui/button";
import { ShimmerButton } from "@ui/components/ui/shimmer-button";
import { FlipText } from "@ui/components/animation/flip-text";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"] as const;
const sizes = ["xs", "sm", "default", "lg"] as const;

export function ButtonsSection() {
  return (
    <SectionWrapper id="buttons" title="Buttons" description="Six variants, five sizes, plus shimmer and FlipText effects.">
      {/* Variant × Size Matrix */}
      <ComponentCard title="Variants × Sizes" className="mb-6">
        <div className="space-y-4">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-3">
              <span className="w-24 shrink-0 font-mono text-[11px] text-muted-foreground">
                {variant}
              </span>
              {sizes.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size === "xs" ? "Btn" : "Button"}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </ComponentCard>

      {/* Icon Buttons */}
      <ComponentCard title="With Icons" className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Mail /> Send Email
          </Button>
          <Button variant="outline">
            <Plus /> Create New
          </Button>
          <Button variant="secondary">
            Get Started <ArrowRight />
          </Button>
          <Button variant="ghost">
            <Loader2 className="animate-spin" /> Loading
          </Button>
        </div>
      </ComponentCard>

      {/* Icon-only Buttons */}
      <ComponentCard title="Icon Only" className="mb-6">
        <div className="flex items-center gap-3">
          <Button size="icon-xs"><Plus /></Button>
          <Button size="icon-sm"><Plus /></Button>
          <Button size="icon"><Plus /></Button>
          <Button size="icon-lg"><Plus /></Button>
        </div>
      </ComponentCard>

      {/* Shimmer Buttons */}
      <ComponentCard title="Shimmer Buttons" description="Animated gradient sweep overlay via Framer Motion" className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <ShimmerButton shimmerColor="white">
            Get Started <ArrowRight className="h-4 w-4" />
          </ShimmerButton>
          <div className="rounded-xl bg-[#272727] p-4 dark:bg-white/[0.06]">
            <ShimmerButton shimmerColor="orange">
              Learn More <ArrowRight className="h-4 w-4" />
            </ShimmerButton>
          </div>
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          shimmerColor="white" (dark bg) · shimmerColor="orange" (light bg)
        </p>
      </ComponentCard>

      {/* FlipText Button */}
      <ComponentCard title="FlipText Button" description="3D rotateX flip animation on hover">
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="group">
            <FlipText>Get Started</FlipText>
            <ArrowRight />
          </Button>
          <Button variant="outline" size="lg" className="group">
            <FlipText>Learn More</FlipText>
          </Button>
        </div>
      </ComponentCard>

      {/* Disabled */}
      <ComponentCard title="Disabled States" className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Default</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="secondary" disabled>Secondary</Button>
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}
