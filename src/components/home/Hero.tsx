"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight, Star, Users, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-slate-100 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-edu-indigo rounded-full mb-6 border border-indigo-100/50"
            >
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold tracking-wider uppercase">BUILD YOUR FUTURE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
            >
              Learn. Grow. <br />
              <span className="text-edu-indigo">Succeed.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Expert courses, practical skills, and real results. Start your learning journey today with the world's best instructors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/courses"
                className="group w-full sm:w-auto flex items-center justify-center space-x-2 bg-edu-indigo text-white px-8 py-4 rounded-xl font-bold hover:bg-edu-indigo/90 transition-all active:scale-95 shadow-xl shadow-edu-indigo/25"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95">
                <div className="bg-edu-indigo/10 p-1 rounded-full">
                  <Play className="w-4 h-4 text-edu-indigo fill-current" />
                </div>
                <span>How It Works</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center space-x-2 text-slate-500">
                <Users className="w-5 h-5 text-edu-indigo" />
                <span className="font-semibold text-slate-900">50k+</span>
                <span className="text-sm">Happy Students</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <BookOpen className="w-5 h-5 text-edu-indigo" />
                <span className="font-semibold text-slate-900">1.2k+</span>
                <span className="text-sm">Premium Courses</span>
              </div>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group z-10">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="EduPro Learning"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-edu-emerald/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-edu-emerald fill-current" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Rating</p>
                    <p className="font-bold text-slate-900">4.9/5.0</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-edu-indigo/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-edu-indigo" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Join over</p>
                    <p className="font-bold text-slate-900">150+ Instructors</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
