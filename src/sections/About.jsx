import { motion } from "framer-motion"
import { FaGraduationCap, FaMedal, FaUsers } from "react-icons/fa"
import SectionHeading from "../components/SectionHeading"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const highlights = [
  {
    icon: <FaGraduationCap />,
    title: "UGM",
    caption: "Information Engineering",
    href: "https://sarjana.jteti.ugm.ac.id/undergraduate-program/information-engineering-undergraduate/",
    external: true,
  },
  {
    icon: <FaMedal />,
    title: "20+",
    caption: "National & International Medals",
    href: "#achievements",
  },
  {
    icon: <FaUsers />,
    title: "Leadership",
    caption: "Campus & Events",
    href: "#experience",
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading eyebrow="Get to know me" title="About" highlight="Me" />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative lg:col-span-3 order-2 lg:order-1"
          >
            <div className="absolute -inset-1 bg-gold/20 blur-2xl rounded-3xl" />

            <div className="relative bg-card border border-gold/20 rounded-3xl p-6 sm:p-8">
              <p className="text-cream/80 leading-relaxed mb-5 text-sm sm:text-base">
                I’m an undergraduate Information Technology student who enjoys
                exploring the intersection of design, technology, and human
                interaction. My main interests lie in UI/UX design and frontend
                development, while staying grounded in a broad IT foundation that
                allows me to adapt across different roles and projects. Outside
                the technical space, I’ve gained extensive experience as an MC and
                in organizational roles, which has strengthened my communication
                skills, confidence, and ability to connect with diverse audiences.
                These experiences help me approach digital products not only from
                a technical perspective, but also from a human-centered one.
              </p>

              <p className="text-cream/65 leading-relaxed mb-8 text-sm sm:text-base">
                I’m also a karate athlete with national and international
                achievements. Martial arts have shaped my discipline, resilience,
                and consistency, values I carry into both my academic and creative
                work. Beyond technology, I’m inspired by art, culture,
                photography, and music, which often influence how I think about
                design and storytelling. With a background shaped by both
                structure and creativity, I’m always eager to learn, collaborate,
                and build digital experiences that are thoughtful, functional, and
                human-centered.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights.map((h) => (
                  <a
                    key={h.title}
                    href={h.href}
                    {...(h.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 bg-brownSoft border border-gold/20 rounded-xl p-4 sm:p-5 hover:border-gold hover:-translate-y-1 transition-all"
                  >
                    <span className="text-gold text-2xl sm:mb-3">{h.icon}</span>
                    <span>
                      <span className="block text-lg sm:text-xl font-bold text-cream font-serifDisplay">
                        {h.title}
                      </span>
                      <span className="block text-xs text-cream/60 mt-0.5">
                        {h.caption}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:col-span-2 order-1 lg:order-2"
          >
            <motion.div
              className="relative w-full max-w-[18rem] sm:max-w-xs aspect-[5/7]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="absolute -inset-2 bg-gold/20 blur-3xl rounded-3xl" />

              <div className="relative h-full rounded-3xl overflow-hidden border border-gold/40">
                <img
                  src="/fotoshafa2.jpg"
                  alt="Shafa Aura Yogadiasa"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                />

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-brownDark/90 to-transparent p-5">
                  <h3 className="text-cream text-lg font-semibold">
                    Shafa Aura Yogadiasa
                  </h3>
                  <p className="text-sm text-cream/70">UI/UX • Web • Leadership</p>
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
