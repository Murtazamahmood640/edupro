"use client";

import React from "react";
import { StudentSidebar } from "@/components/student/StudentSidebar";
import { StudentHeaderSimple } from "@/components/student/StudentHeaderSimple";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex lg:flex-row flex-col">

      {/* Sidebar */}
      <StudentSidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <StudentHeaderSimple />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
