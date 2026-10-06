"use client";

import Hero from "@/components/sections/Hero";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import RecognitionSocialProof from "@/components/sections/RecognitionSocialProof";
import ProcessAndFaq from "@/components/sections/ProcessAndFaq";

export default function Home() {
  return (
    <main className="space-y-4 md:space-y-6">
      {/* Hero Section */}
      <Hero />

      {/* Featured Works Grid */}
      <FeaturedWorks />

      {/* Recognition & Social Proof Block */}
      <RecognitionSocialProof />

      {/* Process Steps ("How It Works") & FAQ Accordion */}
      <ProcessAndFaq />
    </main>
  );
}
