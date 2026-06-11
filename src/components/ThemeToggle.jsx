import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="
        flex items-center justify-center
        w-11 h-11
        rounded-full
        border border-gold/20
        bg-brownSoft
        text-gold
        transition-all
      "
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </motion.button>
  )
}