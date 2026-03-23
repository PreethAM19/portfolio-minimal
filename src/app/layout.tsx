import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { MotionProvider } from "@/components/ui/motion";

import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Preetham Raj Ramraj | Full Stack Developer",
  description:
    "Minimal project-first portfolio for Preetham Raj Ramraj, focused on internal platforms, cloud-backed systems, and practical AI-powered products.",
};

export const viewport: Viewport = {
  themeColor: "#08090c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        <MotionProvider>
          <div className="relative isolate min-h-screen">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
