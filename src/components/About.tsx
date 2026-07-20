"use client";

import { useState } from "react";
import { motion } from "motion/react";
import FadeIn from "./FadeIn";

const photos = [
  { src: "/personal-website-photos/img-abt-1.jpeg", caption: "First time Scuba Diving in Cozumel!" },
  { src: "/personal-website-photos/img-abt-2.jpeg", caption: "At the 2024 Paris Olympics!" },
  { src: "/personal-website-photos/img-abt-3.jpeg", caption: "Hiking in Kananaskis!" },
];

/**
 * About section with personal text and a photo gallery.
 * Photos show a caption overlay on hover (desktop) or tap (mobile).
 */
export default function About() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-accent-light/70 backdrop-blur-sm rounded-2xl p-10">
        <FadeIn>
          <h2 className="font-mono text-3xl text-center mb-8">About Me</h2>
          <p className="text-center max-w-xl mx-auto leading-relaxed mb-12">
            When I&apos;m not thinking about code, I&apos;m probably out on a run,
            playing football, snowboarding in the winter, or swimming in the
            summer. I love traveling to new places, going on hikes, and listening
            to good new music.
          </p>
        </FadeIn>

        {/* Photo gallery — column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative w-full max-w-xs rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full rounded-lg"
              />
              <div
                className={`absolute inset-0 bg-accent/85 flex items-center justify-center transition-opacity duration-300 rounded-lg ${
                  activeIdx === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-center px-4 text-sm">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
