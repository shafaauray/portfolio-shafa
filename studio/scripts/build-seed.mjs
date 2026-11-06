/*
 * One-time seed: turns src/data/content.js into an NDJSON file that
 * `sanity dataset import` understands, uploading local files from /public.
 *
 *   node scripts/build-seed.mjs > seed.ndjson
 *   npx sanity dataset import seed.ndjson production --replace
 */
import { existsSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..")
const publicDir = join(root, "public")
const { default: content } = await import(pathToFileURL(join(root, "src/data/content.js")).href)

const isLocal = (p) => typeof p === "string" && p.startsWith("/")

function asset(kind, localPath) {
  const abs = join(publicDir, decodeURI(localPath))
  if (!existsSync(abs)) {
    console.error(`  ! missing file, skipped: ${localPath}`)
    return undefined
  }
  return { _type: kind, _sanityAsset: `${kind}@${pathToFileURL(abs).href}` }
}

const image = (p) => (isLocal(p) ? asset("image", p) : undefined)
const withKey = (obj, i) => obj && { _key: `k${i}`, ...obj }
const order = (i) => (i + 1) * 10

const docs = []
const add = (doc) => docs.push(JSON.parse(JSON.stringify(doc))) // drops undefined

const p = content.profile
add({
  _id: "profile",
  _type: "profile",
  badge: p.badge,
  role: p.role,
  intro: p.intro,
  location: p.location,
  medalsCount: p.medalsCount,
  aboutParagraphs: p.aboutParagraphs,
  heroPhoto: image(p.heroPhoto),
  aboutPhoto: image(p.aboutPhoto),
})

content.skills.forEach((s, i) =>
  add({ _id: `skill-${i}`, _type: "skill", name: s.name, percent: s.percent, icon: s.icon, order: order(i) })
)

content.tools.forEach((t, i) =>
  add({ _id: `tool-${i}`, _type: "tool", name: t.name, group: t.group, icon: t.icon, order: order(i) })
)

content.languages.forEach((l, i) =>
  add({ _id: `language-${i}`, _type: "language", name: l.name, level: l.level, percent: l.percent, flag: image(l.flag), order: order(i) })
)

content.experiences.forEach((e, i) =>
  add({
    _id: `experience-${i}`,
    _type: "experience",
    type: e.type,
    role: e.role,
    institution: e.institution,
    period: e.period,
    location: e.location,
    description: e.description,
    tasks: e.tasks,
    docs: (e.docs || []).map(image).filter(Boolean).map(withKey),
    order: order(i),
  })
)

content.education.forEach((e, i) =>
  add({ _id: `education-${i}`, _type: "education", school: e.school, period: e.period, major: e.major, link: e.link, logo: image(e.logo), order: order(i) })
)

content.certificates.forEach((c, i) => {
  const link = c.link || ""
  const isPdf = isLocal(link) && link.toLowerCase().endsWith(".pdf")
  add({
    _id: `certificate-${i}`,
    _type: "certificate",
    category: c.category,
    title: c.title,
    issuer: c.issuer,
    year: c.year,
    image: image(c.image),
    file: isPdf ? asset("file", link) : undefined,
    credentialUrl: link.startsWith("http") ? link : undefined,
    order: order(i),
  })
})

content.achievements.forEach((a, i) =>
  add({ _id: `achievement-${i}`, _type: "achievement", rank: a.rank, title: a.title, event: a.event, location: a.location, order: order(i) })
)

content.news.forEach((n, i) =>
  add({ _id: `news-${i}`, _type: "newsItem", title: n.title, description: n.description, date: n.date, source: n.source, link: n.link, image: image(n.image), order: order(i) })
)

content.projects.forEach((pr, i) =>
  add({
    _id: `project-${i}`,
    _type: "project",
    title: pr.title,
    subtitle: pr.subtitle,
    description: pr.description,
    tech: pr.tech,
    link: pr.link || undefined,
    linkLabel: pr.linkLabel,
    media: pr.media
      .map((m) => (m.type === "video" ? asset("file", m.url) : image(m.url)))
      .filter(Boolean)
      .map(withKey),
    order: order(i),
  })
)

process.stdout.write(docs.map((d) => JSON.stringify(d)).join("\n") + "\n")
console.error(`Built ${docs.length} documents.`)
