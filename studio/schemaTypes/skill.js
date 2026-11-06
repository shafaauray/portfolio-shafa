import { defineField, defineType } from "sanity"
import { iconOptions } from "./iconOptions"
import { orderField, orderings } from "./orderField"

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "percent", title: "Percent", type: "number", validation: (r) => r.required().min(0).max(100) }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconOptions }, initialValue: "star" }),
    orderField,
  ],
  orderings,
  preview: {
    select: { title: "name", percent: "percent" },
    prepare: ({ title, percent }) => ({ title, subtitle: `${percent ?? 0}%` }),
  },
})
