"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of design projects do you take on?",
    answer:
      "I specialize in end-to-end digital product design (web apps, SaaS platforms, mobile applications) and high-impact marketing websites built with Framer or Next.js.",
  },
  {
    question: "How fast can you deliver a typical project?",
    answer:
      "A complete landing page or brand website typically takes 2 to 3 weeks from brief to live launch. Full SaaS product design sprints generally take 4 to 6 weeks depending on scope.",
  },
  {
    question: "Do you also code the designs or just deliver Figma files?",
    answer:
      "Both! I provide production-ready Figma design systems as well as fully functional, interactive Framer or Next.js + Tailwind CSS codebases ready for immediate deployment.",
  },
  {
    question: "How do we collaborate during the project?",
    answer:
      "We communicate via dedicated Slack or Discord channels, with async Loom video walkthroughs and weekly scheduled Zoom check-ins to review progress and gather feedback.",
  },
  {
    question: "What is your pricing and payment structure?",
    answer:
      "Projects are either scoped at a fixed milestone-based rate (50% upfront, 50% upon final sign-off) or via a monthly dedicated design & development retainer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6 space-y-8">
        {/* Section Header with Scroll Reveal */}
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
                className="overflow-hidden rounded-[24px] border border-[#E7E7E5] bg-white transition-colors duration-300 hover:border-[#D2D2CF] shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
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
      </div>
    </section>
  );
}
