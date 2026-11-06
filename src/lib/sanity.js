/*
 * Sanity connection for the public site.
 * The dataset is public (read-only for visitors); only project members can edit
 * content, through the Sanity Studio. No secret token is needed or used here.
 */

// Filled in once the Sanity project exists. Empty = use local fallback content.
export const SANITY_PROJECT_ID = "yrq47ffg"
export const SANITY_DATASET = "production"
const API_VERSION = "2025-01-01"

const CONTENT_QUERY = /* groq */ `{
  "profile": *[_id == "profile"][0]{
    badge, role, intro, location, medalsCount, aboutParagraphs,
    "heroPhoto": heroPhoto.asset->url,
    "aboutPhoto": aboutPhoto.asset->url
  },
  "skills": *[_type == "skill"] | order(order asc) { name, percent, icon },
  "tools": *[_type == "tool"] | order(order asc) { name, group, icon },
  "languages": *[_type == "language"] | order(order asc) {
    name, level, percent, "flag": flag.asset->url
  },
  "experiences": *[_type == "experience"] | order(order asc) {
    type, role, institution, period, location, description, tasks,
    "docs": docs[].asset->url
  },
  "education": *[_type == "education"] | order(order asc) {
    school, period, major, link, "logo": logo.asset->url
  },
  "certificates": *[_type == "certificate"] | order(order asc) {
    category, title, issuer, year,
    "image": image.asset->url,
    "link": coalesce(file.asset->url, credentialUrl, image.asset->url)
  },
  "achievements": *[_type == "achievement"] | order(order asc) {
    rank, title, event, location
  },
  "news": *[_type == "newsItem"] | order(order asc) {
    title, description, date, source, link, "image": image.asset->url
  },
  "projects": *[_type == "project"] | order(order asc) {
    title, subtitle, description, tech, link, linkLabel,
    "media": media[]{
      "type": select(_type == "file" => "video", "image"),
      "url": asset->url
    }
  }
}`

export async function fetchContent() {
  const url =
    `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}` +
    `/data/query/${SANITY_DATASET}?query=${encodeURIComponent(CONTENT_QUERY)}`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Sanity request failed: ${res.status}`)
  const { result } = await res.json()
  return result
}

/**
 * Resized, auto-format (WebP/AVIF) version of a Sanity image.
 * Local images (fallback content) are returned unchanged.
 */
export function img(url, width = 800) {
  if (!url || !url.includes("cdn.sanity.io/images/")) return url
  return `${url}?w=${width}&fit=max&auto=format&q=80`
}
