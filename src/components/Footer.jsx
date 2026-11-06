import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Certificates", id: "certificates" },
  { name: "Achievements", id: "achievements" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brownDark relative border-t border-gold/20 pt-16 sm:pt-20 pb-10 px-5 sm:px-8 lg:px-20">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

        {/* BRAND SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serifDisplay text-gold tracking-wide">
            Shafa Aura
          </h2>

          <p className="text-cream/60 text-sm mt-4 leading-relaxed max-w-sm">
            Crafting meaningful digital experiences with elegance,
            clarity, and logical precision.  
            Focused on building impactful digital products.
          </p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-gold text-xs tracking-[0.3em] uppercase">
            Navigation
          </h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-3 w-fit">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative group text-cream/70 text-sm w-fit transition-all duration-300 hover:text-gold"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-gold text-xs tracking-[0.3em] uppercase">
            Connect
          </h3>

          <div className="flex gap-8 text-xl text-cream/70">
            <a
              href="https://github.com/shafaauray"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.7)] transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shafaaurayogadiasa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.7)] transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/shafaauray/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.7)] transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-cream/40 text-xs mt-14 sm:mt-20 border-t border-gold/10 pt-6 tracking-wide">
        © {year} Shafa Aura. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer