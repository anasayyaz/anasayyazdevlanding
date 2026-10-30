import { accent, site } from "@/lib/site";

export function BrandMark({
  size = "md",
  showName = true,
}: {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}) {
  const box =
    size === "sm" ? "h-8 w-8 text-sm" : size === "lg" ? "h-11 w-11 text-lg" : "h-9 w-9 text-base";
  const label =
    size === "sm" ? "text-[10px]" : "text-xs";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`${box} inline-flex shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-bg-tertiary font-semibold tracking-tight`}
        style={{
          color: accent.blue,
          boxShadow: `0 0 40px ${accent.blue}33`,
        }}
        aria-hidden
      >
        AA
      </span>
      {showName ? (
        <span className={`${label} uppercase tracking-[0.18em] text-text-secondary`}>
          {site.name}
        </span>
      ) : null}
    </span>
  );
}
