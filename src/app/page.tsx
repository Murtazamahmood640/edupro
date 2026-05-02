"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyChoose from "@/components/home/WhyChoose";
import TrainersSection from "@/components/home/TrainersSection";
import Testimonials from "@/components/home/Testimonials";
import Levels from "@/components/home/Levels";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Active Students",   value: "50,000+" },
  { label: "Premium Courses",   value: "1,200+"  },
  { label: "Success Rating",    value: "4.9 / 5" },
  { label: "Elite Instructors", value: "150+"     },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />

      {/* ── Stats Bar ───────────────────────────────────── */}
      <section className="bg-primary border-y border-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <p className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-[11px] text-white/60 font-semibold uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedCourses />
      <WhyChoose />
      <Levels />
      <TrainersSection />
      <Testimonials />

      {/* ── CTA Banner ──────────────────────────────────── */}
      <section className="section-container pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-3xl px-8 py-16 md:px-20 md:py-24 text-center overflow-hidden"
        >
          {/* Subtle diagonal tint */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 32px)",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-5 py-1.5 bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-8">
              Limited Enrollment — Act Now
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Ready to Master Your <br />
              <span className="text-white/80">Academic Destiny?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Join 50,000+ elite students on EduPro Academy and gain exclusive
              access to top examiners and subject specialists — anywhere in the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/auth/signup"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary rounded-xl font-bold text-sm hover:bg-primary-50 transition-all active:scale-95 shadow-xl shadow-black/20"
              >
                Join Now — It&apos;s Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 border-2 border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-all active:scale-95"
              >
                Browse Courses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
