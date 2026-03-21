import { ClassValue } from 'clsx';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { Separator as Separator$1, Dialog } from 'radix-ui';
import { Variants } from 'framer-motion';

declare function cn(...inputs: ClassValue[]): string;

declare const fadeUp: {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: (delay?: number) => {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            delay: number;
            ease: readonly [0.16, 1, 0.3, 1];
        };
    };
};
declare const stagger: {
    visible: {
        transition: {
            staggerChildren: number;
        };
    };
};

declare function ThemeProvider({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

/**
 * Returns whether entrance animations should play on the current page.
 * `true` = first visit this session, animate normally.
 * `false` = already visited, skip entrance animations.
 *
 * NOTE: This is a Next.js utility. Requires next/navigation in the consuming project.
 */
declare function usePageAnimation(): boolean;
/**
 * Wrap page content with this provider. It reads the current pathname,
 * checks the module-level tracker, and provides shouldAnimate via context.
 */
declare function PageAnimationGate({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function shouldAnimatePage(pathname: string): boolean;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): react_jsx_runtime.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<"label">): react_jsx_runtime.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof Separator$1.Root>): react_jsx_runtime.JSX.Element;

declare function Sheet({ ...props }: React$1.ComponentProps<typeof Dialog.Root>): react_jsx_runtime.JSX.Element;
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof Dialog.Trigger>): react_jsx_runtime.JSX.Element;
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof Dialog.Close>): react_jsx_runtime.JSX.Element;
declare function SheetContent({ className, children, side, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog.Content> & {
    side?: "top" | "right" | "bottom" | "left";
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog.Title>): react_jsx_runtime.JSX.Element;
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog.Description>): react_jsx_runtime.JSX.Element;

declare function SectionPill({ children }: {
    children: React__default.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function MultiStepForm({ variant }: {
    variant?: "default" | "onOrange" | "modal";
}): react_jsx_runtime.JSX.Element;

declare function FlipText({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

declare const FlipWords: ({ words, duration, className, }: {
    words: string[];
    duration?: number;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

type PresetType$1 = "fade" | "slide" | "scale" | "blur" | "blur-slide" | "zoom" | "flip" | "bounce" | "rotate" | "swing";
type AnimatedGroupProps = {
    children: ReactNode;
    className?: string;
    variants?: {
        container?: Variants;
        item?: Variants;
    };
    preset?: PresetType$1;
    /** When true, children render in their final state with no entrance animation. */
    skipAnimation?: boolean;
};
declare function AnimatedGroup({ children, className, variants, preset, skipAnimation, }: AnimatedGroupProps): react_jsx_runtime.JSX.Element;

interface AnimatedGridPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: any;
    numSquares?: number;
    className?: string;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
}
declare function AnimatedGridPattern({ width, height, x, y, strokeDasharray, numSquares, className, maxOpacity, duration, repeatDelay, ...props }: AnimatedGridPatternProps): react_jsx_runtime.JSX.Element;

type PresetType = "blur" | "shake" | "scale" | "fade" | "slide";
type TextEffectProps = {
    children: string;
    per?: "word" | "char" | "line";
    as?: keyof React__default.JSX.IntrinsicElements;
    variants?: {
        container?: Variants;
        item?: Variants;
    };
    className?: string;
    preset?: PresetType;
    delay?: number;
    trigger?: boolean;
    onAnimationComplete?: () => void;
    segmentWrapperClassName?: string;
};
declare function TextEffect({ children, per, as, variants, className, preset, delay, trigger, onAnimationComplete, segmentWrapperClassName, }: TextEffectProps): react_jsx_runtime.JSX.Element;

declare const Highlight: ({ children, className, delay, duration, }: {
    children: React__default.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}) => react_jsx_runtime.JSX.Element;

declare function ScrollProgress(): react_jsx_runtime.JSX.Element;

declare function NoiseTexture(): react_jsx_runtime.JSX.Element;

interface GradientBarsProps {
    numBars?: number;
    gradientFrom?: string;
    gradientTo?: string;
    animationDuration?: number;
    className?: string;
    flipped?: boolean;
}
declare const GradientBars: React__default.FC<GradientBarsProps>;
interface GradientBarsBackgroundProps {
    numBars?: number;
    gradientFrom?: string;
    gradientTo?: string;
    animationDuration?: number;
    backgroundColor?: string;
    children?: React__default.ReactNode;
}
declare function GradientBarsBackground({ numBars, gradientFrom, gradientTo, animationDuration, backgroundColor, children, }: GradientBarsBackgroundProps): react_jsx_runtime.JSX.Element;

interface FlickeringGridProps {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    width?: number;
    height?: number;
    className?: string;
    maxOpacity?: number;
}
declare const FlickeringGrid: React__default.FC<FlickeringGridProps>;

type SpotlightProps = {
    gradientFirst?: string;
    gradientSecond?: string;
    gradientThird?: string;
    translateY?: number;
    width?: number;
    height?: number;
    smallWidth?: number;
    duration?: number;
    xOffset?: number;
};
declare const Spotlight: ({ gradientFirst, gradientSecond, gradientThird, translateY, width, height, smallWidth, duration, xOffset, }?: SpotlightProps) => react_jsx_runtime.JSX.Element;

interface ProgressiveBlurCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    href?: string;
    className?: string;
}
declare function ProgressiveBlurCard({ imageSrc, imageAlt, title, subtitle, href, className, }: ProgressiveBlurCardProps): react_jsx_runtime.JSX.Element;

interface AuroraBackgroundProps extends React__default.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}
declare const AuroraBackground: ({ className, children, showRadialGradient, ...props }: AuroraBackgroundProps) => react_jsx_runtime.JSX.Element;

interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: string[];
}
declare const AvatarCircles: ({ numPeople, className, avatarUrls, }: AvatarCirclesProps) => react_jsx_runtime.JSX.Element;

interface DisplayCardProps {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    date?: string;
    iconClassName?: string;
    titleClassName?: string;
}
declare function DisplayCard({ className, icon, title, description, date, iconClassName, titleClassName, }: DisplayCardProps): react_jsx_runtime.JSX.Element;
interface DisplayCardsProps {
    cards?: DisplayCardProps[];
}
declare function DisplayCards({ cards }: DisplayCardsProps): react_jsx_runtime.JSX.Element;

interface FloatingLogoItem {
    /** React node for the logo/icon content */
    icon: React.ReactNode;
    /** Size of the square in px */
    size?: number;
    /** CSS classes for the square background */
    bgClassName?: string;
    /** Position from top as percentage */
    top?: string;
    /** Position from left as percentage */
    left?: string;
    /** Rotation in degrees */
    rotate?: number;
    /** Animation delay in seconds */
    delay?: number;
    /** Z-index for layering */
    zIndex?: number;
}
interface FloatingLogosProps {
    logos?: FloatingLogoItem[];
    className?: string;
}
/**
 * Floating isometric logo squares scattered at various angles.
 * Each square bobs gently with a unique float animation.
 * Pass `logos` with icon content, or use the placeholder defaults.
 */
declare function FloatingLogos({ logos, className }: FloatingLogosProps): react_jsx_runtime.JSX.Element;

export { AnimatedGridPattern, AnimatedGroup, AuroraBackground, AvatarCircles, type AvatarCirclesProps, Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DisplayCard, type DisplayCardProps, DisplayCards, type DisplayCardsProps, FlickeringGrid, FlipText, FlipWords, type FloatingLogoItem, FloatingLogos, type FloatingLogosProps, GradientBars, GradientBarsBackground, Highlight, Input, Label, MultiStepForm, NoiseTexture, PageAnimationGate, ProgressiveBlurCard, ScrollProgress, SectionPill, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Spotlight, TextEffect, ThemeProvider, badgeVariants, buttonVariants, cn, fadeUp, shouldAnimatePage, stagger, usePageAnimation };
