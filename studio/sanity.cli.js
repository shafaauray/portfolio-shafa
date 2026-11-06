import { defineCliConfig } from "sanity/cli"
import { PROJECT_ID, DATASET } from "./env"

export default defineCliConfig({
  api: { projectId: PROJECT_ID, dataset: DATASET },
  studioHost: "shafa-portfolio",
  deployment: { appId: "pt70okvuq1e1wg6ed0bo0rg9", autoUpdates: true },
})
