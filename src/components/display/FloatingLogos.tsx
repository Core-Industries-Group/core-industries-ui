"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

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
export default function FloatingLogos({ logos, className }: FloatingLogosProps) {
  const defaultLogos: FloatingLogoItem[] = [
    { icon: <PlaceholderIcon label="S" color="#4A90D9" />, size: 52, top: "12%", left: "8%", rotate: -15, delay: 0, zIndex: 2 },
    { icon: <PlaceholderIcon label="G" color="#34A853" />, size: 44, top: "28%", left: "42%", rotate: 12, delay: 0.3, zIndex: 3 },
    { icon: <PlaceholderIcon label="X" color="#1D6F42" />, size: 38, top: "18%", left: "26%", rotate: -8, delay: 0.6, zIndex: 1 },
    { icon: <PlaceholderIcon label="N" color="#E01E5A" />, size: 48, top: "5%", left: "55%", rotate: 20, delay: 0.15, zIndex: 2 },
    { icon: <PlaceholderIcon label="Q" color="#FF602D" />, size: 56, top: "45%", left: "5%", rotate: -22, delay: 0.45, zIndex: 4 },
    { icon: <PlaceholderIcon label="Z" color="#6366F1" />, size: 40, top: "55%", left: "35%", rotate: 8, delay: 0.75, zIndex: 1 },
    { icon: <PlaceholderIcon label="D" color="#0EA5E9" />, size: 46, top: "65%", left: "18%", rotate: -12, delay: 0.9, zIndex: 3 },
    { icon: <PlaceholderIcon label="A" color="#F59E0B" />, size: 36, top: "38%", left: "52%", rotate: 25, delay: 0.2, zIndex: 2 },
    { icon: <PlaceholderIcon label="P" color="#EF4444" />, size: 42, top: "75%", left: "45%", rotate: -18, delay: 0.55, zIndex: 1 },
    { icon: <PlaceholderIcon label="R" color="#8B5CF6" />, size: 50, top: "82%", left: "8%", rotate: 15, delay: 0.35, zIndex: 2 },
  ];

  const items = logos || defaultLogos;

  return (
    <div className={cn("relative h-full w-full", className)}>
      {items.map((logo, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: logo.top,
            left: logo.left,
            zIndex: logo.zIndex || 1,
          }}
          initial={{ opacity: 0, scale: 0.6, rotate: (logo.rotate || 0) - 10 }}
          animate={{ opacity: 1, scale: 1, rotate: logo.rotate || 0 }}
          transition={{
            duration: 0.8,
            delay: (logo.delay || 0) + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0, 4, 0],
              rotate: [
                logo.rotate || 0,
                (logo.rotate || 0) + 2,
                logo.rotate || 0,
                (logo.rotate || 0) - 1,
                logo.rotate || 0,
              ],
            }}
            transition={{
              duration: 5 + (i % 3) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: logo.delay || 0,
            }}
          >
            <div
              className="flex items-center justify-center rounded-2xl border border-border/50 bg-card/80 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg dark:border-white/[0.08] dark:bg-white/[0.06]"
              style={{
                width: logo.size || 48,
                height: logo.size || 48,
              }}
            >
              {logo.icon}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/** Temporary placeholder icon — replace with real logos */
function PlaceholderIcon({ label, color }: { label: string; color: string }) {
  return (
    <span className="select-none text-sm font-bold" style={{ color }}>
      {label}
    </span>
  );
}

export type { FloatingLogoItem, FloatingLogosProps };
