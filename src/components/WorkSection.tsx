"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { homeProjects } from "@/lib/data";
import { BrowserMockup } from "./BrowserMockup";

function StickyProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof homeProjects)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    index < total - 1 ? [1, 1, 0.92] : [1, 1, 1]
  );

  return (
    <div
      ref={cardRef}
      className="sticky w-full"
      style={{
        top: 88 + index * 28,
        height: "78vh",
        zIndex: index + 1,
      }}
    >
      <motion.div className="h-full origin-top" style={{ scale }}>
        <div className="container-page h-full">
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full overflow-hidden rounded-container border border-border bg-bg-secondary shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]"
          >
            <div className="grid h-full md:grid-cols-12">
              <div className="p-6 md:col-span-7 md:p-10">
                <BrowserMockup
                  url={project.url}
                  image={project.image}
                  alt={`${project.name} homepage`}
                />
              </div>
              <div className="flex flex-col justify-between p-8 md:col-span-5 md:py-10 md:pl-0 md:pr-10">
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-border bg-bg-primary/50 px-3 py-1 text-xs uppercase tracking-wide text-text-secondary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-md text-base text-text-secondary md:text-lg">
                    {project.description}
                  </p>
                </div>
                <div className="mt-10 space-y-4">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline justify-between gap-6 border-t border-white/[0.06] pt-4"
                    >
                      <span className="text-xs uppercase tracking-wide text-text-secondary">
                        {stat.label}
                      </span>
                      <span className="font-display text-2xl text-accent-mint md:text-3xl">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-end gap-2 pt-4 text-sm text-accent-blue">
                    View case study
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export function WorkSection() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <>
      <section className="container-page py-section text-center">
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Production work. Public links.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-sm text-text-secondary md:text-base"
          >
            Scroll. Each one stacks on the last.
          </motion.p>
        </div>
      </section>

      <section id="work" className="relative pb-32">
        {homeProjects.map((project, index) => (
          <StickyProjectCard
            key={project.slug}
            project={project}
            index={index}
            total={homeProjects.length}
          />
        ))}

        <div className="container-page mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-blue"
          >
            See all case studies
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
