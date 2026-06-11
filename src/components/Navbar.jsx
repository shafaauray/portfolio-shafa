import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const sections = [
  "about",
  "skills",
  "experience",
  "education",
  "certificates",
  "achievements",
  "news",
  "projects",
  "contact",
]

export default function Navbar() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const element = document.getElementById(id)

        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-brownDark/80 backdrop-blur-md z-50 border-b border-gold/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-gold font-serifDisplay text-xl">
          Shafa Aura
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 text-sm tracking-wide">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-all duration-300 ${
                  active === id
                    ? "text-gold"
                    : "text-cream hover:text-gold"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <ThemeToggle />

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <X className="text-gold" size={24} />
              ) : (
                <Menu className="text-gold" size={24} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-brownSoft border-t border-gold/20">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm tracking-wide">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleClick}
                  className="text-cream hover:text-gold transition-all duration-300"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}