"use client";

import React from "react";
import { Star, Users, Clock, PlayCircle } from "lucide-react";
import Link from "next/link";
import { TEACHERS } from "@/lib/data";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  price: string;
  rating: number;
  students: number;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  price,
  rating,
  students,
  image,
  level,
  category,
}) => {
  const teacher = TEACHERS.find(t => t.id === instructor);

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <PlayCircle className="text-white w-12 h-12 opacity-80" />
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-primary text-[9px] font-black uppercase tracking-widest rounded-md shadow-sm border border-white/20">
            {category}
          </span>
          <span className="px-2.5 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-md shadow-sm">
            {level}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-primary">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-black">{rating.toFixed(1)}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-200" />
          <div className="flex items-center gap-1 text-gray-400">
            <Users className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">{(students / 1000).toFixed(1)}k</span>
          </div>
        </div>

        <h3 className="text-sm font-black text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 h-10">
          <Link href={`/courses/${id}`}>{title}</Link>
        </h3>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center gap-2">
            <img 
              src={teacher?.image} 
              alt={teacher?.name} 
              className="w-6 h-6 rounded-full object-cover border border-gray-100"
            />
            <span className="text-[10px] font-bold text-gray-500">{teacher?.name}</span>
          </div>
          <span className="text-sm font-black text-primary">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
