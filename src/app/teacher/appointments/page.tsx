"use client";

import React, { useState } from "react";
import { Calendar, Clock, Video, CheckCircle, XCircle, Plus, User } from "lucide-react";

const requests = [
  { id: 1, student: "Ahmed Raza", topic: "Figma Prototyping Deep Dive", course: "UI/UX Design Mastery", requested: "May 2, 10:00 AM", duration: "60 min", avatar: "A", status: "Pending" },
  { id: 2, student: "Maria Santos", topic: "Career Advice Session", course: "General", requested: "May 3, 3:00 PM", duration: "45 min", avatar: "M", status: "Pending" },
];

const upcoming = [
  { id: 3, student: "James Lee", topic: "Portfolio Review", course: "Web Design Fundamentals", date: "May 5, 11:00 AM", duration: "30 min", avatar: "J", status: "Confirmed" },
  { id: 4, student: "Fatima Al-Hassan", topic: "Advanced Typography", course: "UI/UX Design Mastery", date: "May 6, 2:00 PM", duration: "60 min", avatar: "F", status: "Confirmed" },
];

const past = [
  { id: 5, student: "Priya Patel", topic: "Color Theory Workshop", date: "Apr 28, 3:00 PM", avatar: "P", status: "Completed" },
  { id: 6, student: "Chris Wilson", topic: "Responsive Design Help", date: "Apr 20, 10:00 AM", avatar: "C", status: "Completed" },
];

const availableSlots = ["Mon 9-10 AM", "Mon 2-3 PM", "Tue 10-11 AM", "Wed 3-4 PM", "Thu 9-10 AM", "Fri 11 AM-12 PM"];

export default function TeacherAppointments() {
  const [showSlots, setShowSlots] = useState(false);
  const [accepted, setAccepted] = useState<Set<number>>(new Set());
  const [rejected, setRejected] = useState<Set<number>>(new Set());

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Appointments</h1>
          <p className="text-slate-500 text-sm mt-1">{requests.filter((r) => !accepted.has(r.id) && !rejected.has(r.id)).length} pending · {upcoming.length} upcoming</p>
        </div>
        <button onClick={() => setShowSlots(true)} className="flex items-center gap-2 bg-edu-indigo text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-edu-indigo/90 transition-all">
          <Plus className="w-4 h-4" /> Set Availability
        </button>
      </div>

      {/* Pending Requests */}
      {requests.some((r) => !accepted.has(r.id) && !rejected.has(r.id)) && (
        <div>
          <h2 className="font-display text-base font-bold text-slate-700 mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-edu-amber" /> Pending Requests
          </h2>
          <div className="space-y-3">
            {requests.filter((r) => !accepted.has(r.id) && !rejected.has(r.id)).map((req) => (
              <div key={req.id} className="bg-white rounded-2xl border-2 border-edu-amber/30 shadow-sm p-5 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-edu-amber flex items-center justify-center text-white font-bold flex-shrink-0">{req.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900">{req.student}</p>
                  <p className="text-sm text-slate-600 mb-1">Topic: <span className="font-medium">{req.topic}</span></p>
                  <p className="text-xs text-slate-400">{req.course}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {req.requested}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {req.duration}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button onClick={() => setAccepted((prev) => new Set([...prev, req.id]))}
                    className="flex items-center gap-1.5 px-3 py-2 bg-edu-emerald text-white text-xs font-bold rounded-xl hover:bg-edu-emerald/90 transition-all">
                    <CheckCircle className="w-3.5 h-3.5" /> Accept
                  </button>
                  <button onClick={() => setRejected((prev) => new Set([...prev, req.id]))}
                    className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-500 text-xs font-bold rounded-xl hover:bg-red-100 transition-all">
                    <XCircle className="w-3.5 h-3.5" /> Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming */}
      <div>
        <h2 className="font-display text-base font-bold text-slate-700 mb-3 flex items-center gap-2">
          <Video className="w-5 h-5 text-edu-indigo" /> Upcoming Sessions
        </h2>
        <div className="space-y-3">
          {upcoming.map((apt) => (
            <div key={apt.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-edu-indigo to-edu-violet flex items-center justify-center text-white font-bold flex-shrink-0">{apt.avatar}</div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-sm">{apt.student}</p>
                <p className="text-xs text-slate-500 mb-1">{apt.topic} · {apt.course}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {apt.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {apt.duration}</span>
                </div>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-50 text-edu-indigo text-xs font-bold rounded-xl hover:bg-indigo-100 transition-all flex-shrink-0">
                <Video className="w-3.5 h-3.5" /> Start Session
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Past */}
      <div>
        <h2 className="font-display text-base font-bold text-slate-700 mb-3">Past Sessions</h2>
        <div className="space-y-2">
          {past.map((apt) => (
            <div key={apt.id} className="bg-white rounded-2xl border border-slate-100 p-4 flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm flex-shrink-0">{apt.avatar}</div>
              <div className="flex-1">
                <p className="font-bold text-slate-700 text-sm">{apt.student}</p>
                <p className="text-xs text-slate-400">{apt.topic} · {apt.date}</p>
              </div>
              <span className="px-2 py-1 bg-emerald-50 text-edu-emerald text-xs font-bold rounded-lg">Completed</span>
            </div>
          ))}
        </div>
      </div>

      {/* Availability Modal */}
      {showSlots && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <h2 className="font-display text-xl font-bold text-slate-900 mb-1">Set Your Availability</h2>
            <p className="text-slate-500 text-sm mb-6">Students can book sessions during these time slots</p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {availableSlots.map((slot) => (
                <label key={slot} className="flex items-center gap-2 p-3 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-edu-indigo transition-all">
                  <input type="checkbox" className="rounded text-edu-indigo" defaultChecked={slot.includes("Mon") || slot.includes("Wed")} />
                  <span className="text-xs font-medium text-slate-700">{slot}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowSlots(false)} className="flex-1 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50">Cancel</button>
              <button onClick={() => setShowSlots(false)} className="flex-1 py-3 bg-edu-indigo text-white rounded-xl font-bold text-sm hover:bg-edu-indigo/90">Save Availability</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
