// ─── Lib ──────────────────────────────────────────────────────────────────────
export { cn } from "./lib/utils";
export { fadeUp, stagger } from "./lib/animations";
export { ThemeProvider } from "./lib/theme-provider";
export { usePageAnimation, PageAnimationGate } from "./lib/page-animation";
export { shouldAnimatePage } from "./lib/animation-tracker";

// ─── UI Primitives ────────────────────────────────────────────────────────────
export { Button, buttonVariants } from "./components/ui/button";
export type { ButtonProps } from "./components/ui/button";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./components/ui/card";

export { Badge, badgeVariants } from "./components/ui/badge";
export type { BadgeProps } from "./components/ui/badge";

export { Input } from "./components/ui/input";
export { Label } from "./components/ui/label";
export { Separator } from "./components/ui/separator";

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "./components/ui/sheet";

export { SectionPill } from "./components/ui/section-pill";
export { MultiStepForm } from "./components/ui/multi-step-form";

// ─── Animation ────────────────────────────────────────────────────────────────
export { FlipText } from "./components/animation/flip-text";
export { FlipWords } from "./components/animation/flip-words";
export { AnimatedGroup } from "./components/animation/animated-group";
export { AnimatedGrid } from "./components/animation/animated-grid";
export { TextEffect } from "./components/animation/text-effect";
export { Highlight } from "./components/animation/hero-highlight";
export { ScrollProgress } from "./components/animation/scroll-progress";

// ─── Effects ──────────────────────────────────────────────────────────────────
export { NoiseTexture } from "./components/effects/NoiseTexture";
export {
  GradientBars,
  default as GradientBarsBackground,
} from "./components/effects/GradientBarsBackground";
export { FlickeringGrid } from "./components/effects/FlickeringGrid";
export { Spotlight } from "./components/effects/Spotlight";
export { ProgressiveBlurCard } from "./components/effects/ProgressiveBlurCard";
export { AuroraBackground } from "./components/effects/AuroraBackground";

// ─── Display ──────────────────────────────────────────────────────────────────
export { AvatarCircles } from "./components/display/AvatarCircles";
export type { AvatarCirclesProps } from "./components/display/AvatarCircles";

export {
  default as DisplayCards,
  DisplayCard,
} from "./components/display/DisplayCards";
export type {
  DisplayCardProps,
  DisplayCardsProps,
} from "./components/display/DisplayCards";

export { default as FloatingLogos } from "./components/display/FloatingLogos";
export type {
  FloatingLogoItem,
  FloatingLogosProps,
} from "./components/display/FloatingLogos";
