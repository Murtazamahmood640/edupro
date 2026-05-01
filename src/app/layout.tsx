import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EduPro Academy | Premium Online Learning Platform",
  description: "Expert courses, practical skills, and real results. Join EduPro Academy to master UI/UX design, web development, data science, and more.",
};

import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-slate-900 selection:bg-edu-indigo/20 selection:text-edu-indigo bg-slate-50/50`}>
        <CustomCursor />
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
