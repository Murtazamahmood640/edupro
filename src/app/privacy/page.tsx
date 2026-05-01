import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-h1 mb-8">Privacy Policy</h1>
          <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100 prose prose-slate max-w-none">
            <p className="text-slate-500 mb-8">Last updated: May 01, 2026</p>
            
            <section className="space-y-6">
              <h2 className="heading-h3">1. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed">
                We collect information you provide directly to us when you create an account, enroll in a course, participate in community forums, or communicate with us. This may include your name, email address, payment information, and any other information you choose to provide.
              </p>

              <h2 className="heading-h3">2. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide, maintain, and improve our services;</li>
                <li>Process transactions and send related information;</li>
                <li>Send you technical notices, updates, and support messages;</li>
                <li>Communicate with you about products, services, and events;</li>
                <li>Monitor and analyze trends, usage, and activities.</li>
              </ul>

              <h2 className="heading-h3">3. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>

              <h2 className="heading-h3">4. Your Choices</h2>
              <p className="text-slate-600 leading-relaxed">
                You may update, correct or delete information about you at any time by logging into your online account or emailing us at support@edupro.com.
              </p>

              <h2 className="heading-h3">5. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <span className="font-bold text-edu-indigo">privacy@edupro.com</span>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPage;
