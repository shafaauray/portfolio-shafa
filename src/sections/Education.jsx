import { motion } from "framer-motion"

const educationData = [
  {
    school: "Universitas Gadjah Mada (2022–Present)",
    major: "Undergraduate in Information Engineering, Faculty of Engineering",
    logo: "/logougm.webp",
    link: "https://ugm.ac.id/id/tentang-ugm/",
  },
  {
    school: "SMA Negeri 1 Kota Tangerang (2019–2022)",
    major: "Mathematics & Natural Sciences Major",
    logo: "/logosman1.png",
    link: "https://sman1tangerang.sch.id/index/read/2/profil-sman-1-kota-tangerang",
  },
  {
    school: "SMP Negeri 1 Kota Tangerang (2016–2019)",
    major: "Natural Sciences Major",
    logo: "/logosmpn1.png",
    link: "https://smpn1tangerang.sch.id/",
  },
]

export default function Education() {
  return (
    <section className="py-28 px-6 md:px-20 bg-brownDark">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serifDisplay font-bold text-gold mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group bg-card border border-gold/20 p-6 rounded-2xl flex items-center gap-6 hover:shadow-goldGlow transition-all duration-300 cursor-pointer"
            >
              {/* LOGO */}
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-brownDark flex items-center justify-center overflow-hidden border border-gold/30">
                <img
                  src={item.logo}
                  alt={item.school}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-cream text-lg">
                  {item.school}
                </h3>
                <p className="text-cream/60">
                  {item.major}
                </p>

                {/* subtle hint */}
                <p className="text-gold text-xs mt-1 opacity-0 group-hover:opacity-100 transition">
                  Visit official site →
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}