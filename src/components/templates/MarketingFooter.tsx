"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Input } from "../ui/input";
import { FlipText } from "../animation/flip-text";

/* ── Types ── */

export interface FooterNavLink {
  label: string;
  href: string;
}

export interface MarketingFooterProps {
  /** Logo image path (should work on dark background — use light/white wordmark) */
  logoSrc: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  /** Short tagline below the logo */
  tagline?: string;
  /** Primary navigation links */
  navLinks?: FooterNavLink[];
  /** Contact email */
  email?: string;
  /** Contact phone (formatted for display) */
  phone?: string;
  /** Contact phone (href value, e.g. "+17726779555") */
  phoneTel?: string;
  /** Location string */
  location?: string;
  /** Show newsletter signup section */
  showNewsletter?: boolean;
  newsletterHeading?: string;
  newsletterSubtext?: string;
  newsletterButtonLabel?: string;
  /** Called with name + email on newsletter form submit */
  onNewsletterSubmit?: (name: string, email: string) => void;
  /** Copyright line (e.g. "2025 Acme Inc. All rights reserved.") — year is prepended automatically */
  copyrightText?: string;
  /** Legal/policy links in the bottom bar */
  legalLinks?: FooterNavLink[];
}

/* ── Animated container ── */

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── Footer content ── */

function FooterContent({
  logoSrc,
  logoAlt = "Logo",
  logoWidth = 100,
  logoHeight = 28,
  tagline,
  navLinks = [],
  email,
  phone,
  phoneTel,
  location,
  showNewsletter = true,
  newsletterHeading = "Stay Connected",
  newsletterSubtext,
  newsletterButtonLabel = "Subscribe",
  onNewsletterSubmit,
  copyrightText,
  legalLinks = [],
}: MarketingFooterProps) {
  const [name, setName] = useState("");
  const [emailVal, setEmailVal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewsletterSubmit?.(name, emailVal);
  };

  return (
    <div className="relative flex w-full flex-col border-t border-white/10 bg-[#272727] text-white px-5 pt-6 pb-14 md:px-12 md:pt-8 md:pb-14">
      <div className="relative z-10 mx-auto w-full max-w-7xl mt-2 md:mt-4">
        <div
          className={`flex flex-col gap-6 ${
            showNewsletter
              ? "lg:grid lg:grid-cols-[30%_15%_15%_1fr] lg:gap-12"
              : "lg:grid lg:grid-cols-[40%_20%_20%] lg:gap-12"
          }`}
        >
          {/* Brand column */}
          <AnimatedContainer delay={0.1}>
            <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} />
            {tagline && (
              <p className="mt-3 text-sm leading-relaxed text-white/60">{tagline}</p>
            )}
          </AnimatedContainer>

          {/* Nav + Contact row on mobile, separate columns on desktop */}
          <div className="flex gap-6 lg:contents">
            {navLinks.length > 0 && (
              <AnimatedContainer delay={0.2} className="flex-1 min-w-0">
                <h3 className="mb-3 font-display text-base font-semibold md:mb-4 md:text-lg">
                  Navigation
                </h3>
                <nav className="space-y-2 text-sm">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-white/60 transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </AnimatedContainer>
            )}

            {(email || phone || location) && (
              <AnimatedContainer delay={0.3} className="flex-1 min-w-0">
                <h3 className="mb-3 font-display text-base font-semibold md:mb-4 md:text-lg">
                  Contact Us
                </h3>
                <address className="space-y-2 text-sm not-italic text-white/60">
                  {email && (
                    <p>
                      <a
                        href={`mailto:${email}`}
                        className="text-white/60 transition-colors duration-200 hover:text-primary"
                      >
                        {email}
                      </a>
                    </p>
                  )}
                  {phone && (
                    <p>
                      <a
                        href={`tel:+${phoneTel || phone.replace(/\D/g, "")}`}
                        className="text-white/60 transition-colors duration-200 hover:text-primary"
                      >
                        {phone}
                      </a>
                    </p>
                  )}
                  {location && <p className="text-white/60">{location}</p>}
                </address>
              </AnimatedContainer>
            )}
          </div>

          {/* Newsletter */}
          {showNewsletter && (
            <AnimatedContainer delay={0.4} className="relative">
              <h3 className="mb-2 font-display text-base font-semibold md:text-lg">
                {newsletterHeading}
              </h3>
              {newsletterSubtext && (
                <p className="mb-4 text-sm text-white/60 md:mb-5">{newsletterSubtext}</p>
              )}
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-full bg-white border-white/20 text-[#272727] placeholder:text-[#272727]/50 dark:bg-white dark:border-white/20 dark:text-[#272727] dark:placeholder:text-[#272727]/50"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    className="rounded-full bg-white border-white/20 text-[#272727] placeholder:text-[#272727]/50 dark:bg-white dark:border-white/20 dark:text-[#272727] dark:placeholder:text-[#272727]/50"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-full bg-[#FF602D] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4501F] hover:shadow-[0_0_16px_rgba(255,96,45,0.3),0_4px_12px_rgba(255,96,45,0.2)] active:scale-[0.98]"
                >
                  <motion.span
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 80%)",
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
                  <span className="relative z-10">
                    <FlipText>{newsletterButtonLabel}</FlipText>
                  </span>
                </button>
              </form>
              <div className="pointer-events-none absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </AnimatedContainer>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mx-auto w-full max-w-7xl mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-center md:mt-6 md:flex-row md:gap-4 md:pt-6">
        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()}{copyrightText ? ` ${copyrightText}` : ""}
        </p>
        {legalLinks.length > 0 && (
          <nav className="flex gap-4 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/40 transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

/* ── Main export ── */

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function MarketingFooter(props: MarketingFooterProps) {
  const isDesktop = useIsDesktop();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(480);

  useEffect(() => {
    if (!isDesktop || !contentRef.current) return;

    const measure = () => {
      if (contentRef.current) {
        setFooterHeight(contentRef.current.scrollHeight);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <footer className="relative w-full bg-[#272727]">
        <FooterContent {...props} />
      </footer>
    );
  }

  return (
    <footer
      className="relative w-full bg-[#272727]"
      style={{
        height: footerHeight,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 w-full">
        <div ref={contentRef}>
          <FooterContent {...props} />
        </div>
      </div>
    </footer>
  );
}
