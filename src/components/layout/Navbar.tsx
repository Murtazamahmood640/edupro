"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap, Menu, X, ArrowRight,
  Search, Globe, ChevronDown, Book,
  Code, Megaphone, Heart, Database,
  Sparkles, Star, Users, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "O / A Level",
    href: "/courses",
    icon: GraduationCap,
    desc: "Cambridge & Oxford curricula",
    items: ["Mathematics", "Physics", "Chemistry", "Biology", "Accounting"]
  },
  {
    name: "Languages",
    href: "/courses",
    icon: Globe,
    desc: "English, German, French & more",
    items: ["IELTS Prep", "German A1-B2", "English Fluency", "Arabic Mastery"]
  },
  {
    name: "Tech & IT",
    href: "/courses",
    icon: Code,
    desc: "Programming & Networking",
    items: ["Full-stack Web", "Python for AI", "Cloud Computing", "Cyber Security"]
  },
  {
    name: "Marketing",
    href: "/courses",
    icon: Megaphone,
    desc: "Digital growth strategies",
    items: ["SEO Mastery", "Social Media Ads", "Content Strategy", "Email Marketing"]
  },
  {
    name: "Soft Skills",
    href: "/courses",
    icon: Heart,
    desc: "Leadership & Communication",
    items: ["Public Speaking", "Time Management", "EQ Development", "Team Building"]
  },
  {
    name: "Business",
    href: "/courses",
    icon: Database,
    desc: "Finance & Management",
    items: ["Entrepreneurship", "Financial Analysis", "Project Mgmt", "Business Law"]
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? "pt-4 px-4 md:px-8" : "pt-0"}`}>
        <nav
          className={`mx-auto max-w-7xl transition-all duration-700 ${scrolled
              ? "bg-white/90 backdrop-blur-2xl border border-gray-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,35,102,0.1)] px-8 py-3"
              : "bg-transparent py-8 px-4"
            }`}
        >
          <div className="flex justify-between items-center">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <div className="bg-primary p-2.5 rounded-2xl shadow-xl shadow-primary/20 group-hover:rotate-[15deg] transition-transform duration-500">
                <GraduationCap className="text-white w-7 h-7" />
              </div>
              <div className="leading-none">
                <span className="font-black text-2xl text-gray-900 tracking-tighter">
                  Edu<span className="text-primary">Pro</span>
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Academy</span>
                </div>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/" className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-all rounded-xl hover:bg-primary-50">Home</Link>


              <Link href="/courses" className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-all rounded-xl hover:bg-primary-50">Courses</Link>
              <Link href="/trainers" className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-all rounded-xl hover:bg-primary-50">Trainers</Link>
              <Link href="/about" className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-all rounded-xl hover:bg-primary-50">About Us</Link>
              <Link href="/contact" className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-all rounded-xl hover:bg-primary-50">Contact</Link>
            </div>

            {/* ── Utilities ── */}
            <div className="hidden lg:flex items-center gap-6">
              <button onClick={() => setShowSearch(true)} className="p-3 text-gray-400 hover:text-primary hover:bg-primary-50 rounded-xl transition-all"><Search className="w-5 h-5" /></button>
              <div className="h-8 w-[1px] bg-gray-100" />
              <div className="flex items-center gap-4">
                <Link href="/auth/login" className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-900 hover:text-primary transition-colors">Sign In</Link>
                <Link href="/auth/signup" className="bg-primary text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:bg-primary-600 active:scale-95 transition-all">Get Started</Link>
              </div>
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Menu - Full Screen Immersive ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[150] bg-white flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <Link href="/" className="flex items-center gap-3">
                <div className="bg-primary p-2.5 rounded-xl"><GraduationCap className="text-white w-6 h-6" /></div>
                <span className="font-black text-2xl text-gray-900 tracking-tighter">Edu<span className="text-primary">Pro</span></span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-4 bg-gray-50 rounded-2xl text-gray-900"><X className="w-6 h-6" /></button>
            </div>

            <div className="space-y-8 flex-1 overflow-y-auto custom-scrollbar pr-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-2xl font-black uppercase tracking-widest text-gray-900">Home</Link>
              <Link href="/courses" onClick={() => setIsOpen(false)} className="block text-2xl font-black uppercase tracking-widest text-gray-900">Explore Courses</Link>
              <Link href="/trainers" onClick={() => setIsOpen(false)} className="block text-2xl font-black uppercase tracking-widest text-gray-900">Our Trainers</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block text-2xl font-black uppercase tracking-widest text-gray-900">About Us</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-2xl font-black uppercase tracking-widest text-gray-900">Contact</Link>

              <div className="pt-10 space-y-6">
                <p className="text-[11px] font-black text-gray-300 uppercase tracking-[0.4em]">Academic Categories</p>
                <div className="grid grid-cols-1 gap-4">
                  {categories.map(cat => (
                    <Link key={cat.name} href={cat.href} onClick={() => setIsOpen(false)} className="flex items-center gap-5 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm"><cat.icon className="w-6 h-6" /></div>
                      <span className="text-sm font-black text-gray-900 uppercase tracking-widest">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10 grid grid-cols-1 gap-4">
              <Link href="/auth/signup" onClick={() => setIsOpen(false)} className="w-full py-5 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-center shadow-2xl shadow-primary/20">Create Elite Account</Link>
              <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full py-5 border-2 border-gray-100 text-gray-900 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-center">Sign In</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Search Overlay ── */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center px-6"
          >
            <button onClick={() => setShowSearch(false)} className="absolute top-12 right-12 p-4 bg-gray-50 rounded-2xl hover:text-primary transition-all shadow-sm"><X className="w-8 h-8" /></button>
            <div className="w-full max-w-4xl text-center">
              <Search className="w-20 h-20 text-primary mx-auto mb-12 opacity-10" />
              <input
                autoFocus
                placeholder="Search elite academy courses..."
                className="w-full text-4xl md:text-8xl font-black text-gray-900 placeholder:text-gray-100 bg-transparent border-b-8 border-gray-50 focus:outline-none focus:border-primary transition-all pb-10 tracking-tighter"
              />
              <div className="mt-20 flex flex-wrap justify-center gap-6">
                {["Math O-Level", "German A1", "Python Mastery", "Digital Marketing", "IELTS Elite"].map(tag => (
                  <button key={tag} className="px-8 py-4 bg-white border border-gray-100 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest hover:text-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all active:scale-95">{tag}</button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
