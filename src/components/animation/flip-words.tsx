"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const startAnimation = useCallback(() => {
    setIndex((prev) => (prev + 1) % wordsRef.current.length);
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      timerRef.current = setTimeout(startAnimation, duration);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isAnimating, duration, startAnimation]);

  const currentWord = words[index];

  return (
    <span className="inline-block relative">
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={
            isMobile
              ? {
                  opacity: 0,
                  y: -15,
                  filter: "blur(4px)",
                  position: "absolute" as const,
                }
              : {
                  opacity: 0,
                  y: -40,
                  x: 40,
                  filter: "blur(8px)",
                  scale: 2,
                  position: "absolute" as const,
                }
          }
          transition={{
            type: "spring",
            stiffness: 100,
            damping: isMobile ? 18 : 10,
          }}
          className={cn(
            "z-10 inline-block relative text-center px-2",
            className
          )}
        >
          {isMobile ? (
            <span className="whitespace-nowrap">{currentWord}</span>
          ) : (
            currentWord.split(" ").map((word, wordIndex) => (
              <motion.span
                key={word + wordIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3,
                  duration: 0.3,
                }}
                className="inline-block whitespace-nowrap"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={word + letterIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: wordIndex * 0.3 + letterIndex * 0.05,
                      duration: 0.2,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
