"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Mail, Lock, Eye, EyeOff, Github, ArrowRight, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex">
      {/* ── Left Branded Panel ── */}
      <div className="hidden lg:flex lg:w-[48%] bg-gradient-to-br from-edu-indigo via-edu-violet to-indigo-950 relative overflow-hidden flex-col justify-between p-14">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-edu-violet/30 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Logo */}
        <Link href="/" className="relative flex items-center space-x-3 z-10">
          <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl border border-white/30">
            <GraduationCap className="text-white w-7 h-7" />
          </div>
          <span className="font-display text-3xl font-bold text-white tracking-tight">
            Edu<span className="text-indigo-200">Pro</span>
          </span>
        </Link>

        {/* Middle */}
        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4 leading-tight">
              Your Learning Journey<br />Starts Here
            </h2>
            <p className="text-indigo-200 text-lg leading-relaxed">
              Join 50,000+ students and 150+ expert instructors on EduPro — where knowledge meets ambition.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "50K+", label: "Students" },
              { value: "1.2K+", label: "Courses" },
              { value: "4.9★", label: "Rating" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-indigo-200 font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <p className="text-white/90 italic text-sm leading-relaxed mb-4">
              "EduPro completely changed my career. I went from zero to landing my dream job in just 6 months. The instructors are world-class!"
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-edu-amber flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
              <div>
                <p className="text-white font-bold text-sm">Ahmed Raza</p>
                <p className="text-indigo-200 text-xs">Full Stack Developer at TechCorp</p>
              </div>
            </div>
          </div>
        </div>

        <p className="relative z-10 text-indigo-400 text-sm">
          © 2025 EduPro Academy. All rights reserved.
        </p>
      </div>

      {/* ── Right Form Panel ── */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[420px]"
        >
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden inline-flex items-center space-x-2 mb-8">
            <div className="bg-edu-indigo p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold text-slate-900">
              Edu<span className="text-edu-indigo">Pro</span>
            </span>
          </Link>

          <h1 className="text-3xl font-display font-bold text-slate-900 mb-1">Welcome Back</h1>
          <p className="text-slate-500 mb-8">Log in to continue your learning journey.</p>

          {/* Role Selector */}
          <div className="flex bg-slate-100 rounded-2xl p-1.5 mb-8 gap-1">
            {(["student", "teacher"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                  role === r
                    ? "bg-edu-indigo text-white shadow-lg shadow-edu-indigo/30"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {r === "student" ? <BookOpen className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                <span className="capitalize">{r} Login</span>
              </button>
            ))}
          </div>

          {role === "teacher" && (
            <div className="mb-6 px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-xl text-sm text-edu-indigo font-medium">
              👋 Teacher accounts get access to course management, quiz builder, and student analytics.
            </div>
          )}

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  id="login-email"
                  placeholder={role === "student" ? "student@example.com" : "teacher@example.com"}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <Link href="#" className="text-xs font-bold text-edu-indigo hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Link
              href={role === "student" ? "/student/dashboard" : "/teacher/dashboard"}
              className="w-full flex items-center justify-center gap-2 bg-edu-indigo text-white py-4 rounded-xl font-bold text-base hover:bg-edu-indigo/90 transition-all active:scale-95 shadow-lg shadow-edu-indigo/25"
            >
              <span>Log In as {role === "student" ? "Student" : "Teacher"}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
            <span className="relative px-4 bg-white text-xs text-slate-400 uppercase tracking-widest font-bold">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm">
              <Github className="w-5 h-5" /> GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-slate-500 text-sm">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-edu-indigo font-bold hover:underline">Sign up for free</Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
