"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { manuscriptChapters } from "@/lib/data";

function StoryWords({ text, progress }: { text: string; progress: number }) {
  const words = text.split(/\s+/);
  const revealAt = (index: number) => {
    const start = index / words.length;
    const end = start + 1 / words.length;
    const t = (progress - start) / (end - start);
    return Math.min(1, Math.max(0, t));
  };

  return (
    <p className="font-serif text-balance text-[15px] leading-[1.65] text-text-primary md:text-[17px]">
      {words.map((word, i) => {
        const t = revealAt(i);
        const opacity = 0.18 + t * 0.82;
        const blur = (1 - t) * 4;
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block"
            style={{
              opacity,
              filter: `blur(${blur}px)`,
              transform: `translateY(${(1 - t) * 6}px)`,
            }}
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}

function MiniBrowser({
  url,
  image,
  alt,
  caption,
  category,
  visible,
}: {
  url: string;
  image: string;
  alt: string;
  caption: string;
  category: string;
  visible: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        x: visible ? 0 : 80,
        scale: visible ? 1 : 0.92,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="my-8 ml-auto w-full max-w-md overflow-hidden rounded-card border border-white/[0.08] bg-bg-primary shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center gap-1 border-b border-white/[0.05] bg-[#1A1A2E]/95 px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[9px] text-text-muted">{url}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={alt} fill className="object-cover object-top" sizes="500px" />
      </div>
      <div className="flex items-center justify-between gap-4 px-3 py-2">
        <p className="truncate text-xs text-text-secondary">{caption}</p>
        <p className="text-[9px] uppercase tracking-wide text-text-muted">{category}</p>
      </div>
    </motion.div>
  );
}

export function WorkManuscriptSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [wordProgress, setWordProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const total = manuscriptChapters.length;
    const scaled = v * total;
    const index = Math.min(total - 1, Math.floor(scaled));
    const segment = scaled - index;
    setActiveIndex(index);
    setWordProgress(segment);
  });

  const active = manuscriptChapters[activeIndex];

  return (
    <section
      id="project-01"
      ref={sectionRef}
      style={{ height: "770vh" }}
      className="relative bg-bg-primary"
    >
      <div className="sticky top-0 grid h-screen grid-cols-1 overflow-hidden md:grid-cols-[1fr_1fr]">
        <div className="relative flex flex-col justify-between px-8 py-12 md:px-14 md:py-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-text-muted">
              The Multidex Manuscript
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Chapter {active.chapter} of {String(manuscriptChapters.length).padStart(2, "0")}
            </p>
          </div>

          <div className="relative my-10 h-[34vh] md:h-[40vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, filter: "blur(8px)", y: 30 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 flex flex-col justify-end"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-accent-blue">
                  {active.category}
                </p>
                <h2 className="mt-3 font-serif text-[10vw] font-normal leading-[0.92] tracking-[-0.03em] md:text-[5.6vw]">
                  {active.name}
                </h2>
                <p className="mt-4 max-w-md text-base italic text-text-secondary md:text-lg">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex items-center gap-1">
              {manuscriptChapters.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-accent-blue" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <Link
              href={active.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-text-secondary transition-colors hover:text-text-primary"
            >
              Visit live site
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-white/[0.06] bg-bg-secondary/30 md:border-l md:border-t-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: "10vh" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-6vh" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-center overflow-y-auto px-8 py-16 md:px-14 md:py-20"
            >
              <StoryWords text={active.storyBefore} progress={Math.min(1, wordProgress * 2)} />
              <MiniBrowser
                url={active.url}
                image={active.image}
                alt={active.name}
                caption={active.mockupCaption}
                category={active.category}
                visible={wordProgress > 0.35}
              />
              <StoryWords
                text={active.storyAfter}
                progress={Math.max(0, (wordProgress - 0.5) * 2)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
