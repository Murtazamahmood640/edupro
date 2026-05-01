"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Award, Brain, Calendar, ArrowRight, PlayCircle, Clock, TrendingUp, ChevronRight, Search } from "lucide-react";

const enrolledCourses = [
  { title: "UI/UX Design Mastery", instructor: "Sarah Jenkins", progress: 68, color: "from-purple-500 to-indigo-600", lastLesson: "Visual Design Principles" },
  { title: "Web Development Complete", instructor: "Dr. John Smith", progress: 42, color: "from-blue-500 to-cyan-600", lastLesson: "React Hooks & State" },
  { title: "Python for Data Science", instructor: "Alex Rivera", progress: 15, color: "from-emerald-500 to-teal-600", lastLesson: "NumPy Arrays" },
];

const upcomingItems = [
  { type: "quiz", title: "Module 4 Quiz — Visual Design", course: "UI/UX Design Mastery", due: "Today, 5:00 PM", icon: Brain, color: "text-purple-600 bg-purple-50" },
  { type: "appointment", title: "Live Session with Sarah Jenkins", course: "1-on-1 Coaching", due: "Tomorrow, 10:00 AM", icon: Calendar, color: "text-blue-600 bg-blue-50" },
  { type: "quiz", title: "JavaScript Fundamentals Quiz", course: "Web Development", due: "May 3, 2:00 PM", icon: Brain, color: "text-amber-600 bg-amber-50" },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-edu-indigo/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="relative z-10">
          <p className="text-slate-400 font-medium mb-1">Good morning 👋</p>
          <h1 className="font-display text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-slate-300 mb-6 max-w-lg">You have <span className="font-bold text-white">2 upcoming activities</span> today. Keep up the great work — you're 68% through your top course!</p>
          <Link href="/student/courses" className="inline-flex items-center gap-2 bg-edu-indigo text-white px-5 py-2.5 rounded-xl font-bold hover:bg-edu-indigo/90 transition-all text-sm">
            Continue Learning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Enrolled Courses", value: "4", icon: BookOpen, color: "bg-indigo-50 text-edu-indigo", trend: "+1 this month" },
          { label: "Quizzes Passed", value: "12", icon: Brain, color: "bg-purple-50 text-purple-600", trend: "3 remaining" },
          { label: "Certificates", value: "2", icon: Award, color: "bg-amber-50 text-edu-amber", trend: "1 in progress" },
          { label: "Live Sessions", value: "3", icon: Calendar, color: "bg-emerald-50 text-edu-emerald", trend: "1 upcoming" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold font-display text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-slate-900">Continue Learning</h2>
            <Link href="/student/courses" className="text-sm text-edu-indigo font-bold hover:underline flex items-center gap-1">
              All courses <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {enrolledCourses.map((course, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 items-center hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0`}>
                  <PlayCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-sm truncate">{course.title}</p>
                  <p className="text-xs text-slate-500 mb-2">{course.instructor} · Last: {course.lastLesson}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${course.color} rounded-full`} style={{ width: `${course.progress}%` }} />
                    </div>
                    <span className="text-xs font-bold text-slate-600 flex-shrink-0">{course.progress}%</span>
                  </div>
                </div>
                <Link href="/student/courses/1/learn" className="flex-shrink-0 px-4 py-2 bg-edu-indigo text-white text-xs font-bold rounded-xl hover:bg-edu-indigo/90 transition-all">
                  Resume
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="space-y-4">
          <h2 className="font-display text-lg font-bold text-slate-900">Upcoming Activities</h2>
          <div className="space-y-3">
            {upcomingItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 text-sm leading-tight">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.course}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-400 font-medium">{item.due}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/student/appointments" className="block w-full text-center py-3 border-2 border-dashed border-slate-200 rounded-2xl text-sm font-bold text-slate-400 hover:border-edu-indigo hover:text-edu-indigo transition-all">
            + Book a Live Class
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="font-display text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Browse New Courses", href: "/student/browse", icon: Search },
            { label: "Take a Quiz", href: "/student/quizzes", icon: Brain },
            { label: "View Certificates", href: "/student/certificates", icon: Award },
            { label: "Book Live Class", href: "/student/appointments", icon: Calendar },
          ].map((action, i) => (
            <Link
              key={i}
              href={action.href}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col items-center justify-center gap-3 text-center hover:shadow-md hover:border-edu-indigo/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                <action.icon className="w-6 h-6 text-slate-400 group-hover:text-edu-indigo transition-colors" />
              </div>
              <p className="text-sm font-bold text-slate-700 group-hover:text-edu-indigo transition-colors">{action.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
