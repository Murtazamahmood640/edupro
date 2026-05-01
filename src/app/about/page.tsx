"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Users, BookOpen, Award, ShieldCheck, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-edu-indigo/5 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-edu-indigo rounded-full mb-6"
          >
            <ShieldCheck className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold tracking-wider uppercase">OUR STORY</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Empowering Learners <span className="text-edu-indigo">Globally</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            EduPro Academy is on a mission to provide high-quality, accessible, and affordable education to everyone, everywhere.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-h2 mb-6">Our Story</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Founded in 2024, EduPro Academy started with a simple idea: that world-class education should be available to anyone with an internet connection. We saw a gap between academic theory and industry reality, and we set out to bridge it.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Today, we are a global community of over 50,000 students and 150+ expert instructors, all working together to build the future of learning.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-edu-indigo">50K+</p>
                <p className="text-sm text-slate-500 font-medium">Active Students</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-edu-indigo">1.2K+</p>
                <p className="text-sm text-slate-500 font-medium">Quality Courses</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=800" alt="Our Story" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-container bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-h2 mb-6">Our Core Values</h2>
          <p className="text-slate-600 text-lg">
            What drives us every day to provide the best learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8 text-blue-600" />,
              title: "Student First",
              desc: "Every decision we make starts with how it benefits our learners.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-edu-emerald" />,
              title: "Quality Content",
              desc: "We work only with the best instructors to ensure top-tier education.",
            },
            {
              icon: <Award className="w-8 h-8 text-edu-amber" />,
              title: "Real Results",
              desc: "We focus on practical skills that actually help you get hired.",
            },
          ].map((value, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="mb-6">{value.icon}</div>
              <h3 className="heading-h3 mb-4">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
