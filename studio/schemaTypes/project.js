import { defineArrayMember, defineField, defineType } from "sanity"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "tech",
      title: "Tech stack",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({ name: "link", title: "Project link (optional)", type: "url", description: 'Kosongkan untuk menampilkan "Internal Project".' }),
    defineField({ name: "linkLabel", title: "Link button text", type: "string", description: 'Contoh: "Live Demo", "View on GitHub"' }),
    defineField({
      name: "media",
      title: "Screenshots / demo video",
      description: "Bisa gambar atau video MP4. Urutan pertama tampil lebih dulu.",
      type: "array",
      of: [
        defineArrayMember({ type: "image", options: { hotspot: true } }),
        defineArrayMember({ type: "file", title: "Video (MP4)", options: { accept: "video/mp4" } }),
      ],
    }),
    orderField,
  ],
  orderings,
  preview: { select: { title: "title", subtitle: "subtitle", media: "media.0" } },
})
