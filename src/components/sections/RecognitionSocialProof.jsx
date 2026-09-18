import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const hoverProps = {
  whileHover: {
    y: -2,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
};

export const RecognitionSocialProof = () => {
  return (
    <section className="max-w-[1140px] mx-auto px-6 my-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        {/* ════════ ROW 1: Awwwards Nominee Card ════════ */}
        <motion.div
          variants={cardVariants}
          {...hoverProps}
          className="bg-white rounded-[24px] p-6 border border-[#E7E7E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F2F2F0] border border-[#E7E7E5] flex items-center justify-center text-[#111111] flex-shrink-0">
              <Award className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#888888] block">
                Recognition
              </span>
              <h3 className="text-lg font-semibold text-[#111111] tracking-tight">
                Awwwards Nominee
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#666665] max-w-md font-normal">
            Recognized for excellence in web design and innovative digital experiences.
          </p>
        </motion.div>

        {/* ════════ ROW 2: Testimonial Card ════════ */}
        <motion.div
          variants={cardVariants}
          {...hoverProps}
          className="bg-white rounded-[24px] p-8 md:p-10 border border-[#E7E7E5] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
        >
          <p className="text-xl md:text-2xl text-[#111111] font-normal leading-relaxed tracking-[-0.015em]">
            &ldquo;Carter&apos;s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200 border border-[#E7E7E5] flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80"
                alt="Samantha"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#111111]">Samantha</h4>
              <p className="text-xs text-[#737373]">Founder at NexaTech</p>
            </div>
          </div>
        </motion.div>

        {/* ════════ ROW 3: Stats & Logos Grid ════════ */}
        <motion.div
          variants={cardVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >
          {/* Left: Metrics (span 7) */}
          <motion.div
            {...hoverProps}
            className="md:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 border border-[#E7E7E5] grid grid-cols-1 sm:grid-cols-3 gap-6 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
          >
            {[
              { number: '10+', label: 'happy clients' },
              { number: '5+', label: 'years of experiences' },
              { number: '20+', label: 'projects completed' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col justify-center">
                <span className="text-3xl font-semibold text-[#111111] tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#737373] mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right: Trusted By (span 5) */}
          <motion.div
            {...hoverProps}
            className="md:col-span-5 bg-white rounded-[24px] p-6 sm:p-8 border border-[#E7E7E5] flex flex-col justify-between gap-4 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#888888]">
              Trusted by many
            </span>
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-bold tracking-tight text-[#444444]">
              <span className="hover:text-[#111111] transition-colors">Lumex</span>
              <span className="hover:text-[#111111] transition-colors">Pulma</span>
              <span className="hover:text-[#111111] transition-colors">Planza</span>
              <span className="hover:text-[#111111] transition-colors">Horizon</span>
              <span className="hover:text-[#111111] transition-colors">NexaTech</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RecognitionSocialProof;
