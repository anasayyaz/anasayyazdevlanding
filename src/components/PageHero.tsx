"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeroBackground } from "./PageHeroBackground";
import { Button } from "./ui/Button";

type Word = { label: string; color: string };

type Stat = { value: string; label: string };

type PageHeroProps = {
  badge: string;
  badgeDot?: string;
  prefix?: string;
  words: readonly Word[];
  suffix: string;
  description: string;
  stats: Stat[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  minHeight?: string;
};

export function PageHero({
  badge,
  badgeDot = "#4F8EF7",
  prefix,
  words,
  suffix,
  description,
  stats,
  primaryCta,
  secondaryCta,
  minHeight = "min-h-[92svh]",
}: PageHeroProps) {
  const [index, setIndex] = useState(0);
  const active = words[index];

  const cycle = useCallback(() => {
    setIndex((i) => (i + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    if (words.length <= 1) return;
    const interval = setInterval(cycle, 3200);
    return () => clearInterval(interval);
  }, [cycle, words.length]);

  return (
    <section
      className={`relative flex ${minHeight} flex-col overflow-hidden pb-10 pt-32 md:pb-12 md:pt-40`}
    >
      <PageHeroBackground />
      <div className="container-page relative z-10 mx-auto flex flex-1 flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-text-secondary"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: active.color }}
          />
          {badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-5xl text-balance text-5xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {prefix ? <span>{prefix} </span> : null}
          {words.length > 1 ? (
            <button
              type="button"
              onClick={cycle}
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
          ) : (
            <span style={{ color: active.color }}>{active.label}</span>
          )}
          {suffix}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-10 max-w-2xl text-balance text-base text-text-secondary md:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-text-muted"
        >
          {stats.map((stat, i) => (
            <span key={stat.label} className="flex items-center gap-2">
              {i > 0 && (
                <span className="mr-2 hidden h-3 w-px bg-text-muted/30 sm:inline" />
              )}
              <span
                className="text-2xl tabular-nums md:text-3xl"
                style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </span>
              <span>{stat.label}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
