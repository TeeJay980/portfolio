import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Quote, Briefcase, Layers } from 'lucide-react';
import { DEVELOPER_INFO, WORK_EXPERIENCE, TESTIMONIALS, MY_STACKS } from '../data/developerData';
import { LuziaClientStrip } from '../components/LuziaClientStrip';
import { LuziaBentoProof } from '../components/LuziaBentoProof';
import { DevFooter } from '../components/DevFooter';

export const AboutPage = ({ onOpenBooking, onOpenEmail }) => {
  return (
    <div className="pt-24 sm:pt-32">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/30 via-purple-100/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        
        {/* About Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-[#0c0c0c] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ABOUT ME</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0c0c0c] tracking-tight leading-[1.1]">
              Designing with purpose, <br />
              <span className="text-[#8e8e93] font-normal">crafting with passion.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#6c7179] mt-4 leading-relaxed font-normal">
              {DEVELOPER_INFO.aboutStory}
            </p>

            <p className="text-xs sm:text-sm text-[#6c7179] mt-3 leading-relaxed">
              {DEVELOPER_INFO.aboutSubStory}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#0c0c0c] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEmail}
                className="px-5 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-[#0c0c0c] border border-black/[0.08] font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[36px] overflow-hidden bg-white p-2 shadow-luzia border border-black/[0.06]">
              <img
                src={DEVELOPER_INFO.portrait}
                alt={DEVELOPER_INFO.name}
                className="w-full h-full object-cover rounded-[28px]"
              />
            </div>
          </div>

        </div>

      </div>

      <LuziaClientStrip />

      {/* Work Experiences Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
              <Briefcase className="w-3.5 h-3.5 text-neutral-700" />
              <span>EXPERIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#0c0c0c] tracking-tight">
              Work Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#6c7179] mt-1">
              A track record of high-impact design leadership and craftsmanship.
            </p>
          </div>

          <div className="space-y-4">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 sm:p-7 rounded-[28px] bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#0c0c0c]">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-bold text-neutral-400">•</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0c0c0c]">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6c7179] mt-1.5 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>
                <div className="text-xs font-mono font-medium text-neutral-500 md:text-right flex-shrink-0">
                  {exp.period}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Stacks Section */}
      <section className="py-12 sm:py-16 bg-white/50 border-y border-black/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
              <Layers className="w-3.5 h-3.5 text-neutral-700" />
              <span>STACKS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#0c0c0c] tracking-tight">
              My Stacks & Tools
            </h2>
            <p className="text-xs sm:text-sm text-[#6c7179] mt-1">
              The modern creative suite and platforms I use to build world-class digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {MY_STACKS.map((stack, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm text-center flex flex-col items-center justify-center gap-2"
              >
                <span className="text-2xl">{stack.icon}</span>
                <span className="text-xs font-bold text-[#0c0c0c]">{stack.name}</span>
                <span className="text-[10px] text-[#6c7179] leading-tight">{stack.purpose}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
              <Quote className="w-3.5 h-3.5 text-neutral-700" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#0c0c0c] tracking-tight">
              What Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-[#6c7179] mt-1">
              Kind words from founders, executives, and creative partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-[28px] bg-white border border-black/[0.06] shadow-luzia flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic font-normal">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-100">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0c0c0c]">{t.name}</h4>
                    <p className="text-[11px] text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DevFooter onOpenBooking={onOpenBooking} onOpenEmail={onOpenEmail} />
    </div>
  );
};
