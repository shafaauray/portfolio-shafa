import { useEffect } from "react"
import { motion } from "framer-motion"

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

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative overflow-x-hidden">

      {/* GLOBAL RADIAL GLOW */}
      <div className="fixed inset-0 -z-10 bg-radialGlow opacity-60 pointer-events-none" />

      <Navbar />

      <Hero />

      <section className="fade-section">
        <About />
      </section>

      <section className="fade-section">
        <Skills />
      </section>

      <section className="fade-section">
        <Experience />
      </section>

      <section className="fade-section">
        <Education />
      </section>

      {/* ✅ CERTIFICATES – BARU */}
      <section className="fade-section">
        <Certificates />
      </section>

      <section className="fade-section">
        <Achievements />
      </section>

      <section className="fade-section">
        <News />
      </section>

      <section className="fade-section">
        <Projects />
      </section>

      <section className="fade-section">
        <Contact />
      </section>

      <Footer />

      {/* FLOATING GOLD PARTICLE */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="fixed bottom-10 right-10 w-4 h-4 bg-gold rounded-full blur-sm opacity-60 pointer-events-none"
      />
    </div>
  )
}

export default App