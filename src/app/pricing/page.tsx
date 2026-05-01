"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, Zap, Rocket, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      icon: <Zap className="w-8 h-8" />,
      price: "Free",
      description: "Perfect for exploring the platform and starting your journey.",
      features: [
        "Access to free courses",
        "Community forum access",
        "Mobile app access",
        "Limited quizzes",
      ],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      icon: <Rocket className="w-8 h-8" />,
      price: "PKR 4,999",
      period: "/ month",
      description: "Best for serious learners looking to advance their careers.",
      features: [
        "All Basic features",
        "Access to all premium courses",
        "Downloadable resources",
        "Verified certificates",
        "Offline viewing",
      ],
      button: "Start Free Trial",
      popular: true,
    },
    {
      name: "Team",
      icon: <Trophy className="w-8 h-8" />,
      price: "PKR 14,999",
      period: "/ month",
      description: "Ideal for companies and small teams learning together.",
      features: [
        "All Pro features",
        "Up to 5 team members",
        "Admin dashboard",
        "Team progress tracking",
        "Priority support",
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-h1 mb-6">Simple, Transparent <span className="text-edu-indigo">Pricing</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white p-10 rounded-[2.5rem] border ${
                plan.popular ? "border-edu-indigo shadow-2xl shadow-edu-indigo/10 scale-105 z-10" : "border-slate-100 shadow-xl shadow-slate-100/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-edu-indigo text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className={`${plan.popular ? "text-edu-indigo" : "text-slate-400"} mb-6`}>
                {plan.icon}
              </div>

              <h3 className="heading-h3 text-2xl mb-2">{plan.name}</h3>
              <p className="text-slate-500 mb-8 h-12">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-slate-500 font-medium"> {plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-600">
                    <Check className="w-5 h-5 text-edu-emerald flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                  plan.popular
                    ? "bg-edu-indigo text-white shadow-xl shadow-edu-indigo/25 hover:bg-edu-indigo/90"
                    : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PricingPage;
