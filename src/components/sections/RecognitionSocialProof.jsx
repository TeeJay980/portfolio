import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, Sparkles, ArrowUpRight } from 'lucide-react';

const rowContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

const rowItemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardHoverProps = {
  whileHover: {
    y: -3,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
};

export const RecognitionSocialProof = () => {
  return (
    <section className="py-12 sm:py-20 relative bg-[#F3F4F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Staggered 3-Row Container ── */}
        <motion.div
          variants={rowContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-4 sm:space-y-5"
        >

          {/* ════════ ROW 1: Awwwards Nominee Card ════════ */}
          <motion.div
            variants={rowItemVariants}
            {...cardHoverProps}
            className="group relative bg-white dark:bg-neutral-900/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400/80 dark:hover:border-neutral-600 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 overflow-hidden cursor-default"
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-32 bg-amber-500/[0.04] rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              {/* Ribbon / Star badge icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-black/[0.06] dark:border-white/10 flex items-center justify-center flex-shrink-0 text-amber-500 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Honor Award
                  </span>
                  <span className="text-xs font-medium text-neutral-400">• 2025</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] dark:text-white tracking-tight">
                  Awwwards Nominee
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed max-w-xl font-normal">
                  Recognized for excellence in web design and innovative digital experiences across creative industries.
                </p>
              </div>
            </div>

            {/* Right Badge / Status */}
            <div className="flex items-center gap-3 self-end md:self-center">
              <div className="px-4 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/70 dark:border-neutral-700/60 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5 shadow-sm">
                <span>Site of the Day</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </motion.div>


          {/* ════════ ROW 2: Testimonial Quote ════════ */}
          <motion.div
            variants={rowItemVariants}
            {...cardHoverProps}
            className="group relative bg-[#0c0c0c] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-800 hover:border-neutral-600 transition-colors duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between gap-6 overflow-hidden cursor-default"
          >
            {/* Ambient gradient */}
            <div className="absolute top-0 right-0 w-72 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex items-start gap-4 sm:gap-5">
              <div className="p-3 w-fit rounded-2xl bg-white/10 text-neutral-200 border border-white/10 flex-shrink-0">
                <Quote className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <blockquote className="text-sm sm:text-base md:text-lg text-neutral-100 font-normal leading-relaxed tracking-tight">
                  &ldquo;Carter&apos;s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Author Info */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-800 border border-white/20 flex-shrink-0 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80"
                    alt="Samantha"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Samantha</span>
                  <span className="text-xs text-neutral-400 block font-normal">Founder at NexaTech</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Client</span>
              </div>
            </div>
          </motion.div>


          {/* ════════ ROW 3: Metrics & Social Proof Grid ════════ */}
          <motion.div
            variants={rowItemVariants}
            {...cardHoverProps}
            className="group relative bg-white dark:bg-neutral-900/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400/80 dark:hover:border-neutral-600 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-default overflow-hidden"
          >
            {/* Top: 3 Metric Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { count: '10+', label: 'happy clients' },
                { count: '5+', label: 'years of experiences' },
                { count: '20+', label: 'projects completed' },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 flex flex-col justify-between"
                >
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#111111] dark:text-white tracking-tight">
                    {metric.count}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 capitalize mt-1 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom: Trusted By Many Partner Strip */}
            <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Trusted by many
              </span>

              <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs font-display font-bold text-neutral-500 dark:text-neutral-400">
                <span className="hover:text-neutral-900 dark:hover:text-white transition-colors">Lumex</span>
                <span className="hover:text-neutral-900 dark:hover:text-white transition-colors">Pulma</span>
                <span className="hover:text-neutral-900 dark:hover:text-white transition-colors">Planza</span>
                <span className="hover:text-neutral-900 dark:hover:text-white transition-colors">Horizon</span>
                <span className="hover:text-neutral-900 dark:hover:text-white transition-colors">NexaTech</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default RecognitionSocialProof;
