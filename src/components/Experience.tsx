"use client";

import { motion } from "motion/react";
import FadeIn from "./FadeIn";

const experiences = [
  {
    date: "May 2023 — Aug 2023",
    title: "Software Engineer Intern",
    company: "Zoppy Software",
    description:
      "During my internship, I worked on full-stack development using Angular and NestJS, helping improve platform responsiveness and integrating third-party services. I updated backend logic and helped build features based on real user and business needs.",
  },
  {
    date: "To Be Continued...",
    title: "🚀 🌎 🏆",
    company: "",
    description: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/**
 * Professional experience section with a vertical timeline.
 * Each entry animates in sequentially on scroll.
 */
export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <FadeIn>
        <h2 className="font-mono text-3xl text-center mb-16">
          Professional Experience
        </h2>
      </FadeIn>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto grid grid-cols-[1fr_3px_3fr] gap-y-8 bg-accent-light/70 backdrop-blur-sm rounded-2xl p-10"
      >
        {experiences.map((exp, i) => (
          <motion.div key={i} variants={itemVariants} className="contents">
            {/* Date column */}
            <div className="flex items-start justify-end pr-6">
              <p className="font-mono text-sm text-right whitespace-pre-line">
                {exp.date}
              </p>
            </div>

            {/* Timeline line + dot */}
            <div className="relative flex justify-center">
              <div className="w-[3px] h-full bg-black" />
              <div className="absolute top-1 w-[15px] h-[15px] bg-black rounded-full -translate-x-[6px]" />
              {i < experiences.length - 1 && (
                <div className="absolute bottom-0 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black translate-y-[7px]" />
              )}
            </div>

            {/* Content column */}
            <div className="pl-6 pb-8">
              <h3 className="font-mono text-lg">{exp.title}</h3>
              {exp.company && (
                <p className="font-mono text-sm opacity-70">{exp.company}</p>
              )}
              {exp.description && (
                <p className="mt-4 leading-relaxed">{exp.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
