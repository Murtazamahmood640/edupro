"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, BookOpen, Users, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Trainers", href: "/trainers" },
    { name: "About Us", href: "/about" },
    { name: "Feedback", href: "/feedback" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-edu-indigo p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold text-slate-900 tracking-tight">
              Edu<span className="text-edu-indigo">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-edu-indigo font-medium transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/auth/login" className="text-slate-600 hover:text-edu-indigo font-semibold transition-colors text-sm px-3 py-2">
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-edu-indigo text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-edu-indigo/90 transition-all active:scale-95 shadow-md shadow-edu-indigo/20 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-xl transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2.5 text-slate-600 hover:text-edu-indigo hover:bg-slate-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link href="/auth/login" className="w-full text-center py-2.5 text-slate-600 font-semibold border border-slate-200 rounded-lg text-sm" onClick={() => setIsOpen(false)}>
              Log In
            </Link>
            <Link href="/auth/signup" className="w-full text-center py-2.5 bg-edu-indigo text-white font-semibold rounded-lg shadow-md text-sm" onClick={() => setIsOpen(false)}>
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
