import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { useContent } from "../context/contentContext"
import { img } from "../lib/sanity"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const socials = [
  { label: "GitHub", href: "https://github.com/shafaauray", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shafaaurayogadiasa", icon: <FaLinkedin /> },
  { label: "Instagram", href: "https://www.instagram.com/shafaauray/", icon: <FaInstagram /> },
]

function Hero() {
  const { profile } = useContent()

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-brownDark pt-28 pb-20 lg:pt-24 lg:pb-16"
    >
      {/* BATIK TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.05]" />

      {/* WARM LIGHT */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gold/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-brownSoft/30 blur-[160px]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs sm:text-sm bg-gold/10 border border-gold/20 text-gold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {profile.badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-4 text-cream"
          >
            Hi, I’m <br />
            <span className="text-gold">Shafa Aura Yogadiasa</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-cream/90 font-medium mb-5"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="text-cream/70 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 text-sm sm:text-base"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center justify-center lg:justify-start gap-2 text-sm text-cream/60 mb-8"
          >
            <HiOutlineLocationMarker className="text-gold" />
            {profile.location}
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gold text-brownDark font-semibold hover:shadow-[0_0_24px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 transition-all"
            >
              View Projects <FiArrowUpRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-gold/40 text-cream font-medium hover:bg-gold/10 hover:border-gold transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex gap-3 mt-8 justify-center lg:justify-start"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gold/20 text-cream/70 text-lg hover:text-gold hover:border-gold transition-all"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — LANYARD */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <div className="relative">
            {/* STRING (desktop only, would collide with text on small screens) */}
            <div className="hidden lg:block absolute left-1/2 -top-40 -translate-x-1/2 w-[2px] h-40 bg-gradient-to-b from-gold to-transparent" />

            {/* HOOK */}
            <div className="hidden lg:block absolute left-1/2 -top-3 -translate-x-1/2 w-4 h-4 rounded-full border border-gold bg-brownDark z-10" />

            {/* CARD */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top center" }}
              className="relative lg:mt-6"
            >
              <div className="absolute -inset-1 bg-gold/30 blur-2xl rounded-2xl" />

              <div className="relative bg-card border border-gold/30 rounded-2xl p-5 w-60 sm:w-64 text-center">
                <img
                  src={img(profile.heroPhoto, 600)}
                  alt="Portrait of Shafa Aura Yogadiasa"
                  className="rounded-xl mb-4 w-full aspect-[4/5] object-cover"
                />

                <h3 className="text-cream font-semibold text-lg">
                  Shafa Aura Y.
                </h3>
                <p className="text-sm text-cream/60 mb-3">
                  Information Engineering · UGM
                </p>

                <div className="flex justify-center gap-2 text-xs text-cream/70">
                  <span className="px-3 py-1 rounded-full bg-white/5">UI/UX</span>
                  <span className="px-3 py-1 rounded-full bg-white/5">Web</span>
                  <span className="px-3 py-1 rounded-full bg-white/5">Leader</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
