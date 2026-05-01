"use client";

import React, { useState } from "react";
import { User, Mail, Phone, Lock, Bell, Camera, ShieldCheck, Eye, EyeOff, Globe } from "lucide-react";

export default function StudentProfile() {
  const [tab, setTab] = useState<"personal" | "security" | "notifications">("personal");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your personal information and preferences</p>
      </div>

      {/* Avatar */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center text-white font-display font-bold text-3xl">
            J
          </div>
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-slate-900 rounded-full flex items-center justify-center hover:bg-edu-indigo transition-colors">
            <Camera className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-slate-900">John Doe</h2>
          <p className="text-slate-500 text-sm">john.doe@example.com</p>
          <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 bg-indigo-50 text-edu-indigo text-xs font-bold rounded-full">
            <ShieldCheck className="w-3 h-3" /> Student Account
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 p-1.5 rounded-2xl">
        {(["personal", "security", "notifications"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
              tab === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "personal" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h3 className="font-display font-bold text-slate-900">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input defaultValue="John" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input defaultValue="Doe" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input defaultValue="john.doe@example.com" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input defaultValue="+1 555 123 4567" className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Website / LinkedIn</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input placeholder="https://linkedin.com/in/..." className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">Bio</label>
              <textarea defaultValue="Passionate learner exploring UI/UX design and web development." rows={3}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo resize-none" />
            </div>
          </div>
          <button className="px-6 py-3 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">Save Changes</button>
        </div>
      )}

      {tab === "security" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
          <h3 className="font-display font-bold text-slate-900">Change Password</h3>
          {[
            { label: "Current Password", show: showOld, toggle: () => setShowOld(!showOld) },
            { label: "New Password", show: showNew, toggle: () => setShowNew(!showNew) },
            { label: "Confirm New Password", show: showNew, toggle: () => setShowNew(!showNew) },
          ].map((field, i) => (
            <div key={i}>
              <label className="text-sm font-bold text-slate-700 mb-1.5 block">{field.label}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input type={field.show ? "text" : "password"} placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
                <button type="button" onClick={field.toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  {field.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
          <button className="px-6 py-3 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">Update Password</button>
        </div>
      )}

      {tab === "notifications" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="font-display font-bold text-slate-900">Notification Preferences</h3>
          {[
            { label: "New course announcements", desc: "Get notified when instructors post updates", on: true },
            { label: "Quiz reminders", desc: "Reminder before a quiz deadline", on: true },
            { label: "Appointment confirmations", desc: "Email when a session is booked or cancelled", on: true },
            { label: "Certificate earned", desc: "Celebrate when you complete a course", on: true },
            { label: "Weekly progress report", desc: "Summary of your learning activity", on: false },
            { label: "Promotional emails", desc: "New courses, discounts and platform news", on: false },
          ].map((notif, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
              <div>
                <p className="text-sm font-bold text-slate-900">{notif.label}</p>
                <p className="text-xs text-slate-400">{notif.desc}</p>
              </div>
              <div className={`w-11 h-6 rounded-full transition-colors cursor-pointer relative ${notif.on ? "bg-edu-indigo" : "bg-slate-200"}`}>
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${notif.on ? "right-0.5" : "left-0.5"}`} />
              </div>
            </div>
          ))}
          <button className="px-6 py-3 bg-edu-indigo text-white text-sm font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">Save Preferences</button>
        </div>
      )}
    </div>
  );
}
