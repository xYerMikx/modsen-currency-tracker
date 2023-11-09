describe("Bankcard page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/bankcard")
  })

  it("should render the map", () => {
    cy.get('[data-cy="map-container"]').should("be.visible")
  })

  it("should display markers on the map", () => {
    cy.get('[data-cy="map-container"]').find(".mapboxgl-marker").should("exist")
  })

  it("should display marker information on marker click", () => {
    cy.get('[data-cy="map-container"]').find(".mapboxgl-marker").first().click()

    cy.get(".mapboxgl-popup").should("be.visible")
  })

  it("should update map data on searchbar value change", () => {
    cy.get("#search").type("EUR")

    cy.get("ul")
      .contains("li", "EUR")
      .click()
      .then(() => {
        cy.get('[data-cy="map-container"]')
          .find(".mapboxgl-marker")
          .should("have.length", 8)
      })
  })
})
