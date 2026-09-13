import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../data/developerData';

export const LuziaWorkflow = () => {
  return (
    <section id="process" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-[#0a0a0a] text-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-12 lg:p-16 relative overflow-hidden border border-white/[0.08] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6),0_0_80px_rgba(59,130,246,0.14)] bg-noise">
        
        {/* Ambient Blue Edge Aura */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-500/12 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              HOW IT WORKS
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
              A structured process <br />
              <span className="text-[#8e8e93] font-normal">designed for speed & quality.</span>
            </h2>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            {HOW_IT_WORKS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-[24px] bg-[#141416] border border-white/[0.07] hover:border-white/20 transition-all flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#202024] flex items-center justify-center text-xs font-mono font-bold text-neutral-300 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-display font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs text-[#8e8e93] mt-2.5 leading-relaxed font-normal">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
