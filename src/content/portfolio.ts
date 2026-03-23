export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  value: string;
  href: string;
};

export type Project = {
  title: string;
  summary: string;
  description: string;
  metric: string;
  stack: string[];
  highlights: string[];
};

export type StackGroup = {
  title: string;
  items: string[];
};

export const portfolioData = {
  person: {
    name: "Preetham Raj Ramraj",
    title: "Full Stack Developer",
    intro:
      "I build scalable internal platforms, cloud-backed systems, and practical AI-powered products.",
    email: "preetham19.raj@gmail.com",
    phone: "+91 9823178542",
    linkedin: "https://linkedin.com/in/preetham-raj-ramraj-407408171",
    linkedinLabel: "linkedin.com/in/preetham-raj-ramraj-407408171",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#selected-work" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    focusAreas: [
      "Internal platforms",
      "Cloud-backed delivery",
      "Applied AI products",
    ],
    primaryAction: {
      label: "View selected work",
      href: "#selected-work",
    },
    secondaryAction: {
      label: "Email",
      href: "mailto:preetham19.raj@gmail.com",
    },
  },
  about: {
    title: "Built for useful products and reliable systems.",
    summary:
      "Full stack developer with experience across React, Next.js, FastAPI, PHP, AWS, databases, automation, and internal platform engineering.",
    detail:
      "Recent work includes ERP modernization, visitor and asset management systems, cloud infrastructure, and AI-assisted product features.",
    pillars: [
      "Frontend to backend ownership",
      "Operational systems with real-world usage",
      "Cloud infrastructure with practical automation",
    ],
  },
  projects: [
    {
      title: "Visitor Management Platform",
      summary: "A campus-ready visitor flow with faster, more reliable entry operations.",
      description:
        "Built at IIIT-Hyderabad using React, Next.js, FastAPI, Firebase/Firestore, and LDAP SSO. Includes QR entry, webcam capture, planned visits, chatbot support, alerts, and reports.",
      metric: "40% fewer gate delays",
      stack: [
        "React",
        "Next.js",
        "FastAPI",
        "Firebase",
        "Firestore",
        "LDAP SSO",
      ],
      highlights: [
        "QR entry",
        "Webcam capture",
        "Planned visits",
        "Alerts",
        "Reports",
        "Chatbot support",
      ],
    },
    {
      title: "ERP Modernization",
      summary: "Backend-heavy workflow improvements across core internal operations.",
      description:
        "Worked on internal ERP systems using FastAPI, Docker, AWS ECS, and database-backed workflows. Improved attendance, leave, billing, and performance across core modules.",
      metric: "Core workflow uplift",
      stack: ["FastAPI", "Docker", "AWS ECS", "PostgreSQL", "MySQL"],
      highlights: [
        "Attendance",
        "Leave management",
        "Billing",
        "Performance tuning",
      ],
    },
    {
      title: "AI Chatbot for Sniffi",
      summary: "In-app conversational support for navigation, booking, and tele-consults.",
      description:
        "Built with Python, Mistral LLM, AWS ECS/Lambda, and JWT auth. Integrated into a Flutter app for navigation, booking, and tele-consults.",
      metric: "Cloud + LLM integration",
      stack: ["Python", "Mistral LLM", "AWS ECS", "AWS Lambda", "JWT"],
      highlights: [
        "Navigation flows",
        "Booking support",
        "Tele-consults",
        "Flutter integration",
      ],
    },
  ] satisfies Project[],
  stackGroups: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      items: ["FastAPI", "PHP", "Laravel", "Node.js", "Python"],
    },
    {
      title: "Cloud",
      items: ["AWS", "Docker", "ECS", "Lambda", "API Gateway", "GitLab CI/CD"],
    },
    {
      title: "Databases",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "MariaDB",
        "Firebase",
        "DynamoDB",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "Postman", "OpenCV", "Jupyter", "Tableau"],
    },
  ] satisfies StackGroup[],
  contact: {
    title: "Let's build something useful.",
    summary:
      "Open to conversations around product engineering, internal platforms, cloud systems, and practical AI features.",
    links: [
      {
        label: "Email",
        value: "preetham19.raj@gmail.com",
        href: "mailto:preetham19.raj@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/preetham-raj-ramraj-407408171",
        href: "https://linkedin.com/in/preetham-raj-ramraj-407408171",
      },
      {
        label: "Phone",
        value: "+91 9823178542",
        href: "tel:+919823178542",
      },
    ] satisfies LinkItem[],
  },
} as const;

export type PortfolioData = typeof portfolioData;
export type PersonInfo = PortfolioData["person"];
export type HeroContent = PortfolioData["hero"];
export type AboutContent = PortfolioData["about"];
export type ContactContent = PortfolioData["contact"];
