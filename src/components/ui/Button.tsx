import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-button py-3 pl-6 pr-6 text-sm font-medium transition-all duration-300 hover:pr-10";
  const variants = {
    primary: "bg-accent-blue text-bg-primary",
    secondary:
      "border border-[var(--border-default)] bg-transparent text-text-primary hover:border-[var(--border-hover)] hover:bg-bg-secondary",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute right-4 h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M13 5l7 7-7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
