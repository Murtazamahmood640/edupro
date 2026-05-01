import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyChoose from "@/components/home/WhyChoose";
import TrainersSection from "@/components/home/TrainersSection";
import Testimonials from "@/components/home/Testimonials";
import Levels from "@/components/home/Levels";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="bg-white py-12 border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Happy Students", value: "50,000+" },
              { label: "Premium Courses", value: "1,200+" },
              { label: "Student Rating", value: "4.9/5" },
              { label: "Expert Instructors", value: "150+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-3xl font-display font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedCourses />
      <WhyChoose />
      <Levels />
      <TrainersSection />
      <Testimonials />

      {/* CTA Section */}
      <section className="section-container">
        <div className="bg-edu-indigo rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl shadow-edu-indigo/40">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="heading-h1 text-white mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
              Join over 50,000+ students already learning on EduPro Academy. Get access to premium courses, expert instructors, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth/signup"
                className="w-full sm:w-auto px-10 py-4 bg-white text-edu-indigo rounded-xl font-bold hover:bg-indigo-50 transition-all active:scale-95 shadow-xl"
              >
                Get Started for Free
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-10 py-4 bg-edu-indigo border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
