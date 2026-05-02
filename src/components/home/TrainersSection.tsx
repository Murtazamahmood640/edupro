"use client";

import React from "react";
import Link from "next/link";
import { Star, ArrowRight, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { TEACHERS } from "@/lib/data";

const TrainersSection = () => {
  return (
    <section className="bg-primary-tint">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-primary mb-4">World Class Trainers</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="heading-h2 mt-4 mb-4"
          >
            Learn from the{" "}
            <span className="text-black">Best Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-edu-slate-500 text-base leading-relaxed"
          >
            Our instructors are industry veterans, subject matter experts, and
            dedicated educators committed to your success worldwide.
          </motion.p>
        </div>

        {/* Trainer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TEACHERS.slice(0, 3).map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-edu-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/8 transition-all duration-400 hover:-translate-y-1.5">
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

                  {/* Rating pill over image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg shadow-md">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    <span className="text-xs font-black text-edu-slate-900">{trainer.rating}</span>
                    <span className="text-[10px] text-edu-slate-400 font-medium">({trainer.reviews})</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">
                    {trainer.specialty}
                  </p>
                  <h3 className="font-bold text-edu-slate-900 text-lg mb-1">{trainer.name}</h3>
                  <p className="text-xs text-edu-slate-400 font-semibold mb-5">{trainer.role}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-edu-slate-50">
                    <div className="flex items-center gap-1.5 text-xs text-edu-slate-500">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      <span className="font-semibold">{trainer.reviews.toLocaleString()} Reviews</span>
                    </div>
                    <Link
                      href={`/trainers/${trainer.id}`}
                      className="w-9 h-9 bg-primary-50 border border-primary-100 rounded-xl flex items-center justify-center hover:bg-primary transition-colors group/btn"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-primary group-hover/btn:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/trainers"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 shadow-sm"
          >
            Meet All Trainers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
