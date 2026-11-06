import { defineField, defineType } from "sanity"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "IT & Course", value: "it" },
          { title: "Karate", value: "karate" },
        ],
        layout: "radio",
      },
      initialValue: "it",
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "issuer", title: "Issuer", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "image", title: "Certificate image", type: "image", validation: (r) => r.required() }),
    defineField({
      name: "file",
      title: "Certificate PDF (optional)",
      type: "file",
      options: { accept: "application/pdf" },
      description: 'Dibuka saat tombol "View Certificate" diklik.',
    }),
    defineField({
      name: "credentialUrl",
      title: "Credential link (optional)",
      type: "url",
      description: "Dipakai kalau tidak ada PDF, misalnya link verifikasi DataCamp.",
    }),
    orderField,
  ],
  orderings,
  preview: { select: { title: "title", subtitle: "year", media: "image" } },
})
