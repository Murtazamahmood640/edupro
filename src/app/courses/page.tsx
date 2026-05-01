"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/ui/CourseCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Development", "Design", "Programming", "Data Science", "Marketing"];

const allCourses = [
  {
    title: "Web Development Complete Course",
    category: "Development",
    instructor: "John Doe",
    rating: 4.8,
    students: 2431,
    price: "PKR 8,999",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Beginner" as const,
  },
  {
    title: "UI/UX Design Mastery",
    category: "Design",
    instructor: "Sarah Khan",
    rating: 4.9,
    students: 1892,
    price: "PKR 12,999",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Intermediate" as const,
  },
  {
    title: "Python Programming for Professionals",
    category: "Programming",
    instructor: "Ahmed Raza",
    rating: 4.7,
    students: 2501,
    price: "PKR 15,999",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Advanced" as const,
  },
  {
    title: "Data Science & Machine Learning",
    category: "Data Science",
    instructor: "Michael Chen",
    rating: 4.9,
    students: 1521,
    price: "PKR 18,999",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Advanced" as const,
  },
  {
    title: "Advanced React & Next.js",
    category: "Development",
    instructor: "David Wilson",
    rating: 4.9,
    students: 1240,
    price: "PKR 10,999",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Advanced" as const,
  },
  {
    title: "Graphic Design Fundamentals",
    category: "Design",
    instructor: "Emma Watson",
    rating: 4.6,
    students: 3100,
    price: "PKR 7,999",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600&h=400",
    level: "Beginner" as const,
  },
];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <section className="pt-32 pb-12 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-edu-indigo/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-h2 mb-2">Explore <span className="text-edu-indigo">Courses</span></h1>
              <p className="text-slate-500">Discover your next favorite course from our expert-led catalog.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative max-w-md w-full"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-edu-indigo/20 focus:border-edu-indigo transition-all shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-container">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-slate-900 font-bold mr-4">
            <Filter className="w-5 h-5" />
            <span>Categories:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-edu-indigo text-white shadow-lg shadow-edu-indigo/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-edu-indigo hover:text-edu-indigo"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-slate-500">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CoursesPage;
