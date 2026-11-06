import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Certificates from "./sections/Certificates"
import Achievements from "./sections/Achievements"
import Projects from "./sections/Projects"
import News from "./sections/News"
import Contact from "./sections/Contact"

const sections = [
  About,
  Skills,
  Experience,
  Education,
  Certificates,
  Achievements,
  News,
  Projects,
  Contact,
]

function App() {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".fade-section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.05 }
    )

    wrappers.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      {/* GLOBAL RADIAL GLOW */}
      <div className="fixed inset-0 -z-10 bg-radialGlow opacity-60 pointer-events-none" />

      <Navbar />

      <main>
        <Hero />

        {sections.map((Section, i) => (
          <div key={i} className="fade-section">
            <Section />
          </div>
        ))}
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
