"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import CourseCard from "../ui/CourseCard";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Web Development Complete Course",
    category: "Development",
    instructor: "John Doe",
    rating: 4.8,
    students: 2431,
    price: "PKR 8,999",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Beginner",
  },
  {
    title: "UI/UX Design Mastery",
    category: "Design",
    instructor: "Sarah Khan",
    rating: 4.9,
    students: 1892,
    price: "PKR 12,999",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Intermediate",
  },
  {
    title: "Python Programming for Professionals",
    category: "Programming",
    instructor: "Ahmed Raza",
    rating: 4.7,
    students: 2501,
    price: "PKR 15,999",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Advanced",
  },
  {
    title: "Data Science & Machine Learning",
    category: "Data Science",
    instructor: "Michael Chen",
    rating: 4.9,
    students: 1521,
    price: "PKR 18,999",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Advanced",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="section-container bg-slate-50/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 text-edu-indigo font-bold tracking-widest uppercase text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Top Picks</span>
          </div>
          <h2 className="heading-h2 mb-4">Featured Courses</h2>
          <p className="text-slate-600 text-lg">
            Choose from over 1,200+ online video courses with new additions published every month.
          </p>
        </div>
        <Link
          href="/courses"
          className="group flex items-center space-x-2 text-edu-indigo font-bold hover:underline"
        >
          <span>View All Courses</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
