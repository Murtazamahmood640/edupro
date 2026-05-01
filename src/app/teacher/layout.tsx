"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap, LayoutDashboard, BookOpen, PlusCircle, Brain, Users,
  Calendar, User, Bell, ChevronLeft, ChevronRight, LogOut, Settings, Menu, BarChart3
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboard },
  { label: "My Courses", href: "/teacher/courses", icon: BookOpen },
  { label: "Create Course", href: "/teacher/courses/create", icon: PlusCircle },
  { label: "Quizzes", href: "/teacher/quizzes", icon: Brain },
  { label: "Students", href: "/teacher/students", icon: Users },
  { label: "Appointments", href: "/teacher/appointments", icon: Calendar },
  { label: "Analytics", href: "/teacher/dashboard", icon: BarChart3 },
  { label: "Profile", href: "/teacher/profile", icon: User },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className={`flex items-center gap-3 px-5 py-6 border-b border-slate-700 ${collapsed ? "justify-center" : ""}`}>
        <div className="bg-edu-indigo p-2 rounded-xl flex-shrink-0">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        {!collapsed && (
          <span className="font-display text-xl font-bold text-white tracking-tight">
            Edu<span className="text-indigo-400">Pro</span>
          </span>
        )}
      </div>

      {!collapsed && (
        <div className="px-5 py-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center font-bold text-white text-sm flex-shrink-0">S</div>
            <div className="overflow-hidden">
              <p className="text-white font-bold text-sm truncate">Sarah Jenkins</p>
              <span className="inline-flex items-center px-2 py-0.5 bg-edu-emerald/20 text-edu-emerald text-xs rounded-full font-medium">Verified Teacher</span>
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href !== "/teacher/dashboard" && pathname.startsWith(href));
          return (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              title={collapsed ? label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                active
                  ? "bg-edu-indigo text-white"
                  : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{label}</span>}
              {!collapsed && active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </Link>
          );
        })}
      </nav>

      <div className={`px-3 py-4 border-t border-slate-700 space-y-1 ${collapsed ? "flex flex-col items-center" : ""}`}>
        <Link href="/teacher/profile" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-700/50 hover:text-white transition-all ${collapsed ? "justify-center" : ""}`}>
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Settings</span>}
        </Link>
        <Link href="/" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-all ${collapsed ? "justify-center" : ""}`}>
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Log Out</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col flex-shrink-0 bg-slate-900 transition-all duration-300 ${
          collapsed ? "w-[72px]" : "w-64"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative z-10 w-64 bg-slate-900 flex flex-col h-full">
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex-shrink-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
            <button onClick={() => setCollapsed(!collapsed)} className="hidden lg:flex p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors">
              {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <div>
              <p className="text-xs text-slate-400 font-medium">Teacher Portal</p>
              <p className="text-sm text-slate-700 font-bold">EduPro Academy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-edu-amber rounded-full" />
            </button>
            <Link href="/" className="text-xs text-slate-500 hover:text-edu-indigo font-medium hidden sm:block">← Back to Site</Link>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center font-bold text-white text-sm">S</div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
