import React from 'react';
import { motion } from 'framer-motion';

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
      <div className="max-w-6xl mx-auto bg-[#0c0c0c] text-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden border border-white/[0.08] shadow-[0_0_60px_rgba(59,130,246,0.12)]">
        
        {/* Ambient Blue Edge Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              HOW IT WORKS
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
              A structured process <br />
              <span className="text-[#888888] font-normal">designed for speed & quality.</span>
            </h2>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-[24px] bg-[#141518] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-full bg-[#222328] flex items-center justify-center text-xs font-mono font-bold text-neutral-300 mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-base font-display font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs text-[#888888] mt-2.5 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
