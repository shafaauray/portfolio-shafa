import { motion } from "framer-motion"
import { useState } from "react"
import SectionHeading from "../components/SectionHeading"

/* =======================
   DATA
======================= */

const certificateGroups = {
  it: {
    label: "IT & Course Certificates",
    items: [
      {
        title: "Python Essentials 1",
        issuer: "CISCO Networking Academy x OpenEDG Python Institute",
        year: "2025",
        image: "/certificates/Certificate Python Essentials CISCO_Shafa Aura Y.jpg",
        link: "/certificates/Certificate Python Essentials CISCO_Shafa Aura Y.pdf",
      },
      {
        title: "Dynamics 365 Customer Service Capabilities and Related Apps",
        issuer: "Microsoft Learn",
        year: "2025",
        image: "/certificates/Certificate_Describe Dynamics 365 Customer Service capabilities and related apps_Shafa Aura Y.jpg",
        link: "/certificates/Certificate_Describe Dynamics 365 Customer Service capabilities and related apps_Shafa Aura Y.pdf",
      },
      {
        title: "Dynamics 365 Field Service Scheduling Capabilities and Related Apps",
        issuer: "Microsoft Learn",
        year: "2025",
        image: "/certificates/Certificate_Describe Dynamics 365 Field Service scheduling capabilities and related apps_Shafa Aura Y.jpg",
        link: "/certificates/Certificate_Describe Dynamics 365 Field Service scheduling capabilities and related apps_Shafa Aura Y.pdf",
      },
      {
        title: "Dynamics 365 Sales Capabilities and Related Apps",
        issuer: "Microsoft Learn",
        year: "2025",
        image: "/certificates/Certificate_Describe Dynamics 365 Sales capabilities and related apps_Shafa Aura Y.jpg",
        link: "/certificates/Certificate_Describe Dynamics 365 Sales capabilities and related apps_Shafa Aura Y.pdf",
      },
      {
        title: "Shared Activities and Integration Options in Dynamics 365 Customer Engagement Apps",
        issuer: "Microsoft Learn",
        year: "2025",
        image: "/certificates/Certificate_Describe shared activities and integration options in Dynamics 365 customer engagement apps_Shafa Aura Y.jpg",
        link: "/certificates/Certificate_Describe shared activities and integration options in Dynamics 365 customer engagement apps_Shafa Aura Y.pdf",
      },
      {
        title: "Advanced Deep Learning with Keras",
        issuer: "DataCamp",
        year: "2024",
        image: "/certificates/Certificate Advanced Deep Learning with Keras_Shafa Aura Y.jpg",
        link: "https://www.datacamp.com/statement-of-accomplishment/course/c709ff20c2a801c349f0f2f32d5488ca3d5a0164?raw=1",
      },
      {
        title: "Cleaning Data in Python",
        issuer: "DataCamp",
        year: "2024",
        image: "/certificates/Certificate Cleaning Data in Python_Shafa Aura Y.jpg",
        link: "https://www.datacamp.com/statement-of-accomplishment/course/a91c1cbd9d7a09fe6aa3ae89e71226a33d53626f?raw=1",
      },
      {
        title: "Dimensionality Reduction in Python",
        issuer: "DataCamp",
        year: "2024",
        image: "/certificates/Certificate Dimensionality Reduction in Python_Shafa Aura Y.jpg",
        link: "https://www.datacamp.com/statement-of-accomplishment/course/0ad45a506b7c7991355ef7aa4c5e47a75079b8bd?raw=1",
      },
      {
        title: "Exploratory Data Analysis in Python",
        issuer: "DataCamp",
        year: "2024",
        image: "/certificates/Certificate Exploratory Data Analysis in Python_Shafa Aura Y.jpg",
        link: "https://www.datacamp.com/statement-of-accomplishment/course/de6f54e4aaaee9d7e28ee1096aa2582bc9441595?raw=1",
      },
      {
        title: "Introduction to Databricks",
        issuer: "DataCamp",
        year: "2024",
        image: "/certificates/Certificate Introduction to Databricks_Shafa Aura Y.jpg",
        link: "https://www.datacamp.com/statement-of-accomplishment/course/59d4e34ffcaf8a48ee3460c6aa9e4c59b1c4bed9?raw=1",
      },
      {
        title: "Introduction to Deep Learning with Keras",
        issuer: "DataCamp",
        year: "2024",
        image: "/certificates/Certificate Introduction to Deep Learning with Keras_Shafa Aura Y.jpg",
        link: "https://www.datacamp.com/statement-of-accomplishment/course/ac678e78d58160ec77d24bcda36f5aff25cbbcc3?raw=1",
      },
      {
        title: "Introduction to Statistics in Python",
        issuer: "DataCamp",
        year: "2024",
        image: "/certificates/Certificate Introduction to Statistics in Python_Shafa Aura Y.jpg",
        link: "https://www.datacamp.com/statement-of-accomplishment/course/9bfa70c91814906669afa26803f27c4d44c143a3?raw=1",
      },
    ],
  },
  karate: {
    label: "Karate Certificates",
    items: [
      {
        title: "2nd Place Senior Female Team Kata, International Silent Knight Karate Cup",
        issuer: "Kementerian Belia dan Sukan Malaysia (KBS) - Kuala Lumpur, Malaysia",
        year: "2024",
        image: "/certificates/Sertifikat Silent Knight 2_Shafa.jpg",
        link: "/certificates/Sertifikat Silent Knight 2_Shafa.pdf",
      },
      {
        title: "3rd Place Senior Female Team Kata, International Silent Knight Karate Cup",
        issuer: "Kementerian Belia dan Sukan Malaysia (KBS) - Kuala Lumpur, Malaysia",
        year: "2024",
        image: "/certificates/Sertifikat Silent Knight 3_Shafa.jpg",
        link: "/certificates/Sertifikat Silent Knight 3_Shafa.pdf",
      },
      {
        title: "2nd Place Senior Female Individual Kata, National IPB Karate Cup VII",
        issuer: "West Java, Indonesia",
        year: "2024",
        image: "/certificates/Sertifikat IPB CUP_Shafa.jpg",
        link: "/certificates/Sertifikat IPB CUP_Shafa.pdf",
      },
      {
        title: "2nd Place Senior Female Team Kata, National IPB Karate Cup VII",
        issuer: "West Java, Indonesia",
        year: "2024",
        image: "/certificates/Sertifikat IPB CUP_Beregu.jpg",
        link: "/certificates/Sertifikat IPB CUP_Beregu.pdf",
      },
      {
        title: "3rd Place U21 Female Individual Kata, International Magelang Karate Championship",
        issuer: "Central Java, Indonesia",
        year: "2023",
        image: "/certificates/Sertifikat MIKC_SHAFA.jpg",
        link: "/certificates/Sertifikat MIKC_SHAFA.pdf",
      },
      {
        title: "3rd Place Senior Female Individual Kata, Brawijaya University Karate Championship",
        issuer: "East Java, Indonesia",
        year: "2023",
        image: "/certificates/Sertifikat BUKC_Shafa Aura.jpg",
        link: "/certificates/Sertifikat BUKC_Shafa Aura.pdf",
      },
      {
        title: "2nd Place Female Karate, KOSN SMA Province Level",
        issuer: "Ministry of Education, Culture, Research, and Technology of Indonesia (KEMENDIKBUD) - Banten, Indonesia",
        year: "2021",
        image: "/certificates/sertifikat KOSN SMA provinsi_Shafa.jpeg",
        link: "/certificates/sertifikat KOSN SMA provinsi_Shafa.jpeg",
      },
      {
        title: "1st Place Female Karate, KOSN SMA City Level",
        issuer: "Department of Youth and Sports (DISPORA) - Kota Tangerang, Indonesia",
        year: "2021",
        image: "/certificates/sertifikat KOSN SMA kota_Shafa.jpeg",
        link: "/certificates/sertifikat KOSN SMA kota_Shafa.jpeg",
      },
      {
        title: "3rd Place Female Individual Kata, Kejurprov Banten",
        issuer: "Banten Provincial Sports Committee (KONI) - Banten, Indonesia",
        year: "2021",
        image: "/certificates/sertifikat kejurprov 20_Shafa.jpeg",
        link: "/certificates/sertifikat kejurprov 20_Shafa.jpeg",
      },
      {
        title: "1st Place Female Individual Kata, PORKOT Tangerang",
        issuer: "DISPORA Kota Tangerang - Banten, Indonesia",
        year: "2019",
        image: "/certificates/sertifikat porkot 19 provinsi_Shafa.jpeg",
        link: "/certificates/sertifikat porkot 19 provinsi_Shafa.jpeg",
      },
      {
        title: "2nd Place Female Individual Kata, POPDA Banten",
        issuer: "Department of Youth and Sports (DISPORA) - Banten, Indonesia",
        year: "2019",
        image: "/certificates/sertifikat POPDA 19_Shafa.jpeg",
        link: "/certificates/sertifikat POPDA 19_Shafa.jpeg",
      },
      {
        title: "1st Place Female Individual Kata, Walikota Cup Tangerang",
        issuer: "DISPORA Kota Tangerang - Banten, Indonesia",
        year: "2019",
        image: "/certificates/sertifikat WALIKOTA CUP 19_Shafa.jpeg",
        link: "/certificates/sertifikat WALIKOTA CUP 19_Shafa.jpeg",
      },
      {
        title: "1st Place Female Karate, KOSN SMP Province Level",
        issuer: "Ministry of Education, Culture, Research, and Technology of Indonesia (KEMENDIKBUD) - Banten, Indonesia",
        year: "2018",
        image: "/certificates/sertifikat KOSN SMP provinsi_Shafa.jpeg",
        link: "/certificates/sertifikat KOSN SMP provinsi_Shafa.jpeg",
      },
      {
        title: "1st Place Female Karate, O2SN SMP City Level",
        issuer: "Ministry of Education, Culture, Research, and Technology of Indonesia (KEMENDIKBUD) - Banten, Indonesia",
        year: "2018",
        image: "/certificates/sertifikat 02SN SMP kota_Shafa.jpeg",
        link: "/certificates/sertifikat 02SN SMP kota_Shafa.jpeg",
      },
      {
        title: "1st Place Female Karate, Banten Open Karate Championship",
        issuer: "KONI Banten x DPRD Banten, Indonesia",
        year: "2018",
        image: "/certificates/sertifikat BOKC_Shafa.jpeg",
        link: "/certificates/sertifikat BOKC_Shafa.jpeg",
      },
      {
        title: "3rd Place Female Individual Kata, National Karate UNJ CUP",
        issuer: "Universitas Negeri Jakarta, Indonesia",
        year: "2018",
        image: "/certificates/sertifikat UNJ CUP_Shafa.jpeg",
        link: "/certificates/sertifikat UNJ CUP_Shafa.jpeg",
      },
      {
        title: "1st Place Cadet Individual Kata, Piala Ganesha KODIKLAT TNI",
        issuer: "KODIKLAT TNI x INKAI Banten",
        year: "2018",
        image: "/certificates/sertifikat KODIKLAT TNI_Shafa.jpeg",
        link: "/certificates/sertifikat KODIKLAT TNI_Shafa.jpeg",
      },
      {
        title: "1st Place Female Individual Kata, KEJURPROV Banten",
        issuer: "KONI Banten x DISPORA Banten x Danau Mas Resto, Indonesia",
        year: "2018",
        image: "/certificates/sertifikat KEJURPROV SENIOR 18_Shafa.jpeg",
        link: "/certificates/sertifikat KEJURPROV SENIOR 18_Shafa.jpeg",
      },
      {
        title: "2nd Place Female Kumite -40 kg, KEJURNAS KARATE INKAI",
        issuer: "Semarang, Indonesia",
        year: "2016",
        image: "/certificates/sertifikat KEJURNAS_Shafa.jpeg",
        link: "/certificates/sertifikat KEJURNAS_Shafa.jpeg",
      },
    ],
  },
}

