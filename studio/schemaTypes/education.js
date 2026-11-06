import { defineField, defineType } from "sanity"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "school", title: "School / University", type: "string", validation: (r) => r.required() }),
    defineField({ name: "period", title: "Period", type: "string", description: 'Contoh: "2022 – Present"' }),
    defineField({ name: "major", title: "Major / Program", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "link", title: "Official website", type: "url" }),
    orderField,
  ],
  orderings,
  preview: { select: { title: "school", subtitle: "period", media: "logo" } },
})
