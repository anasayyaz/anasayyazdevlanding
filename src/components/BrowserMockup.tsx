import Image from "next/image";

export function BrowserMockup({
  url,
  image,
  alt,
}: {
  url: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-card border border-border bg-bg-secondary shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover/browser:-translate-y-1">
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#1A1A2E]/95 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex w-full max-w-md items-center gap-2 truncate rounded-md bg-white/[0.04] px-3 py-1 text-xs text-text-secondary">
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 shrink-0 opacity-60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
        <div className="ml-auto h-2.5 w-8" aria-hidden />
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
        />
      </div>
    </div>
  );
}
