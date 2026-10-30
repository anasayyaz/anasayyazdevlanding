import { accent, site } from "@/lib/site";

export const heroWords = [
  { label: "React", color: accent.blue },
  { label: "Mobile", color: accent.cyan },
  { label: "APIs", color: accent.violet },
  { label: "Systems", color: accent.amber },
] as const;

export const workHeroWords = [
  { label: "Live", color: accent.blue },
  { label: "Shipped", color: accent.cyan },
  { label: "Owned", color: accent.violet },
] as const;

export const contactHeroWords = [
  { label: "scope", color: accent.blue },
  { label: "build", color: accent.cyan },
  { label: "ship", color: accent.violet },
] as const;

export const contactChannels = [
  {
    type: "email" as const,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    action: "Compose",
    color: accent.blue,
    icon: "mail",
  },
  {
    type: "linkedin" as const,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: site.links.linkedin,
    action: "Open profile",
    color: accent.cyan,
    icon: "linkedin",
  },
  {
    type: "upwork" as const,
    label: "Upwork",
    value: "Hire on Upwork",
    href: site.links.upwork,
    action: "View profile",
    color: accent.violet,
    icon: "briefcase",
  },
  {
    type: "github" as const,
    label: "GitHub",
    value: "@anasayyaz",
    href: site.links.github,
    action: "Browse repos",
    color: accent.amber,
    icon: "github",
  },
];

export const contactSteps = [
  {
    numeral: "I",
    chapter: "Reply",
    color: accent.blue,
    title: "I read it myself.",
    description:
      "You get a direct reply within one business day — no SDR handoff. I ask the minimum questions needed to understand scope and constraints.",
  },
  {
    numeral: "II",
    chapter: "Discovery",
    color: accent.cyan,
    title: "30 minutes, engineering-first.",
    description:
      "We walk through goals, existing stack, timelines, and risks. You leave with clarity on approach whether we work together or not.",
  },
  {
    numeral: "III",
    chapter: "Proposal",
    color: accent.violet,
    title: "Scope, milestones, and timeline.",
    description:
      "Written plan with deliverables, technical choices, and investment — usually within five business days after discovery.",
  },
];

export const problemPanels = [
  {
    label: "The gap",
    labelColor: "text-accent-blue",
    text: "Most teams stall between a polished demo and software that survives real users.",
  },
  {
    label: "The cost",
    labelColor: "text-rose-400",
    text: "Rewrites, fragile APIs, missing observability, and mobile/web drift burn months of runway.",
  },
  {
    label: "The fix",
    labelColor: "text-accent-mint",
    text: "One senior engineer who owns architecture, implementation, and release — React, React Native, Node, and the data layer in production.",
  },
];

export const services = [
  {
    id: "01",
    label: "Web",
    color: accent.blue,
    title: "Full-Stack Web Applications",
    description:
      "Production React and Next.js apps with typed APIs, auth, RBAC, and maintainable component architecture.",
    features: [
      "Next.js / React with TypeScript",
      "Node.js & Express services",
      "PostgreSQL & MongoDB modeling",
      "CI-friendly structure & code review",
      "Performance and accessibility budgets",
      "Handoff docs for your team",
    ],
  },
  {
    id: "02",
    label: "Mobile",
    color: accent.cyan,
    title: "React Native & iOS Delivery",
    description:
      "Cross-platform mobile with shared business logic, native-feel UX, and App Store release discipline.",
    features: [
      "React Native product builds",
      "Native iOS when the product needs it",
      "Shared API contracts with web",
      "Offline-aware flows where required",
      "Store submission support",
      "Crash and analytics wiring",
    ],
  },
  {
    id: "03",
    label: "Backend",
    color: accent.violet,
    title: "APIs, Data & Integrations",
    description:
      "REST APIs, webhooks, third-party integrations, and data layers that stay understandable after launch.",
    features: [
      "Auth, JWT, and session flows",
      "PostgreSQL / MongoDB migrations",
      "Webhooks & payment integrations",
      "Background jobs & queues",
      "Rate limits & validation",
      "Staging and production parity",
    ],
  },
  {
    id: "04",
    label: "Lead",
    color: accent.amber,
    title: "Technical Leadership & Freelance",
    description:
      "Fractional senior capacity for teams that need an owner — audits, rescues, and greenfield builds.",
    features: [
      "Architecture reviews",
      "Sprint planning with engineers",
      "Legacy modernization",
      "Vendor and scope negotiation",
      "Production incident support",
      "Long-term maintainability focus",
    ],
  },
];

function hostFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export type Project = {
  slug: string;
  name: string;
  url: string;
  href: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "cloud-clinic-portal",
    name: "Cloud Clinic Portal",
    href: "https://portal.cloudclinic.ai/",
    url: hostFromUrl("https://portal.cloudclinic.ai/"),
    category: "Healthcare · Telehealth",
    description:
      "Provider portal for US telehealth — scheduling, virtual care, and clinic operations.",
    image: "/screenshots/cloud-clinic-portal.png",
    featured: true,
    stats: [
      { label: "Surfaces", value: "Web + iOS" },
      { label: "Stack", value: "Next · Node" },
    ],
  },
  {
    slug: "tritmint",
    name: "Tritmint",
    href: "https://tritmint.com/",
    url: hostFromUrl("https://tritmint.com/"),
    category: "Healthcare · SaaS",
    description: "Practice platform for appointments and patient engagement.",
    image: "/screenshots/tritmint.png",
    featured: true,
    stats: [
      { label: "Platform", value: "Web" },
      { label: "Focus", value: "Clinical ops" },
    ],
  },
  {
    slug: "client-crm",
    name: "Client CRM",
    href: "https://client-crm-5z00.onrender.com/",
    url: hostFromUrl("https://client-crm-5z00.onrender.com/"),
    category: "Business · SaaS",
    description: "Custom CRM for pipelines, teams, and client relationship tracking.",
    image: "/screenshots/client-crm.png",
    featured: true,
    stats: [
      { label: "Data", value: "PostgreSQL" },
      { label: "Stack", value: "React · Node" },
    ],
  },
  {
    slug: "cymbiose-ai",
    name: "Cymbiose AI",
    href: "https://cymbiose.ai/",
    url: hostFromUrl("https://cymbiose.ai/"),
    category: "AI · SaaS",
    description: "AI-powered workflow automation and business assistant experiences.",
    image: "/screenshots/cymbiose-ai.png",
    featured: true,
    stats: [
      { label: "Focus", value: "LLM workflows" },
      { label: "Stack", value: "Next.js" },
    ],
  },
  {
    slug: "muslim-ticket",
    name: "The Muslim Ticket",
    href: "https://muslim-ticket-frontent.vercel.app/",
    url: "themuslimticket.com",
    category: "Community · Events",
    description: "Event ticketing and community platform for Muslim audiences.",
    image: "/screenshots/muslim-ticket.png",
    featured: true,
    stats: [
      { label: "Product", value: "Ticketing" },
      { label: "Stack", value: "Next · Vercel" },
    ],
  },
  {
    slug: "class-gecko",
    name: "Class Gecko",
    href: "https://classgecko.com/",
    url: hostFromUrl("https://classgecko.com/"),
    category: "Education · EdTech",
    description: "Classroom and school operations — web and iOS surfaces.",
    image: "/screenshots/class-gecko.png",
    featured: true,
    stats: [
      { label: "Surfaces", value: "Web + iOS" },
      { label: "Users", value: "Schools" },
    ],
  },
  {
    slug: "pure-property-portugal",
    name: "Pure Property Portugal",
    href: "https://www.purepropertyportugal.com/",
    url: hostFromUrl("https://www.purepropertyportugal.com/"),
    category: "Real Estate",
    description: "Property listings portal for the Portuguese market.",
    image: "/screenshots/pure-property-portugal.png",
    featured: true,
    stats: [
      { label: "Market", value: "Portugal" },
      { label: "Stack", value: "Next · CMS" },
    ],
  },
  {
    slug: "amara-social-ios",
    name: "Amara Social",
    href: "https://apps.apple.com/us/app/amara-social/id6479706194",
    url: "App Store",
    category: "Social · iOS",
    description: "Social networking iOS app — native Swift delivery on the App Store.",
    image: "/screenshots/amara-social-ios.png",
    featured: true,
    stats: [
      { label: "Platform", value: "iOS" },
      { label: "Store", value: "Live" },
    ],
  },
  {
    slug: "cloud-clinic-ios",
    name: "Cloud Clinic iOS",
    href: "https://apps.apple.com/pk/app/cloud-clinic/id1659982710",
    url: "App Store",
    category: "Healthcare · iOS",
    description: "Patient-facing native app for the Cloud Clinic telehealth platform.",
    image: "/screenshots/cloud-clinic-ios.png",
    stats: [
      { label: "Partner", value: "US telehealth" },
      { label: "Platform", value: "Swift" },
    ],
  },
  {
    slug: "lawyers-desk-ios",
    name: "Lawyers Desk",
    href: "https://apps.apple.com/app/lawyers-desk/id6752269342",
    url: "App Store",
    category: "Legal · iOS",
    description: "Practice management for law firms on iOS.",
    image: "/screenshots/lawyers-desk-ios.png",
    stats: [
      { label: "Vertical", value: "Legal" },
      { label: "Platform", value: "iOS" },
    ],
  },
  {
    slug: "v-med-teaching",
    name: "V-Med Teaching",
    href: "https://v-med-teaching-client.onrender.com/",
    url: hostFromUrl("https://v-med-teaching-client.onrender.com/"),
    category: "Medical Education",
    description: "Medical teaching and training web client with backend integration.",
    image: "/screenshots/v-med-teaching.png",
    stats: [
      { label: "Domain", value: "Med ed" },
      { label: "Stack", value: "React" },
    ],
  },
  {
    slug: "ee-telehealth",
    name: "EE Telehealth Connect",
    href: "https://ee-telehealth-connect.onrender.com/",
    url: hostFromUrl("https://ee-telehealth-connect.onrender.com/"),
    category: "Healthcare · Telehealth",
    description: "Telehealth connection platform for remote consultations.",
    image: "/screenshots/ee-telehealth.png",
    stats: [
      { label: "Product", value: "Telehealth" },
      { label: "Stack", value: "React" },
    ],
  },
];

