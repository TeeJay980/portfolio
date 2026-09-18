"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RecognitionSocialProof() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        {/* ROW 1: Awwwards Nominee Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="group flex flex-col md:flex-row items-start md:items-center justify-between p-7 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm transition-colors hover:border-neutral-700"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-200">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Recognition
              </span>
              <h3 className="text-lg font-semibold text-white">Awwwards Nominee</h3>
            </div>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-neutral-400 max-w-md">
            Recognized for excellence in web design and innovative digital experiences.
          </p>
        </motion.div>

        {/* ROW 2: Testimonial Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm transition-colors hover:border-neutral-700"
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-200">
            &ldquo;Carter&apos;s design expertise goes beyond aesthetics—he crafts experiences that
            truly connect with users. A great collaborator and a problem-solver at heart.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-500 flex items-center justify-center text-xs font-bold text-white">
              S
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Samantha</h4>
              <p className="text-xs text-neutral-400">Founder at NexaTech</p>
            </div>
          </div>
        </motion.div>

        {/* ROW 3: Stats & Social Proof Metrics Grid */}
        <motion.div
          variants={cardVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { metric: "10+", label: "happy clients" },
            { metric: "5+", label: "years of experiences" },
            { metric: "20+", label: "projects completed" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-center items-center text-center transition-colors hover:border-neutral-700"
            >
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                {stat.metric}
              </span>
              <span className="mt-1 text-xs text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default RecognitionSocialProof;
