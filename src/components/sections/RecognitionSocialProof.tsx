"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function RecognitionSocialProof() {
  return (
    <section id="about" className="py-8 md:py-16">
      <div className="flex flex-col gap-5 sm:gap-6 max-w-[1140px] mx-auto px-4 sm:px-6 my-6 sm:my-10 md:my-16">
        {/* ROW 1: Samantha's Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] bg-white border border-[#E7E7E5] p-6 sm:p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-6 sm:space-y-8 transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          {/* Star rating */}
          <div className="flex items-center gap-1 text-[#EFCE03]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="space-y-3 text-base sm:text-xl md:text-[22px] font-normal text-[#111111] leading-relaxed tracking-[-0.015em] max-w-4xl">
            <p>
              “I really enjoyed working with you on my website! You did a great job bringing my ideas to life, and I love how clean, simple, and professional the website looks.”
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#555554]">
              “I also really appreciate your patience and willingness to make adjustments whenever I had suggestions. You’re still growing and building your experience, but your creativity and dedication are already evident in your work. I’m genuinely happy with the result, and I’m rooting for you as you continue to grow and improve. Keep up the good work! 👏🏽✨”
            </p>
          </blockquote>

          {/* Author Profile */}
          <div className="flex items-center gap-3.5 sm:gap-4 pt-1 sm:pt-2">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full border border-[#E7E7E5] bg-[#F4F4F3]">
              <Image
                src="/images/oriflame_testimonials.jpg"
                alt="Monle Bate"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <div className="font-semibold text-[#111111] text-sm sm:text-base">Monle Bate</div>
              <div className="text-xs sm:text-sm text-[#666665]">Oriflame Vendor &amp; Business Owner</div>
            </div>
          </div>
        </motion.div>

        {/* ROW 3: Track Record Metrics Block */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[28px] bg-white border border-[#E7E7E5] p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#D2D2CF] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          <span className="rounded-full bg-[#F4F4F3] hover:bg-[#EAEAE8] transition-colors duration-200 px-3 py-1 text-xs font-medium text-[#333333] inline-block mb-5 sm:mb-6">
            Track Record
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            <div>
              <div className="text-2xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111]">
                3+
              </div>
              <div className="text-xs sm:text-sm text-[#666665] mt-1 font-normal">
                Happy clients
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111]">
                6+
              </div>
              <div className="text-xs sm:text-sm text-[#666665] mt-1 font-normal">
                Months of experience
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-4xl font-semibold tracking-[-0.025em] text-[#111111]">
                7
              </div>
              <div className="text-xs sm:text-sm text-[#666665] mt-1 font-normal">
                Projects completed
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
