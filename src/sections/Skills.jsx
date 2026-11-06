import { motion } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import { useContent } from "../context/contentContext"
import { renderIcon } from "../lib/icons"
import { img } from "../lib/sanity"

const TOOL_GROUPS = [
  { key: "frameworks", label: "Languages & Frameworks" },
  { key: "data", label: "Databases & Tools" },
  { key: "design", label: "Design & Media" },
]

export default function Skills() {
  const { skills, tools, languages } = useContent()
  const toolGroups = TOOL_GROUPS.map((g) => ({
    ...g,
    items: tools.filter((t) => t.group === g.key),
  })).filter((g) => g.items.length > 0)

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What I bring"
          title="Skills &"
          highlight="Expertise"
          description="A balanced mix of technical skills, design thinking, and leadership experience shaped through academics, projects, and competitions."
        />

        {/* Core skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
          {skills.map((skill, i) => (
            <SkillCircle key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Tools */}
        <div className="mt-20 md:mt-24">
          <h3 className="text-2xl sm:text-3xl font-semibold text-cream mb-8">
            Tools & <span className="text-gold">Technologies</span>
          </h3>

          <div className="space-y-8">
            {toolGroups.map((group) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xs tracking-[0.25em] uppercase text-gold/70 mb-4">
                  {group.label}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {group.items.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-card border border-gold/15 rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-gold/60 hover:-translate-y-0.5 transition-all"
                    >
                      <span className="text-xl text-gold shrink-0">{renderIcon(tool.icon)}</span>
                      <span className="text-cream/90 text-sm truncate">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-cream mb-8">
            <span className="text-gold">Languages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-card border border-gold/20 rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:border-gold transition"
              >
                <img
                  src={img(lang.flag, 120)}
                  alt={`${lang.name} flag`}
                  className="w-10 h-10 object-contain shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-cream font-semibold">{lang.name}</p>
                    <p className="text-cream/60 text-xs sm:text-sm">{lang.level}</p>
                  </div>

                  <div className="mt-2.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gold rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCircle({ skill, index }) {
  const size = 144
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (skill.percent / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-28 h-28 sm:w-36 sm:h-36">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#D4AF37"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-gold text-lg sm:text-xl mb-1">{renderIcon(skill.icon)}</div>
          <p className="text-cream font-bold text-base sm:text-lg">
            {skill.percent}%
          </p>
        </div>
      </div>

      <p className="text-cream/90 mt-3 text-xs sm:text-sm font-medium text-center max-w-[10rem]">
        {skill.name}
      </p>
    </motion.div>
  )
}
