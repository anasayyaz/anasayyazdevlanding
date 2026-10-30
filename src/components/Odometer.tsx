"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function DigitColumn({ digit, animate }: { digit: number; animate: boolean }) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden leading-none tabular-nums">
      <span
        className="absolute inset-x-0 top-0 flex flex-col items-center leading-none tabular-nums transition-transform duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateY(-${animate ? digit : 0}em)` }}
      >
        {digits.map((d, i) => (
          <span key={i} className="block h-[1em] leading-none">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Odometer({
  value,
  suffix,
  color,
}: {
  value: number;
  suffix: string;
  color: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  const digitCount = String(value).length;

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const str = String(display).padStart(digitCount, "0");

  return (
    <span
      ref={ref}
      className="inline-flex items-baseline"
      style={{ fontWeight: 700, letterSpacing: "-0.04em", color }}
      aria-label={`${value}${suffix}`}
    >
      <span className="inline-flex">
        {str.split("").map((d, i) => (
          <DigitColumn key={i} digit={parseInt(d, 10)} animate={inView} />
        ))}
      </span>
      <span>{suffix}</span>
    </span>
  );
}

export function Sparkline({
  points,
  color,
  inView,
}: {
  points: number[];
  color: string;
  inView: boolean;
}) {
  const w = 80;
  const h = 24;
  const pathD = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * w;
      return `${i === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");
  const areaD = `${pathD} L ${w},${h} L 0,${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      preserveAspectRatio="none"
      className="overflow-visible"
      aria-hidden
    >
      <path
        d={areaD}
        fill={`${color}1A`}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease" }}
      />
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={{
          strokeDasharray: inView ? "1 0" : "0 1",
          transition: "stroke-dasharray 1.5s ease",
        }}
      />
    </svg>
  );
}
