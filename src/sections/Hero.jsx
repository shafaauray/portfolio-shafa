import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brownDark pt-28 md:pt-20">

      {/* BATIK TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.04]" />

      {/* GRADIENT LIGHT */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-gold/20 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-brownSoft/40 blur-[140px]" />

      {/* FLOATING ORBS */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 right-[12%] w-5 h-5 rounded-full bg-gold/40 blur-sm"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-32 left-[10%] w-3 h-3 rounded-full bg-gold/30 blur-sm"
      />

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >

          {/* STATUS */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 mb-7"
          >
            <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              Open to collaboration
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-cream"
          >
            Hi, I’m <br />

            <span className="relative inline-block text-gold">
              Shafa Aura Yogadiasa

              <motion.span
                animate={{ width: ["0%", "100%", "100%"] }}
                transition={{ duration: 1.5 }}
                className="absolute left-0 bottom-1 h-[8px] bg-gold/20 -z-10 rounded-full"
              />
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            variants={item}
            className="text-cream/75 max-w-xl leading-relaxed text-[15px] sm:text-base mb-7"
          >
            Bachelor of Information Technology student at Universitas Gadjah Mada
            with strong interests in UI/UX, web development, and meaningful digital
            experiences. Blending technology, creativity, and discipline shaped by
            life as a karate athlete.
          </motion.p>

          {/* LOCATION */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 text-sm text-cream/60 mb-10"
          >
            <HiOutlineLocationMarker className="text-gold" />
            Kota Tangerang, Indonesia
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gold text-brownDark font-semibold hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              View Projects

              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-2xl border border-gold/30 text-cream hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            variants={item}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/shafaauray"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-gold/20 bg-white/[0.03] flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-gold/20 bg-white/[0.03] flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-gold/20 bg-white/[0.03] flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center mt-6 md:mt-0"
        >

          {/* GLOW */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[320px] h-[320px] rounded-full bg-gold/10 blur-[80px]" />
          </div>

          {/* FLOATING SMALL CARDS */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-4 -left-2 sm:left-6 bg-card/80 backdrop-blur-md border border-gold/20 rounded-2xl px-4 py-3 shadow-xl hidden sm:block"
          >
            <p className="text-xs text-cream/50 mb-1">
              Focus
            </p>

            <p className="text-sm text-gold font-medium">
              UI/UX & Frontend
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-6 -right-2 sm:right-8 bg-card/80 backdrop-blur-md border border-gold/20 rounded-2xl px-4 py-3 shadow-xl hidden sm:block"
          >
            <p className="text-xs text-cream/50 mb-1">
              Current Role
            </p>

            <p className="text-sm text-gold font-medium">
              IT Student & Athlete
            </p>
          </motion.div>

          {/* MAIN CARD */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[340px]"
          >

            {/* OUTER GLOW */}
            <div className="absolute -inset-2 bg-gold/20 blur-3xl rounded-[32px]" />

            {/* CARD */}
            <div className="relative bg-card/90 backdrop-blur-xl border border-gold/20 rounded-[32px] overflow-hidden shadow-2xl">

              {/* TOP BAR */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gold/10">
                <div>
                  <p className="text-xs text-cream/50">
                    Portfolio Identity
                  </p>

                  <h3 className="text-sm text-gold font-medium">
                    Personal Profile
                  </h3>
                </div>

                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gold/20"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gold/10"></span>
                </div>
              </div>

              {/* IMAGE */}
              <div className="p-5">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/fotoshafa.jpg"
                    alt="Shafa Aura Yogadiasa"
                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brownDark/90 via-transparent to-transparent" />

                  {/* BOTTOM INFO */}
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <h3 className="text-2xl font-semibold text-cream mb-1">
                      Shafa Aura Y
                    </h3>

                    <p className="text-sm text-cream/70">
                      UI/UX • Web • Leadership
                    </p>
                  </div>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-xs text-gold">
                    UI/UX Design
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/[0.03] border border-gold/10 text-xs text-cream/70">
                    Web Development
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/[0.03] border border-gold/10 text-xs text-cream/70">
                    Leadership
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-cream/40 mb-3">
          Scroll
        </p>

        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero