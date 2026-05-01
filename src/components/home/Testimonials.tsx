"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "EduPro changed my career! The courses are well-structured and easy to follow. Highly recommended for anyone looking to level up their skills.",
    author: "Ahmed Raza",
    role: "Web Developer",
    image: "/trainer-1.png", // Reusing for placeholder
  },
  {
    text: "The quality of instruction is unmatched. I've taken many online courses, but none compare to the depth and practicality of EduPro's content.",
    author: "Sarah Khan",
    role: "UI/UX Designer",
    image: "/trainer-1.png",
  },
  {
    text: "I landed my dream job after completing the Data Science track. The community and mentors are always there to support you.",
    author: "Michael Chen",
    role: "Data Scientist",
    image: "/trainer-1.png",
  },
];

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="heading-h2 mb-6">What Our <span className="text-edu-indigo">Students Say</span></h2>
        <p className="text-slate-600 text-lg">
          Join thousands of satisfied learners who have transformed their careers through our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-50 relative"
          >
            <div className="absolute -top-4 -left-4 bg-edu-indigo p-3 rounded-2xl shadow-lg shadow-edu-indigo/20">
              <Quote className="text-white w-6 h-6 fill-current" />
            </div>
            
            <div className="flex space-x-1 text-edu-amber mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="text-slate-700 italic mb-8 leading-relaxed">
              "{t.text}"
            </p>

            <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={t.image} alt={t.author} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{t.author}</h4>
                <p className="text-xs text-edu-indigo font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
