"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, Clock, CheckCircle, XCircle, PlayCircle, Trophy, AlertCircle } from "lucide-react";

const quizzes = [
  { id: "q1", title: "Module 1 — Intro to UI/UX", course: "UI/UX Design Mastery", questions: 10, duration: "15 min", status: "Passed", score: 90, dueDate: null },
  { id: "q2", title: "Module 2 — User Research", course: "UI/UX Design Mastery", questions: 12, duration: "20 min", status: "Failed", score: 55, dueDate: null },
  { id: "q3", title: "Module 4 — Visual Design", course: "UI/UX Design Mastery", questions: 15, duration: "25 min", status: "Not Started", score: null, dueDate: "Today" },
  { id: "q4", title: "JavaScript Fundamentals", course: "Web Development", questions: 20, duration: "30 min", status: "Not Started", score: null, dueDate: "May 3" },
  { id: "q5", title: "React Hooks & State", course: "Web Development", questions: 12, duration: "20 min", status: "In Progress", score: null, dueDate: "May 5" },
  { id: "q6", title: "NumPy & Pandas Basics", course: "Python for Data Science", questions: 10, duration: "15 min", status: "Locked", score: null, dueDate: null },
];

const statusConfig: Record<string, { icon: React.ElementType; color: string; bg: string; label: string }> = {
  "Passed": { icon: CheckCircle, color: "text-edu-emerald", bg: "bg-emerald-50", label: "Passed" },
  "Failed": { icon: XCircle, color: "text-red-500", bg: "bg-red-50", label: "Failed" },
  "Not Started": { icon: PlayCircle, color: "text-edu-indigo", bg: "bg-indigo-50", label: "Not Started" },
  "In Progress": { icon: AlertCircle, color: "text-edu-amber", bg: "bg-amber-50", label: "In Progress" },
  "Locked": { icon: Brain, color: "text-slate-300", bg: "bg-slate-50", label: "Locked" },
};

export default function StudentQuizzes() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Not Started", "In Progress", "Passed", "Failed"];

  const filtered = filter === "All" ? quizzes : quizzes.filter((q) => q.status === filter);

  const passed = quizzes.filter((q) => q.status === "Passed").length;
  const total = quizzes.filter((q) => q.status !== "Locked").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">My Quizzes</h1>
        <p className="text-slate-500 text-sm mt-1">{passed}/{total} quizzes passed</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Quizzes", value: total, icon: Brain, color: "bg-indigo-50 text-edu-indigo" },
          { label: "Passed", value: passed, icon: CheckCircle, color: "bg-emerald-50 text-edu-emerald" },
          { label: "Failed", value: quizzes.filter((q) => q.status === "Failed").length, icon: XCircle, color: "bg-red-50 text-red-500" },
          { label: "In Progress", value: quizzes.filter((q) => q.status === "In Progress").length, icon: AlertCircle, color: "bg-amber-50 text-edu-amber" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${s.color}`}>
              <s.icon className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold font-display text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-500 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              filter === f ? "bg-edu-indigo text-white shadow-md" : "bg-white text-slate-600 border border-slate-200 hover:border-edu-indigo hover:text-edu-indigo"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Quiz List */}
      <div className="space-y-3">
        {filtered.map((quiz) => {
          const config = statusConfig[quiz.status];
          const StatusIcon = config.icon;
          const isActionable = quiz.status === "Not Started" || quiz.status === "In Progress" || quiz.status === "Failed";

          return (
            <div key={quiz.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 items-center">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${config.bg}`}>
                <StatusIcon className={`w-6 h-6 ${config.color}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <p className="font-bold text-slate-900 text-sm">{quiz.title}</p>
                  {quiz.dueDate && (
                    <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${quiz.dueDate === "Today" ? "bg-red-100 text-red-600" : "bg-amber-100 text-edu-amber"}`}>
                      Due: {quiz.dueDate}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500">{quiz.course}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="flex items-center gap-1 text-xs text-slate-400"><Brain className="w-3 h-3" /> {quiz.questions} questions</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400"><Clock className="w-3 h-3" /> {quiz.duration}</span>
                  {quiz.score !== null && (
                    <span className={`flex items-center gap-1 text-xs font-bold ${quiz.score >= 60 ? "text-edu-emerald" : "text-red-500"}`}>
                      <Trophy className="w-3 h-3" /> {quiz.score}%
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0">
                {quiz.status === "Locked" ? (
                  <span className="text-xs text-slate-400 font-medium">Complete previous modules</span>
                ) : isActionable ? (
                  <Link
                    href={`/student/quizzes/${quiz.id}`}
                    className="px-4 py-2.5 bg-edu-indigo text-white text-xs font-bold rounded-xl hover:bg-edu-indigo/90 transition-all"
                  >
                    {quiz.status === "Failed" ? "Retake Quiz" : "Start Quiz"}
                  </Link>
                ) : (
                  <span className={`px-3 py-1.5 text-xs font-bold rounded-xl ${config.bg} ${config.color}`}>
                    {config.label}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
