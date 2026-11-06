import { defineArrayMember, defineField, defineType } from "sanity"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Work Experience", value: "work" },
          { title: "Organizational & Event Experience", value: "organization" },
        ],
        layout: "radio",
      },
      initialValue: "organization",
      validation: (r) => r.required(),
    }),
    defineField({ name: "role", title: "Role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "institution", title: "Institution", type: "string" }),
    defineField({ name: "period", title: "Period", type: "string", description: 'Contoh: "Jan 2025 – Present"' }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "tasks",
      title: "Responsibilities",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "docs",
      title: "Documentation photos",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      options: { layout: "grid" },
    }),
    orderField,
  ],
  orderings,
  preview: {
    select: { title: "role", subtitle: "period", media: "docs.0" },
  },
})
