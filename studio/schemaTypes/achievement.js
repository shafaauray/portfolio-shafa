import { defineField, defineType } from "sanity"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({
      name: "rank",
      title: "Medal",
      type: "string",
      options: {
        list: [
          { title: "🥇 Gold", value: "gold" },
          { title: "🥈 Silver", value: "silver" },
          { title: "🥉 Bronze", value: "bronze" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", title: "Title", type: "string", description: 'Contoh: "1st Place Female Individual Kata"', validation: (r) => r.required() }),
    defineField({ name: "event", title: "Event", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    orderField,
  ],
  orderings,
  preview: {
    select: { title: "title", subtitle: "event", rank: "rank" },
    prepare: ({ title, subtitle, rank }) => ({
      title: `${{ gold: "🥇", silver: "🥈", bronze: "🥉" }[rank] || ""} ${title}`,
      subtitle,
    }),
  },
})
