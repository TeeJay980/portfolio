"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Project Brief",
    description: "Synthesizing requirements into structured wireframes, user journeys, design references, and technical constraints.",
  },
  {
    number: "02",
    title: "Develop",
    description: "Iterative high-fidelity UI design, component system architecture, and interactive prototyping with weekly check-ins.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "Pixel-perfect implementation, production deployment, CMS setup, and comprehensive design token handoff.",
  },
  {
    number: "04",
    title: "Support",
    description: "Post-launch warranty, performance optimization, team training, and continuous product evolution.",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What’s your typical project timeline?",
    answer:
      "Standard landing pages and portfolio sites take between 1 to 2 weeks. More complex web applications with bespoke interactive features typically take 3 to 4 weeks from project brief to deployment.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! Every project includes iterative feedback rounds during both the design and development phases to ensure the final product exceeds your expectations.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A brief overview of your goals, any existing brand assets or inspirations, target audience details, and your preferred launch timeline.",
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer:
      "Absolutely. I adapt seamlessly to existing design systems, typography guidelines, and brand identities while ensuring clean code and modern aesthetics.",
  },
  {
    question: "Do you provide post-project support?",
    answer:
      "Yes, I provide post-launch support and warranty to address any questions, optimize performance, and assist with updates.",
  },
  {
    question: "What’s the best way to reach you?",
    answer:
      "The fastest way to reach me is via email at mctjay80@gmail.com or via WhatsApp. I typically reply within a few hours.",
  },
];

export default function ProcessAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const staircaseOffsets = [
    "md:ml-0 md:mr-24 lg:mr-32",
    "md:ml-8 lg:ml-12 md:mr-16 lg:mr-24",
    "md:ml-16 lg:ml-24 md:mr-8 lg:mr-16",
    "md:ml-24 lg:ml-36 md:mr-0",
  ];

  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-16">
      {/* 1. Process Section with Staircase Layout & Hover Reveal */}
      <section className="max-w-[1140px] mx-auto px-6 space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3.5 py-1.5 text-xs font-medium text-[#333333]">
            Workflow
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-3">
            How it works
          </h2>
          <p className="text-sm text-[#666665] mt-1">
            Hover over any step to reveal its execution details
          </p>
        </motion.div>

        {/* Staircase Steps List */}
        <div className="space-y-3 md:space-y-4">
          {steps.map((step, idx) => {
            const isHovered = hoveredStep === idx;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setHoveredStep(isHovered ? null : idx)}
                className={`group relative overflow-hidden rounded-[24px] border transition-all duration-300 cursor-pointer ${
                  staircaseOffsets[idx % staircaseOffsets.length]
                } ${
                  isHovered
                    ? "border-[#111111] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
                    : "border-[#E7E7E5] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-[#D2D2CF]"
                } p-6 md:p-7`}
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Step Number & Title */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold font-mono transition-all duration-300 ${
                        isHovered
                          ? "bg-[#111111] text-white"
                          : "bg-[#F4F4F3] text-[#888888] group-hover:bg-[#111111] group-hover:text-white"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-[#111111] tracking-[-0.025em]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Staircase Step Level Indicator Pill */}
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block rounded-full bg-[#F4F4F3] px-3 py-1 text-xs font-medium text-[#737373] transition-colors group-hover:bg-[#EAEAE8]">
                      Step {step.number}
                    </span>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ${
                        isHovered ? "rotate-45 bg-[#111111] text-white" : "bg-[#F4F4F3] text-[#888888]"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Animated Content Reveal on Hover */}
                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.div
                      key="desc"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="pt-3 border-t border-[#F2F2F0]">
                        <p className="text-sm sm:text-base text-[#666665] leading-relaxed max-w-2xl">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. FAQ Section Designed to Match Reference Image */}
      <section id="faq" className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow + Divided Headline + Email CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            {/* Top Eyebrow with Divider Line */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#737373]">FAQs</span>
              <div className="h-[1px] flex-1 max-w-[220px] bg-[#E7E7E5]" />
            </div>

            {/* Display Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-normal tracking-[-0.025em] text-[#737373] leading-[1.2]">
              Answers to common questions to help you understand{" "}
              <span className="font-semibold text-[#111111]">
                the process and how we can work together
              </span>
            </h2>

            {/* Email Me Button with Soft Floating Shadow */}
            <div className="pt-2">
              <a
                href="mailto:mctjay80@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] hover:bg-[#222222] active:scale-95 transition-all duration-200"
              >
                Email Me
              </a>
            </div>
          </motion.div>

          {/* Right Column: Rounded Card Container with Floating Badge & FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Card Shell */}
            <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#F4F4F3] border border-[#E7E7E5] p-4 sm:p-6 md:p-8 pt-8 sm:pt-9 shadow-sm space-y-3">
              {/* Floating Top Badge */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-10">
                <div className="inline-flex items-center justify-center rounded-full bg-[#111111] text-white px-5 py-2 text-xs sm:text-sm font-medium shadow-[0_12px_28px_rgba(0,0,0,0.22)] whitespace-nowrap">
                  I&apos;m here to help you
                </div>
              </div>

              {/* FAQ Accordion List Items */}
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`overflow-hidden border border-[#E7E7E5] bg-white transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.015)] hover:border-[#D2D2CF] ${
                      isOpen ? "rounded-[22px]" : "rounded-full"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 text-left transition-colors active:scale-[0.99]"
                    >
                      <span className="text-sm sm:text-base font-medium text-[#111111] tracking-[-0.015em] pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                        className="flex h-6 w-6 shrink-0 items-center justify-center text-[#888888]"
                      >
                        <Plus className="h-4 w-4 stroke-[2]" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-[#666665] leading-relaxed border-t border-[#F4F4F3]">
                            <p className="pt-3.5">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
