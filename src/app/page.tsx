"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import RecognitionSocialProof from "@/components/sections/RecognitionSocialProof";
import Services from "@/components/sections/Services";
import ProcessAndFaq from "@/components/sections/ProcessAndFaq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F8F7] text-[#111111]">
      {/* 1. Floating Pill Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="space-y-4 md:space-y-6">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Works Grid (2x2 Bento) */}
        <FeaturedWorks />

        {/* 4. 3-Row Recognition & Social Proof Block */}
        <RecognitionSocialProof />

        {/* 5. Services Section (Full-Width Responsive Cards & 3-Column Showcase) */}
        <Services />

        {/* 6. Process Steps ("How It Works") & FAQ Accordion */}
        <ProcessAndFaq />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
