import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Expertise" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const social = [
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z" />
    ),
  },
  {
    label: "GitHub",
    href: site.links.github,
    icon: (
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    ),
  },
  {
    label: "Upwork",
    href: site.links.upwork,
    icon: (
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.027c-2.312 0-4.286 1.553-5.067 3.643-.849-.598-1.918-1.032-3.066-1.041C6.534 7.669 4.64 9.627 4.64 12c0 2.634 2.134 4.768 4.768 4.768 1.718 0 3.227-.916 4.07-2.292.276.492.643.938 1.087 1.316.717-2.63 2.737-4.515 5.134-4.515 2.973 0 5.382 2.409 5.382 5.382 0 2.972-2.409 5.382-5.382 5.382-3.058 0-5.529-2.427-5.529-5.529 0-.276.022-.547.064-.811-1.075.812-2.422 1.296-3.882 1.296-3.529 0-6.39-2.861-6.39-6.39S8.5 5.61 12.029 5.61c1.234 0 2.385.352 3.358.961 1.034-1.742 2.907-2.912 5.052-2.912 3.244 0 5.874 2.63 5.874 5.874 0 3.244-2.63 5.874-5.874 5.874z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.06] bg-bg-secondary">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/">
              <BrandMark size="lg" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-secondary">
              {site.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-text-secondary transition-colors hover:border-accent-blue hover:text-accent-blue"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
              Navigate
            </p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent-blue"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-blue"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-blue"
                >
                  Upwork — hire for contract work
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Open to remote & freelance engagements worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
