import { defineField, defineType } from "sanity"
import { iconOptions } from "./iconOptions"
import { orderField, orderings } from "./orderField"

const groups = [
  { title: "Languages & Frameworks", value: "frameworks" },
  { title: "Databases & Tools", value: "data" },
  { title: "Design & Media", value: "design" },
]

export default defineType({
  name: "tool",
  title: "Tool / Technology",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "group",
      title: "Group",
      type: "string",
      options: { list: groups, layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconOptions }, initialValue: "star" }),
    orderField,
  ],
  orderings,
  preview: {
    select: { title: "name", group: "group" },
    prepare: ({ title, group }) => ({
      title,
      subtitle: groups.find((g) => g.value === group)?.title,
    }),
  },
})
