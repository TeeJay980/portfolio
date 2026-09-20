"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecognitionSocialProof from "@/components/sections/RecognitionSocialProof";
import { motion } from "framer-motion";
import { Code, Sparkles, Terminal } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "HTML5 & Semantic Web", level: "Core" },
    { name: "CSS3 & Modern Layouts", level: "Core" },
    { name: "JavaScript (ES6+)", level: "Core" },
    { name: "React & Components", level: "Building" },
    { name: "Next.js & App Router", level: "Exploring" },
    { name: "Tailwind CSS", level: "Styling" },
    { name: "Framer Motion", level: "Animations" },
    { name: "Git & GitHub", level: "Version Control" },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8F8F7] text-[#111111]">
      <Navbar />

      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Header / Intro Section */}
        <section className="max-w-[1140px] mx-auto px-6 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E7E7E5] bg-white px-4 py-1.5 shadow-sm">
              <span className="text-xs sm:text-sm font-medium text-[#111111]">
                About Me
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#E7E7E5]" />
              <span className="rounded-full bg-[#F4F4F3] px-2.5 py-0.5 text-xs font-medium text-[#333333]">
                Spex Intern
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.025em] text-[#111111] leading-[1.12] max-w-3xl">
              Hi, I&apos;m Terrence J. Mark.
            </h1>

            <p className="text-lg sm:text-xl text-[#666665] max-w-3xl leading-relaxed font-normal">
              I am 12 years old, passionate about code and creative design. I am actively learning HTML, JavaScript, and React while interning at Spex to build responsive, modern, and fluid web experiences.
            </p>
          </motion.div>

          {/* Story & Background Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
            {/* My Journey Card */}
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F4F3] text-[#111111]">
                <Code className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111111]">
                The Journey So Far
              </h2>
              <p className="text-[#666665] leading-relaxed text-base">
                Ever since writing my first lines of HTML, I was fascinated by how a few lines of code can create interactive tools and beautiful visual interfaces. Every day I practice building components, experimenting with CSS layouts, and understanding JavaScript logic to grow into a versatile web developer.
              </p>
            </motion.div>

            {/* Spex Internship & Focus */}
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F4F3] text-[#111111]">
                  <Terminal className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111111]">
                  Spex Internship
                </h2>
                <p className="text-[#666665] leading-relaxed text-base">
                  Gaining hands-on real-world experience, learning clean code best practices, modern developer workflows, and collaborating on web design projects.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F4F3] px-3.5 py-1.5 text-xs font-medium text-[#333333] w-fit">
                <Sparkles className="h-3.5 w-3.5 text-[#7430F7]" />
                <span>Growth Mindset &amp; Curiosity</span>
              </div>
            </motion.div>
          </div>

          {/* Skills & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] border border-[#E7E7E5] bg-white p-8 md:p-10 mt-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="rounded-full bg-[#F4F4F3] px-3.5 py-1 text-xs font-medium text-[#333333]">
                  Toolkit
                </span>
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111111] mt-3">
                  Technologies &amp; Skills
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-[18px] border border-[#E7E7E5] bg-[#F8F8F7] p-4 transition-all duration-200 hover:bg-white hover:border-[#D2D2CF] hover:shadow-sm"
                >
                  <div className="text-sm font-semibold text-[#111111]">{skill.name}</div>
                  <div className="text-xs text-[#666665] mt-1">{skill.level}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Social Proof & Recognitions Section */}
        <RecognitionSocialProof />
      </main>

      <Footer />
    </div>
  );
}
