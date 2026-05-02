"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "EduPro Academy is the definitive platform for O/A Level preparation. The depth of instruction in Mathematics and Physics is unparalleled — I achieved A* in both subjects.",
    author: "Ahmed Raza",
    role: "O-Level Student",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    text: "The Urdu Language courses are excellent. Uzma Siraj makes complex classical poetry so accessible and engaging. Truly a world-class learning experience.",
    author: "Fatima Zehra",
    role: "A-Level Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    text: "Booking live 1-on-1 sessions with Waleed Anwar saved my Calculus grade. The personalised attention and structured approach is worth every penny.",
    author: "Zaid Ibrahim",
    role: "Undergraduate Aspirant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const Testimonials = () => {
  return (
    <section className="section-container">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="badge-primary mb-4">Student Success Stories</span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="heading-h2 mt-4 mb-4"
        >
          Voices of Our <span className="text-black">Achievers</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-edu-slate-500 text-base leading-relaxed"
        >
          Join thousands of high-achievers worldwide who have transformed their
          academic journey through EduPro Academy.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-edu-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/8 transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
          >
            {/* Quote icon */}
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-md shadow-primary/20">
              <Quote className="w-4 h-4 text-white fill-current" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Text */}
            <p className="text-edu-slate-600 text-sm leading-relaxed flex-1 mb-8">
              &quot;{t.text}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-edu-slate-50">
              <img
                src={t.image}
                alt={t.author}
                className="w-12 h-12 rounded-xl object-cover border-2 border-primary-100"
              />
              <div>
                <h4 className="font-bold text-edu-slate-900 text-sm">{t.author}</h4>
                <p className="text-[11px] text-primary font-semibold uppercase tracking-wider mt-0.5">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
