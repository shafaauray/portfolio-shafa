import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brownDark">

      {/* BATIK TEXTURE */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.05]" />

      {/* WARM LIGHT */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brownSoft/30 blur-[160px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-block mb-6 px-5 py-2 rounded-full text-sm bg-gold/10 text-gold tracking-wide"
          >
            Open to collaboration
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-cream"
          >
            Hi, I’m <br />
            <span className="text-gold">Shafa Aura Yogadiasa</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-cream/80 max-w-xl leading-relaxed mb-6"
          >
            Bachelor of Information Technology student at Universitas Gadjah Mada
            with strong interests in UI/UX, web development, and meaningful digital
            experiences. Blending technology, creativity, and discipline shaped by 
            life as a karate athlete.
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center gap-2 text-sm text-cream/60 mb-10"
          >
            <HiOutlineLocationMarker />
            Kota Tangerang, Indonesia
          </motion.div>

          <motion.div
            variants={item}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gold text-brownDark font-medium hover:opacity-90 transition"
            >
              View Projects <FiArrowUpRight />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-gold/40 text-cream hover:bg-gold/10 transition"
            >
              Contact Me
            </a>
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

            {/* STRING */}
            <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[2px] h-40 bg-gradient-to-b from-gold to-transparent" />

            {/* HOOK */}
            <div className="absolute left-1/2 -top-3 -translate-x-1/2 w-4 h-4 rounded-full border border-gold bg-brownDark z-10" />

            {/* CARD */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top center" }}
              className="relative mt-6"
            >
              <div className="absolute -inset-1 bg-gold/30 blur-2xl rounded-2xl" />

              <div className="relative bg-card border border-gold/30 rounded-2xl p-5 w-64 text-center">
                <img
                  src="/fotoshafa.jpg"
                  alt="Shafa Aura Yogadiasa"
                  className="rounded-xl mb-4 object-cover"
                />

                <h3 className="text-cream font-semibold text-lg">
                  Shafa Aura Y
                </h3>
                <p className="text-sm text-cream/60 mb-3">
                  UI/UX • Web • Leadership
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