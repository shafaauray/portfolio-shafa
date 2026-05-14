import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

/* =======================
   DATA
======================= */

const workExperience = [
  {
    role: "Personnel Information Division Staff",
    institution:
      "Badan Kepegawaian Negara (BKN) - Jl. Magelang No.Km. 7,5, Daerah Istimewa Yogyakarta 55284",
    period: "Jan 2025 – Present",
    location: "Yogyakarta, Indonesia",
    description:
      "Personnel Information Sector is tasked with implementing and facilitating the development of a civil service information system for State Civil Apparatus (ASN) in the agencies where they work.",
    tasks: [
      "Create a web app for the office guest book for the guest service process at the BKN Office.",
    ],
  },
  {
    role: "Selection Committee Staff – Calon Aparatur Sipil Negara (CASN)",
    institution:
      "Badan Kepegawaian Negara (BKN) - Jl. Magelang No.Km. 7,5, Daerah Istimewa Yogyakarta 55284",
    period: "Oct 2024 – Nov 2024",
    location: "Yogyakarta, Indonesia",
    description:
      "The CASN Selection is a nationwide recruitment process organized by BKN to select qualified candidates for civil servant positions in Indonesia.",
    tasks: [
      "Managed participant registration and facilitated the creation of exam PINs for CASN selection.",
      "Contributed to the smooth operation of a large-scale national recruitment process.",
    ],
  },
]

const organizationExperience = [
  {
    role: "Staff of Ministry of Creative Media",
    institution:
      "BEM KMFT UGM - Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284",
    period: "Mar 2024 – Present",
    location: "Yogyakarta, Indonesia",
    description:
      "The Ministry of Creative Media is the ministry that operates in the fields of media, information and relations with outside parties Faculty of Engineering UGM.",
    tasks: [
      "Optimize functional development media and communications belonging to BEM KMFT UGM.",
      "Responsible for presenting the information actual, factual and useful through social media BEM KMFT UGM.",
    ],
  },
  {
    role: "Staff of Public Relations Division",
    institution:
      "KMTETI FT UGM - Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284",
    period: "Feb 2024 – Present",
    location: "Yogyakarta, Indonesia",
    description:
      "The KMTETI Public Relations Division is an interconnector of KMTETI with outside parties.",
    tasks: [
      "Responsible for establishing cooperation with external parties.",
      "Build and introduce DTETI to the wider community.",
    ],
  },
  {
    role: "Head of Human Resources Development",
    institution:
      "UKM Karate INKAI UGM - Universitas Gadjah Mada, Daerah Istimewa Yogyakarta",
    period: "Dec 2023 – Present",
    location: "Universitas Gadjah Mada",
    description:
      "UKM Karate INKAI is a student activity unit that accommodates students' interests and talents in the sport of Karate.",
    tasks: [
      "Carry out the process of supervision, cadre formation internal, and development of UGM Karate UKM members.",
      "Responsible for evaluating staff performance.",
    ],
  },
  {
    role: "Head of Coaching",
    institution:
      "UKM Karate INKAI UGM – Universitas Gadjah Mada, Daerah Istimewa Yogyakarta",
    period: "Dec 2022 – Dec 2023",
    location: "Universitas Gadjah Mada",
    description:
      "UKM Karate INKAI is a student activity unit that accommodates students' interests and talents in the sport of Karate.",
    tasks: [
      "Arrange training schedules and programs for all members.",
      "Responsible for belt promotion exams.",
    ],
  },
  {
    role: "Sub-Coordinator of the Logistics and Consumption",
    institution:
      "International Gadjah Mada Open Karate Championship – Daerah Istimewa Yogyakarta",
    period: "Nov 2024 – Feb 2025",
    location: "Yogyakarta, Indonesia",
    description:
      "GMOKC is a prestigious international karate championship held by Gadjah Mada University.",
    tasks: [
      "Responsible for the preparation and management of all event properties and equipment.",
      "Coordinated and ensured the distribution of meals for participants and committee members.",
    ],
  },
  {
    role: "Event Committee – Match Scheduling and Coordination",
    institution:
      "PORSENIGAMA – GOR Pancasila, Universitas Gadjah Mada, Daerah Istimewa Yogyakarta",
    period: "Oct 2024",
    location: "Universitas Gadjah Mada",
    description:
      "Porsenigama is an annual sports and arts event involving contingents from various Faculties and Schools at UGM.",
    tasks: [
      "Designed and managed match brackets.",
      "Coordinated the event rundown.",
    ],
  },
  {
    role: "Sub-Coordinator of the Equipment and Logistics",
    institution:
      "Open House & Capstone Expo DTETI – Fakultas Teknik, Universitas Gadjah Mada",
    period: "Nov 2024",
    location: "Fakultas Teknik UGM",
    description:
      "An event aimed at introducing high school students and the public to university life.",
    tasks: [
      "Managed preparation and logistics of event equipment.",
      "Coordinated setup, teardown, and meal distribution.",
    ],
  },
  {
    role: "Event Coordinator & Executor",
    institution:
      "PBUB Karate UGM – Fakultas Peternakan, Universitas Gadjah Mada",
    period: "Jul 2024",
    location: "Universitas Gadjah Mada",
    description:
      "PBUB is a selection route intended for student winners/champions.",
    tasks: [
      "Coordinated the entire event process.",
      "Recorded participant data and reported results to Ditmawa UGM.",
    ],
  },
  {
    role: "Staff of Documentation Decoration Design Division",
    institution:
      "Grand Launching BEM KMFT UGM – Gedung SGLC, Fakultas Teknik, Universitas Gadjah Mada",
    period: "Mar 2024",
    location: "Fakultas Teknik UGM",
    description:
      "An introduction event for the new BEM KMFT UGM cabinet.",
    tasks: [
      "Handled visual content including editing, design, and video.",
      "Managed event venue decoration.",
    ],
  },
  {
    role: "Secretary & Master of Ceremony",
    institution:
      "PORSENIGAMA Karate – GOR Lembah, Universitas Gadjah Mada, Daerah Istimewa Yogyakarta",
    period: "Oct 2023",
    location: "Universitas Gadjah Mada",
    description:
      "Porsenigama is an annual sports and arts event.",
    tasks: [
      "Registered participants and created competition charts.",
      "Guided and organized event execution.",
    ],
  },
  {
    role: "Staff of Security Division",
    institution:
      "Integrated Career Days – Universitas Gadjah Mada, Daerah Istimewa Yogyakarta",
    period: "Jun 2023",
    location: "Universitas Gadjah Mada",
    description:
      "Integrated Career Days is an event to prepare students for the working world.",
    tasks: [
      "Managed visitor flow.",
      "Conducted routine patrols.",
    ],
  },
  {
    role: "Executor",
    institution:
      "PBUB Karate UGM – Fakultas Peternakan, Universitas Gadjah Mada",
    period: "May 2023",
    location: "Universitas Gadjah Mada",
    description:
      "PBUB is a selection route intended for student winners/champions.",
    tasks: [
      "Registered participants.",
      "Recorded selection results.",
    ],
  },
]

