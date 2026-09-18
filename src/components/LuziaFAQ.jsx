import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FAQS } from '../data/developerData';
import {
  sectionContainer,
  sectionItem,
  fadeUp,
  viewport,
  snappySpring,
  accordionContent,
  accordionIcon,
} from '../lib/motion';

export const LuziaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="py-12 sm:py-20 relative">
      <div className="max-w-[1140px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* ── Left: Title block ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E5] text-xs font-semibold text-[#111111] shadow-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              COMMON QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-[#111111]">
              Frequently Asked <br />
              <span className="text-[#888888] font-normal">Questions.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#666665] mt-3 leading-relaxed">
              Everything you need to know about working together, delivery timelines, and project scopes.
            </p>
          </motion.div>

          {/* ── Right: Accordion list ── */}
          <motion.div
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-8 space-y-3"
          >
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={sectionItem}
                  layout
                  className="bg-white rounded-2xl border border-[#E7E7E5] shadow-sm overflow-hidden"
                >
                  {/* Question row */}
                  <motion.button
                    {...{ whileHover: { backgroundColor: 'rgba(0,0,0,0.01)' } }}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-neutral-900"
                  >
                    <span>{faq.question}</span>

                    {/* Rotating + icon */}
                    <div className="p-1.5 rounded-full bg-neutral-100 text-neutral-600 flex-shrink-0">
                      <motion.div
                        {...accordionIcon(isOpen)}
                        transition={snappySpring}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Answer — animated height collapse */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        {...accordionContent}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal border-t border-neutral-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
