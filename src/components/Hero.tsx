"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroWords } from "@/lib/data";
import { site } from "@/lib/site";
import { Button } from "./ui/Button";

export function Hero() {
  const [index, setIndex] = useState(0);
  const active = heroWords[index];

  const cycle = useCallback(() => {
    setIndex((i) => (i + 1) % heroWords.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycle, 3200);
    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-28 md:pb-12 md:pt-32">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "#3B82F6" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[460px] w-[460px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "#22D3EE" }}
        aria-hidden
      />

      <div className="container-page relative z-10 mx-auto flex flex-1 flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-text-secondary"
        >
          <span
            className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
            style={{ background: active.color }}
          />
          Senior full-stack · Remote & freelance
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl text-balance text-5xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-8xl"
          aria-label={`${site.name} builds production ${heroWords.map((w) => w.label).join(", ")}.`}
        >
          I Build{" "}
          <button
            type="button"
            onClick={cycle}
            aria-label={`Currently ${active.label}. Click to cycle.`}
            className="relative inline-flex cursor-pointer items-baseline whitespace-nowrap align-baseline"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={active.label}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="whitespace-nowrap"
                style={{
                  color: active.color,
                  textShadow: `0 0 60px ${active.color}40`,
                }}
              >
                {active.label}
              </motion.span>
            </AnimatePresence>
          </button>
          <br />
          That Survive Production.
        </motion.h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {heroWords.map((word, i) => (
            <button
              key={word.label}
              type="button"
              onClick={() => setIndex(i)}
              className="group flex items-center gap-2 rounded-full border border-border bg-bg-secondary/60 px-3 py-1 backdrop-blur-sm transition-colors hover:border-border-hover"
            >
              <span
                className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
                style={{
                  background: i === index ? word.color : "var(--text-muted)",
                }}
              />
              <span
                className={`text-[10px] uppercase tracking-[0.15em] transition-colors ${
                  i === index
                    ? "text-text-primary"
                    : "text-text-muted group-hover:text-text-primary"
                }`}
              >
                {word.label}
              </span>
            </button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 max-w-2xl text-balance text-base text-text-secondary md:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="/contact">Start a Conversation</Button>
          <Button href="#work" variant="secondary">
            View Selected Work
          </Button>
        </motion.div>
      </div>

      <div className="container-page relative z-10 flex items-center justify-between gap-6 text-xs uppercase tracking-[0.15em] text-text-muted">
        <span className="flex items-center gap-2">
          <span
            className="h-1 w-1 rounded-full"
            style={{ background: active.color }}
          />
          10+ years in production
        </span>
        <span className="hidden sm:inline">{site.domain}</span>
      </div>
    </section>
  );
}
