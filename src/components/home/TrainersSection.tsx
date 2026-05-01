"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";

const trainers = [
  {
    name: "Dr. John Smith",
    role: "Senior Software Engineer at Google",
    specialty: "Web Development & Cloud",
    rating: 4.9,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    name: "Sarah Jenkins",
    role: "Lead UI/UX Designer at Figma",
    specialty: "Product Design & Research",
    rating: 5.0,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    name: "Alex Rivera",
    role: "Data Scientist at Meta",
    specialty: "AI & Machine Learning",
    rating: 4.8,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
  },
];

const TrainersSection = () => {
  return (
    <section className="section-container bg-edu-indigo/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-edu-indigo rounded-full mb-6 shadow-sm">
          <Award className="w-4 h-4 fill-current" />
          <span className="text-sm font-bold tracking-wider uppercase">WORLD CLASS TRAINERS</span>
        </div>
        <h2 className="heading-h2 mb-6">Learn from the <span className="text-edu-indigo">Best in the World</span></h2>
        <p className="text-slate-600 text-lg">
          Our instructors are industry veterans, innovators, and leaders from top global tech companies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {trainers.map((trainer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-edu-slate via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-edu-indigo font-bold text-sm mb-2">{trainer.role}</p>
                <div className="flex items-center space-x-2 text-white/80 text-sm">
                  <Star className="w-4 h-4 text-edu-amber fill-current" />
                  <span className="font-bold text-white">{trainer.rating}</span>
                  <span>({trainer.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between px-4">
              <span className="text-slate-500 font-medium">{trainer.specialty}</span>
              <Link href={`/trainers/${index}`} className="p-2 bg-white text-edu-indigo rounded-full shadow-lg hover:bg-edu-indigo hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/trainers"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>Meet All Our Trainers</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default TrainersSection;
