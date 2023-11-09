const headerLinks = [
  { name: "Home", to: "/" },
  { name: "Timeline", to: "/timeline" },
  { name: "Bank card", to: "/bankcard" },
  { name: "Contacts", to: "/contacts" },
]
const theme = {
  orange: "rgb(255, 151, 29)",
}
describe("e2e routing", () => {
  headerLinks.forEach(({ name, to }) => {
    it(`Navigates to ${name}`, () => {
      cy.visit("http://localhost:3000/")

      cy.contains(name).click()

      cy.url().should("include", to.split(1))

      cy.contains(name).should("have.css", "color", theme.orange)
    })
  })
})
