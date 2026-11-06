import { useEffect, useRef } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import SectionHeading from "../components/SectionHeading"
import { useContent } from "../context/contentContext"
import { img } from "../lib/sanity"

export default function News() {
  const { news: newsData } = useContent()
  const sliderRef = useRef(null)
  const pausedRef = useRef(false)

  // Gentle auto-scroll that pauses while the visitor interacts with it
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame
    let position = slider.scrollLeft
    const speed = 0.4

    const tick = () => {
      if (pausedRef.current) {
        position = slider.scrollLeft
      } else {
        const max = slider.scrollWidth - slider.clientWidth
        position = position >= max ? 0 : position + speed
        slider.scrollLeft = position
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const pause = () => {
    pausedRef.current = true
  }
  const resume = () => {
    pausedRef.current = false
  }

  const scrollByCard = (direction) => {
    const slider = sliderRef.current
    if (!slider) return
    const card = slider.querySelector("a")
    const step = card ? card.offsetWidth + 24 : 320
    slider.scrollBy({ left: direction * step, behavior: "smooth" })
  }

  return (
    <section
      id="news"
      className="py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          align="center"
          eyebrow="In the news"
          title="Media &"
          highlight="Highlights"
          description="Media coverage and publications featuring my achievements in karate, community service, and campus life."
        />

        <div
          className="relative"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={() => setTimeout(resume, 2500)}
          onFocus={pause}
          onBlur={resume}
        >
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 sm:mx-0 sm:px-0"
          >
            <div className="flex gap-5 sm:gap-6 w-max py-2">
              {newsData.map((item) => (
                <a
                  key={item.link + item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-[78vw] max-w-[300px] sm:w-[320px] sm:max-w-none lg:w-[340px] flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-card border border-gold/20 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-goldGlow"
                >
                  <div className="overflow-hidden aspect-[16/10] bg-brownSoft">
                    <img
                      src={img(item.image, 700)}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <p className="text-[11px] sm:text-xs text-gold/70 font-medium uppercase tracking-wide">
                      {item.date} • {item.source}
                    </p>

                    <h3 className="text-base sm:text-lg font-semibold text-cream mt-3 mb-3 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-cream/65 line-clamp-3 leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    <div className="mt-5 text-sm font-semibold text-gold flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                      Read Full Story <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Manual controls */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous story"
              className="w-11 h-11 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-brownDark transition"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next story"
              className="w-11 h-11 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-brownDark transition"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
