import { motion } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import { useContent } from "../context/contentContext"


function getBadge(rank) {
  if (rank === "gold") {
    return {
      text: "GOLD",
      className:
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    }
  }

  if (rank === "silver") {
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
  const { achievements } = useContent()

  return (
    <section
      id="achievements"
      className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark overflow-hidden"
    >
      {/* BATIK BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/batik-pattern.svg')] opacity-[0.03]" />

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gold/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Beyond the screen"
          title="Karate"
          highlight="Achievements"
          description="A collection of national and international achievements that reflect discipline, consistency, and commitment throughout my karate journey."
        />

        {/* ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map((item, i) => {
            const badge = getBadge(item.rank)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
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