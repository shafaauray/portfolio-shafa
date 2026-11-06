import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import SectionHeading from "../components/SectionHeading"

const educationData = [
  {
    school: "Universitas Gadjah Mada",
    period: "2022 – Present",
    major: "Undergraduate in Information Engineering, Faculty of Engineering",
    logo: "/logougm.webp",
    link: "https://ugm.ac.id/id/tentang-ugm/",
  },
  {
    school: "SMA Negeri 1 Kota Tangerang",
    period: "2019 – 2022",
    major: "Mathematics & Natural Sciences Major",
    logo: "/logosman1.png",
    link: "https://sman1tangerang.sch.id/index/read/2/profil-sman-1-kota-tangerang",
  },
  {
    school: "SMP Negeri 1 Kota Tangerang",
    period: "2016 – 2019",
    major: "Natural Sciences Major",
    logo: "/logosmpn1.png",
    link: "https://smpn1tangerang.sch.id/",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <div className="space-y-4 sm:space-y-6">
          {educationData.map((item, i) => (
            <motion.a
              key={item.school}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group bg-card border border-gold/20 p-5 sm:p-6 rounded-2xl flex items-start sm:items-center gap-4 sm:gap-6 hover:border-gold/50 hover:shadow-goldGlow transition-all duration-300"
            >
              {/* LOGO */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-full bg-brownDark flex items-center justify-center overflow-hidden border border-gold/30">
                <img
                  src={item.logo}
                  alt={`${item.school} logo`}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <h3 className="font-semibold text-cream text-base sm:text-lg">
                    {item.school}
                  </h3>
                  <span className="text-gold text-xs sm:text-sm font-medium shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-cream/60 text-sm sm:text-base mt-1">
                  {item.major}
                </p>

                <p className="inline-flex items-center gap-1 text-gold text-xs mt-2 sm:opacity-0 sm:group-hover:opacity-100 transition">
                  Visit official site <FiArrowUpRight />
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
