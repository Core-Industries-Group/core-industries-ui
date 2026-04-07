import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ArrowRight, X, Moon, Sun, ArrowUp, CheckIcon, ArrowRightIcon } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

// src/components/templates/MarketingNavbar.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var flipFront = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 }
};
var flipBack = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 }
};
var flipSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5
};
function FlipText({ children }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.closest("a, button");
    if (!parent) return;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    parent.addEventListener("mouseenter", enter);
    parent.addEventListener("mouseleave", leave);
    return () => {
      parent.removeEventListener("mouseenter", enter);
      parent.removeEventListener("mouseleave", leave);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    motion.span,
    {
      ref,
      className: "relative inline-flex shrink-0 items-center justify-center",
      style: { perspective: "600px" },
      animate: hovered ? "hover" : "initial",
      children: [
        /* @__PURE__ */ jsx(
          motion.span,
          {
            className: "inline-flex items-center gap-2",
            variants: flipFront,
            transition: flipSpring,
            style: { transformStyle: "preserve-3d", transformOrigin: "center bottom" },
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.span,
          {
            className: "absolute inset-0 inline-flex items-center justify-center gap-2",
            variants: flipBack,
            transition: flipSpring,
            style: {
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
              rotateX: 90
            },
            children
          }
        )
      ]
    }
  );
}
var linkFlipFront = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 }
};
var linkFlipBack = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 }
};
var linkGlow = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 }
    }
  }
};
var linkSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5
};
function NavLink({
  href,
  label,
  isActive
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "relative overflow-visible rounded-xl",
      style: { perspective: "600px" },
      initial: "initial",
      whileHover: "hover",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "pointer-events-none absolute inset-0 z-0",
            variants: linkGlow,
            style: {
              background: "radial-gradient(circle, rgba(255,96,45,0.15) 0%, rgba(255,96,45,0.06) 50%, rgba(255,96,45,0) 100%)",
              opacity: 0,
              borderRadius: "12px"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            variants: linkFlipFront,
            transition: linkSpring,
            style: { transformStyle: "preserve-3d", transformOrigin: "center bottom" },
            children: /* @__PURE__ */ jsx(
              Link,
              {
                href,
                className: cn(
                  "relative z-10 block rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-primary" : "text-muted-foreground"
                ),
                children: label
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0",
            variants: linkFlipBack,
            transition: linkSpring,
            style: {
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
              rotateX: 90
            },
            children: /* @__PURE__ */ jsx(
              Link,
              {
                href,
                className: cn(
                  "relative z-10 block rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-primary" : "text-foreground"
                ),
                children: label
              }
            )
          }
        )
      ]
    }
  );
}
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return /* @__PURE__ */ jsx("div", { className: "h-10 w-[4.5rem]" });
  }
  const isDark = resolvedTheme === "dark";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex h-10 w-[4.5rem] cursor-pointer items-center rounded-full p-1.5 transition-[background-color,border-color,box-shadow] duration-300",
        isDark ? "border border-white/10 bg-[#1a1a1a] shadow-[0_2px_12px_rgba(0,0,0,0.4)]" : "border border-black/20 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
      ),
      onClick: () => setTheme(isDark ? "light" : "dark"),
      role: "button",
      tabIndex: 0,
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300",
              isDark ? "translate-x-0 bg-white/10" : "translate-x-8 bg-[#272727]"
            ),
            children: isDark ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4 text-white", strokeWidth: 2 }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4 text-white", strokeWidth: 2 })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300",
              isDark ? "bg-transparent" : "-translate-x-8"
            ),
            children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4 text-white/40", strokeWidth: 2 }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4 text-[#272727]/60", strokeWidth: 2 })
          }
        )
      ] })
    }
  );
}
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      className: "fixed bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:bg-muted dark:border-white/10 dark:bg-[#272727] dark:hover:bg-[#333]",
      "aria-label": "Back to top",
      children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4 text-foreground/70 dark:text-white/60", strokeWidth: 2 })
    }
  ) });
}
function MarketingNavbar({
  logoDarkSrc,
  logoLightSrc,
  logoAlt = "Logo",
  logoWidth = 100,
  logoHeight = 28,
  logoHref = "/",
  navLinks,
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
  mobileMenuBg = "#FCF8F7"
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.header,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        className: "sticky top-2 z-50 mx-3 w-[calc(100%-1.5rem)] rounded-full border border-border bg-white/95 shadow-[0_2px_16px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-500 ease-out dark:bg-[#272727]/95 md:top-4 md:mx-auto md:max-w-[calc(100%-3rem)] lg:max-w-7xl",
        children: /* @__PURE__ */ jsxs("nav", { className: "flex h-14 w-full items-center justify-between px-6 transition-all duration-500 ease-out md:h-12 md:pl-5 md:pr-1.5", children: [
          /* @__PURE__ */ jsxs(Link, { href: logoHref, className: "relative z-10 shrink-0", children: [
            /* @__PURE__ */ jsx(
              Image,
              {
                src: logoDarkSrc,
                alt: logoAlt,
                width: logoWidth,
                height: logoHeight,
                className: "block dark:hidden",
                priority: true
              }
            ),
            /* @__PURE__ */ jsx(
              Image,
              {
                src: logoLightSrc,
                alt: logoAlt,
                width: logoWidth,
                height: logoHeight,
                className: "hidden dark:block",
                priority: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden items-center gap-1 md:flex", children: navLinks.map((link) => /* @__PURE__ */ jsx(
            NavLink,
            {
              href: link.href,
              label: link.label,
              isActive: pathname === link.href
            },
            link.href
          )) }),
          /* @__PURE__ */ jsx("div", { className: "hidden items-center gap-2 md:flex", children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: ctaHref,
              className: "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-5 py-2 text-[13px] font-semibold text-white active:scale-[0.98]",
              style: {
                background: "linear-gradient(180deg, #FF602D 0%, #D4501F 100%)",
                boxShadow: "0 1px 2px rgba(255,96,45,0.3), 0 4px 12px rgba(255,96,45,0.15), inset 0 1px 0 rgba(255,255,255,0.2)"
              },
              children: [
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    className: "pointer-events-none absolute inset-0 z-0",
                    style: {
                      background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 55%, transparent 80%)",
                      backgroundSize: "200% 100%"
                    },
                    animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
                    transition: {
                      duration: 2.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.5
                    }
                  }
                ),
                /* @__PURE__ */ jsx(FlipText, { children: /* @__PURE__ */ jsx("span", { className: "relative z-10", children: ctaLabel }) }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": open ? "Close navigation" : "Open navigation",
              onClick: () => setOpen(!open),
              className: "relative flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden",
              children: /* @__PURE__ */ jsxs("div", { className: "flex h-4 w-5 flex-col items-center justify-center", children: [
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    className: "absolute h-[2px] w-5 rounded-full bg-current",
                    animate: open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 },
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    className: "absolute h-[2px] w-5 rounded-full bg-current",
                    animate: open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 },
                    transition: { duration: 0.2 }
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    className: "absolute h-[2px] w-5 rounded-full bg-current",
                    animate: open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 },
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }
                )
              ] })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "fixed inset-0 z-[44] bg-black/30 backdrop-blur-sm md:hidden",
        onClick: () => setOpen(false)
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -8, scaleY: 0.95 },
        animate: { opacity: 1, y: 0, scaleY: 1 },
        exit: { opacity: 0, y: -8, scaleY: 0.95 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        style: { transformOrigin: "top center", backgroundColor: mobileMenuBg },
        className: "fixed left-3 right-3 top-[4.5rem] z-[46] overflow-hidden rounded-[2rem] border border-border shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:hidden dark:bg-[#1a1a1a]",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsx("nav", { className: "grid gap-y-0.5", children: navLinks.map((link, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: {
                duration: 0.3,
                delay: 0.05 + i * 0.05,
                ease: [0.16, 1, 0.3, 1]
              },
              children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.href,
                  onClick: () => setOpen(false),
                  className: cn(
                    "block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-200 hover:bg-muted",
                    pathname === link.href ? "text-primary" : "text-foreground"
                  ),
                  children: link.label
                }
              )
            },
            link.href
          )) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
              className: "mt-3 border-t border-border pt-4",
              children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: ctaHref,
                  onClick: () => setOpen(false),
                  className: "relative block w-full overflow-hidden rounded-full py-3 text-center text-sm font-semibold text-white active:scale-[0.98]",
                  style: {
                    background: "linear-gradient(180deg, #FF602D 0%, #D4501F 100%)",
                    boxShadow: "0 1px 2px rgba(255,96,45,0.3), 0 4px 12px rgba(255,96,45,0.15)"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: "pointer-events-none absolute inset-0 z-0",
                        style: {
                          background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 55%, transparent 80%)",
                          backgroundSize: "200% 100%"
                        },
                        animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
                        transition: {
                          duration: 2.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1.5
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "relative z-10", children: ctaLabel })
                  ]
                }
              )
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-50", children: /* @__PURE__ */ jsx(ThemeToggle, {}) }),
    /* @__PURE__ */ jsx(BackToTop, {})
  ] });
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function AnimatedContainer({ delay = 0.1, children, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { filter: "blur(4px)", translateY: -8, opacity: 0 },
      whileInView: { filter: "blur(0px)", translateY: 0, opacity: 1 },
      viewport: { once: true },
      transition: { delay, duration: 0.8 },
      ...props,
      children
    }
  );
}
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
  legalLinks = []
}) {
  const [name, setName] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onNewsletterSubmit?.(name, emailVal);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex w-full flex-col border-t border-white/10 bg-[#272727] text-white px-5 pt-6 pb-14 md:px-12 md:pt-8 md:pb-14", children: [
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto w-full max-w-7xl mt-2 md:mt-4", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col gap-6 ${showNewsletter ? "lg:grid lg:grid-cols-[30%_15%_15%_1fr] lg:gap-12" : "lg:grid lg:grid-cols-[40%_20%_20%] lg:gap-12"}`,
        children: [
          /* @__PURE__ */ jsxs(AnimatedContainer, { delay: 0.1, children: [
            /* @__PURE__ */ jsx(Image, { src: logoSrc, alt: logoAlt, width: logoWidth, height: logoHeight }),
            tagline && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/60", children: tagline })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-6 lg:contents", children: [
            navLinks.length > 0 && /* @__PURE__ */ jsxs(AnimatedContainer, { delay: 0.2, className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-3 font-display text-base font-semibold md:mb-4 md:text-lg", children: "Navigation" }),
              /* @__PURE__ */ jsx("nav", { className: "space-y-2 text-sm", children: navLinks.map((link) => /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.href,
                  className: "block text-white/60 transition-colors duration-200 hover:text-primary",
                  children: link.label
                },
                link.href
              )) })
            ] }),
            (email || phone || location) && /* @__PURE__ */ jsxs(AnimatedContainer, { delay: 0.3, className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-3 font-display text-base font-semibold md:mb-4 md:text-lg", children: "Contact Us" }),
              /* @__PURE__ */ jsxs("address", { className: "space-y-2 text-sm not-italic text-white/60", children: [
                email && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `mailto:${email}`,
                    className: "text-white/60 transition-colors duration-200 hover:text-primary",
                    children: email
                  }
                ) }),
                phone && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `tel:+${phoneTel || phone.replace(/\D/g, "")}`,
                    className: "text-white/60 transition-colors duration-200 hover:text-primary",
                    children: phone
                  }
                ) }),
                location && /* @__PURE__ */ jsx("p", { className: "text-white/60", children: location })
              ] })
            ] })
          ] }),
          showNewsletter && /* @__PURE__ */ jsxs(AnimatedContainer, { delay: 0.4, className: "relative", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 font-display text-base font-semibold md:text-lg", children: newsletterHeading }),
            newsletterSubtext && /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm text-white/60 md:mb-5", children: newsletterSubtext }),
            /* @__PURE__ */ jsxs("form", { className: "space-y-3", onSubmit: handleSubmit, children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "text",
                    placeholder: "Name",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    className: "rounded-full bg-white border-white/20 text-[#272727] placeholder:text-[#272727]/50 dark:bg-white dark:border-white/20 dark:text-[#272727] dark:placeholder:text-[#272727]/50"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "email",
                    placeholder: "Email",
                    value: emailVal,
                    onChange: (e) => setEmailVal(e.target.value),
                    className: "rounded-full bg-white border-white/20 text-[#272727] placeholder:text-[#272727]/50 dark:bg-white dark:border-white/20 dark:text-[#272727] dark:placeholder:text-[#272727]/50"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "group relative w-full overflow-hidden rounded-full bg-[#FF602D] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4501F] hover:shadow-[0_0_16px_rgba(255,96,45,0.3),0_4px_12px_rgba(255,96,45,0.2)] active:scale-[0.98]",
                  children: [
                    /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: "pointer-events-none absolute inset-0 z-0",
                        style: {
                          background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 80%)",
                          backgroundSize: "200% 100%"
                        },
                        animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
                        transition: {
                          duration: 2.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1.5
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "relative z-10", children: /* @__PURE__ */ jsx(FlipText, { children: newsletterButtonLabel }) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-center md:mt-6 md:flex-row md:gap-4 md:pt-6", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-white/40", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        copyrightText ? ` ${copyrightText}` : ""
      ] }),
      legalLinks.length > 0 && /* @__PURE__ */ jsx("nav", { className: "flex gap-4 text-sm", children: legalLinks.map((link) => /* @__PURE__ */ jsx(
        Link,
        {
          href: link.href,
          className: "text-white/40 transition-colors duration-200 hover:text-primary",
          children: link.label
        },
        link.href
      )) })
    ] })
  ] });
}
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
function MarketingFooter(props) {
  const isDesktop = useIsDesktop();
  const contentRef = React.useRef(null);
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
    return /* @__PURE__ */ jsx("footer", { className: "relative w-full bg-[#272727]", children: /* @__PURE__ */ jsx(FooterContent, { ...props }) });
  }
  return /* @__PURE__ */ jsx(
    "footer",
    {
      className: "relative w-full bg-[#272727]",
      style: {
        height: footerHeight,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
      },
      children: /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 w-full", children: /* @__PURE__ */ jsx("div", { ref: contentRef, children: /* @__PURE__ */ jsx(FooterContent, { ...props }) }) })
    }
  );
}
var buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-4",
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-3",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "label",
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
var steps = [
  { id: 1, label: "Name", field: "name", placeholder: "Your full name" },
  { id: 2, label: "Email", field: "email", placeholder: "you@example.com" },
  { id: 3, label: "Goal", field: "goal", placeholder: "What brings you here?" }
];
function MultiStepForm({ variant = "default" }) {
  const isOrange = variant === "onOrange";
  const isModal = variant === "modal";
  const isAccented = isOrange || isModal;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const currentStepData = steps[currentStep];
  if (isComplete) {
    return /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "relative overflow-hidden rounded-2xl p-12",
          isOrange ? "bg-white shadow-xl" : isModal ? "bg-white shadow-xl dark:bg-card dark:shadow-none dark:border dark:border-border/50" : "border border-border/50 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur"
        ),
        children: [
          !isAccented && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]" }),
          /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-700", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "flex h-16 w-16 items-center justify-center rounded-full",
                  isAccented ? "bg-[#FF602D]/10 border-2 border-[#FF602D]/20" : "border-2 border-foreground/10 bg-foreground/5"
                ),
                children: /* @__PURE__ */ jsx(
                  CheckIcon,
                  {
                    className: cn(
                      "h-8 w-8 animate-in zoom-in duration-500 delay-200",
                      isAccented ? "text-[#FF602D]" : "text-foreground"
                    ),
                    strokeWidth: 2.5
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-center", children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: cn(
                    "text-xl font-medium tracking-tight text-balance",
                    isOrange ? "text-gray-900" : isModal ? "text-gray-900 dark:text-foreground" : ""
                  ),
                  children: "You're all set"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: cn(
                    "text-sm",
                    isOrange ? "text-gray-500" : isModal ? "text-gray-500 dark:text-muted-foreground" : "text-muted-foreground/80"
                  ),
                  children: formData.name
                }
              )
            ] })
          ] })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "w-full max-w-sm",
        variant === "onOrange" && "rounded-2xl bg-white p-8 shadow-xl"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "mb-10 flex items-center", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: cn("flex items-center", index < steps.length - 1 && "flex-1"), children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => index < currentStep && setCurrentStep(index),
              disabled: index > currentStep,
              className: cn(
                "group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-700 ease-out",
                "disabled:cursor-not-allowed",
                isAccented ? cn(
                  index < currentStep && "bg-[#FF602D]/15 text-[#FF602D]",
                  index === currentStep && "bg-[#FF602D] text-white shadow-[0_0_20px_-5px_rgba(255,96,45,0.4)]",
                  index > currentStep && (isOrange ? "bg-gray-100 text-gray-400 border border-gray-200" : "bg-muted text-muted-foreground/60 border border-border")
                ) : cn(
                  index < currentStep && "bg-foreground/15 text-foreground/70",
                  index === currentStep && "bg-foreground text-background shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]",
                  index > currentStep && "bg-muted text-muted-foreground/60 border border-border"
                )
              ),
              children: [
                index < currentStep ? /* @__PURE__ */ jsx(
                  CheckIcon,
                  {
                    className: "h-4 w-4 animate-in zoom-in duration-500",
                    strokeWidth: 2.5
                  }
                ) : /* @__PURE__ */ jsx("span", { className: "text-sm font-medium tabular-nums", children: step.id }),
                index === currentStep && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "absolute inset-0 rounded-full blur-md animate-pulse",
                      isAccented ? "bg-[#FF602D]/25" : "bg-foreground/20"
                    )
                  }
                )
              ]
            }
          ),
          index < steps.length - 1 && /* @__PURE__ */ jsxs("div", { className: "relative h-[1.5px] flex-1 mx-3", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "absolute inset-0",
                  isOrange ? "bg-gray-200" : "bg-border"
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "absolute inset-0 transition-all duration-700 ease-out origin-left",
                  isAccented ? "bg-[#FF602D]/40" : "bg-foreground/30"
                ),
                style: {
                  transform: `scaleX(${index < currentStep ? 1 : 0})`
                }
              }
            )
          ] })
        ] }, step.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-700",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
                  /* @__PURE__ */ jsx(
                    Label,
                    {
                      htmlFor: currentStepData.field,
                      className: cn(
                        "text-lg font-medium tracking-tight",
                        isOrange ? "text-gray-900" : isModal ? "text-gray-900 dark:text-foreground" : ""
                      ),
                      children: currentStepData.label
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: cn(
                        "text-xs font-medium tabular-nums",
                        isOrange ? "text-gray-400" : isModal ? "text-gray-400 dark:text-muted-foreground/60" : "text-muted-foreground/60"
                      ),
                      children: [
                        currentStep + 1,
                        "/",
                        steps.length
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "relative group", children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: currentStepData.field,
                    type: currentStepData.field === "email" ? "email" : "text",
                    placeholder: currentStepData.placeholder,
                    value: formData[currentStepData.field] || "",
                    onChange: (e) => handleInputChange(currentStepData.field, e.target.value),
                    className: cn(
                      "h-12 rounded-xl text-base transition-all duration-500 shadow-sm",
                      isOrange ? "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-[#FF602D]/40 focus:ring-[#FF602D]/10" : isModal ? "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-[#FF602D]/40 focus:ring-[#FF602D]/10 dark:border-border dark:bg-input/30 dark:text-foreground dark:placeholder:text-muted-foreground dark:focus:border-[#FF602D]/40 dark:focus:ring-[#FF602D]/10" : "border-border focus:border-foreground/30 bg-card"
                    )
                  }
                ) })
              ]
            },
            currentStepData.id
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleNext,
              disabled: !formData[currentStepData.field]?.trim(),
              className: cn(
                "w-full h-12 group relative transition-all duration-300",
                isAccented ? "bg-[#FF602D] text-white hover:bg-[#D4501F] hover:shadow-lg hover:shadow-[#FF602D]/20 disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-muted dark:disabled:text-muted-foreground/60" : "hover:shadow-lg hover:shadow-foreground/5"
              ),
              children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2 font-medium", children: [
                currentStep === steps.length - 1 ? "Complete" : "Continue",
                /* @__PURE__ */ jsx(
                  ArrowRightIcon,
                  {
                    className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 duration-300",
                    strokeWidth: 2
                  }
                )
              ] })
            }
          ),
          currentStep > 0 && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentStep(currentStep - 1),
              className: cn(
                "w-full text-center text-sm transition-all duration-300",
                isOrange ? "text-gray-400 hover:text-gray-600" : isModal ? "text-gray-400 hover:text-gray-600 dark:text-muted-foreground/60 dark:hover:text-foreground/80" : "text-muted-foreground/60 hover:text-foreground/80"
              ),
              children: "Go back"
            }
          )
        ] })
      ]
    }
  );
}

