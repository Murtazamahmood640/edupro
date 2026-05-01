"use client";

import React from "react";
import { ShieldCheck, Target, GraduationCap, TrendingUp, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Structured Learning",
    description: "Our curriculum is designed to take you from beginner to advanced smoothly.",
    color: "text-edu-indigo",
    bg: "bg-edu-indigo/5",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Certificates",
    description: "Earn recognized certificates that boost your career and resume.",
    color: "text-edu-amber",
    bg: "bg-edu-amber/5",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Progress Tracking",
    description: "Visualize your growth with our advanced learning analytics dashboard.",
    color: "text-edu-emerald",
    bg: "bg-edu-emerald/5",
  },
];

const WhyChoose = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-edu-amber/10 text-edu-amber rounded-full mb-6">
            <Zap className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold tracking-wider uppercase">WHY CHOOSE US</span>
          </div>
          <h2 className="heading-h2 mb-6">Why Choose <span className="text-edu-indigo">EduPro?</span></h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            We provide a unique learning experience that combines theoretical knowledge with practical hands-on projects, ensuring you are job-ready from day one.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className={`${feature.bg} ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="heading-h3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-edu-indigo/5 rounded-3xl -rotate-3 scale-105 -z-10" />
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-slate-900">Your Learning Progress</h4>
                <span className="text-edu-indigo font-bold">72% Completed</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-edu-indigo rounded-full"
                />
              </div>

              <div className="space-y-4">
                {[
                  { label: "Video Lessons", value: "12/16", color: "bg-blue-500" },
                  { label: "Quizzes & Tests", value: "8/10", color: "bg-edu-amber" },
                  { label: "Projects Completed", value: "3/4", color: "bg-edu-emerald" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="font-medium text-slate-700">{item.label}</span>
                    </div>
                    <span className="font-bold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-edu-indigo rounded-xl flex items-center justify-center">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Certificate Ready!</p>
                    <p className="text-xs text-slate-500">Download your certificate now.</p>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-edu-indigo text-white text-sm font-bold rounded-lg hover:bg-edu-indigo/90 transition-all">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
