"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Star, Users, Clock, Globe, ShieldCheck, PlayCircle, FileText, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const CourseDetailPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-edu-indigo/5 blur-3xl rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-edu-indigo rounded-md text-xs font-bold uppercase">
                Intermediate
              </div>
              <h1 className="heading-h1 text-slate-900 leading-tight">UI/UX Design Mastery: From Beginner to Pro</h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Learn the fundamental principles of design, wireframing, prototyping, and user research to create stunning digital experiences.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <Star className="text-edu-amber w-5 h-5 fill-current" />
                  <span className="font-bold text-slate-900">4.9</span>
                  <span className="text-slate-500">(1,892 Students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-edu-indigo w-5 h-5" />
                  <span className="text-slate-600">Created by <Link href="/trainers/1" className="font-bold text-edu-indigo hover:underline">Sarah Khan</Link></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-600">English</span>
                </div>
              </div>
            </div>

            {/* Sticky Enrollment Card (Mobile will be different) */}
            <div className="lg:sticky lg:top-32 bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 text-slate-900">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&h=450" alt="Course Preview" className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full shadow-xl">
                    <PlayCircle className="w-8 h-8 text-edu-indigo fill-current" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-display font-bold text-slate-900">PKR 12,999</span>
                <span className="text-slate-400 line-through">PKR 25,000</span>
              </div>

              <button className="w-full btn-primary py-4 text-lg mb-4">Enroll Now</button>
              <button className="w-full bg-slate-50 text-slate-700 font-bold py-4 rounded-xl border border-slate-200 hover:bg-slate-100 transition-all mb-6">
                Add to Cart
              </button>

              <div className="space-y-4">
                <p className="font-bold text-sm">This course includes:</p>
                {[
                  { icon: <PlayCircle className="w-4 h-4" />, text: "12 hours on-demand video" },
                  { icon: <FileText className="w-4 h-4" />, text: "24 downloadable resources" },
                  { icon: <ShieldCheck className="w-4 h-4" />, text: "Full lifetime access" },
                  { icon: <Award className="w-4 h-4" />, text: "Certificate of completion" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-slate-600">
                    <div className="text-edu-indigo">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="heading-h2 mb-6">Course Description</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                This comprehensive course is designed to take you from a complete beginner in design to a professional UI/UX designer. You'll learn the industry-standard tools like Figma and Adobe XD, and more importantly, the thinking behind great design.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {[
                  "Master Figma and Adobe XD",
                  "Understand User Psychology",
                  "Create Responsive Web Designs",
                  "Build Interactive Prototypes",
                  "Conduct User Research & Testing",
                  "Create a Professional Portfolio",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <ShieldCheck className="w-5 h-5 text-edu-emerald mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="heading-h2 mb-6">Why Take This Course?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12">
                The demand for UI/UX designers has never been higher. Every digital product needs an intuitive, beautiful interface to succeed. This course bridges the gap between raw theory and practical application. By the end of this journey, you won't just know how to use design tools—you'll understand the psychology of why certain designs work, how to validate your ideas, and how to create experiences that users love. This is your fast track to a modern tech career without writing a single line of code.
              </p>

              <h2 className="heading-h2 mb-6">Career Outcomes</h2>
              <div className="bg-edu-indigo/5 border border-edu-indigo/10 rounded-3xl p-8 mb-12">
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Upon completing this course and building your portfolio, you will be prepared for roles such as:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["UI Designer", "UX Researcher", "Product Designer", "Interaction Designer", "Web Designer"].map((role, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-edu-indigo font-bold rounded-xl shadow-sm border border-edu-indigo/10">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="heading-h2 mb-6">Course Curriculum</h2>
              <div className="space-y-4 mb-12">
                {[
                  { title: "Introduction to UI/UX", lessons: "4 Lessons", duration: "45m" },
                  { title: "User Research & Analysis", lessons: "6 Lessons", duration: "1h 20m" },
                  { title: "Wireframing & Prototyping", lessons: "8 Lessons", duration: "2h 15m" },
                  { title: "Visual Design Principles", lessons: "10 Lessons", duration: "3h 10m" },
                ].map((module, i) => (
                  <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between p-6 bg-slate-50 cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <h4 className="font-bold text-slate-900">{module.title}</h4>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-slate-500">
                        <span>{module.lessons}</span>
                        <span>{module.duration}</span>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="heading-h2 mb-6">Meet Your Instructor</h2>
              <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800" alt="Sarah Khan" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Sarah Khan</h3>
                  <p className="text-edu-indigo font-bold mb-4">Lead UI/UX Designer at Figma</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Sarah is a design visionary with over 10 years of experience building products used by millions. She believes that good design is invisible and teaches the true art of user-centric creation.
                  </p>
                  <Link href="/trainers/1" className="text-edu-indigo font-bold text-sm hover:underline flex items-center gap-1">
                    View Full Profile <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CourseDetailPage;
