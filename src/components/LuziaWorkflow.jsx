import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const LuziaWorkflow = () => {
  const steps = [
    { num: '01', title: 'Discovery & Scope', desc: 'We align on your product vision, target audience, technical specifications, and key deliverables.' },
    { num: '02', title: 'Architecture & Design', desc: 'Crafting responsive layouts, component hierarchies, database schemas, and UX interactions.' },
    { num: '03', title: 'Build & Iterate', desc: 'Clean, type-safe full-stack development with weekly preview milestones and rapid feedback cycles.' },
    { num: '04', title: 'Testing & Launch', desc: 'Performance audits (100/100 Lighthouse), cross-browser validation, and smooth production deployment.' },
    { num: '05', title: 'Scale & Support', desc: 'Ongoing optimization, telemetry monitoring, and feature iteration as your user base grows.' }
  ];

  return (
    <section id="process" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-neutral-950 text-white rounded-[32px] p-6 sm:p-12 lg:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6E2CF4]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#6E2CF4] border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E2CF4] animate-pulse" />
              HOW IT WORKS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              A structured process designed for <span className="text-[#6E2CF4]">speed & quality.</span>
            </h2>
          </div>

          {/* Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#6E2CF4] font-extrabold">{step.num}</span>
                  <h3 className="text-base font-display font-bold text-white mt-3">{step.title}</h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
