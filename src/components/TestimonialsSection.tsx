"use client";

import { testimonials } from "@/lib/data";

function TestimonialCard({
  quote,
  initials,
  name,
  role,
  company,
  color,
}: {
  quote: string;
  initials: string;
  name: string;
  role: string;
  company: string;
  color: string;
}) {
  return (
    <article className="shrink-0 rounded-card border border-border bg-bg-secondary p-6 transition-colors hover:border-border-hover">
      <p
        aria-hidden
        className="text-3xl leading-none"
        style={{
          color,
          opacity: 0.5,
          fontWeight: 700,
          letterSpacing: "-0.05em",
        }}
      >
        &quot;
      </p>
      <p className="-mt-4 text-base leading-relaxed text-text-primary md:text-[15px]">
        {quote}
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-xs"
          style={{
            background: `${color}25`,
            border: `1px solid ${color}50`,
            color,
            fontWeight: 600,
          }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p
            className="truncate text-sm text-text-primary"
            style={{ fontWeight: 600 }}
          >
            {name}
          </p>
          <p className="truncate text-[10px] uppercase tracking-[0.15em] text-text-muted">
            {role} · {company}
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeColumn({
  items,
  animation,
}: {
  items: typeof testimonials;
  animation: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative h-full overflow-hidden">
      <div className="marquee-track flex flex-col gap-5" style={{ animation }}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.initials}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const col1 = [testimonials[0], testimonials[1]];
  const col2 = [testimonials[2], testimonials[3]];
  const col3 = [testimonials[1], testimonials[2]];

  return (
    <section className="overflow-hidden py-section">
      <div className="container-page mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
          Collaborator notes
        </p>
        <h2 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
          What teams say after shipping.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-text-secondary md:text-base">
          Anonymized feedback from recent contract and product engagements.
        </p>
      </div>

      <div className="marquee-pause relative h-[640px] md:h-[720px]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-bg-primary to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-bg-primary to-transparent"
          aria-hidden
        />
        <div className="container-page grid h-full grid-cols-1 gap-5 overflow-hidden md:grid-cols-3 md:gap-7">
          <MarqueeColumn
            items={col1}
            animation="test-vmarquee-up 38s linear infinite"
          />
          <MarqueeColumn
            items={col2}
            animation="test-vmarquee-down 42s linear infinite"
          />
          <MarqueeColumn
            items={col3}
            animation="test-vmarquee-up 50s linear infinite"
          />
        </div>
      </div>
    </section>
  );
}
