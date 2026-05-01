"use client";

import React from "react";
import { Compass, Rocket, Zap, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const levels = [
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Beginner",
    subtitle: "Start Basics",
    description: "Build a strong foundation with our fundamental courses.",
    courses: 25,
    color: "bg-emerald-500",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Intermediate",
    subtitle: "Go Deeper",
    description: "Expand your skills and work on real-world projects.",
    courses: 38,
    color: "bg-edu-indigo",
    text: "text-edu-indigo",
    bg: "bg-edu-indigo/5",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Advanced",
    subtitle: "Master & Lead",
    description: "Become an expert and lead high-impact technical initiatives.",
    courses: 42,
    color: "bg-edu-amber",
    text: "text-edu-amber",
    bg: "bg-edu-amber/5",
  },
];

const Levels = () => {
  return (
    <section className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="heading-h2 mb-4">Choose Your <span className="text-edu-indigo">Level</span></h2>
          <p className="text-slate-600 text-lg">
            We have learning paths for everyone, whether you are just starting or looking to master advanced concepts.
          </p>
        </div>
        <Link href="/levels" className="text-edu-indigo font-bold hover:underline flex items-center space-x-1">
          <span>View All Levels</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-edu-indigo/10 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
              <div className={`absolute top-0 right-0 w-32 h-32 ${level.bg} rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110`} />
              
              <div className={`${level.bg} ${level.text} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10`}>
                {level.icon}
              </div>

              <div className="mb-4 relative z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${level.bg} ${level.text}`}>
                  {level.subtitle}
                </span>
              </div>

              <h3 className="heading-h2 text-2xl mb-4 group-hover:text-edu-indigo transition-colors">{level.title}</h3>
              <p className="text-slate-500 mb-8 flex-grow">{level.description}</p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                <span className="font-bold text-slate-900">{level.courses} Courses</span>
                <div className={`${level.color} p-3 rounded-xl text-white shadow-lg`}>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Levels;
