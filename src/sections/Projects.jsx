import { motion } from "framer-motion"
import { useState } from "react"
import { FiChevronLeft, FiChevronRight, FiArrowUpRight, FiLock } from "react-icons/fi"
import SectionHeading from "../components/SectionHeading"
import { useContent } from "../context/contentContext"
import { img } from "../lib/sanity"


export default function Projects() {
  const { projects } = useContent()

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Things I've built"
          title="Selected"
          highlight="Projects"
          description="A selection of products I've designed and developed, from AI-powered platforms to internal tools."
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.title} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0)
  const media = project.media || []
  const total = media.length

  const go = (step) => setCurrent((prev) => (prev + step + total) % total)

  const currentMedia = media[current]
  const isVideo = currentMedia?.type === "video"
  const poster = media.find((m) => m.type === "image")?.url

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-card border border-gold/20 rounded-2xl overflow-hidden shadow-lg hover:border-gold/50 hover:shadow-goldGlow hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* MEDIA */}
      <div className="relative aspect-video bg-brownSoft">
        {!currentMedia ? null : isVideo ? (
          <video
            key={currentMedia.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={img(poster, 900)}
            className="w-full h-full object-cover"
            aria-label={`${project.title} demo video`}
          >
            <source src={currentMedia.url} type="video/mp4" />
          </video>
        ) : (
          <img
            src={img(currentMedia.url, 900)}
            alt={`${project.title} screenshot ${current + 1} of ${total}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={`Previous ${project.title} image`}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brownDark/70 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-brownDark transition"
            >
              <FiChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label={`Next ${project.title} image`}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brownDark/70 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-brownDark transition"
            >
              <FiChevronRight size={18} />
            </button>

            <div className="absolute bottom-2.5 w-full flex justify-center gap-1.5">
              {media.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Show ${project.title} media ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-5 bg-gold" : "w-1.5 bg-cream/50 hover:bg-cream"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-cream">{project.title}</h3>
        <p className="text-gold text-sm font-medium mt-1">{project.subtitle}</p>

        <p className="text-cream/70 text-sm leading-relaxed mt-4">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-5">
          {(project.tech || []).map((t) => (
            <li
              key={t}
              className="text-xs text-cream/80 bg-white/5 border border-gold/15 rounded-full px-3 py-1"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gold border border-gold/50 rounded-full hover:bg-gold hover:text-brownDark transition"
            >
              {project.linkLabel || "View Project"} <FiArrowUpRight />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-cream/50 border border-cream/15 rounded-full">
              <FiLock /> Internal Project
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
