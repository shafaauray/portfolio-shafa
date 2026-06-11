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
      className="relative py-28 px-6 md:px-20 bg-brownDark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-gold/70 text-sm mb-4">
            Recognition & Excellence
          </p>

          <h2 className="text-4xl md:text-5xl font-serifDisplay font-bold text-gold">
            Achievements
          </h2>

          <div className="w-24 h-[2px] bg-gold mx-auto mt-6" />
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gold/15
                bg-card
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-gold/40
                hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]
              "
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />

              <div className="relative flex gap-5 items-start">

                {/* MEDAL */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-16
                    h-16
                    rounded-2xl
                    bg-gold/10
                    border
                    border-gold/20
                    text-3xl
                    shrink-0
                  "
                >
                  {item.rank}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-cream leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gold mt-2 font-medium">
                    {item.event}
                  </p>

                  <p className="text-sm text-cream/60 mt-2">
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