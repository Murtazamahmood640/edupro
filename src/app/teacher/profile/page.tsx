"use client";

import React, { useState } from "react";
import { Camera, User, Mail, Globe, Linkedin, Youtube, Lock, Eye, EyeOff, ShieldCheck, Star } from "lucide-react";

const specializations = ["UI/UX Design", "Web Development", "Data Science", "Digital Marketing", "Business", "Photography"];

export default function TeacherProfile() {
  const [tab, setTab] = useState<"profile" | "security" | "schedule">("profile");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [available, setAvailable] = useState(new Set(["Monday", "Wednesday", "Friday"]));

  const toggleDay = (day: string) => {
    const next = new Set(available);
    next.has(day) ? next.delete(day) : next.add(day);
    setAvailable(next);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Teacher Profile</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your public profile and account settings</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center text-white font-display font-bold text-3xl">S</div>
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-slate-900 rounded-full flex items-center justify-center hover:bg-edu-indigo transition-colors">
            <Camera className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <div className="flex-1">
          <h2 className="font-display text-xl font-bold text-slate-900">Sarah Jenkins</h2>
          <p className="text-edu-indigo font-bold text-sm">Lead UI/UX Designer at Figma</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-edu-emerald text-xs font-bold rounded-full">
              <ShieldCheck className="w-3 h-3" /> Verified Teacher
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              <Star className="w-3 h-3 text-edu-amber fill-edu-amber" /> 4.9 rating · 1,892 students
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 p-1.5 rounded-2xl">
        {(["profile", "security", "schedule"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${tab === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
            {t === "schedule" ? "Availability" : t}
          </button>
        ))}
      </div>

      {tab === "profile" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h3 className="font-display font-bold text-slate-900">Public Profile</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input defaultValue="Sarah" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input defaultValue="Jenkins" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input defaultValue="sarah@example.com" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Specialization</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo appearance-none">
                {specializations.map((s) => <option key={s} selected={s === "UI/UX Design"}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Current Role / Title</label>
              <input defaultValue="Lead UI/UX Designer at Figma" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Years of Experience</label>
              <input type="number" defaultValue="8" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Professional Bio</label>
              <textarea rows={4} defaultValue="Sarah is a design visionary who believes that good design is invisible. She teaches the art of user-centric creation with over 8 years of industry experience."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo resize-none" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">LinkedIn</label>
              <div className="relative">
                <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input placeholder="https://linkedin.com/in/..." className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Website</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input placeholder="https://yoursite.com" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
          </div>
          <button className="px-6 py-3 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">Save Profile</button>
        </div>
      )}

      {tab === "security" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h3 className="font-display font-bold text-slate-900">Change Password</h3>
          {[
            { label: "Current Password", show: showOld, toggle: () => setShowOld(!showOld) },
            { label: "New Password", show: showNew, toggle: () => setShowNew(!showNew) },
            { label: "Confirm New Password", show: showNew, toggle: () => {} },
          ].map((f, i) => (
            <div key={i}>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">{f.label}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input type={f.show ? "text" : "password"} placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
                <button type="button" onClick={f.toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  {f.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
          <button className="px-6 py-3 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">Update Password</button>
        </div>
      )}

      {tab === "schedule" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h3 className="font-display font-bold text-slate-900">Weekly Availability</h3>
          <p className="text-sm text-slate-500">Select the days you are available for student appointments</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {days.map((day) => (
              <button key={day} onClick={() => toggleDay(day)}
                className={`py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all ${
                  available.has(day) ? "border-edu-indigo bg-indigo-50 text-edu-indigo" : "border-slate-200 text-slate-400 hover:border-slate-300"
                }`}>
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">Session Duration Options</label>
            <div className="flex gap-2">
              {["30 min", "45 min", "60 min"].map((d) => (
                <button key={d} className="px-4 py-2 border-2 border-edu-indigo bg-indigo-50 text-edu-indigo text-xs font-bold rounded-xl">{d}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">Session Price (PKR)</label>
            <input type="number" defaultValue="2500" className="w-40 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
          </div>
          <button className="px-6 py-3 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">Save Availability</button>
        </div>
      )}
    </div>
  );
}
