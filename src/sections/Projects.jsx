import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    title: "KARIR.AI : AI Career Recommendation Platform",
    description:
      "A web-based AI platform that analyzes user resumes to generate personalized career recommendations.",
    tech: "Next.js • React • Node.js • AI",
    link: "https://karir-ai.vercel.app",
    images: ["/karirai-demo.mp4", "/karir.png", "/karir2.png", "/karir3.png", "/karir4.png"],
  },
  {
    title: "AFFECTRA : EEG-Based Emotion Tracker",
    description:
      "EEG wearable system to classify emotions using AI with interactive dashboard.",
    tech: "MERN • AI • EEG",
    link: "https://github.com/hezekielstp/Capstone-B05",
    images: ["/affectra.png", "/affectra2.png", "/affectra3.png", "/affectra4.png"],
  },
  {
    title: "BukuTamu BKN Yogyakarta",
    description:
      "Web-based guest book system for managing visitors efficiently.",
    tech: "HTML • CSS • PHP",
    link: "#",
    images: ["/bkn.png", "/bkn2.png", "/bkn3.png", "/bkn4.png", "/bkn5.png"],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#120e0b] to-[#1c1511]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const currentMedia = project.images[current]
  const isVideo = currentMedia.includes(".mp4")

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-[#1f1914] border border-amber-700/20 rounded-2xl overflow-hidden shadow-lg"
    >
      
      <div className="relative">

        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-48 object-cover"
          >
            <source src={currentMedia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={currentMedia}
            className="w-full h-48 object-cover"
          />
        )}

        {project.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 rounded"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 rounded"
            >
              ›
            </button>
          </>
        )}

        <div className="absolute bottom-2 w-full flex justify-center gap-2">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-200 mb-3">
          {project.title}
        </h3>

        <p className="text-amber-100/70 text-sm mb-4">
          {project.description}
        </p>

        <p className="text-xs text-amber-400 mb-6">
          {project.tech}
        </p>

        <a
          href={project.link}
          target="_blank"
          className="inline-block px-4 py-2 text-sm border border-amber-500 rounded-full hover:bg-amber-600 hover:text-black transition"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  )
}