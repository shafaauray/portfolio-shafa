import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

const itemLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const itemRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brownDark">

      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.04]" />

      {/* LIGHTING */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gold/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-gold/10 blur-[150px]" />

      {/* FLOATING BLUR ORBS */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-32 right-20 w-28 h-28 rounded-full bg-gold/10 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-white/5 blur-3xl"
      />

      {/* BUTTERFLIES */}
      <motion.img
        src="/butterfly.png"
        alt="butterfly"
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 left-[48%] w-10 opacity-70 hidden md:block"
      />

      <motion.img
        src="/butterfly.png"
        alt="butterfly"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-28 right-[18%] w-8 opacity-60 hidden md:block"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-16 items-center pt-28 md:pt-20">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >

          {/* STATUS BADGE */}
          <motion.div
            variants={itemLeft}
            className="inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full bg-white/5 border border-gold/20 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm tracking-wide text-gold">
              Open to collaboration
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={itemLeft}
            className="text-[42px] sm:text-6xl font-bold leading-[1.05] text-cream mb-6"
          >
            Hi, I’m <br />

            <motion.span
              animate={{
                opacity: [1, 0.7, 1],
                textShadow: [
                  "0 0 0px rgba(212,175,55,0)",
                  "0 0 18px rgba(212,175,55,0.7)",
                  "0 0 0px rgba(212,175,55,0)",
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
              }}
              className="text-gold"
            >
              SHAFA
            </motion.span>{" "}

            <span className="text-cream">
              Aura Yogadiasa
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemLeft}
            className="text-cream/75 max-w-xl leading-relaxed text-[15px] md:text-base mb-7"
          >
            Bachelor of Information Technology student at Universitas Gadjah Mada
            with strong interests in UI/UX, web development, and meaningful digital
            experiences. Blending technology, creativity, and discipline shaped by
            life as a karate athlete.
          </motion.p>

          {/* LOCATION */}
          <motion.div
            variants={itemLeft}
            className="flex items-center gap-2 text-sm text-cream/60 mb-10"
          >
            <HiOutlineLocationMarker className="text-gold" />
            Kota Tangerang, Indonesia
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={itemLeft}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gold text-brownDark font-semibold hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
            >
              View Projects

              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-2xl border border-gold/30 text-cream hover:bg-white/5 backdrop-blur-md transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={itemRight}
          initial="hidden"
          animate="show"
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[320px] h-[320px] rounded-full bg-gold/20 blur-[90px]" />

          {/* FLOATING CARD */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[330px]"
          >

            {/* DECOR */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-gold/20 rounded-full" />
            <div className="absolute -bottom-5 -left-5 w-14 h-14 bg-gold/10 rounded-full blur-xl" />

            {/* CARD */}
            <div className="relative overflow-hidden rounded-[30px] border border-gold/20 bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.35)]">

              {/* TOP STRIP */}
              <div className="h-2 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

              {/* IMAGE */}
              <div className="p-5 pb-0">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/fotoshafa.jpg"
                    alt="Shafa Aura Yogadiasa"
                    className="w-full h-[360px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-cream">
                  Shafa Aura Y
                </h3>

                <p className="text-sm text-cream/60 mt-2">
                  UI/UX • Web Development • Leadership
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {["UI/UX", "Frontend", "Creative", "Karate"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-gold/10 text-xs text-cream/80"
                    >
                      {tag}
                    </span>
                  ))}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent" />
        <p className="text-[10px] tracking-[0.35em] uppercase text-cream/40">
          Scroll
        </p>
      </motion.div>
    </section>
  )
}

export default Hero