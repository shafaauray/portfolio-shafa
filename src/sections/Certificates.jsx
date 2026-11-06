import { motion } from "framer-motion"
import { useState } from "react"
import SectionHeading from "../components/SectionHeading"
import { useContent } from "../context/contentContext"
import { img } from "../lib/sanity"

const CATEGORIES = [
  { key: "it", label: "IT & Course Certificates" },
  { key: "karate", label: "Karate Certificates" },
]


/* =======================
   COMPONENT
======================= */

export default function Certificates() {
  const { certificates: allCertificates } = useContent()
  const groups = CATEGORIES.map((c) => ({
    ...c,
    items: allCertificates.filter((item) => item.category === c.key),
  })).filter((g) => g.items.length > 0)

  const [activeKey, setActive] = useState("it")
  const active = groups.some((g) => g.key === activeKey)
    ? activeKey
    : groups[0]?.key
  const certificates = groups.find((g) => g.key === active)?.items || []

  return (
    <section id="certificates" className="py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark">
      <div className="max-w-7xl mx-auto">

        <SectionHeading
          eyebrow="Credentials"
          title="Certificates &"
          highlight="Licenses"
          description="A curated collection of professional learning credentials and achievement certificates earned through courses, competitions, and academic growth."
        />

        {/* CATEGORY SWITCH */}
        <div className="flex gap-3 mb-8 flex-wrap" role="tablist" aria-label="Certificate categories">
          {groups.map(({ key, label, items }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm border transition-all ${
                active === key
                  ? "bg-gold text-brownDark border-gold"
                  : "text-cream/70 border-gold/30 hover:text-gold"
              }`}
            >
              {label}
              <span className="ml-2 opacity-70">{items.length}</span>
            </button>
          ))}
        </div>

        {/* SCROLL CONTAINER */}
        <div className="relative">

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 max-h-[600px] sm:max-h-[640px] overflow-y-auto pr-1 sm:pr-2 pb-16">
            {certificates.map((item, i) => (
              <motion.div
                key={item.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group bg-card border border-gold/20 rounded-xl overflow-hidden flex flex-col hover:border-gold/50 transition-colors"
              >
                {/* IMAGE */}
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={img(item.image, 500)}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <h3 className="font-body text-cream font-medium text-xs sm:text-sm leading-snug line-clamp-2 tracking-normal">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] sm:text-xs text-gold/80 line-clamp-2">
                    {item.issuer}
                  </p>

                  <p className="mt-0.5 text-[11px] sm:text-xs text-cream/50">
                    {item.year}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-auto pt-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[11px] sm:text-xs text-gold border border-gold/40 px-3 py-1 rounded-full hover:bg-gold hover:text-brownDark transition"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SCROLL HINT */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brownDark to-transparent flex justify-center items-end">
            <span className="text-xs text-cream/40 mb-2">
              Scroll to see more ↓
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}