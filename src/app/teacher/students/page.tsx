"use client";

import React, { useState } from "react";
import { Users, Search, BookOpen, TrendingUp, Star, Filter } from "lucide-react";

const students = [
  { id: 1, name: "Ahmed Raza", email: "ahmed@example.com", course: "UI/UX Design Mastery", progress: 85, quizScore: 88, enrolled: "Apr 10, 2025", avatar: "A", status: "Active" },
  { id: 2, name: "Maria Santos", email: "maria@example.com", course: "UI/UX Design Mastery", progress: 62, quizScore: 74, enrolled: "Apr 15, 2025", avatar: "M", status: "Active" },
  { id: 3, name: "James Lee", email: "james@example.com", course: "Web Design Fundamentals", progress: 100, quizScore: 91, enrolled: "Mar 22, 2025", avatar: "J", status: "Completed" },
  { id: 4, name: "Priya Patel", email: "priya@example.com", course: "UI/UX Design Mastery", progress: 30, quizScore: 55, enrolled: "Apr 28, 2025", avatar: "P", status: "Active" },
  { id: 5, name: "Chris Wilson", email: "chris@example.com", course: "Web Design Fundamentals", progress: 48, quizScore: 70, enrolled: "Apr 20, 2025", avatar: "C", status: "Inactive" },
  { id: 6, name: "Fatima Al-Hassan", email: "fatima@example.com", course: "UI/UX Design Mastery", progress: 95, quizScore: 96, enrolled: "Mar 30, 2025", avatar: "F", status: "Active" },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-100 text-edu-emerald",
  Completed: "bg-indigo-100 text-edu-indigo",
  Inactive: "bg-slate-100 text-slate-500",
};

export default function TeacherStudents() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");

  const courses = ["All", "UI/UX Design Mastery", "Web Design Fundamentals"];
  const filtered = students.filter((s) => {
    const matchCourse = courseFilter === "All" || s.course === courseFilter;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase());
    return matchCourse && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">My Students</h1>
        <p className="text-slate-500 text-sm mt-1">{students.length} total students across {courses.length - 1} courses</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Students", value: students.length, icon: Users, color: "bg-indigo-50 text-edu-indigo" },
          { label: "Active", value: students.filter((s) => s.status === "Active").length, icon: TrendingUp, color: "bg-emerald-50 text-edu-emerald" },
          { label: "Completed", value: students.filter((s) => s.status === "Completed").length, icon: Star, color: "bg-amber-50 text-edu-amber" },
          { label: "Avg Progress", value: `${Math.round(students.reduce((a, s) => a + s.progress, 0) / students.length)}%`, icon: BookOpen, color: "bg-blue-50 text-blue-600" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${s.color}`}><s.icon className="w-4 h-4" /></div>
            <p className="text-2xl font-bold font-display text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-500 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search students..."
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {courses.map((c) => (
            <button key={c} onClick={() => setCourseFilter(c)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${courseFilter === c ? "bg-edu-indigo text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-edu-indigo"}`}>
              {c === "All" ? "All Courses" : c}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Course</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Progress</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Quiz Score</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Enrolled</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {student.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{student.name}</p>
                        <p className="text-xs text-slate-400">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <p className="text-slate-700 text-xs font-medium">{student.course}</p>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden flex-shrink-0">
                        <div className="h-full bg-edu-indigo rounded-full" style={{ width: `${student.progress}%` }} />
                      </div>
                      <span className="text-xs font-bold text-slate-600">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className={`font-bold text-sm ${student.quizScore >= 80 ? "text-edu-emerald" : student.quizScore >= 60 ? "text-edu-amber" : "text-red-500"}`}>
                      {student.quizScore}%
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-xs text-slate-500">{student.enrolled}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded-lg ${statusColors[student.status]}`}>{student.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
