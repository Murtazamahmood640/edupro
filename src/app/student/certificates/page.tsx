"use client";

import React from "react";
import { Award, Download, Share2, Star, Calendar, BookOpen } from "lucide-react";

const certificates = [
  {
    id: "c1",
    title: "Digital Marketing Fundamentals",
    issuer: "EduPro Academy",
    instructor: "Emily Davis",
    completedDate: "April 15, 2025",
    credentialId: "EP-2025-DM-10923",
    color: "from-emerald-500 to-teal-600",
    emoji: "📊",
  },
  {
    id: "c2",
    title: "Web Design for Beginners",
    issuer: "EduPro Academy",
    instructor: "Dr. John Smith",
    completedDate: "March 8, 2025",
    credentialId: "EP-2025-WD-08451",
    color: "from-blue-500 to-indigo-600",
    emoji: "💻",
  },
];

const inProgress = [
  { title: "UI/UX Design Mastery", progress: 68, instructor: "Sarah Jenkins" },
  { title: "Web Development Complete Course", progress: 42, instructor: "Dr. John Smith" },
];

export default function StudentCertificates() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">My Certificates</h1>
        <p className="text-slate-500 text-sm mt-1">{certificates.length} earned · {inProgress.length} in progress</p>
      </div>

      {/* Earned Certificates */}
      <div>
        <h2 className="font-display text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-edu-amber" /> Earned Certificates
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Certificate Preview */}
              <div className={`bg-gradient-to-br ${cert.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 blur-2xl rounded-full" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-display font-bold text-sm">EduPro Academy</span>
                    </div>
                    <Award className="w-8 h-8 text-white/60" />
                  </div>
                  <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-1">Certificate of Completion</p>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-white/80 text-sm">Awarded to <span className="font-bold">John Doe</span></p>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-white/60 text-xs">Issued by</p>
                      <p className="text-white text-sm font-bold">{cert.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs">Completed</p>
                      <p className="text-white text-sm font-bold">{cert.completedDate}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <p className="text-white/50 text-xs font-mono">ID: {cert.credentialId}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-700 transition-all">
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all">
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In Progress */}
      <div>
        <h2 className="font-display text-base font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-edu-indigo" /> Certificates in Progress
        </h2>
        <div className="space-y-3">
          {inProgress.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-slate-400" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</p>
                <p className="text-xs text-slate-500 mb-2">{item.instructor}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-edu-indigo rounded-full" style={{ width: `${item.progress}%` }} />
                  </div>
                  <span className="text-xs font-bold text-edu-indigo">{item.progress}%</span>
                </div>
              </div>
              <div className="text-xs text-slate-400 flex-shrink-0 text-right">
                <p className="font-medium">{100 - item.progress}% remaining</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-edu-indigo/5 to-edu-violet/5 rounded-3xl p-6 border border-edu-indigo/10">
        <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-edu-indigo" /> Tip: Boost Your Credentials
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Complete at least 3 courses to unlock your <span className="text-edu-indigo font-bold">EduPro Professional Badge</span> — a verified credential you can share on LinkedIn and add to your resume.
        </p>
      </div>
    </div>
  );
}
