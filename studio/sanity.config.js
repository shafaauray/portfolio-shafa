import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"
import { structure } from "./structure"
import { PROJECT_ID, DATASET } from "./env"

const SINGLETONS = new Set(["profile"])

export default defineConfig({
  name: "default",
  title: "Shafa Portfolio Admin",
  projectId: PROJECT_ID,
  dataset: DATASET,

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
    // Profile is a single document: hide it from the "Create new" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETONS.has(schemaType)),
  },

  document: {
    // Profile cannot be duplicated or deleted
    actions: (actions, { schemaType }) =>
      SINGLETONS.has(schemaType)
        ? actions.filter(({ action }) =>
            ["publish", "discardChanges", "restore"].includes(action)
          )
        : actions,
  },
})
