import { defineField, defineType } from "sanity"

export default defineType({
  name: "profile",
  title: "Profile (Hero & About)",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge text", type: "string", description: 'Contoh: "Open to collaboration"' }),
    defineField({ name: "role", title: "Role / headline", type: "string" }),
    defineField({ name: "intro", title: "Hero introduction", type: "text", rows: 4 }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "heroPhoto", title: "Hero photo (ID card)", type: "image", options: { hotspot: true } }),
    defineField({ name: "aboutPhoto", title: "About photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "medalsCount", title: "Medals count (About card)", type: "string", description: 'Contoh: "20+"' }),
    defineField({
      name: "aboutParagraphs",
      title: "About me paragraphs",
      type: "array",
      of: [{ type: "text", rows: 6 }],
    }),
  ],
  preview: { prepare: () => ({ title: "Profile" }) },
})
