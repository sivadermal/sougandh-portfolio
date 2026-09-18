import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "V. Sougandh Rajan | Interior Designer & Architectural Visualizer",
  description:
    "Official portfolio of V. Sougandh Rajan. Interior Designer & 3D Visualizer specializing in modern minimalism, tropical Kerala residences, and luxury bespoke interiors.",
  keywords: [
    "V Sougandh Rajan",
    "Interior Designer Kerala",
    "Kannur Interior Design",
    "3ds Max Interior Visualizer",
    "V-Ray Architectural Rendering",
    "Modern Modular Kitchen",
    "Kerala Courtyard Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8f8f6] dark:bg-[#0a0a0c] text-zinc-900 dark:text-white selection:bg-[#d4af37] selection:text-black transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
