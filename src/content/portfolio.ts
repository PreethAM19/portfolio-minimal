export type NavItem = {
  label: string;
  href: string;
};

export type StackItem = {
  label: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
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
  visual: "visitor" | "sniffi" | "voice";
};

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
  detail?: string;
};

export type CertificationItem = {
  provider: string;
  title: string;
  meta?: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href?: string | null;
};

export const portfolioData = {
  person: {
    name: "Preetham Raj Ramraj",
    title: "Full-Stack Engineer | AI Product, LLM & Agentic Workflows",
    intro:
      "Full-Stack Engineer with 5+ years of experience building production web platforms, cloud-native systems, and AI-powered product features using Next.js, TypeScript, Python, FastAPI, AWS, and Docker. Experienced in LLM integration, LangGraph-based agentic workflows, document parsing, structured extraction, and scalable full-stack delivery across startup and enterprise environments.",
  },
  navigation: [
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    lines: ["Preetham Raj", "Ramraj"],
    focus: [
      "Agentic AI Products and workflows",
      "MLOps",
      "Full Stack applications",
    ],
    primaryAction: {
      label: "View projects",
      href: "#projects",
    },
    secondaryAction: {
      label: "Resume",
      href: "/resume_PR26.pdf",
    },
    photo: {
      src: "/preetham-portrait.png",
      alt: "Preetham Raj Ramraj portrait",
    },
  },
  stack: {
    eyebrow: "Stack / Expertise",
    title: "A focused toolkit across product engineering, cloud delivery, and applied AI.",
    description:
      "A compact stack spanning product UI, backend systems, cloud-native delivery, LLM integration, and production AI workflows.",
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
      { label: "Agentic AI" },
      { label: "LangChain/LangGraph" },
      { label: "LLM Integrations" },
      { label: "SciKit-Learn" },
      { label: "PyTorch" },
    ] satisfies StackItem[],
  },
  experience: {
    eyebrow: "Work Experience",
    title: "Experience across AI product, enterprise SaaS, startup delivery, and cloud-native engineering.",
    description:
      "Resume-aligned roles spanning AI products, internal platforms, cloud automation, and frontend delivery.",
    items: [
      {
        period: "Nov 2025 - Present",
        role: "AI Lead / Full-Stack Engineer",
        organization: "UPSY",
        location: "Remote",
        highlights: [
          "Defined and shipped four core AI features from zero: course recommender, readiness and experience-fit scoring, resume-brochure parsing, and bridge-learning paths using LangGraph-based agentic workflows and structured LLM extraction.",
          "Designed OCR and document parsing pipelines with PaddleOCR-VL plus LLM-assisted extraction to normalize resumes and brochures into structured skill signals with validation and confidence scoring.",
          "Led full-stack delivery across Next.js and TypeScript frontend, Python and FastAPI AI services, and Prisma-backed models while running Agile sprint cycles with product stakeholders.",
        ],
      },
      {
        period: "Oct 2023 - Present",
        role: "Senior Software Engineer",
        organization: "IIIT Hyderabad",
        location: "Hyderabad, India",
        highlights: [
          "Built an in-house Visitor Management Platform with Next.js, React, FastAPI, Firebase / Firestore, and LDAP SSO, replacing a commercial tool and reducing gate processing delays by 40%.",
          "Replaced a slow monolithic ERP with FastAPI and Docker microservices on AWS ECS, cutting page-load time by 2x and reducing release bottlenecks across attendance, leave, and billing modules.",
          "Engineered QR-based asset tracking, billing, event, and payment workflows across AWS Lambda, API Gateway, DynamoDB, SES, Razorpay, and GitLab CI/CD, improving billing turnaround and audit efficiency.",
        ],
      },
      {
        period: "Jan 2025 - Present",
        role: "Full-Stack Lead / AI Consultant",
        organization: "Sniffi",
        location: "Remote",
        highlights: [
          "Led architecture and delivery of an AI-powered chatbot with prompt flows, intent routing, and fallback logic using a Python and Mistral LLM backend on AWS ECS and Lambda with JWT-authenticated APIs.",
          "Integrated the chatbot into a Flutter app for navigation, booking, and tele-consults, coordinating backend architecture, LLM design, and client delivery end to end in three months.",
        ],
      },
      {
        period: "Jun 2021 - Jul 2023",
        role: "RF Engineer II - Automation & Cloud Integration",
        organization: "Samsung Electronics America",
        location: "Plano, TX",
        highlights: [
          "Pivoted from RF operations into Python and cloud automation, cutting manual processing time by 90% through Python, shell, and VBA automation.",
          "Developed cloud-integrated verification workflows across FTP and AWS S3, shortening migration validation cycles by about 50% while improving data integrity checks.",
          "Resolved recurring LTE and 5G configuration failures across TX and OK markets, improving deployment stability by 15%.",
        ],
      },
      {
        period: "Aug 2020 - Jun 2021",
        role: "Application Developer",
        organization: "Innovative Consulting Solutions, LLC",
        location: "Chicago, IL",
        highlights: [
          "Built React and Node.js dashboards with Firebase-backed web features, improving page-load performance by two seconds across key workflows.",
          "Implemented secure Auth0-based authentication and reusable tested frontend components with Jest and Cypress, reducing deployment defects by 30%.",
        ],
      },
      {
        period: "May 2020 - Aug 2020",
        role: "Junior Web Developer (Contract)",
        organization: "Commonwealth Bank",
        location: "New York, NY",
        highlights: [
          "Built and optimized React-based banking UI features and prototypes using JavaScript, HTML/CSS, and Bootstrap for youth-focused digital banking experiences.",
        ],
      },
    ] satisfies ExperienceItem[],
  },
  projects: {
    eyebrow: "Selected Projects",
    title: "Selected builds spanning operations, AI assistants, and voice-first experimentation.",
    description:
      "Current highlight work from the latest resume, with room to attach GitHub, live links, or deeper case studies later.",
    items: [
      {
        title: "Visitor Management Platform",
        description:
          "Built an in-house visitor platform with Next.js, FastAPI, Firebase / Firestore, and LDAP SSO, replacing a commercial system and reducing gate delays by 40%.",
        stack: ["Next.js", "React", "FastAPI", "Firebase", "Firestore", "LDAP"],
        links: [
          { label: "GitHub", href: null },
          { label: "Live", href: null },
          { label: "Case Study", href: null },
        ],
        accent: "cool",
        visual: "visitor",
      },
      {
        title: "AI Chatbot for Sniffi",
        description:
          "Built an authenticated AI assistant for navigation, booking, and tele-consults, integrated into a Flutter app with AWS-backed services.",
        stack: ["Python", "Mistral LLM", "AWS ECS", "Lambda", "JWT"],
        links: [
          { label: "GitHub", href: null },
          { label: "Live", href: null },
          { label: "Case Study", href: null },
        ],
        accent: "warm",
        visual: "sniffi",
      },
      {
        title: "Voice AI Prototypes",
        description:
          "Built voice-driven prototypes including an Alexa assistant and selector interface for guided, retrieval-backed interactions with LLM-powered flows.",
        stack: ["Alexa", "Python", "LLMs", "Prompt Flows", "Voice Interfaces"],
        links: [
          { label: "GitHub", href: null },
          { label: "Live", href: null },
          { label: "Case Study", href: null },
        ],
        accent: "cool",
        visual: "voice",
      },
    ] satisfies Project[],
  },
  education: {
    eyebrow: "Education",
    title: "Formal training across computer science, applied AI, and production MLOps.",
    items: [
      {
        period: "Ongoing",
        title: "PG Program - AI/ML, Agentic AI & MLOps",
        institution: "IIIT Hyderabad",
        detail: "",
      },
      {
        period: "Completed",
        title: "B.S. Computer Science, Minor in Entrepreneurship",
        institution: "University of Wisconsin-Madison",
        detail: "",
      },
      {
        period: "Completed",
        title: "B.Tech Computer Science",
        institution: "Manipal Academy of Higher Education",
        detail: "",
      },
    ] satisfies EducationItem[],
  },
  certifications: {
    eyebrow: "Certifications",
    title: "Current certifications aligned with cloud, AI, and delivery practice.",
    items: [
      {
        provider: "AWS",
        title: "AWS Certified Cloud Practitioner",
        meta: "",
      },
      {
        provider: "Google",
        title: "Google AI Essentials",
        meta: "",
      },
      {
        provider: "Agile",
        title: "Agile Project Management & Delivery (Certified)",
        meta: "",
      },
    ] satisfies CertificationItem[],
  },
  contact: {
    eyebrow: "Contact",
    title: "Open to AI product, platform engineering, and full-stack delivery work.",
    description:
      "Reach out for AI product builds, platform systems, cloud-native engineering, or full-stack product work.",
    links: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/preetham-raj-ramraj-407408171",
        href: "https://linkedin.com/in/preetham-raj-ramraj-407408171",
      },
      {
        label: "GitHub",
        value: "github.com/PreethAM19",
        href: "https://github.com/PreethAM19",
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
