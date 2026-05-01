"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Mail, Lock, Eye, EyeOff, User, ArrowRight, BookOpen, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const strength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthColors = ["bg-slate-200", "bg-red-400", "bg-edu-amber", "bg-edu-emerald"];
  const strengthLabels = ["", "Weak", "Fair", "Strong"];

  return (
    <main className="min-h-screen flex">
      {/* ── Left Branded Panel ── */}
      <div className="hidden lg:flex lg:w-[48%] bg-gradient-to-br from-indigo-950 via-edu-indigo to-edu-violet relative overflow-hidden flex-col justify-between p-14">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-edu-violet/30 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />

        <Link href="/" className="relative flex items-center space-x-3 z-10">
          <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl border border-white/30">
            <GraduationCap className="text-white w-7 h-7" />
          </div>
          <span className="font-display text-3xl font-bold text-white tracking-tight">
            Edu<span className="text-indigo-200">Pro</span>
          </span>
        </Link>

        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4 leading-tight">
              Begin Your Story<br />of Success
            </h2>
            <p className="text-indigo-200 text-lg leading-relaxed">
              Whether you're here to learn or to teach — EduPro gives you the tools to reach your potential.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: "🎓", title: "Expert-Led Courses", desc: "Learn from top professionals across 50+ domains" },
              { icon: "📜", title: "Verified Certificates", desc: "Earn credentials that employers recognize and value" },
              { icon: "📅", title: "Live 1-on-1 Classes", desc: "Book private sessions directly with your instructor" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-indigo-200 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-indigo-400 text-sm">© 2025 EduPro Academy. All rights reserved.</p>
      </div>

      {/* ── Right Form Panel ── */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[420px] py-8"
        >
          <Link href="/" className="lg:hidden inline-flex items-center space-x-2 mb-8">
            <div className="bg-edu-indigo p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold text-slate-900">
              Edu<span className="text-edu-indigo">Pro</span>
            </span>
          </Link>

          <h1 className="text-3xl font-display font-bold text-slate-900 mb-1">Create Account</h1>
          <p className="text-slate-500 mb-8">Join EduPro and start your journey today.</p>

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
                <span className="capitalize">I'm a {r}</span>
              </button>
            ))}
          </div>

          {role === "teacher" && (
            <div className="mb-6 px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-xl text-sm text-edu-indigo font-medium">
              🎓 Teacher accounts are reviewed within 24hrs. You'll get tools to create courses, quizzes, and manage live sessions.
            </div>
          )}

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                />
              </div>
            </div>

            {role === "teacher" && (
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Specialization</label>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all appearance-none text-slate-700">
                    <option value="">Select your expertise...</option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Data Science & AI</option>
                    <option>Digital Marketing</option>
                    <option>Business & Finance</option>
                    <option>Photography & Video</option>
                  </select>
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="signup-email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {password.length > 0 && (
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${i <= strength ? strengthColors[strength] : "bg-slate-200"}`} />
                    ))}
                  </div>
                  <p className={`text-xs font-medium ${strength === 1 ? "text-red-500" : strength === 2 ? "text-edu-amber" : "text-edu-emerald"}`}>
                    {strengthLabels[strength]} password
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-500">
              <input id="terms" type="checkbox" className="mt-1 rounded text-edu-indigo focus:ring-edu-indigo w-4 h-4 flex-shrink-0" />
              <label htmlFor="terms">
                I agree to the{" "}
                <Link href="/terms" className="text-edu-indigo font-bold hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-edu-indigo font-bold hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <Link
              href={role === "student" ? "/student/dashboard" : "/teacher/dashboard"}
              className="w-full flex items-center justify-center gap-2 bg-edu-indigo text-white py-4 rounded-xl font-bold text-base hover:bg-edu-indigo/90 transition-all active:scale-95 shadow-lg shadow-edu-indigo/25"
            >
              <span>Create {role === "student" ? "Student" : "Teacher"} Account</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </form>

          <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-edu-emerald flex-shrink-0" />
              <span>Your data is encrypted and secure. We never share your personal information.</span>
            </div>
          </div>

          <p className="mt-6 text-center text-slate-500 text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-edu-indigo font-bold hover:underline">Log in here</Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