export const homeProjects = projects.filter((p) => p.featured);

const manuscriptStories: Record<
  string,
  { before: string; after: string; caption: string }
> = {
  "cloud-clinic-portal": {
    before:
      "A US telehealth partner needed a provider portal that could handle scheduling, virtual visits, and day-to-day clinic operations without brittle one-off scripts.",
    after:
      "Next.js portal with cohesive auth, operational workflows, and a path to native iOS — engineered for production telehealth, not a demo.",
    caption: "Web portal + iOS patient app in market",
  },
  tritmint: {
    before:
      "A growing practice needed one system for appointments and patient engagement instead of spreadsheets and disconnected tools.",
    after:
      "Full-stack healthcare platform with clear data modeling and UX that staff could run without constant engineering support.",
    caption: "Healthcare SaaS · React · Node",
  },
  "client-crm": {
    before:
      "Sales and account teams were tracking pipelines in spreadsheets with no single source of truth.",
    after:
      "Custom CRM with PostgreSQL-backed pipelines, team views, and APIs ready for future integrations.",
    caption: "PostgreSQL · React · Node",
  },
  "cymbiose-ai": {
    before:
      "The product needed AI-assisted workflows without turning every screen into an unpredictable chat box.",
    after:
      "Structured LLM features wired into real business flows with guardrails, fallbacks, and maintainable Next.js architecture.",
    caption: "AI automation with production discipline",
  },
  "muslim-ticket": {
    before:
      "Community events needed trustworthy ticketing with a modern web experience and room to grow.",
    after:
      "Event platform on Next.js with conversion-focused flows and deployment on Vercel.",
    caption: "Community ticketing · Next.js",
  },
  "class-gecko": {
    before:
      "Schools needed classroom operations on web and mobile without duplicating business logic twice.",
    after:
      "EdTech platform spanning web and iOS with shared product vision and store-ready mobile delivery.",
    caption: "Web + iOS · education operations",
  },
  "pure-property-portugal": {
    before:
      "A regional agency needed discoverable listings and a CMS-friendly site that marketing could update.",
    after:
      "Next.js property portal tuned for search, listings, and content updates without developer bottlenecks.",
    caption: "Real estate · Next.js · CMS",
  },
  "amara-social-ios": {
    before:
      "A social product needed native iOS quality — performance, navigation, and App Store readiness.",
    after:
      "Swift iOS app shipped to the App Store with the polish users expect from a social network.",
    caption: "Native iOS · App Store live",
  },
};

