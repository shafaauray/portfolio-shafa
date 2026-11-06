import { useEffect, useRef } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import SectionHeading from "../components/SectionHeading"

const newsData = [
  {
    title: "Podium Finish at Silent Knight International Karate Cup 2024",
    description:
      "Shafa Aura Yogadiasa earned podium finishes at the Silent Knight International Karate Cup 2024 in Kuala Lumpur, Malaysia.",
    date: "June 2024",
    image: "/sobatteknikshafa.jpg",
    link: "https://www.instagram.com/p/C7f1CvdvVcE/?hl=id&img_index=1",
    source: "Instagram",
  },
  {
    title: "UGM Engineering Student Wins 2 Medals at IPB Karate Cup VIII",
    description:
      "Shafa Aura Yogadiasa secured two medals at the IPB Karate Cup VIII, as featured by the Faculty of Engineering UGM.",
    date: "2024",
    image: "/shafaipbteknik.png",
    link: "https://ft.ugm.ac.id/shafa-aura-yogadiasa-raih-2-prestasi-pada-ipb-karate-cup-viii/",
    source: "FT UGM",
  },
  {
    title: "Silver & Bronze Medals in Malaysia",
    description:
      "UGM student Shafa Aura Yogadiasa won silver and bronze medals at the Silent Knight International Karate Cup 2024 in Malaysia.",
    date: "2024",
    image: "/shafaskteknik.jpg",
    link: "https://ft.ugm.ac.id/mahasiswa-ugm-raih-medali-perak-dan-perunggu-pada-kejuaraan-silent-knight-international-karate-cup-2024-di-malaysia/",
    source: "FT UGM",
  },
  {
    title: "UGM Wins 20 Medals at International Karate Competition",
    description:
      "UGM brought home 20 medals from an international karate competition, including achievements by Shafa Aura Yogadiasa.",
    date: "September 2023",
    image: "/ugm20inter.webp",
    link: "https://www.depokpos.com/2023/09/ugm-sabet-20-medali-di-kompetisi-karate-internasional/",
    source: "Depok Pos",
  },
  {
    title: "The Story Behind A Champion – TETI",
    description:
      "TETI's Champion Story features the inspiring journey of Shafa Aura Yogadiasa as an Information Technology student and karate athlete.",
    date: "2024",
    image: "/shafateti1.jpg",
    link: "https://www.instagram.com/p/C7taf5Ku3yM/?hl=id&img_index=1",
    source: "Instagram",
  },
  {
    title: "TETI Highlight on X (Twitter)",
    description:
      "A highlight of Shafa Aura Yogadiasa's achievements shared by the official KMTETI account.",
    date: "2024",
    image: "/shafateti2.jpg",
    link: "https://x.com/KMTETI/status/1802075382365175883",
    source: "X / Twitter",
  },
  {
    title: "Community Service: Village Profile Website for Lempuing Jaya",
    description:
      "As part of the KKN community service program, Shafa Aura Yogadiasa built a village profile website for Lempuing Jaya District, South Sumatra, to digitalize village information.",
    date: "South Sumatra, 2025",
    image: "/shafakkn2.jpeg",
    link: "https://www.instagram.com/p/DQwMDEJDz9M/?hl=id&img_index=4",
    source: "Instagram",
  },
  {
    title: "Community Service: Phishing & Hoax Prevention Education",
    description:
      "Shafa Aura Yogadiasa delivered a session on safe internet use and phishing prevention for school students in South Sumatra.",
    date: "Lempuing Jaya, 2025",
    image: "/shafakkn1.jpeg",
    link: "https://www.instagram.com/p/DQwMDEJDz9M/?hl=id&img_index=4",
    source: "Instagram",
  },
  {
    title: "UGM Wins 23 Medals – Bali Portal News",
    description:
      "UGM finished 3rd overall at the Brawijaya University Karate Championship 2023, with contributions from athletes including Shafa Aura Yogadiasa.",
    date: "November 2023",
    image: "/ubb.jpeg",
    link: "https://baliportalnews.com/2023/11/sabet-23-medali-ugm-juara-umum-3-di-brawijaya-university-karate-championship-2023/",
    source: "Bali Portal News",
  },
  {
    title: "UGM Karate Wins 12 Medals at International Silent Knight Karate Cup",
    description:
      "UGM's Karate Student Activity Unit brought home 12 medals (five gold, four silver, and three bronze) from the Silent Knight Karate Cup 2024 at Titiwangsa Stadium, Malaysia.",
    date: "March 14, 2024",
    image: "/skm.webp",
    link: "https://ugm.ac.id/id/berita/karate-ugm-borong-12-medali-kejuaraan-silent-knight-karate-cup-di-malaysia/",
    source: "UGM Official",
  },
  {
    title: "UGM Wins 23 Medals – Official UGM News",
    description:
      "UGM was crowned 3rd overall at the 2023 Brawijaya University Karate Championship. Shafa Aura Yogadiasa contributed to the medal haul with her outstanding performance.",
    date: "November 2023",
    image: "/ugmwinsub.webp",
    link: "https://ugm.ac.id/en/news/ugm-wins-23-medals-crowned-3rd-overall-in-2023-brawijaya-university-karate-championship/",
    source: "UGM Official",
  },
  {
    title: "Good News from Malaysia",
    description:
      "UGM's kata team swept medals in Malaysia, including international podium finishes by Shafa Aura Yogadiasa and her two teammates.",
    date: "2023",
    image: "/shafa3sk.webp",
    link: "https://www.instagram.com/p/C4VTbkDvWFy/?hl=id&img_index=7",
    source: "Instagram",
  },
  {
    title: "UGM Wins 20 Medals at International Karate Competition in Magelang",
    description:
      "UGM brought home 20 medals from an international karate competition in Magelang, including Shafa Aura Yogadiasa's result in the U21 Female Individual Kata category.",
    date: "September 2023",
    image: "/magelang.jpg",
    link: "https://baliportalnews.com/2023/09/karate-ugm-sabet-20-medali-dari-kompetisi-karate-internasional-di-magelang/",
    source: "Bali Portal News",
  },
]

export default function News() {
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
                      src={item.image}
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
