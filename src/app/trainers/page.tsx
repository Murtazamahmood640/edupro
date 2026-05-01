"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Star, MessageCircle, ArrowRight, Award, Linkedin, Share2, Globe } from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

const trainers = [
  {
    name: "Dr. John Smith",
    role: "Senior Software Engineer at Google",
    specialty: "Web Development & Cloud",
    bio: "With over 15 years of experience in full-stack development, John has helped thousands of students master the web.",
    rating: 4.9,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    name: "Sarah Jenkins",
    role: "Lead UI/UX Designer at Figma",
    specialty: "Product Design & Research",
    bio: "Sarah is a design visionary who believes that good design is invisible. She teaches the art of user-centric creation.",
    rating: 5.0,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    name: "Alex Rivera",
    role: "Data Scientist at Meta",
    specialty: "AI & Machine Learning",
    bio: "Alex breaks down complex algorithms into simple, understandable concepts for anyone to grasp.",
    rating: 4.8,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    name: "Emily Davis",
    role: "Digital Marketing Head at Netflix",
    specialty: "Growth Marketing & SEO",
    bio: "Emily has managed multi-million dollar marketing campaigns and shares her secrets to digital growth.",
    rating: 4.9,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=800",
  },
];

const TrainersPage = () => {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <section className="pt-32 pb-20 bg-white overflow-hidden relative border-b border-slate-100">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-edu-violet/5 blur-3xl rounded-full -translate-x-1/4 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-edu-indigo rounded-full mb-6"
            >
              <Award className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold tracking-wider uppercase">EXPERT INSTRUCTORS</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-h1 mb-6"
            >
              Our Best <span className="text-edu-indigo">Trainers</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              Learn from the world's most experienced professionals who are passionate about sharing their knowledge and helping you grow.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img src={trainer.image} alt={trainer.name} className="object-cover w-full h-full" />
              </div>

              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="heading-h3 text-2xl mb-1">{trainer.name}</h3>
                  <p className="text-edu-indigo font-bold">{trainer.role}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-edu-amber">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 font-bold text-slate-900">{trainer.rating}</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <span className="text-sm text-slate-500 font-medium">{trainer.reviews} Reviews</span>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {trainer.bio}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-edu-indigo transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-edu-indigo transition-colors">
                      <Share2 className="w-4 h-4" />

                    </a>
                    <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-edu-indigo transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                  <Link href={`/trainers/${index}`} className="btn-primary py-2 px-6 text-sm">
                    View Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TrainersPage;
