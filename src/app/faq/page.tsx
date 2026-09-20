"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessAndFaq from "@/components/sections/ProcessAndFaq";
import { motion } from "framer-motion";

export default function FAQPage() {
  return (
    <div className="relative min-h-screen bg-[#F8F8F7] text-[#111111]">
      <Navbar />

      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Header Section */}
        <section className="max-w-[1140px] mx-auto px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <span className="inline-block rounded-full bg-[#F4F4F3] border border-[#E7E7E5] px-3.5 py-1 text-xs font-medium text-[#333333]">
              Workflow &amp; Answers
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.025em] text-[#111111] leading-[1.12]">
              How it works &amp; FAQ
            </h1>
            <p className="text-base sm:text-lg text-[#666665] max-w-2xl leading-relaxed">
              Transparent workflows, expected timelines, collaboration tools, and answers to the most common questions.
            </p>
          </motion.div>
        </section>

        {/* Process Steps and FAQ Accordion */}
        <ProcessAndFaq />
      </main>

      <Footer />
    </div>
  );
}