const documentationMap = {
  "Personnel Information Division Staff": ["/internbkn1.jpeg"],["/internbkn2.jpeg"], 
  "Selection Committee Staff – Calon Aparatur Sipil Negara (CASN)": ["/fotoshafa2.jpg"],
  "Staff of Ministry of Creative Media": ["/fotoshafa3.jpg"],
  "Staff of Public Relations Division": ["/fotoshafa4.jpg"],
  "Head of Human Resources Development": ["/fotoshafa5.jpg"],
  "Head of Coaching": ["/fotoshafa6.jpg"],
  "Sub-Coordinator of the Logistics and Consumption": ["/fotoshafa7.jpg"],
  "Event Committee – Match Scheduling and Coordination": ["/fotoshafa8.jpg"],
  "Sub-Coordinator of the Equipment and Logistics": ["/fotoshafa9.jpg"],
  "Event Coordinator & Executor": ["/fotoshafa10.jpg"],
  "Staff of Documentation Decoration Design Division": ["/fotoshafa11.jpg"],
  "Secretary & Master of Ceremony": ["/fotoshafa12.jpg"],
  "Staff of Security Division": ["/fotoshafa13.jpg"],
  "Executor": ["/fotoshafa14.jpg"],
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 md:px-20 bg-brownDark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serifDisplay font-bold text-gold mb-12">
          Experience
        </h2>

        <Section title="Work Experience" data={workExperience} />

        <Section
          title="Organizational & Event Experience"
          data={organizationExperience}
        />
      </div>
    </section>
  )
}

function Section({ title, data }) {
  return (
    <>
      <h3 className="text-xl font-semibold text-gold mb-6">
        {title}
      </h3>

      <div className="space-y-6 mb-16">
        {data.map((item, i) => (
          <ExperienceCard
            key={i}
            item={item}
            docs={documentationMap[item.role] || []}
          />
        ))}
      </div>
    </>
  )
}

function ExperienceCard({ item, docs }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-gold/20 p-5 sm:p-6 rounded-2xl overflow-hidden"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-cream font-semibold text-lg break-words">
            {item.role}
          </h4>

          <p className="text-gold/90 font-medium break-words leading-relaxed">
            {item.institution}
          </p>

          <p className="text-cream/60 text-sm mt-1">
            {item.location}
          </p>
        </div>

        <p className="text-cream/60 text-sm md:text-right shrink-0">
          {item.period}
        </p>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-4 text-cream/70 leading-relaxed break-words">
        {item.description}
      </p>

      {/* TASKS */}
      <ul className="mt-3 list-disc list-inside text-cream/70 space-y-2">
        {item.tasks.map((task, i) => (
          <li key={i} className="break-words">
            {task}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-5 text-sm text-gold hover:underline"
      >
        {open ? "Hide Documentation" : "View Documentation"}
      </button>

      {/* DOCS */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
              {docs.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-gold/20"
                >
                  <img
                    src={src}
                    alt="Documentation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}