import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const LuziaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What technologies do you specialize in?",
      a: "I specialize in modern TypeScript & JavaScript ecosystems including Next.js 15, React 19, Tailwind CSS, Node.js, PostgreSQL, and Cloudflare security systems."
    },
    {
      q: "How fast can you deliver an MVP or website?",
      a: "Typical startup MVPs and storefronts are delivered within 10-14 days. Larger full-stack enterprise applications typically take 2-4 weeks depending on scope."
    },
    {
      q: "Can you collaborate with existing engineering teams?",
      a: "Yes! I regularly collaborate with remote product teams, integrating with Git workflows, Jira/Linear, Figma designs, and automated CI/CD pipelines."
    },
    {
      q: "How do we start a project together?",
      a: "You can click 'Start a Project' or reach out directly on WhatsApp. We will discuss your project scope, timeline, and deliverables, followed by an immediate architectural proposal."
    }
  ];

  return (
    <section id="faqs" className="py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E2CF4]" />
              COMMON QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-neutral-900">
              Frequently Asked <br />
              <span className="text-neutral-400 font-medium">Questions.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
              Everything you need to know about working together, delivery timelines, and engineering standards.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-neutral-900 hover:text-[#6E2CF4] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1.5 rounded-full bg-neutral-100 text-neutral-600 flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal border-t border-neutral-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