// src/lib/animations.ts
var fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
  })
};
var stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};
function CTASection({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  variant = "link",
  modalTriggerLabel = "Get Started",
  onModalSubmit
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-10 md:py-14", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(135deg, #FF602D 0%, #FF7642 40%, #FF602D 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-0 opacity-[0.07]",
          style: {
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30",
          style: {
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-3xl px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 },
          variants: stagger,
          className: "flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                variants: fadeUp,
                custom: 0,
                className: "font-display font-extrabold leading-tight tracking-tight text-white",
                style: { fontSize: "clamp(1.5rem, 7vw, 5rem)" },
                children: headline
              }
            ),
            body && /* @__PURE__ */ jsx(
              motion.p,
              {
                variants: fadeUp,
                custom: 0.08,
                className: "mt-4 text-lg text-white/80 max-w-xl",
                children: body
              }
            ),
            variant === "modal" ? /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, custom: 0.16, className: "mt-10", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setIsModalOpen(true),
                className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#FF602D] shadow-sm transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.2)] active:scale-[0.98]",
                children: [
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      className: "pointer-events-none absolute inset-0 z-0",
                      style: {
                        background: "linear-gradient(105deg, transparent 20%, rgba(255,96,45,0.1) 45%, rgba(255,96,45,0.18) 50%, rgba(255,96,45,0.1) 55%, transparent 80%)",
                        backgroundSize: "200% 100%"
                      },
                      animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
                      transition: {
                        duration: 2.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1.5
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FlipText, { children: modalTriggerLabel }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" })
                  ] })
                ]
              }
            ) }) : /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: fadeUp,
                custom: 0.16,
                className: "mt-10 flex flex-wrap items-center justify-center gap-4",
                children: [
                  primaryCTA && (primaryCTA.external ? /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: primaryCTA.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#FF602D] shadow-sm transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.2)] active:scale-[0.98]",
                      children: [
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            className: "pointer-events-none absolute inset-0 z-0",
                            style: {
                              background: "linear-gradient(105deg, transparent 20%, rgba(255,96,45,0.1) 45%, rgba(255,96,45,0.18) 50%, rgba(255,96,45,0.1) 55%, transparent 80%)",
                              backgroundSize: "200% 100%"
                            },
                            animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
                            transition: {
                              duration: 2.5,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 1.5
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "relative z-10", children: /* @__PURE__ */ jsx(FlipText, { children: primaryCTA.label }) })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href: primaryCTA.href,
                      className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#FF602D] shadow-sm transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.2)] active:scale-[0.98]",
                      children: [
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            className: "pointer-events-none absolute inset-0 z-0",
                            style: {
                              background: "linear-gradient(105deg, transparent 20%, rgba(255,96,45,0.1) 45%, rgba(255,96,45,0.18) 50%, rgba(255,96,45,0.1) 55%, transparent 80%)",
                              backgroundSize: "200% 100%"
                            },
                            animate: { backgroundPosition: ["200% 0%", "-200% 0%"] },
                            transition: {
                              duration: 2.5,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 1.5
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "relative z-10", children: /* @__PURE__ */ jsx(FlipText, { children: primaryCTA.label }) })
                      ]
                    }
                  )),
                  secondaryCTA && (secondaryCTA.external ? /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: secondaryCTA.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]",
                      children: /* @__PURE__ */ jsx(FlipText, { children: secondaryCTA.label })
                    }
                  ) : /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: secondaryCTA.href,
                      className: "inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]",
                      children: /* @__PURE__ */ jsx(FlipText, { children: secondaryCTA.label })
                    }
                  ))
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    variant === "modal" && /* @__PURE__ */ jsx(AnimatePresence, { children: isModalOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "fixed inset-0 z-[100] flex items-center justify-center px-4",
        onClick: () => setIsModalOpen(false),
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md" }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 20 },
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              className: "relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-8 shadow-2xl",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setIsModalOpen(false),
                    className: "absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600",
                    children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-gray-900", children: "Let's start a conversation" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Tell us a little about yourself." })
                ] }),
                /* @__PURE__ */ jsx(MultiStepForm, { variant: "modal" })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
