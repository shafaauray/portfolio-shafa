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

function getBadge(rank) {
  if (rank === "🥇") {
    return {
      text: "GOLD",
      className:
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    }
  }

  if (rank === "🥈") {
    return {
      text: "SILVER",
      className:
        "bg-gray-400/10 text-gray-300 border-gray-400/20",
    }
  }

  return {
    text: "BRONZE",
    className:
      "bg-orange-500/10 text-orange-400 border-orange-500/20",
  }
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 px-6 md:px-20 bg-brownDark"
    >
      {/* BATIK BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-serifDisplay font-bold text-gold mb-4">
            Achievements
          </h2>

          <div className="w-24 h-[2px] bg-gold/50 rounded-full" />

          <p className="mt-5 text-cream/60 max-w-2xl">
            A collection of national and international achievements that
            reflect discipline, consistency, and commitment throughout my
            karate journey.
          </p>
        </motion.div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {achievementsData.map((item, i) => {
            const badge = getBadge(item.rank)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  bg-card/90
                  border border-gold/10
                  rounded-xl
                  p-5
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-gold/30
                  hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)]
                "
              >
                {/* BADGE */}
                <div
                  className={`
                    inline-flex
                    items-center
                    px-3
                    py-1
                    rounded-full
                    text-[11px]
                    font-semibold
                    tracking-widest
                    border
                    mb-4
                    ${badge.className}
                  `}
                >
                  {badge.text}
                </div>

                {/* TITLE */}
                <h3 className="text-cream font-semibold leading-snug text-[15px] md:text-base">
                  {item.title}
                </h3>

                {/* EVENT */}
                <p className="text-gold text-sm mt-3 font-medium leading-relaxed">
                  {item.event}
                </p>

                {/* LOCATION */}
                <p className="text-cream/50 text-sm mt-2">
                  {item.location}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}