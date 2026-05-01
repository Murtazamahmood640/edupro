"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-h1 mb-6">Get in <span className="text-edu-indigo">Touch</span></h1>
            <p className="text-slate-600 text-lg">
              Have questions about our courses or need help choosing the right path? Our team is here to support you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  desc: "support@edupro.com",
                  bg: "bg-blue-50",
                  color: "text-blue-600",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  desc: "+1 (555) 123-4567",
                  bg: "bg-edu-emerald/5",
                  color: "text-edu-emerald",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  desc: "123 Education St, Knowledge City, ED 94103",
                  bg: "bg-edu-amber/5",
                  color: "text-edu-amber",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className={`${item.bg} ${item.color} p-3 rounded-xl`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="p-8 bg-edu-indigo rounded-[2rem] text-white shadow-xl shadow-edu-indigo/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <h4 className="font-bold text-lg">Support Hours</h4>
                </div>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Our team is available to help you during the following hours:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-bold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all"
                    ></textarea>
                  </div>

                  <button className="btn-primary w-full py-4 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
