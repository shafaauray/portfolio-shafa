import { motion } from "framer-motion"
import { FaGraduationCap, FaMedal, FaUsers } from "react-icons/fa"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-20 bg-brownDark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-serifDisplay font-bold text-cream mb-14"
        >
          About <span className="text-gold">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative md:col-span-3"
          >
            <div className="absolute -inset-1 bg-gold/20 blur-2xl rounded-3xl" />

            <div className="relative bg-card border border-gold/20 rounded-3xl p-8">
              <p className="text-cream/80 leading-relaxed mb-6">
                I’m an undergraduate Information Technology student who enjoys exploring the intersection of design, technology, and human interaction. 
                My main interests lie in UI/UX design and frontend development, while staying grounded in a broad IT foundation that allows me to adapt 
                across different roles and projects. Outside the technical space, I’ve gained extensive experience as an MC and in organizational roles, 
                which has strengthened my communication skills, confidence, and ability to connect with diverse audiences. These experiences help me 
                approach digital products not only from a technical perspective, but also from a human-centered one.
              </p>

              <p className="text-cream/60 leading-relaxed mb-10">
                I’m also a karate athlete with national and international achievements. Martial arts have shaped my discipline, resilience, and consistency—values 
                I carry into both my academic and creative work. Beyond technology, I’m inspired by art, culture, photography, and music, which often influence 
                how I think about design and storytelling. With a background shaped by both structure and creativity, I’m always eager to learn, collaborate, and 
                build digital experiences that are thoughtful, functional, and human-centered.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <a
                  href="https://sarjana.jteti.ugm.ac.id/undergraduate-program/information-engineering-undergraduate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brownSoft border border-gold/20 rounded-xl p-5 text-center hover:border-gold transition"
                >
                  <FaGraduationCap className="text-gold text-2xl mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-cream">UGM</h3>
                  <p className="text-xs text-cream/60">
                    Information Engineering
                  </p>
                </a>

                {/* KE ACHIEVEMENTS */}
                <a
                  href="#achievements"
                  className="bg-brownSoft border border-gold/20 rounded-xl p-5 text-center hover:border-gold transition"
                >
                  <FaMedal className="text-gold text-2xl mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-cream">20+</h3>
                  <p className="text-xs text-cream/60">
                    National & International Medals
                  </p>
                </a>

                {/* KE EXPERIENCE */}
                <a
                  href="#experience"
                  className="bg-brownSoft border border-gold/20 rounded-xl p-5 text-center hover:border-gold transition"
                >
                  <FaUsers className="text-gold text-2xl mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-cream">Leadership</h3>
                  <p className="text-xs text-cream/60">
                    Campus & Events
                  </p>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:col-span-2"
          >
            <motion.div
              className="relative w-80 h-[28rem]"
              whileHover={{ scale: 1.04, rotateZ: 0.6 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="absolute -inset-2 bg-gold/20 blur-3xl rounded-3xl" />

              <div className="relative h-full rounded-3xl overflow-hidden border border-gold/40">
                <img
                  src="/fotoshafa2.jpg"
                  alt="Shafa Aura Yogadiasa"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                />

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-brownDark/80 to-transparent p-5">
                  <h3 className="text-cream text-lg font-semibold">
                    Shafa Aura Yogadiasa
                  </h3>
                  <p className="text-sm text-cream/60">
                    UI/UX • Web • Leadership
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About