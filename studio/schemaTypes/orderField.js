import { defineField } from "sanity"

// Shared "display order" field: smaller numbers are shown first on the website.
export const orderField = defineField({
  name: "order",
  title: "Display order",
  type: "number",
  description:
    "Angka lebih kecil tampil lebih dulu di web. Isi 0 (atau minus) supaya tampil paling atas.",
  initialValue: 0,
})

export const orderings = [
  { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
]
