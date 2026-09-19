"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F8F7] text-[#111111]">
      {/* 1. Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="space-y-4 md:space-y-6">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Works Grid (2x2 Asymmetric Bento) */}
        <FeaturedWorks />

        {/* 4. Recognition & Social Proof Block (3-Row Stack) */}
        <SocialProof />

        {/* 5. Services Section (Full-Width Responsive Cards) */}
        <Services />

        {/* 6. Process ("How It Works") */}
        <Process />

        {/* 7. FAQ Accordion */}
        <FAQ />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
