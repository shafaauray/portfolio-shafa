// Sidebar of the Studio: Profile on top, then one list per website section.
const LISTS = [
  ["project", "Projects"],
  ["experience", "Experience"],
  ["certificate", "Certificates"],
  ["achievement", "Achievements"],
  ["newsItem", "Media & News"],
  ["education", "Education"],
  ["skill", "Skills"],
  ["tool", "Tools & Technologies"],
  ["language", "Languages"],
]

export const structure = (S) =>
  S.list()
    .title("Portfolio content")
    .items([
      S.listItem()
        .title("Profile (Hero & About)")
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      ...LISTS.map(([type, title]) =>
        S.listItem()
          .title(title)
          .schemaType(type)
          .child(
            S.documentTypeList(type)
              .title(title)
              .defaultOrdering([{ field: "order", direction: "asc" }])
          )
      ),
    ])
