import { defineField, defineType } from "sanity"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "newsItem",
  title: "Media & News",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "date", title: "Date", type: "string", description: 'Contoh: "June 2024"' }),
    defineField({ name: "source", title: "Source", type: "string", description: 'Contoh: "Instagram", "UGM Official"' }),
    defineField({ name: "link", title: "Article link", type: "url", validation: (r) => r.required() }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    orderField,
  ],
  orderings,
  preview: { select: { title: "title", subtitle: "source", media: "image" } },
})