var GradientBars = ({
  numBars = 15,
  gradientFrom = "rgb(255, 96, 45)",
  gradientTo = "transparent",
  animationDuration = 2,
  className = "",
  flipped = false
}) => {
  const calculateHeight = (index, total) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    return Math.round(
      (minHeight + (maxHeight - minHeight) * heightPercentage) * 1e3
    ) / 1e3;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes pulseBar {
          0% { transform: scaleY(var(--initial-scale)); }
          100% { transform: scaleY(calc(var(--initial-scale) * 0.7)); }
        }
      ` }),
    /* @__PURE__ */ jsx("div", { className: `absolute inset-0 z-0 overflow-hidden ${className}`, children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex h-full",
        style: {
          width: "100%",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased"
        },
        children: Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                flex: `1 0 calc(100% / ${numBars})`,
                maxWidth: `calc(100% / ${numBars} + 1px)`,
                marginRight: "-1px",
                height: "100%",
                background: `linear-gradient(${flipped ? "to bottom" : "to top"}, ${gradientFrom}, ${gradientTo})`,
                transform: `scaleY(${height / 100})`,
                transformOrigin: flipped ? "top" : "bottom",
                transition: "transform 0.5s ease-in-out",
                animation: `pulseBar ${animationDuration}s ease-in-out infinite alternate`,
                animationDelay: `${index * 0.1}s`,
                boxSizing: "border-box",
                // @ts-ignore
                "--initial-scale": height / 100
              }
            },
            index
          );
        })
      }
    ) })
  ] });
};
function LegalHero({ title, numBars = 7 }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative -mt-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-[44vh]", children: [
      /* @__PURE__ */ jsx(
        GradientBars,
        {
          numBars,
          gradientFrom: "rgb(255, 96, 45)",
          gradientTo: "transparent",
          animationDuration: 2,
          flipped: true
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 z-[1]",
          style: {
            backdropFilter: "blur(80px)",
            WebkitBackdropFilter: "blur(80px)"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-x-0 bottom-0 z-[2] h-32",
          style: {
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-[3] mx-auto max-w-4xl px-6 pt-32 pb-8 text-center md:pt-36 md:pb-10", children: /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl", children: title }) })
  ] });
}

export { CTASection, LegalHero, MarketingFooter, MarketingNavbar };
