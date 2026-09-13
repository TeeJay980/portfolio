import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const LuziaBentoProof = () => {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Awwwards Nominee (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 bg-white rounded-[32px] p-6 sm:p-7 border border-black/[0.06] shadow-luzia flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-neutral-100 text-neutral-900 border border-black/[0.06] mb-5">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-extrabold text-[#0c0c0c]">
                Awwwards Nominee
              </h3>
              <p className="text-xs text-[#6c7179] mt-2 leading-relaxed">
                Recognized for excellence in web design and innovative digital experiences across creative industries.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Honor
              </span>
              <span className="font-bold text-[#0c0c0c]">Site of the Day</span>
            </div>
          </motion.div>

          {/* Card 2: Featured Client Testimonial (Samantha) (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="md:col-span-4 bg-[#0c0c0c] text-white rounded-[32px] p-6 sm:p-7 border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="p-3 w-fit rounded-2xl bg-white/10 text-white border border-white/10 mb-4">
                <Quote className="w-4 h-4 text-neutral-300" />
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-200 leading-relaxed italic font-normal">
                "Carter’s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-800 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                  alt="Samantha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Samantha Chen</span>
                <span className="text-[10px] text-neutral-400 block">Founder at NexaTech</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Metrics Stack (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="md:col-span-4 bg-white rounded-[32px] p-6 sm:p-7 border border-black/[0.06] shadow-luzia flex flex-col justify-between"
          >
            <div className="space-y-3.5 my-auto">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-700">Happy Clients</span>
                <span className="text-xl font-display font-black text-[#0c0c0c]">10+</span>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-700">Years Experience</span>
                <span className="text-xl font-display font-black text-[#0c0c0c]">5+</span>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-700">Projects Completed</span>
                <span className="text-xl font-display font-black text-[#0c0c0c]">20+</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
