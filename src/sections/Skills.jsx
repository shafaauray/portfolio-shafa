import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaUsers,
} from "react-icons/fa"
import {
  SiCanva,
  SiAdobe,
  SiMysql,
} from "react-icons/si"

const skills = [
  { name: "Web Development", percent: 85, icon: <FaHtml5 /> },
  { name: "Frontend Engineering", percent: 90, icon: <FaJs /> },
  { name: "UI / UX Design", percent: 95, icon: <FaFigma /> },
  { name: "Responsive Design", percent: 90, icon: <FaCss3Alt /> },
  { name: "Backend Logic", percent: 75, icon: <FaPhp /> },
  { name: "Database Management", percent: 75, icon: <FaDatabase /> },
  { name: "Problem Solving", percent: 92, icon: <FaUsers /> },
  { name: "Leadership & Communication", percent: 95, icon: <FaUsers /> },
]

const tools = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Adobe", icon: <SiAdobe /> },
  { name: "MySQL", icon: <SiMysql /> },

  // tambahan (AMAN)
  { name: "CapCut", icon: <FaUsers /> },
  { name: "Microsoft Office", icon: <FaDatabase /> },
]

const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Intermediate" },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 md:px-20 bg-brownDark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-serifDisplay font-bold text-cream mb-4"
        >
          Skills & <span className="text-gold">Expertise</span>
        </motion.h2>

        <p className="text-cream/60 mb-14 max-w-xl">
          A balanced mix of technical skills, design thinking, and leadership
          experience shaped through academics, projects, and competitions.
        </p>

        <div className="flex gap-10 overflow-x-auto pb-6">
          {skills.map((skill, i) => (
            <SkillCircle key={i} skill={skill} />
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-semibold text-gold mb-6">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-gold/20 rounded-xl p-6 flex items-center gap-4 hover:border-gold transition"
              >
                <div className="text-2xl text-gold">
                  {tool.icon}
                </div>
                <p className="text-cream">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <h3 className="text-2xl font-semibold text-gold mb-6">
    Languages
  </h3>

  <div className="flex flex-col sm:flex-row gap-6 max-w-xl">
    {/* Indonesian */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-1 bg-card border border-gold/20 rounded-2xl p-6 flex items-center gap-4 hover:border-gold transition"
    >
      <img
        src="/indo.webp"
        alt="Indonesian Flag"
        className="w-10 h-10 object-contain"
      />

      <div className="flex-1">
        <p className="text-cream font-semibold">
          Indonesian
        </p>
        <p className="text-cream/60 text-sm">
          Native
        </p>

        {/* Progress bar */}
        <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-full bg-gold rounded-full" />
        </div>
      </div>
    </motion.div>

    {/* English */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex-1 bg-card border border-gold/20 rounded-2xl p-6 flex items-center gap-4 hover:border-gold transition"
    >
      <img
        src="/inggris.svg"
        alt="English Flag"
        className="w-10 h-10 object-contain"
      />

      <div className="flex-1">
        <p className="text-cream font-semibold">
          English
        </p>
        <p className="text-cream/60 text-sm">
          Intermediate
        </p>

        {/* Progress bar */}
        <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-gold rounded-full" />
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>
  )
}

function SkillCircle({ skill }) {
  const radius = 55
  const circumference = 2 * Math.PI * radius
  const offset =
    circumference - (skill.percent / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-44 flex flex-col items-center"
    >
      <div className="relative w-36 h-36">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#D4AF37"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-gold text-xl mb-1">
            {skill.icon}
          </div>
          <p className="text-cream font-bold text-lg">
            {skill.percent}%
          </p>
        </div>
      </div>

      <p className="text-cream mt-3 text-sm font-medium text-center">
        {skill.name}
      </p>
    </motion.div>
  )
}