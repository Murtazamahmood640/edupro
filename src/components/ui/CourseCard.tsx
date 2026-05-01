"use client";

import React from "react";
import Image from "next/image";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Link from "next/link";

interface CourseCardProps {
  id?: string;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  price: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

const CourseCard: React.FC<CourseCardProps> = ({
  id = "1",
  title,
  category,
  instructor,
  rating,
  students,
  price,
  image,
  level,
}) => {
  const levelColors = {
    Beginner: "bg-blue-100 text-blue-600",
    Intermediate: "bg-edu-amber/10 text-edu-amber",
    Advanced: "bg-edu-indigo/10 text-edu-indigo",
  };

  return (
    <Link href={`/courses/${id}`} className="block">
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group h-full"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${levelColors[level]}`}>
              {level}
            </span>
          </div>
        </div>

        <div className="p-6">
          <p className="text-xs font-bold text-edu-indigo uppercase tracking-widest mb-2">{category}</p>
          <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-edu-indigo transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center text-edu-amber">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 text-sm font-bold text-slate-900">{rating}</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center text-slate-500">
              <Users className="w-4 h-4" />
              <span className="ml-1 text-sm font-medium">{students.toLocaleString()} Students</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-50">
            <div>
              <p className="text-xs text-slate-400 font-medium">Instructor</p>
              <p className="text-sm font-bold text-slate-700">{instructor}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-display font-bold text-edu-indigo">{price}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
