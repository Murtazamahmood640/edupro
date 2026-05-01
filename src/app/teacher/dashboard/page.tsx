"use client";

import React from "react";
import Link from "next/link";
import { Users, BookOpen, DollarSign, Star, TrendingUp, Clock, ChevronRight, PlusCircle, Eye, Bell } from "lucide-react";

const recentEnrollments = [
  { student: "Ahmed Raza", course: "UI/UX Design Mastery", date: "May 1, 2025", avatar: "A" },
  { student: "Maria Santos", course: "UI/UX Design Mastery", date: "Apr 30, 2025", avatar: "M" },
  { student: "James Lee", course: "Web Design Fundamentals", date: "Apr 30, 2025", avatar: "J" },
  { student: "Priya Patel", course: "UI/UX Design Mastery", date: "Apr 29, 2025", avatar: "P" },
];

const myCourses = [
  { title: "UI/UX Design Mastery", students: 1892, rating: 4.9, revenue: "PKR 245,870", status: "Published" },
  { title: "Web Design Fundamentals", students: 743, rating: 4.7, revenue: "PKR 89,160", status: "Published" },
  { title: "Advanced Figma Techniques", students: 0, rating: 0, revenue: "PKR 0", status: "Draft" },
];

const appointmentRequests = [
  { student: "Ahmed Raza", topic: "Figma Prototyping Help", date: "May 2, 10:00 AM", avatar: "A" },
  { student: "Maria Santos", topic: "Career Advice Session", date: "May 3, 3:00 PM", avatar: "M" },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-edu-indigo/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-slate-400 font-medium mb-1">Welcome back, Teacher 👋</p>
            <h1 className="font-display text-3xl font-bold mb-2">Hello, Sarah Jenkins!</h1>
            <p className="text-slate-300 max-w-lg">You have <span className="text-edu-amber font-bold">2 new appointment requests</span> and <span className="text-edu-emerald font-bold">4 new enrollments</span> this week.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/teacher/courses/create" className="flex items-center gap-2 bg-edu-indigo text-white px-5 py-2.5 rounded-xl font-bold hover:bg-edu-indigo/90 transition-all text-sm">
              <PlusCircle className="w-4 h-4" /> New Course
            </Link>
            <Link href="/teacher/appointments" className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-5 py-2.5 rounded-xl font-bold hover:bg-white/20 transition-all text-sm">
              <Bell className="w-4 h-4" /> Requests
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Students", value: "2,635", icon: Users, change: "+127 this month", color: "bg-blue-50 text-blue-600" },
          { label: "Active Courses", value: "2", icon: BookOpen, change: "1 draft", color: "bg-indigo-50 text-edu-indigo" },
          { label: "Total Revenue", value: "PKR 335K", icon: DollarSign, change: "+PKR 28K this month", color: "bg-emerald-50 text-edu-emerald" },
          { label: "Avg. Rating", value: "4.9 ★", icon: Star, change: "Based on 2,132 reviews", color: "bg-amber-50 text-edu-amber" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold font-display text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Courses */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-slate-900">My Courses</h2>
            <Link href="/teacher/courses" className="text-sm text-edu-indigo font-bold hover:underline flex items-center gap-1">
              Manage all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {myCourses.map((course, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-slate-900 text-sm truncate">{course.title}</p>
                    <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${course.status === "Published" ? "bg-emerald-100 text-edu-emerald" : "bg-amber-100 text-edu-amber"}`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.students} students</span>
                    {course.rating > 0 && <span className="flex items-center gap-1"><Star className="w-3 h-3 text-edu-amber fill-edu-amber" /> {course.rating}</span>}
                    <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {course.revenue}</span>
                  </div>
                </div>
                <Link href="/teacher/courses" className="flex-shrink-0 p-2 text-slate-400 hover:text-edu-indigo hover:bg-indigo-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            ))}
            <Link href="/teacher/courses/create" className="block w-full text-center py-4 border-2 border-dashed border-slate-200 rounded-2xl text-sm font-bold text-slate-400 hover:border-edu-indigo hover:text-edu-indigo transition-all">
              + Create New Course
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Appointment Requests */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Appointment Requests</h3>
              <Link href="/teacher/appointments" className="text-xs text-edu-indigo font-bold hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {appointmentRequests.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-edu-indigo flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{req.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900">{req.student}</p>
                    <p className="text-xs text-slate-500 truncate">{req.topic}</p>
                    <p className="text-xs text-edu-indigo font-medium mt-1">{req.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 text-xs font-bold text-white bg-edu-emerald rounded-xl hover:bg-edu-emerald/90 transition-all">Accept All</button>
              <button className="flex-1 py-2 text-xs font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-all">Review</button>
            </div>
          </div>

          {/* Recent Enrollments */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Recent Enrollments</h3>
              <Link href="/teacher/students" className="text-xs text-edu-indigo font-bold hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {recentEnrollments.map((e, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center text-white font-bold text-xs flex-shrink-0">{e.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{e.student}</p>
                    <p className="text-xs text-slate-400 truncate">{e.course}</p>
                  </div>
                  <span className="text-xs text-slate-400 flex-shrink-0">{e.date.split(",")[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
