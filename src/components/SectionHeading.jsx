import { motion } from "framer-motion"

/**
 * Shared heading used by every section so titles, spacing and
 * typography stay consistent across the whole portfolio.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  const centered = align === "center"

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="text-gold/80 text-xs font-medium tracking-[0.3em] uppercase mb-3">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
        {title}
        {highlight && <span className="text-gold"> {highlight}</span>}
      </h2>

      <div
        className={`mt-5 h-[2px] w-20 rounded-full ${
          centered
            ? "mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
            : "bg-gradient-to-r from-gold to-transparent"
        }`}
      />

      {description && (
        <p
          className={`mt-5 text-cream/60 leading-relaxed text-sm sm:text-base max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
