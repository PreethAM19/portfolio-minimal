export type NavItem = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type StackItem = {
  label: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  summary: string;
  impact?: string;
};

export type ProjectLink = {
  label: string;
  href?: string | null;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  accent: "cool" | "warm";
};

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
  detail: string;
};

export type CertificationItem = {
  provider: string;
  title: string;
  meta: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href?: string | null;
};

export const portfolioData = {
  person: {
    name: "Preetham Raj Ramraj",
    title: "Full Stack Developer",
    intro:
      "I build scalable web platforms, cloud-backed systems, and practical AI-powered products.",
  },
  navigation: [
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    lines: ["Preetham Raj", "Ramraj"],
    eyebrow: "Premium developer portfolio",
    focus: [
      "Scalable platforms",
      "Cloud-backed systems",
      "Practical AI products",
    ],
    description:
      "Minimal, project-led engineering across frontend, backend, cloud, and applied AI.",
    primaryAction: {
      label: "View projects",
      href: "#projects",
    },
    secondaryAction: {
      label: "Get in touch",
      href: "#contact",
    },
    stats: [
      { label: "Featured projects", value: "02" },
      { label: "Recent experience entries", value: "04" },
      { label: "Core tools highlighted", value: "11" },
    ] satisfies HeroStat[],
  },
  stack: {
    eyebrow: "Stack / Expertise",
    title: "A focused toolkit across product engineering, cloud delivery, and applied AI.",
    description:
      "A minimal set of technologies that covers frontend builds, backend systems, deployment, and emerging AI workflows.",
    items: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "React" },
      { label: "JavaScript" },
      { label: "PHP" },
      { label: "SQL" },
      { label: "Git" },
      { label: "Docker" },
      { label: "AWS" },
      { label: "AI / ML fundamentals" },
      { label: "Agentic AI" },
    ] satisfies StackItem[],
  },
  experience: {
    eyebrow: "Work Experience",
    title: "Recent roles shaped around internal products, platform systems, and applied AI.",
    description:
      "Structured so titles, organizations, dates, and summaries can be updated quickly later.",
    items: [
      {
        period: "Recent",
        role: "Full Stack Developer",
        organization: "IIIT Hyderabad",
        summary:
          "Built visitor and internal platform workflows with QR entry, SSO, alerts, reporting, and operational automation.",
        impact: "Visitor systems",
      },
      {
        period: "Recent",
        role: "Platform Engineer",
        organization: "ERP modernization work",
        summary:
          "Improved attendance, leave, billing, and performance across database-backed ERP modules and deployment workflows.",
        impact: "ERP systems",
      },
      {
        period: "Recent",
        role: "AI Product Developer",
        organization: "Sniffi",
        summary:
          "Shipped a secure LLM-powered assistant for navigation, booking, and tele-consults inside a product experience.",
        impact: "Applied AI",
      },
      {
        period: "Add date range",
        role: "Role title to update",
        organization: "Organization to update",
        summary:
          "Add a concise one-line summary here for the fourth recent experience entry.",
        impact: "Placeholder",
      },
    ] satisfies ExperienceItem[],
  },
  projects: {
    eyebrow: "Selected Projects",
    title: "Two recent builds with product depth, systems thinking, and production focus.",
    description:
      "Compact project cards with room for GitHub, live links, or a case study whenever those are available.",
    items: [
      {
        title: "Visitor Management Platform",
        description:
          "A campus-ready visitor flow with QR entry, webcam capture, planned visits, alerts, reports, and LDAP-backed access control.",
        stack: ["Next.js", "React", "FastAPI", "Firebase", "Firestore", "LDAP"],
        links: [
          { label: "GitHub", href: null },
          { label: "Live", href: null },
          { label: "Case Study", href: null },
        ],
        accent: "cool",
      },
      {
        title: "AI Chatbot for Sniffi",
        description:
          "An authenticated AI assistant for navigation, booking, and tele-consults, integrated into a Flutter app with cloud-backed services.",
        stack: ["Python", "Mistral LLM", "AWS ECS", "Lambda", "JWT"],
        links: [
          { label: "GitHub", href: null },
          { label: "Live", href: null },
          { label: "Case Study", href: null },
        ],
        accent: "warm",
      },
    ] satisfies Project[],
  },
  education: {
    eyebrow: "Education",
    title: "An evolving path across software engineering, AI, and deployment practice.",
    items: [
      {
        period: "Academic",
        title: "Degree details to update",
        institution: "University of Wisconsin-Madison",
        detail: "University of Wisconsin-Madison degree entry ready for the exact program title.",
      },
      {
        period: "Current",
        title: "PG Program in AI/ML and Agentic AI",
        institution: "IIIT Hyderabad",
        detail: "Current postgraduate program focused on AI, ML systems, and agentic workflows.",
      },
      {
        period: "Continuing",
        title: "MLOps Specialization",
        institution: "Specialization track",
        detail: "Production-minded learning around deployment, lifecycle management, and model operations.",
      },
    ] satisfies EducationItem[],
  },
  certifications: {
    eyebrow: "Certifications",
    title: "A small, editable layer for credentials and ongoing learning.",
    items: [
      {
        provider: "AWS",
        title: "Certification title to update",
        meta: "Cloud systems",
      },
      {
        provider: "Google",
        title: "Certification title to update",
        meta: "AI / ML",
      },
      {
        provider: "Udemy",
        title: "Course title to update",
        meta: "Hands-on depth",
      },
    ] satisfies CertificationItem[],
  },
  contact: {
    eyebrow: "Contact",
    title: "Built for product teams, internal platforms, and practical AI work.",
    description:
      "Reach out for product engineering, platform systems, cloud-backed delivery, or AI-assisted features.",
    links: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/preetham-raj-ramraj-407408171",
        href: "https://linkedin.com/in/preetham-raj-ramraj-407408171",
      },
      {
        label: "GitHub",
        value: "Add GitHub profile link",
        href: null,
      },
      {
        label: "Email",
        value: "preetham19.raj@gmail.com",
        href: "mailto:preetham19.raj@gmail.com",
      },
    ] satisfies ContactLink[],
  },
} as const;

export type PortfolioData = typeof portfolioData;
export type PersonInfo = PortfolioData["person"];
export type HeroContent = PortfolioData["hero"];
export type StackContent = PortfolioData["stack"];
export type ExperienceContent = PortfolioData["experience"];
export type ProjectsContent = PortfolioData["projects"];
export type EducationContent = PortfolioData["education"];
export type CertificationsContent = PortfolioData["certifications"];
export type ContactContent = PortfolioData["contact"];
