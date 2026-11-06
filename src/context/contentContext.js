import { createContext, useContext } from "react"
import fallback from "../data/content"

export const ContentContext = createContext(fallback)

export function useContent() {
  return useContext(ContentContext)
}
