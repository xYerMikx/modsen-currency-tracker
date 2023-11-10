describe("Timeline page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/timeline")
  })

  it("should display notification when visited /timeline", () => {
    cy.get('[data-cy="notification"]').should(
      "contain",
      "График за 30 дней был успешно построен",
    )
    cy.get('[data-cy="notification"]').should("be.visible")
  })

  it('should display notification on "Update Chart" click', () => {
    cy.get("button").contains("Update Chart").click()
    cy.get('[data-cy="notification"]').should(
      "contain",
      "График за 30 дней был успешно построен",
    )
    cy.get('[data-cy="notification"]').should("be.visible")
  })
  it('should update chart data on "Randomize values" click', () => {
    cy.get("canvas").should("exist")

    cy.get("button").contains("Randomize values").click()
    cy.get("button").contains("Update Chart").click()

    cy.get('[data-cy="notification"]').should(
      "contain",
      "График за 30 дней был успешно построен",
    )
    cy.get('[data-cy="notification"]').should("be.visible")
  })
})
