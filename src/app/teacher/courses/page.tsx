"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Users, Star, Eye, Edit, Trash2, ToggleLeft, ToggleRight, PlusCircle, DollarSign, BarChart } from "lucide-react";

const courses = [
  { id: "1", title: "UI/UX Design Mastery: From Beginner to Pro", category: "Design", students: 1892, rating: 4.9, reviews: 312, revenue: "PKR 245,870", status: "Published", lessons: 28, level: "Intermediate" },
  { id: "2", title: "Web Design Fundamentals with Figma", category: "Design", students: 743, rating: 4.7, reviews: 98, revenue: "PKR 89,160", status: "Published", lessons: 16, level: "Beginner" },
  { id: "3", title: "Advanced Figma Techniques for Professionals", category: "Design", students: 0, rating: 0, reviews: 0, revenue: "PKR 0", status: "Draft", lessons: 0, level: "Advanced" },
];

export default function TeacherCourses() {
  const [activeStatus, setActiveStatus] = useState<Record<string, boolean>>({ "1": true, "2": true, "3": false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">My Courses</h1>
          <p className="text-slate-500 text-sm mt-1">{courses.length} courses · {courses.filter((c) => c.status === "Published").length} published</p>
        </div>
        <Link href="/teacher/courses/create" className="flex items-center gap-2 bg-edu-indigo text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all">
          <PlusCircle className="w-4 h-4" /> Create Course
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Students", value: "2,635", icon: Users, color: "bg-indigo-50 text-edu-indigo" },
          { label: "Total Revenue", value: "PKR 335K", icon: DollarSign, color: "bg-emerald-50 text-edu-emerald" },
          { label: "Avg. Rating", value: "4.8 ★", icon: Star, color: "bg-amber-50 text-edu-amber" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display text-xl font-bold text-slate-900">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Course List */}
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 md:p-6 flex gap-5 items-start">
              {/* Thumbnail */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="font-bold text-slate-900">{course.title}</p>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${course.status === "Published" ? "bg-emerald-100 text-edu-emerald" : "bg-amber-100 text-edu-amber"}`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{course.category}</span>
                      <span>·</span>
                      <span>{course.level}</span>
                      <span>·</span>
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  {/* Toggle */}
                  <button
                    onClick={() => setActiveStatus((prev) => ({ ...prev, [course.id]: !prev[course.id] }))}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    {activeStatus[course.id]
                      ? <ToggleRight className="w-8 h-8 text-edu-emerald" />
                      : <ToggleLeft className="w-8 h-8 text-slate-300" />}
                    <span className={activeStatus[course.id] ? "text-edu-emerald" : "text-slate-400"}>
                      {activeStatus[course.id] ? "Live" : "Paused"}
                    </span>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {[
                    { label: "Students", value: course.students.toLocaleString(), icon: Users },
                    { label: "Rating", value: course.rating > 0 ? `${course.rating} (${course.reviews})` : "No reviews", icon: Star },
                    { label: "Revenue", value: course.revenue, icon: DollarSign },
                    { label: "Analytics", value: "View Stats", icon: BarChart },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3">
                      <p className="text-xs text-slate-400 mb-0.5">{stat.label}</p>
                      <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <Link href={`/teacher/courses/create`} className="flex items-center gap-1.5 px-3 py-2 bg-indigo-50 text-edu-indigo text-xs font-bold rounded-xl hover:bg-indigo-100 transition-all">
                    <Edit className="w-3.5 h-3.5" /> Edit Course
                  </Link>
                  <Link href="/teacher/quizzes" className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-200 transition-all">
                    <Eye className="w-3.5 h-3.5" /> View Quizzes
                  </Link>
                  <button className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-500 text-xs font-bold rounded-xl hover:bg-red-100 transition-all ml-auto">
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
