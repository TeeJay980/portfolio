"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Book a Call",
    description: "Introductory 30-minute discovery conversation to align on project goals, scope, timeline, and vision.",
  },
  {
    number: "02",
    title: "Project Brief",
    description: "Synthesizing requirements into structured wireframes, user journeys, design references, and technical constraints.",
  },
  {
    number: "03",
    title: "Develop & Design",
    description: "Iterative high-fidelity UI design, component system architecture, and interactive prototyping with weekly check-ins.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Pixel-perfect implementation, production deployment, CMS setup, and comprehensive design token handoff.",
  },
  {
    number: "05",
    title: "Support",
    description: "Post-launch warranty, performance optimization, team training, and continuous product evolution.",
  },
];

export default function Process() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6 space-y-8">
        {/* Section Header with Scroll Reveal */}
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
        </motion.div>

        {/* 5 Process Steps as Rounded Horizontal Cards */}
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[24px] border border-[#E7E7E5] bg-white p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-[#D2D2CF]"
            >
              <div className="flex items-start sm:items-center gap-6">
                <span className="text-xl font-bold tracking-tight text-[#888888] font-mono">
                  {step.number}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-[#111111] tracking-[-0.025em]">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#666665] max-w-lg leading-relaxed sm:text-right">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