export const manuscriptChapters = projects.map((project, index) => {
  const story = manuscriptStories[project.slug] ?? {
    before: project.description,
    after:
      "Architecture, implementation, and release owned end to end with measurable production outcomes.",
    caption: project.stats.map((s) => s.value).join(" · "),
  };

  return {
    ...project,
    chapter: String(index + 1).padStart(2, "0"),
    storyBefore: story.before,
    storyAfter: story.after,
    mockupCaption: story.caption,
  };
});

export const processSteps = [
  {
    num: "01",
    week: "Week 1",
    color: accent.blue,
    title: "Discovery",
    subtitle: "Map reality, not slides.",
    description:
      "Stakeholders, constraints, existing stack, and definition of done. We agree on scope before code.",
    items: [
      "Goals and success metrics",
      "Stack and integration audit",
      "Risk and dependency map",
      "Milestone outline",
    ],
  },
  {
    num: "02",
    week: "Week 2",
    color: accent.cyan,
    title: "Architecture",
    subtitle: "Decisions on paper.",
    description:
      "Data models, API contracts, and UI structure signed off before implementation accelerates.",
    items: [
      "System diagram",
      "Schema and API sketch",
      "Component boundaries",
      "Timeline lock",
    ],
  },
  {
    num: "03",
    week: "Weeks 3–8",
    color: accent.violet,
    title: "Build",
    subtitle: "Ship in vertical slices.",
    description:
      "Weekly demos, typed code, tests where they matter, and performance kept honest from day one.",
    items: [
      "Feature slices to staging",
      "Code review ready PRs",
      "Integration testing",
      "Launch checklist",
    ],
  },
  {
    num: "04",
    week: "After launch",
    color: accent.amber,
    title: "Handoff",
    subtitle: "Software your team can run.",
    description:
      "Documentation, knowledge transfer, and optional ongoing support — no black-box delivery.",
    items: [
      "Runbooks and env docs",
      "Team walkthrough",
      "Bug bash window",
      "Retainer if needed",
    ],
  },
];

export const stats = [
  {
    label: "Years Shipping",
    value: 10,
    suffix: "+",
    sub: "Web & mobile in production",
    color: accent.blue,
    sparkline: [24, 21, 18, 15, 12, 6, 0],
  },
  {
    label: "Production Surfaces",
    value: 50,
    suffix: "+",
    sub: "Web, API, and mobile apps",
    color: accent.cyan,
    sparkline: [24, 22, 19, 14.67, 9.33, 0, 0],
  },
  {
    label: "Stack Breadth",
    value: 4,
    suffix: "",
    text: "PERN/MERN",
    sub: "React · RN · Node · SQL/NoSQL",
    color: accent.violet,
    sparkline: [24, 20, 16, 12, 8, 4, 0],
  },
  {
    label: "Freelance",
    value: 0,
    suffix: "",
    text: "Top Rated",
    sub: "Remote & contract friendly",
    color: accent.amber,
  },
];

export const testimonials = [
  {
    quote:
      "Anas took a half-finished React codebase and got us to production without a rewrite. Clear communication every sprint.",
    initials: "AK",
    name: "Product lead",
    role: "Healthcare SaaS",
    company: "US-based team",
    color: accent.blue,
  },
  {
    quote:
      "Strong on both API design and UI detail — rare combo. Our mobile and web clients finally share one coherent backend.",
    initials: "SR",
    name: "Engineering manager",
    role: "Telehealth",
    company: "Remote team",
    color: accent.cyan,
  },
  {
    quote:
      "He owns the full path: requirements, implementation, and release. We stopped firefighting after launch.",
    initials: "JM",
    name: "Founder",
    role: "EdTech",
    company: "Contract engagement",
    color: accent.violet,
  },
  {
    quote:
      "Pragmatic architecture, no over-engineering. Delivered on timeline with docs our junior devs could follow.",
    initials: "LP",
    name: "CTO",
    role: "Marketplace",
    company: "Freelance project",
    color: accent.amber,
  },
];
