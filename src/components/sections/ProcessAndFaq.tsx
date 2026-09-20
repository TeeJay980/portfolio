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
    question: "What types of web projects do you take on?",
    answer:
      "I build clean, responsive websites and interactive web applications using HTML, CSS, JavaScript, and React.",
  },
  {
    question: "How fast can you deliver a typical project?",
    answer:
      "A standard website typically takes 1 to 2 weeks from project brief to live deployment.",
  },
  {
    question: "Do you code the websites from scratch?",
    answer:
      "Yes! I write clean, structured code using HTML5, modern CSS3, JavaScript, and React components.",
  },
  {
    question: "How do we collaborate during a project?",
    answer:
      "We collaborate via WhatsApp, email, Slack, or Discord with frequent progress updates and live preview links.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Projects are scoped simply with transparent milestones based on the size and requirements of your website.",
  },
];

export default function ProcessAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

      {/* 2. FAQ Accordion Section */}
      <section id="faq" className="max-w-[1140px] mx-auto px-6 space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3.5 py-1.5 text-xs font-medium text-[#333333]">
            Common Questions
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-[#111111] mt-3">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-[24px] border border-[#E7E7E5] bg-white transition-all duration-300 hover:border-[#D2D2CF] shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left transition-colors active:scale-[0.99]"
                >
                  <span className="text-lg md:text-xl font-medium tracking-[-0.02em] text-[#111111]">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4F4F3] text-[#111111]"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-base text-[#666665] leading-relaxed border-t border-[#F2F2F0]">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
