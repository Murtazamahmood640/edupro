"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, Plus, Trash2, PlusCircle, CheckCircle, Clock, BookOpen } from "lucide-react";

const myQuizzes = [
  { id: "q1", title: "Module 1 Quiz — Intro to UI/UX", course: "UI/UX Design Mastery", questions: 10, duration: "15 min", attempts: 312, avgScore: 82, published: true },
  { id: "q2", title: "Module 2 Quiz — User Research", course: "UI/UX Design Mastery", questions: 12, duration: "20 min", attempts: 287, avgScore: 74, published: true },
  { id: "q3", title: "Final Assessment", course: "UI/UX Design Mastery", questions: 25, duration: "40 min", attempts: 0, avgScore: 0, published: false },
  { id: "q4", title: "Foundations Quiz", course: "Web Design Fundamentals", questions: 8, duration: "12 min", attempts: 156, avgScore: 88, published: true },
];

export default function TeacherQuizzes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">My Quizzes</h1>
          <p className="text-slate-500 text-sm mt-1">{myQuizzes.length} quizzes · {myQuizzes.filter((q) => q.published).length} published</p>
        </div>
        <Link href="/teacher/quizzes/create" className="flex items-center gap-2 bg-edu-indigo text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all">
          <PlusCircle className="w-4 h-4" /> Create Quiz
        </Link>
      </div>

      <div className="space-y-3">
        {myQuizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 items-center">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${quiz.published ? "bg-indigo-50" : "bg-slate-100"}`}>
              <Brain className={`w-6 h-6 ${quiz.published ? "text-edu-indigo" : "text-slate-400"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <p className="font-bold text-slate-900 text-sm">{quiz.title}</p>
                <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${quiz.published ? "bg-emerald-100 text-edu-emerald" : "bg-slate-100 text-slate-500"}`}>
                  {quiz.published ? "Published" : "Draft"}
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2">{quiz.course}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Brain className="w-3 h-3" /> {quiz.questions} questions</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {quiz.duration}</span>
                {quiz.attempts > 0 && <>
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {quiz.attempts} attempts</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-edu-emerald" /> {quiz.avgScore}% avg score</span>
                </>}
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Link href="/teacher/quizzes/create" className="px-3 py-2 bg-indigo-50 text-edu-indigo text-xs font-bold rounded-xl hover:bg-indigo-100 transition-all">Edit</Link>
              <button className="px-3 py-2 bg-red-50 text-red-500 text-xs font-bold rounded-xl hover:bg-red-100 transition-all">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
