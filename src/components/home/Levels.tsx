"use client";

import React from "react";
import { Compass, GraduationCap, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const levels = [
  {
    icon: <Compass className="w-7 h-7 text-primary" />,
    title: "O Levels",
    subtitle: "Core Foundation",
    description:
      "Master the fundamentals of academic subjects with certified specialists, past-paper walkthroughs, and structured revision.",
    courses: 25,
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-white" />,
    title: "A Levels",
    subtitle: "Advanced Mastery",
    description:
      "Deep-dive into specialised streams with direct examiner insights, essay coaching, and A* strategies.",
    courses: 38,
    highlighted: true,
  },
  {
    icon: <Trophy className="w-7 h-7 text-primary" />,
    title: "University Prep",
    subtitle: "Elite Placement",
    description:
      "Personalised coaching for top-tier global university admissions, SAT/IELTS prep, and personal statement support.",
    courses: 15,
  },
];

const Levels = () => {
  return (
    <section className="section-container">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="max-w-2xl">
          <span className="badge-primary mb-4">Structured Excellence</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="heading-h2 mt-4 mb-4"
          >
            Find Your{" "}
            <span className="text-black">Academic Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-edu-slate-500 text-base leading-relaxed"
          >
            Whether you are building foundations or preparing for elite placements,
            we have a meticulously designed path for your success.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-600 transition-all active:scale-95 shadow-md shadow-primary/25"
          >
            Explore All Paths
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`relative rounded-2xl p-8 h-full flex flex-col border transition-all duration-300 hover:-translate-y-1.5 group ${
                level.highlighted
                  ? "bg-primary border-primary shadow-xl shadow-primary/25 text-white"
                  : "bg-white border-edu-slate-100 shadow-sm hover:shadow-lg hover:shadow-primary/8"
              }`}
            >
              {/* Popular badge */}
              {level.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  level.highlighted
                    ? "bg-white/15 border border-white/20"
                    : "bg-primary-50 border border-primary-100"
                }`}
              >
                {level.icon}
              </div>

              {/* Subtitle tag */}
              <span
                className={`text-[10px] font-black uppercase tracking-widest mb-3 ${
                  level.highlighted ? "text-white/60" : "text-primary"
                }`}
              >
                {level.subtitle}
              </span>

              {/* Title */}
              <h3
                className={`text-2xl font-black mb-4 tracking-tight ${
                  level.highlighted ? "text-white" : "text-edu-slate-900"
                }`}
              >
                {level.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed flex-1 mb-8 ${
                  level.highlighted ? "text-white/70" : "text-edu-slate-500"
                }`}
              >
                {level.description}
              </p>

              {/* Footer */}
              <div
                className={`flex items-center justify-between pt-6 border-t ${
                  level.highlighted ? "border-white/15" : "border-edu-slate-100"
                }`}
              >
                <div>
                  <span
                    className={`text-2xl font-black block leading-none ${
                      level.highlighted ? "text-white" : "text-edu-slate-900"
                    }`}
                  >
                    {level.courses}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest mt-1 block ${
                      level.highlighted ? "text-white/50" : "text-edu-slate-400"
                    }`}
                  >
                    Courses
                  </span>
                </div>
                <Link
                  href="/courses"
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all group-hover:scale-105 ${
                    level.highlighted
                      ? "bg-white text-primary"
                      : "bg-primary-50 border border-primary-100 text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Levels;
