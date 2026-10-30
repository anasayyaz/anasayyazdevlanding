export function PageHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="hero-fade" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" />
      </svg>
      <div
        className="absolute -left-32 top-1/4 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(79,142,247,0.22), transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute right-[-160px] top-[10%] h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,167,0.16), transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
      />
    </div>
  );
}
