"use client";

import { motion } from "motion/react";
import FadeIn from "./FadeIn";

const projects = [
  {
    image: "/personal-website-photos/img-calendarvar.png",
    title: "CalendarVAR",
    link: "https://github.com/joao-pamper/CalendarVAR",
    tech: "Python, MongoDB",
    description:
      "A script that scrapes football match data from the web into a MongoDB database and then sends the match event into my personal calendar.",
  },
  {
    image: "/personal-website-photos/img-tattlab.jpg",
    title: "TattLab",
    link: "https://github.com/gCarius/TattLab",
    tech: "Three.js, Flask, Bootstrap",
    description:
      "A web application me and my team developed during a 48-hour hackathon to help users visualize tattoo sleeve designs on a 3D model of an arm.",
  },
  {
    image: "/personal-website-photos/img-moody.png",
    title: "Moody App",
    link: "https://github.com/joao-pamper/project-z",
    tech: "Java, Android Studio, Firebase",
    description:
      "A full-featured Android app that enables users to share, and view moods shared by others, including a \"for you\" page.",
  },
  {
    image: "/personal-website-photos/img-aitravelbuddy.png",
    title: "AI Travel Buddy",
    link: "https://docs.google.com/spreadsheets/d/1RgH8WZ5Pu6PtaHxoWM1AA3YUBsVKeSxAyPu-F0BmF3c/edit?usp=sharing",
    tech: "Google Apps Script, Cohere AI, HTML, CSS",
    description:
      "An AI-powered travel planning tool embedded into Google Sheets, built to reduce manual trip planning.",
  },
  {
    image: "/personal-website-photos/img-dungeoncrawler.png",
    title: "Dungeon Crawler Game",
    link: "https://github.com/joao-pamper/cmput229-dungeoncrawler",
    tech: "Assembly, RISC-V",
    description:
      "A 2-D single player game I developed using keyboard and timer interrupts, enabling real-time player movement, and a game timer.",
  },
  {
    image: "/personal-website-photos/img-search.png",
    title: "Mini Search Engine",
    link: "https://github.com/joao-pamper/cmput361-assignment3",
    tech: "Python",
    description:
      "A python script for building and querying an index using a variation of scoring functions.",
  },
  {
    image: "/personal-website-photos/img-projectz.jpg",
    title: "Z Terminal App",
    link: "https://github.com/joao-pamper/Z",
    tech: "Python, SQLite",
    description:
      "A terminal-based social media application replicating core functionalities of X/Twitter.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/**
 * Projects grid section with animated card reveals and hover effects.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <FadeIn>
        <h2 className="font-mono text-3xl text-center mb-16">Projects</h2>
      </FadeIn>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-surface/70 backdrop-blur-sm rounded-2xl p-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-accent-light/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-lg font-semibold hover:text-accent transition-colors"
              >
                {project.title}
              </a>
              <p className="font-mono text-xs opacity-60 mt-1">{project.tech}</p>
              <p className="mt-3 leading-relaxed text-sm flex-1">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
