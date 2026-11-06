/*
 * Fallback / seed content for the portfolio.
 *
 * The live site reads its content from Sanity (edit it in the Sanity Studio).
 * This file is only used:
 *   1. as a fallback if Sanity cannot be reached, and
 *   2. by scripts/seed-sanity.mjs to fill Sanity the first time.
 * Editing this file does NOT change the live site once Sanity is set up.
 */

export const profile = {
  badge: "Open to collaboration",
  role: "UI/UX Designer & Frontend Developer",
  intro:
    "Information Engineering student at Universitas Gadjah Mada with a strong interest in UI/UX, web development, and meaningful digital experiences, blending technology and creativity with the discipline of a karate athlete.",
  location: "Kota Tangerang, Indonesia",
  heroPhoto: "/fotoshafa.jpg",
  aboutPhoto: "/fotoshafa2.jpg",
  medalsCount: "20+",
  aboutParagraphs: [
    "I’m an undergraduate Information Technology student who enjoys exploring the intersection of design, technology, and human interaction. My main interests lie in UI/UX design and frontend development, while staying grounded in a broad IT foundation that allows me to adapt across different roles and projects. Outside the technical space, I’ve gained extensive experience as an MC and in organizational roles, which has strengthened my communication skills, confidence, and ability to connect with diverse audiences. These experiences help me approach digital products not only from a technical perspective, but also from a human-centered one.",
    "I’m also a karate athlete with national and international achievements. Martial arts have shaped my discipline, resilience, and consistency, values I carry into both my academic and creative work. Beyond technology, I’m inspired by art, culture, photography, and music, which often influence how I think about design and storytelling. With a background shaped by both structure and creativity, I’m always eager to learn, collaborate, and build digital experiences that are thoughtful, functional, and human-centered.",
  ],
}

// `icon` values are keys of ICONS in src/lib/icons.jsx
export const skills = [
  { name: "Web Development", percent: 85, icon: "code" },
  { name: "Frontend Engineering", percent: 90, icon: "js" },
  { name: "UI / UX Design", percent: 95, icon: "figma" },
  { name: "Responsive Design", percent: 90, icon: "mobile" },
  { name: "Backend Logic", percent: 75, icon: "server" },
  { name: "Database Management", percent: 75, icon: "database" },
  { name: "Problem Solving", percent: 92, icon: "lightbulb" },
  { name: "Leadership & Communication", percent: 95, icon: "users" },
]

// group: "frameworks" | "data" | "design"
export const tools = [
  { name: "HTML", group: "frameworks", icon: "html" },
  { name: "CSS", group: "frameworks", icon: "css" },
  { name: "JavaScript", group: "frameworks", icon: "js" },
  { name: "React", group: "frameworks", icon: "react" },
  { name: "Next.js", group: "frameworks", icon: "nextjs" },
  { name: "Tailwind CSS", group: "frameworks", icon: "tailwind" },
  { name: "Node.js", group: "frameworks", icon: "node" },
  { name: "PHP", group: "frameworks", icon: "php" },
  { name: "Python", group: "frameworks", icon: "python" },
  { name: "MySQL", group: "data", icon: "mysql" },
  { name: "MongoDB", group: "data", icon: "mongodb" },
  { name: "GitHub", group: "data", icon: "github" },
  { name: "Microsoft Office", group: "data", icon: "microsoft" },
  { name: "Figma", group: "design", icon: "figma" },
  { name: "Canva", group: "design", icon: "canva" },
  { name: "Adobe", group: "design", icon: "adobe" },
  { name: "CapCut", group: "design", icon: "video" },
]

export const languages = [
  { name: "Indonesian", level: "Native", percent: 100, flag: "/indo.webp" },
  { name: "English", level: "Intermediate", percent: 70, flag: "/inggris.svg" },
  { name: "German", level: "Beginner", percent: 25, flag: "/german.svg" },
]

/* ---------- raw data moved from the section components ---------- */

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
  "Personnel Information Division Staff": [
    "/internbkn1.jpeg",
    "/internbkn2.jpeg",
  ],

  "Selection Committee Staff – Calon Aparatur Sipil Negara (CASN)": [
    "/casn1.jpeg",
    "/casn2.jpeg",
    "/casn3.jpeg",
  ],

  "Staff of Ministry of Creative Media": [
    "/bem.jpeg",
  ],

  "Staff of Public Relations Division": [
    "/kmteti1.jpeg",
  ],

  "Head of Human Resources Development": [
    "/psdm.jpeg",
  ],

  "Head of Coaching": [
    "/coaching1.jpeg",
    "/coaching2.jpeg",
    "/coaching3.jpeg",
  ],

  "Sub-Coordinator of the Logistics and Consumption": [
    "/gmokc1.jpeg",
    "/gmokc2.jpeg",
  ],

  "Event Committee – Match Scheduling and Coordination": [
    "/porseni1.jpeg",
    "/porseni2.jpeg",
  ],

  "Sub-Coordinator of the Equipment and Logistics": [
    "/panitiacapstone.jpeg",
  ],

  "Event Coordinator & Executor": [
    "/pbub1.jpeg",
    "/pbub2.jpeg",
  ],

  "Staff of Documentation Decoration Design Division": [
    "/ddd.jpeg",
  ],

  // "Secretary & Master of Ceremony" and "Executor" have no photos yet.
  // Add their image paths here once the files are placed in /public.

  "Staff of Security Division": [
    "/icd1.jpeg",
    "/icd2.jpeg",
  ],
}

