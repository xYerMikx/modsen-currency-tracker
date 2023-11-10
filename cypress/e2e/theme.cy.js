describe("e2e theme switcher", () => {
  it("should switch theme", () => {
    cy.visit("http://localhost:3000/")

    cy.window().its("store").invoke("getState").its("theme.theme").should("equal", "dark")

    cy.get('[data-cy="theme-switch"]').click()

    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme.theme")
      .should("equal", "light")
  })
})
