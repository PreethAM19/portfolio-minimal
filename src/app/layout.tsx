import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { MotionProvider } from "@/components/ui/motion";

import "./globals.css";

export const metadata: Metadata = {
  title: "Preetham Raj Ramraj | Full Stack Developer",
  description:
    "A premium one-page portfolio for Preetham Raj Ramraj, focused on scalable platforms, cloud-backed systems, and practical AI-powered products.",
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