const educationData = [
  {
    school: "Universitas Gadjah Mada",
    period: "2022 – Present",
    major: "Undergraduate in Information Engineering, Faculty of Engineering",
    logo: "/logougm.webp",
    link: "https://ugm.ac.id/id/tentang-ugm/",
  },
  {
    school: "SMA Negeri 1 Kota Tangerang",
    period: "2019 – 2022",
    major: "Mathematics & Natural Sciences Major",
    logo: "/logosman1.png",
    link: "https://sman1tangerang.sch.id/index/read/2/profil-sman-1-kota-tangerang",
  },
  {
    school: "SMP Negeri 1 Kota Tangerang",
    period: "2016 – 2019",
    major: "Natural Sciences Major",
    logo: "/logosmpn1.png",
    link: "https://smpn1tangerang.sch.id/",
  },
]

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

const achievementsData = [
  {
    rank: "🥉",
    title: "3rd Place Senior Female Individual Kata",
    event: "International Silent Knight Karate Cup 2024",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    rank: "🥈",
    title: "2nd Place Senior Female Team Kata",
    event: "International Silent Knight Karate Cup 2024",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    rank: "🥈",
    title: "2nd Place Senior Female Individual Kata",
    event: "National IPB Karate Cup VII 2024",
    location: "Jawa Barat, Indonesia",
  },
  {
    rank: "🥈",
    title: "2nd Place Senior Female Team Kata",
    event: "National IPB Karate Cup VII 2024",
    location: "Jawa Barat, Indonesia",
  },
  {
    rank: "🥉",
    title: "3rd Place U21 Female Individual Kata",
    event: "International Magelang Karate Championship 2023",
    location: "Jawa Tengah, Indonesia",
  },
  {
    rank: "🥉",
    title: "3rd Place Senior Female Individual Kata",
    event: "Brawijaya University Karate Championship 2023",
    location: "Jawa Timur, Indonesia",
  },
  {
    rank: "🥇",
    title: "1st Place Female Individual Kata",
    event: "KOSN Provinsi Banten 2021",
    location: "Banten, Indonesia",
  },
  {
    rank: "🥇",
    title: "1st Place Female Individual Kata",
    event: "KOSN Kota Tangerang 2021",
    location: "Banten, Indonesia",
  },
  {
    rank: "🥇",
    title: "1st Place Junior Female Individual Kata",
    event: "Pekan Olahraga Kota Tangerang 2021",
    location: "Banten, Indonesia",
  },
  {
    rank: "🥈",
    title: "2nd Place Junior Female Individual Kata",
    event: "KEJURPROV Banten 2021",
    location: "Banten, Indonesia",
  },
]

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

const projectsRaw = [
  {
    title: "KARIR.AI",
    subtitle: "AI Career Recommendation Platform",
    description:
      "A web-based AI platform that analyzes user resumes to generate personalized career recommendations.",
    tech: ["Next.js", "React", "Node.js", "AI"],
    link: "https://karir-ai.vercel.app",
    linkLabel: "Live Demo",
    images: ["/karirai-demo.mp4", "/karir.png", "/karir2.png", "/karir3.png", "/karir4.png"],
  },
  {
    title: "AFFECTRA",
    subtitle: "EEG-Based Emotion Tracker",
    description:
      "EEG wearable system to classify emotions using AI with an interactive dashboard.",
    tech: ["MERN", "AI", "EEG"],
    link: "https://github.com/hezekielstp/Capstone-B05",
    linkLabel: "View on GitHub",
    images: ["/affectra.png", "/affectra2.png", "/affectra3.png", "/affectra4.png"],
  },
  {
    title: "BukuTamu BKN Yogyakarta",
    subtitle: "Digital Guest Book System",
    description:
      "Web-based guest book system for managing visitors efficiently at the BKN Yogyakarta office.",
    tech: ["HTML", "CSS", "PHP"],
    // No public link: internal system built during the BKN internship
    link: null,
    images: ["/bkn.png", "/bkn2.png", "/bkn3.png", "/bkn4.png", "/bkn5.png"],
  },
]

/* ---------- normalized exports ---------- */

export const experiences = [
  ...workExperience.map((e) => ({ ...e, type: "work" })),
  ...organizationExperience.map((e) => ({ ...e, type: "organization" })),
].map((e) => ({ ...e, docs: documentationMap[e.role] || [] }))

export const education = educationData

export const certificates = Object.entries(certificateGroups).flatMap(
  ([category, group]) => group.items.map((c) => ({ ...c, category }))
)

const RANKS = { "🥇": "gold", "🥈": "silver", "🥉": "bronze" }
export const achievements = achievementsData.map(({ rank, ...rest }) => ({
  ...rest,
  rank: RANKS[rank] || "bronze",
}))

export const news = newsData

export const projects = projectsRaw.map(({ images, ...rest }) => ({
  ...rest,
  media: images.map((url) => ({
    type: url.endsWith(".mp4") ? "video" : "image",
    url,
  })),
}))

const content = {
  profile,
  skills,
  tools,
  languages,
  experiences,
  education,
  certificates,
  achievements,
  news,
  projects,
}

export default content
