import React from "react";
import Link from "next/link";
import { GraduationCap, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe, BookOpen, Users, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-edu-slate text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter Banner */}
        <div className="bg-gradient-to-r from-edu-indigo to-edu-violet rounded-3xl p-6 md:p-10 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-left w-full md:w-auto">
            <h3 className="font-display text-2xl font-bold text-white mb-1">Stay Ahead with EduPro</h3>
            <p className="text-indigo-200 text-sm">Get new courses, tips & resources delivered to your inbox.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 w-full sm:w-auto md:w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
            />
            <button className="w-full sm:w-auto px-5 py-3 bg-white text-edu-indigo rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 text-sm flex-shrink-0">
              <Send className="w-4 h-4" /> Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-edu-indigo p-2 rounded-lg"><GraduationCap className="text-white w-6 h-6" /></div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Edu<span className="text-indigo-300">Pro</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              EduPro Academy is a premium online learning platform where students can purchase courses, track progress, take quizzes, earn certificates, and book live sessions with expert instructors.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Globe, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-edu-indigo transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold mb-5 uppercase tracking-wider text-slate-300">Platform</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                { label: "Browse Courses", href: "/courses" },
                { label: "Our Trainers", href: "/trainers" },
                { label: "Pricing Plans", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "Student Feedback", href: "/feedback" },
              ].map((l) => (
                <li key={l.label}><Link href={l.href} className="hover:text-edu-indigo transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-display text-sm font-bold mb-5 uppercase tracking-wider text-slate-300">Portals</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="/student/dashboard" className="hover:text-edu-indigo transition-colors flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-edu-indigo" /> Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/student/courses" className="hover:text-edu-indigo transition-colors flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-transparent" /> My Courses
                </Link>
              </li>
              <li>
                <Link href="/student/certificates" className="hover:text-edu-indigo transition-colors flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-transparent" /> Certificates
                </Link>
              </li>
              <li>
                <Link href="/teacher/dashboard" className="hover:text-edu-violet transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4 text-edu-violet" /> Teacher Dashboard
                </Link>
              </li>
              <li>
                <Link href="/teacher/courses/create" className="hover:text-edu-violet transition-colors flex items-center gap-2">
                  <Users className="w-4 h-4 text-transparent" /> Create a Course
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold mb-5 uppercase tracking-wider text-slate-300">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-edu-indigo mt-0.5 flex-shrink-0" />
                <span>support@edupro.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-edu-indigo mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-edu-indigo mt-0.5 flex-shrink-0" />
                <span>123 Education St, Knowledge City, ED 94103</span>
              </li>
            </ul>
            <div className="mt-5 space-y-2">
              <Link href="/contact" className="block text-sm hover:text-edu-indigo transition-colors text-slate-400">Help Center</Link>
              <Link href="/privacy" className="block text-sm hover:text-edu-indigo transition-colors text-slate-400">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm hover:text-edu-indigo transition-colors text-slate-400">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {currentYear} EduPro Academy. All Rights Reserved.</p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
