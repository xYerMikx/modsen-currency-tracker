describe("e2e converter tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("should not display modal on first item", () => {
    cy.get('[data-cy="currency-card"]').first().click()

    cy.get('[data-cy="modal"]').should("not.exist")
  })
  it("should display modal on currency item", () => {
    cy.get('[data-cy="currency-card"]').eq(2).click()
    cy.get('[data-cy="modal"]').should("be.visible")
  })
  it("should correctly close modal on currency item", () => {
    cy.get('[data-cy="currency-card"]').eq(4).click()
    cy.get('[data-cy="modal"]').should("be.visible")
    cy.get('[data-cy="close-button"]').click()
    cy.get('[data-cy="modal"]').should("not.exist")
  })
  it("should convert currencies", () => {
    cy.get('[data-cy="currency-card"]').eq(2).click()
    cy.get('[data-cy="converted-value"]').then(($span) => {
      const typedValue = 5
      const value = $span.text()

      cy.get('input[type="number"]').type(`{backspace}`).type(typedValue)
      cy.get('[data-cy="converted-value"]').should(
        "have.text",
        (typedValue * value).toFixed(4),
      )
    })
  })
})
