import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import SectionHeading from "../components/SectionHeading"
import { useContent } from "../context/contentContext"
import { img } from "../lib/sanity"


export default function Experience() {
  const { experiences } = useContent()
  const workExperience = experiences.filter((e) => e.type === "work")
  const organizationExperience = experiences.filter((e) => e.type !== "work")

  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Where I've contributed"
          title="Professional"
          highlight="Experience"
          description="Work, organizational, and event roles that shaped my technical, communication, and leadership skills."
        />

        {workExperience.length > 0 && (
          <Section title="Work Experience" data={workExperience} />
        )}

        <Section
          title="Organizational & Event Experience"
          data={organizationExperience}
        />
      </div>
    </section>
  )
}

function Section({ title, data }) {
  return (
    <>
      <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-6">
        {title}
      </h3>

      <div className="space-y-6 mb-16">
        {data.map((item, i) => (
          <ExperienceCard
            key={i}
            item={item}
            docs={item.docs || []}
          />
        ))}
      </div>
    </>
  )
}

function ExperienceCard({ item, docs }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-gold/20 p-5 sm:p-6 rounded-2xl overflow-hidden hover:border-gold/40 transition-colors"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-cream font-semibold text-lg break-words">
            {item.role}
          </h4>

          <p className="text-gold/90 font-medium break-words leading-relaxed">
            {item.institution}
          </p>

          <p className="text-cream/60 text-sm mt-1">
            {item.location}
          </p>
        </div>

        <p className="self-start text-gold text-xs sm:text-sm font-medium bg-gold/10 border border-gold/20 rounded-full px-3 py-1 shrink-0 whitespace-nowrap">
          {item.period}
        </p>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-4 text-cream/70 leading-relaxed break-words text-sm sm:text-base">
        {item.description}
      </p>

      {/* TASKS */}
      <ul className="mt-3 list-disc pl-5 marker:text-gold text-cream/70 space-y-2 text-sm sm:text-base">
        {item.tasks.map((task, i) => (
          <li key={i} className="break-words">
            {task}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      {docs.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-2 text-sm text-gold border border-gold/30 rounded-full px-4 py-1.5 hover:bg-gold/10 transition"
        >
          {open ? "Hide Documentation" : `View Documentation (${docs.length})`}
        </button>
      )}

      {/* DOCS */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
              {docs.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-gold/20"
                >
                  <img
                    src={img(src, 600)}
                    alt={`${item.role} documentation ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}