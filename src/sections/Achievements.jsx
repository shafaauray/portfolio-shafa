import { motion } from "framer-motion"

const achievementsData = [
  {
    rank: "🥉",
    title: "3rd Place Senior Female Individual Kata",
    event: "International Silent Knight Karate Cup 2024",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    rank: "🥈",
    title: "2nd Place Senior Female Team Kata",
    event: "International Silent Knight Karate Cup 2024",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    rank: "🥈",
    title: "2nd Place Senior Female Individual Kata",
    event: "National IPB Karate Cup VII 2024",
    location: "Jawa Barat, Indonesia",
  },
  {
    rank: "🥈",
    title: "2nd Place Senior Female Team Kata",
    event: "National IPB Karate Cup VII 2024",
    location: "Jawa Barat, Indonesia",
  },
  {
    rank: "🥉",
    title: "3rd Place U21 Female Individual Kata",
    event: "International Magelang Karate Championship 2023",
    location: "Jawa Tengah, Indonesia",
  },
  {
    rank: "🥉",
    title: "3rd Place Senior Female Individual Kata",
    event: "Brawijaya University Karate Championship 2023",
    location: "Jawa Timur, Indonesia",
  },
  {
    rank: "🥇",
    title: "1st Place Female Individual Kata",
    event: "KOSN Provinsi Banten 2021",
    location: "Banten, Indonesia",
  },
  {
    rank: "🥇",
    title: "1st Place Female Individual Kata",
    event: "KOSN Kota Tangerang 2021",
    location: "Banten, Indonesia",
  },
  {
    rank: "🥇",
    title: "1st Place Junior Female Individual Kata",
    event: "Pekan Olahraga Kota Tangerang 2021",
    location: "Banten, Indonesia",
  },
  {
    rank: "🥈",
    title: "2nd Place Junior Female Individual Kata",
    event: "KEJURPROV Banten 2021",
    location: "Banten, Indonesia",
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 px-6 md:px-20 bg-brownDark"
    >
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serifDisplay font-bold text-gold mb-12"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievementsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group bg-card border border-gold/20 p-6 rounded-2xl hover:shadow-goldGlow transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* RANK */}
                <div className="text-3xl">
                  {item.rank}
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-cream font-semibold text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gold/90 font-medium mt-1">
                    {item.event}
                  </p>

                  <p className="text-cream/60 text-sm mt-1">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}