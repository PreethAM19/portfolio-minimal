import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { MotionProvider } from "@/components/ui/motion";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "P. | Preetham Raj Ramraj",
    template: "%s | Preetham Raj Ramraj",
  },
  description:
    "Full-Stack Engineer building production web platforms, cloud-native systems, and AI-powered product features across Next.js, TypeScript, Python, FastAPI, AWS, and Docker.",
  applicationName: "P.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Preetham Raj Ramraj | Full-Stack Engineer",
    description:
      "Portfolio for Preetham Raj Ramraj, focused on full-stack engineering, cloud-native systems, LLM integrations, and agentic AI workflows.",
    siteName: "Preetham Raj Ramraj Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Preetham Raj Ramraj portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preetham Raj Ramraj | Full-Stack Engineer",
    description:
      "Portfolio for Preetham Raj Ramraj, focused on full-stack engineering, cloud-native systems, LLM integrations, and agentic AI workflows.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <MotionProvider>
          <div className="relative isolate min-h-screen">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
