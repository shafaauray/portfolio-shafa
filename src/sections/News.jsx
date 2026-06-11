import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Grid } from "swiper/modules"

import "swiper/css"
import "swiper/css/grid"

const newsData = [
  {
    title: "Prestasi di Silent Knight International Karate Cup 2024",
    description:
      "Shafa Aura Yogadiasa meraih prestasi dalam kejuaraan Silent Knight International Karate Cup 2024 di Kuala Lumpur, Malaysia.",
    date: "June 2024",
    image: "/sobatteknikshafa.jpg",
    link: "https://www.instagram.com/p/C7f1CvdvVcE/?hl=id&img_index=1",
    source: "Instagram",
  },
  {
    title: "Mahasiswa Teknik UGM Raih 2 Prestasi pada IPB Karate Cup VIII",
    description:
      "Shafa Aura Yogadiasa berhasil meraih dua prestasi membanggakan pada IPB Karate Cup VIII.",
    date: "2024",
    image: "/shafaipbteknik.png",
    link: "https://ft.ugm.ac.id/shafa-aura-yogadiasa-raih-2-prestasi-pada-ipb-karate-cup-viii/",
    source: "FT UGM",
  },
  {
    title: "Medali Perak & Perunggu di Malaysia",
    description:
      "Mahasiswa UGM, Shafa Aura Yogadiasa meraih medali perak dan perunggu pada Silent Knight Karate Cup 2024 di Malaysia.",
    date: "2024",
    image: "/shafaskteknik.jpg",
    link: "https://ft.ugm.ac.id/mahasiswa-ugm-raih-medali-perak-dan-perunggu-pada-kejuaraan-silent-knight-karate-cup-2024-di-malaysia/",
    source: "FT UGM",
  },
  {
    title: "UGM Sabet 20 Medali di Karate Internasional",
    description:
      "UGM membawa pulang 20 medali dalam kompetisi karate internasional, termasuk prestasi dari Shafa Aura Yogadiasa.",
    date: "September 2023",
    image: "/ugm20inter.webp",
    link: "https://www.depokpos.com/2023/09/ugm-sabet-20-medali-di-kompetisi-karate-internasional/",
    source: "Depok Pos",
  },
  {
    title: "The Story Behind A Champion – TETI",
    description:
      "TETI Champion Story menampilkan kisah inspiratif Shafa Aura Yogadiasa sebagai mahasiswi Teknologi Informasi.",
    date: "2024",
    image: "/shafateti1.jpg",
    link: "https://www.instagram.com/p/C7taf5Ku3yM/?hl=id&img_index=1",
    source: "Instagram",
  },
  {
    title: "TETI Highlight on X (Twitter)",
    description:
      "Sorotan prestasi Shafa Aura Yogadiasa yang dibagikan melalui akun resmi KMTETI.",
    date: "2024",
    image: "/shafateti2.jpg",
    link: "https://x.com/KMTETI/status/1802075382365175883",
    source: "X / Twitter",
  },
  {
    title: "KKN: Website Profil Desa Lempuing Jaya",
    description:
      "Sebagai bagian dari program KKN, Shafa Aura Yogadiasa membuat website profil desa untuk Kecamatan Lempuing Jaya, Sumatera Selatan sebagai upaya mendigitalisasi informasi desa.",
    date: "Sumatera Selatan, 2025",
    image: "/shafakkn2.jpeg",
    link: "https://www.instagram.com/p/DQwMDEJDz9M/?hl=id&img_index=4",
    source: "Instagram",
  },
  {
    title: "KKN: Edukasi Pencegahan Phishing dan Berita Hoax",
    description:
      "Edukasi Bijak dalam Penggunaan Internet: Pencegahan Phishing oleh Shafa Aura Yogadiasa untuk adik-adik sekolah di Sumatera Selatan",
    date: "Lempuing Jaya,2025",
    image: "/shafakkn1.jpeg",
    link: "https://www.instagram.com/p/DQwMDEJDz9M/?hl=id&img_index=4",
    source: "Instagram",
  },
  {
    title: "Sabet 23 Medali – Bali Portal News",
    description:
      "UGM Juara Umum 3 di Brawijaya University Karate Championship 2023 dengan kontribusi atlet termasuk Shafa Aura Yogadiasa.",
    date: "November 2023",
    image: "/ubb.jpeg",
    link: "https://baliportalnews.com/2023/11/sabet-23-medali-ugm-juara-umum-3-di-brawijaya-university-karate-championship-2023/",
    source: "Bali Portal News",
  },
  {
    title: "UGM Karate Borong 12 Medali di International Silent Knight Karate Cup",
    description:
      "Unit Kegiatan Mahasiswa (UKM) Karate UGM berhasil membawa pulang 12 medali dalam Silent Knight Karate Cup 2024 di Titiwangsa Stadium, Malaysia, termasuk lima medali emas, empat perak, dan tiga perunggu — sebuah prestasi kerja keras yang membanggakan bagi tim UGM.",
    date: "March 14, 2024",
    image: "/skm.webp",
    link: "https://ugm.ac.id/id/berita/karate-ugm-borong-12-medali-kejuaraan-silent-knight-karate-cup-di-malaysia/",
    source: "UGM Official",
  },
  {
    title: "UGM Wins 23 Medals – Official UGM News",
    description:
      "UGM crowned 3rd overall at 2023 Brawijaya University Karate Championship. Shafa Aura Yogadiasa contributed to the medal haul with her outstanding performance in the competition.",
    date: "November 2023",
    image: "/ugmwinsub.webp",
    link: "https://ugm.ac.id/en/news/ugm-wins-23-medals-crowned-3rd-overall-in-2023-brawijaya-university-karate-championship/",
    source: "UGM Official",
  },
  {
    title: "Kabar Baik dari Malaysia",
    description:
      "Tim Kata Universitas Gadjah Mada memborong medali di Malaysia termasuk prestasi internasional. Shafa Aura Yogadiasa bersama dua rekan timnya...",
    date: "2023",
    image: "/shafa3sk.webp",
    link: "https://www.instagram.com/p/C4VTbkDvWFy/?hl=id&img_index=7",
    source: "Instagram",
  },
  {
    title: "UGM Sabet 20 Medali di Kompetisi Karate Internasional di Magelang",
    description:
      "UGM berhasil membawa pulang 20 medali dari ajang kompetisi karate internasional yang digelar di Magelang, termasuk prestasi Shafa Aura Yogadiasa dalam kategori U21 Kata Perorangan Putri.",
    date: "September 2023",
    image: "/magelang.jpg",
    link: "https://baliportalnews.com/2023/09/karate-ugm-sabet-20-medali-dari-kompetisi-karate-internasional-di-magelang/",
    source: "Bali Portal News",
  },
]

export default function News() {
  return (
    <section
      id="news"
      className="py-28 px-6 md:px-20 bg-brownDark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-serifDisplay text-gold">
            Media & Highlights
          </h2>

          <p className="text-cream/70 max-w-xl mx-auto mt-3">
            Publications and media coverage featuring
            <span className="text-gold font-semibold">
              {" "}Shafa Aura Yogadiasa
            </span>
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Grid]}
          loop={true}
          grabCursor={true}
          speed={8000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: {
                rows: 2,
                fill: "row",
              },
            },

            768: {
              slidesPerView: 2,
              grid: {
                rows: 1,
              },
            },

            1280: {
              slidesPerView: 3,
              grid: {
                rows: 1,
              },
            },
          }}
        >
          {newsData.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8 }}
                className="group block h-full bg-card border border-gold/15 rounded-3xl overflow-hidden backdrop-blur-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-black/60 backdrop-blur-md text-gold border border-gold/20">
                      {item.source}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-gold/60 mb-3">
                    {item.date}
                  </p>

                  <h3 className="text-lg font-semibold text-gold mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-cream/70 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}