"use client";

import { motion } from "motion/react";

/**
 * Hero section with intro text and personal photo.
 * Animated entrance on page load.
 */
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-5xl mx-auto bg-surface/80 backdrop-blur-sm rounded-2xl p-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left max-w-lg"
        >
          <p className="text-lg leading-relaxed">
            Hi, my name is João! 👋🏼 <br />
            <br />
            I&apos;m a fourth-year computer science student at the University of
            Alberta who loves building things and solving problems that make a
            difference for someone. <br />
            <br />
            Right now I&apos;m especially curious about cloud computing,
            networking, data, and the creative ways AI can bring it all together.
            I&apos;m always excited to learn, build, and collaborate with people
            who care about what they do. <br />
            <br />
            If you&apos;re one of them and want to connect, you&apos;ll find my
            contact info at the bottom of the page!
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="/personal-website-photos/img-main.jpeg"
            alt="João Pereira"
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
