import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Smartphone, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/developerData';
import {
  sectionContainer,
  sectionItem,
  fadeUp,
  viewport,
  snappySpring,
  buttonHover,
} from '../lib/motion';

const SERVICE_ICONS = [
  <Palette className="w-5 h-5 text-[#0c0c0c]" />,
  <Layout  className="w-5 h-5 text-[#0c0c0c]" />,
  <Smartphone className="w-5 h-5 text-[#0c0c0c]" />,
];

export const LuziaServices = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-12 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-xl mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-semibold text-neutral-800 shadow-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            SERVICES
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-[#0c0c0c]">
            Comprehensive design &amp; <br />
            <span className="text-[#8e8e93] font-normal">development capabilities.</span>
          </h2>
        </motion.div>

        {/* ── Staggered 3-column service cards ── */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              variants={sectionItem}
              whileHover={{ y: -6, transition: snappySpring }}
              className="bg-white rounded-[32px] p-6 sm:p-8 border border-black/[0.06] shadow-luzia flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="p-3 w-fit rounded-2xl bg-neutral-100 border border-black/[0.06] mb-5">
                  {SERVICE_ICONS[idx]}
                </div>

                <h3 className="text-xl font-display font-bold text-[#0c0c0c]">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6c7179] mt-2 leading-relaxed font-normal">
                  {srv.description}
                </p>

                {/* Deliverables checklist */}
                <div className="mt-6 space-y-2 pt-4 border-t border-neutral-100">
                  {srv.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-neutral-900 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-8 pt-4 border-t border-neutral-100">
                <motion.button
                  {...buttonHover}
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-2xl bg-[#0c0c0c] hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Inquire Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
