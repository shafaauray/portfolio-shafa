import { useEffect, useState } from "react"
import fallback from "../data/content"
import { fetchContent, SANITY_PROJECT_ID } from "../lib/sanity"
import { ContentContext } from "./contentContext"

// Use Sanity's value when the query returned one, otherwise the local copy.
function withFallback(data) {
  const merged = {}
  for (const key of Object.keys(fallback)) {
    merged[key] = data?.[key] ?? fallback[key]
  }
  merged.profile = { ...fallback.profile, ...stripNulls(data?.profile) }
  return merged
}

function stripNulls(obj = {}) {
  return Object.fromEntries(
    Object.entries(obj || {}).filter(([, v]) => v !== null && v !== undefined)
  )
}

export default function ContentProvider({ children }) {
  const [content, setContent] = useState(SANITY_PROJECT_ID ? null : fallback)

  useEffect(() => {
    if (!SANITY_PROJECT_ID) return

    // Never leave visitors on the loader for long if Sanity is slow.
    const timer = setTimeout(() => {
      setContent((current) => current ?? fallback)
    }, 4000)

    fetchContent()
      .then((data) => setContent(withFallback(data)))
      .catch((error) => {
        console.error("Could not load content from Sanity:", error)
        setContent((current) => current ?? fallback)
      })
      .finally(() => clearTimeout(timer))

    return () => clearTimeout(timer)
  }, [])

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brownDark">
        <div
          role="status"
          aria-label="Loading"
          className="w-10 h-10 rounded-full border-2 border-gold/20 border-t-gold animate-spin"
        />
      </div>
    )
  }

  return (
    <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
  )
}
