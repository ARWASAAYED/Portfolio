import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Arwa Ahmed — Frontend Developer",
  description: "Front-End Engineer specializing in React and Next.js, focused on scalable architecture, performance optimization, and production-ready UIs.",
  keywords: ["React", "Next.js", "Frontend Developer", "TypeScript", "Cairo", "Full-Stack"],
  authors: [{ name: "Arwa Ahmed" }],
  openGraph: {
    title: "Arwa Ahmed — Frontend Developer",
    description: "Building production-ready web applications with scalable architecture and Lighthouse scores above 90.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
