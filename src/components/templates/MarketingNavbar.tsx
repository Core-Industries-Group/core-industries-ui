"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { FlipText } from "../animation/flip-text";

/* ── Types ── */

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface MarketingNavbarProps {
  /** Logo for light mode (dark wordmark on white background) */
  logoDarkSrc: string;
  /** Logo for dark mode (light wordmark on dark background) */
  logoLightSrc: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  /** Where the logo links to */
  logoHref?: string;
  navLinks: NavLinkItem[];
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Background color for mobile slide-down menu panel */
  mobileMenuBg?: string;
}

/* ── Animation variants ── */

const linkFlipFront = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const linkFlipBack = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const linkGlow = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
      scale: { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 },
    },
  },
};

const linkSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

/* ── Sub-components ── */

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      className="relative overflow-visible rounded-xl"
      style={{ perspective: "600px" }}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        variants={linkGlow}
        style={{
          background:
            "radial-gradient(circle, rgba(255,96,45,0.15) 0%, rgba(255,96,45,0.06) 50%, rgba(255,96,45,0) 100%)",
          opacity: 0,
          borderRadius: "12px",
        }}
      />
      <motion.div
        variants={linkFlipFront}
        transition={linkSpring}
        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
      >
        <Link
          href={href}
          className={cn(
            "relative z-10 block rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
            isActive ? "text-primary" : "text-muted-foreground"
          )}
        >
          {label}
        </Link>
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={linkFlipBack}
        transition={linkSpring}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
          rotateX: 90,
        }}
      >
        <Link
          href={href}
          className={cn(
            "relative z-10 block rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
            isActive ? "text-primary" : "text-foreground"
          )}
        >
          {label}
        </Link>
      </motion.div>
    </motion.div>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-[4.5rem]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={cn(
        "flex h-10 w-[4.5rem] cursor-pointer items-center rounded-full p-1.5 transition-[background-color,border-color,box-shadow] duration-300",
        isDark
          ? "border border-white/10 bg-[#1a1a1a] shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          : "border border-black/20 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="button"
      tabIndex={0}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="flex w-full items-center justify-between">
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300",
            isDark ? "translate-x-0 bg-white/10" : "translate-x-8 bg-[#272727]"
          )}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-white" strokeWidth={2} />
          ) : (
            <Sun className="h-4 w-4 text-white" strokeWidth={2} />
          )}
        </div>
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300",
            isDark ? "bg-transparent" : "-translate-x-8"
          )}
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-white/40" strokeWidth={2} />
          ) : (
            <Moon className="h-4 w-4 text-[#272727]/60" strokeWidth={2} />
          )}
        </div>
      </div>
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:bg-muted dark:border-white/10 dark:bg-[#272727] dark:hover:bg-[#333]"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-foreground/70 dark:text-white/60" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ── Main export ── */

export function MarketingNavbar({
  logoDarkSrc,
  logoLightSrc,
  logoAlt = "Logo",
  logoWidth = 100,
  logoHeight = 28,
  logoHref = "/",
  navLinks,
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
  mobileMenuBg = "#FCF8F7",
}: MarketingNavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-2 z-50 mx-3 w-[calc(100%-1.5rem)] rounded-full border border-border bg-white/95 shadow-[0_2px_16px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-500 ease-out dark:bg-[#272727]/95 md:top-4 md:mx-auto md:max-w-[calc(100%-3rem)] lg:max-w-7xl"
      >
        <nav className="flex h-14 w-full items-center justify-between px-6 transition-all duration-500 ease-out md:h-12 md:pl-5 md:pr-1.5">
          {/* Logo */}
          <Link href={logoHref} className="relative z-10 shrink-0">
            <Image
              src={logoDarkSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className="block dark:hidden"
              priority
            />
            <Image
              src={logoLightSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className="hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-5 py-2 text-[13px] font-semibold text-white active:scale-[0.98]"
              style={{
                background: "linear-gradient(180deg, #FF602D 0%, #D4501F 100%)",
                boxShadow:
                  "0 1px 2px rgba(255,96,45,0.3), 0 4px 12px rgba(255,96,45,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 55%, transparent 80%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />
              <FlipText>
                <span className="relative z-10">{ctaLabel}</span>
              </FlipText>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          >
            <div className="flex h-4 w-5 flex-col items-center justify-center">
              <motion.span
                className="absolute h-[2px] w-5 rounded-full bg-current"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="absolute h-[2px] w-5 rounded-full bg-current"
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute h-[2px] w-5 rounded-full bg-current"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Blur overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[44] bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top center", backgroundColor: mobileMenuBg }}
            className="fixed left-3 right-3 top-[4.5rem] z-[46] overflow-hidden rounded-[2rem] border border-border shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:hidden dark:bg-[#1a1a1a]"
          >
            <div className="flex flex-col p-4">
              <nav className="grid gap-y-0.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-200 hover:bg-muted",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 border-t border-border pt-4"
              >
                <Link
                  href={ctaHref}
                  onClick={() => setOpen(false)}
                  className="relative block w-full overflow-hidden rounded-full py-3 text-center text-sm font-semibold text-white active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(180deg, #FF602D 0%, #D4501F 100%)",
                    boxShadow:
                      "0 1px 2px rgba(255,96,45,0.3), 0 4px 12px rgba(255,96,45,0.15)",
                  }}
                >
                  <motion.span
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 55%, transparent 80%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                  />
                  <span className="relative z-10">{ctaLabel}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme toggle — pinned bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Back to top — pinned bottom-left */}
      <BackToTop />
    </>
  );
}
