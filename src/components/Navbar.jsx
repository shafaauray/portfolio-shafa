import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "news", label: "Media" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Highlight the section currently under the navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = ""
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close the mobile menu when switching to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "bg-brownDark/90 backdrop-blur-md border-gold/20 shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 lg:px-10 h-16"
      >
        {/* LOGO */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="text-gold font-serifDisplay text-xl tracking-wide"
        >
          Shafa Aura
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className={`relative py-1 transition-colors duration-300 ${
                  active === id ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-gold transition-all duration-300 ${
                    active === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE / TABLET TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden p-2 -mr-2 text-gold"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE / TABLET MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-gold/20 bg-brownDark/95"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-5 sm:px-8 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                      active === id
                        ? "bg-gold/10 text-gold"
                        : "text-cream/80 hover:bg-white/5 hover:text-gold"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
