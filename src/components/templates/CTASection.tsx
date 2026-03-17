"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { FlipText } from "../animation/flip-text";
import { MultiStepForm } from "../ui/multi-step-form";
import { fadeUp, stagger } from "../../lib/animations";

export interface CTAButton {
  label: string;
  href: string;
  external?: boolean;
}

export interface CTASectionProps {
  headline: React.ReactNode;
  body?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  /** "modal" opens a multi-step form; "link" renders primaryCTA/secondaryCTA buttons */
  variant?: "modal" | "link";
  /** Label for the modal trigger button (variant="modal" only) */
  modalTriggerLabel?: string;
  /** Called when the modal form is submitted */
  onModalSubmit?: (data: { name: string; email: string; goal: string }) => void;
}

export function CTASection({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  variant = "link",
  modalTriggerLabel = "Get Started",
  onModalSubmit,
}: CTASectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="relative overflow-hidden py-10 md:py-14">
        {/* Orange gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FF602D 0%, #FF7642 40%, #FF602D 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-display font-extrabold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(1.5rem, 7vw, 5rem)" }}
            >
              {headline}
            </motion.h2>

            {body && (
              <motion.p
                variants={fadeUp}
                custom={0.08}
                className="mt-4 text-lg text-white/80 max-w-xl"
              >
                {body}
              </motion.p>
            )}

            {variant === "modal" ? (
              <motion.div variants={fadeUp} custom={0.16} className="mt-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#FF602D] shadow-sm transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                >
                  <motion.span
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255,96,45,0.1) 45%, rgba(255,96,45,0.18) 50%, rgba(255,96,45,0.1) 55%, transparent 80%)",
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
                  <span className="relative z-10 flex items-center gap-2">
                    <FlipText>{modalTriggerLabel}</FlipText>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                variants={fadeUp}
                custom={0.16}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                {primaryCTA &&
                  (primaryCTA.external ? (
                    <a
                      href={primaryCTA.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#FF602D] shadow-sm transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                    >
                      <motion.span
                        className="pointer-events-none absolute inset-0 z-0"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 20%, rgba(255,96,45,0.1) 45%, rgba(255,96,45,0.18) 50%, rgba(255,96,45,0.1) 55%, transparent 80%)",
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
                        <FlipText>{primaryCTA.label}</FlipText>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={primaryCTA.href}
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#FF602D] shadow-sm transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(255,255,255,0.3),0_4px_12px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                    >
                      <motion.span
                        className="pointer-events-none absolute inset-0 z-0"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 20%, rgba(255,96,45,0.1) 45%, rgba(255,96,45,0.18) 50%, rgba(255,96,45,0.1) 55%, transparent 80%)",
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
                        <FlipText>{primaryCTA.label}</FlipText>
                      </span>
                    </Link>
                  ))}

                {secondaryCTA &&
                  (secondaryCTA.external ? (
                    <a
                      href={secondaryCTA.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
                    >
                      <FlipText>{secondaryCTA.label}</FlipText>
                    </a>
                  ) : (
                    <Link
                      href={secondaryCTA.href}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10 active:scale-[0.98]"
                    >
                      <FlipText>{secondaryCTA.label}</FlipText>
                    </Link>
                  ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {variant === "modal" && (
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4"
              onClick={() => setIsModalOpen(false)}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    Let&apos;s start a conversation
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Tell us a little about yourself.
                  </p>
                </div>
                <MultiStepForm variant="modal" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
