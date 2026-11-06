import { defineField, defineType } from "sanity"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Language", type: "string", validation: (r) => r.required() }),
    defineField({ name: "level", title: "Level", type: "string", description: "Contoh: Native, Intermediate, Beginner" }),
    defineField({ name: "percent", title: "Progress bar (%)", type: "number", validation: (r) => r.min(0).max(100) }),
    defineField({ name: "flag", title: "Flag image", type: "image" }),
    orderField,
  ],
  orderings,
  preview: { select: { title: "name", subtitle: "level", media: "flag" } },
})
