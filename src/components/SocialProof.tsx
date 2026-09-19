"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { springPreset } from "@/lib/motion";

export default function SocialProof() {
  const logos = [
    "Stripe",
    "Figma",
    "Linear",
    "Vercel",
    "Notion",
    "Raycast",
  ];

  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-[1140px] mx-auto px-6 space-y-6">
        {/* ROW 1: Awwwards Nominee Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 md:p-8 rounded-[24px] bg-white border border-[#E7E7E5] shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F2F0] text-[#111111]">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-[#111111] tracking-[-0.025em]">
                  Awwwards Site of the Day Nominee
                </h3>
                <span className="rounded-full bg-[#F2F2F0] px-2.5 py-0.5 text-xs font-medium text-[#333333]">
                  2025
                </span>
              </div>
              <p className="text-sm text-[#666665] mt-0.5">
                Recognized internationally for exceptional design, motion performance, and user experience.
              </p>
            </div>
          </div>

          <a
            href="https://awwwards.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 self-start sm:self-center text-sm font-medium text-[#111111] hover:text-[#666665] transition-colors"
          >
            <span>View Certificate</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* ROW 2: Samantha's Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[28px] bg-white border border-[#E7E7E5] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-8"
        >
          {/* Star rating */}
          <div className="flex items-center gap-1 text-[#111111]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl md:text-[28px] font-normal text-[#111111] leading-relaxed tracking-[-0.02em] max-w-4xl">
            “Michael delivered a transformative design for our SaaS platform in record time. His attention to detail, motion craftsmanship, and strategic understanding took our conversion rate up by 42% in the first quarter.”
          </blockquote>

          {/* Author Profile */}
          <div className="flex items-center gap-4 pt-2">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#E7E7E5] bg-[#F2F2F0]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Samantha Vance"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-[#111111] text-base">Samantha Vance</div>
              <div className="text-sm text-[#666665]">VP of Product at Lumina Health</div>
            </div>
          </div>
        </motion.div>

        {/* ROW 3: Metrics & Partner Logos Split */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Metrics Block (7 cols) */}
          <div className="lg:col-span-7 rounded-[28px] bg-white border border-[#E7E7E5] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <span className="rounded-full bg-[#F2F2F0] px-3.5 py-1 text-xs font-medium text-[#333333] w-fit mb-6">
              Track Record
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111]">
                  10+
                </div>
                <div className="text-sm text-[#666665] mt-1 font-normal">
                  Happy clients worldwide
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111]">
                  5+
                </div>
                <div className="text-sm text-[#666665] mt-1 font-normal">
                  Years of experience
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111]">
                  20+
                </div>
                <div className="text-sm text-[#666665] mt-1 font-normal">
                  Projects completed
                </div>
              </div>
            </div>
          </div>

          {/* Logos Block (5 cols) */}
          <div className="lg:col-span-5 rounded-[28px] bg-white border border-[#E7E7E5] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <span className="rounded-full bg-[#F2F2F0] px-3.5 py-1 text-xs font-medium text-[#333333]">
                Collaborations
              </span>
              <span className="text-xs text-[#666665]">Trusted by many</span>
            </div>

            <div className="grid grid-cols-3 gap-y-6 gap-x-4 items-center justify-items-center">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="text-sm font-semibold tracking-wider text-[#888888] hover:text-[#111111] transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