/* =======================
   COMPONENT
======================= */

export default function Certificates() {
  const [active, setActive] = useState("it")
  const certificates = certificateGroups[active].items

  return (
    <section id="certificates" className="py-20 md:py-28 px-5 sm:px-8 lg:px-20 bg-brownDark">
      <div className="max-w-7xl mx-auto">

        <SectionHeading
          eyebrow="Credentials"
          title="Certificates &"
          highlight="Licenses"
          description="A curated collection of professional learning credentials and achievement certificates earned through courses, competitions, and academic growth."
        />

        {/* CATEGORY SWITCH */}
        <div className="flex gap-3 mb-8 flex-wrap" role="tablist" aria-label="Certificate categories">
          {Object.keys(certificateGroups).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm border transition-all ${
                active === key
                  ? "bg-gold text-brownDark border-gold"
                  : "text-cream/70 border-gold/30 hover:text-gold"
              }`}
            >
              {certificateGroups[key].label}
              <span className="ml-2 opacity-70">
                {certificateGroups[key].items.length}
              </span>
            </button>
          ))}
        </div>

        {/* SCROLL CONTAINER */}
        <div className="relative">

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 max-h-[600px] sm:max-h-[640px] overflow-y-auto pr-1 sm:pr-2 pb-16">
            {certificates.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group bg-card border border-gold/20 rounded-xl overflow-hidden flex flex-col hover:border-gold/50 transition-colors"
              >
                {/* IMAGE */}
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <h3 className="font-body text-cream font-medium text-xs sm:text-sm leading-snug line-clamp-2 tracking-normal">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] sm:text-xs text-gold/80 line-clamp-2">
                    {item.issuer}
                  </p>

                  <p className="mt-0.5 text-[11px] sm:text-xs text-cream/50">
                    {item.year}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-auto pt-3">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[11px] sm:text-xs text-gold border border-gold/40 px-3 py-1 rounded-full hover:bg-gold hover:text-brownDark transition"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SCROLL HINT */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brownDark to-transparent flex justify-center items-end">
            <span className="text-xs text-cream/40 mb-2">
              Scroll to see more ↓
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}