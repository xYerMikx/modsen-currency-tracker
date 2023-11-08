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
      // Переходим на главную страницу
      cy.visit("http://localhost:3000/")
      // Находим ссылку с нужным именем и кликаем по ней
      cy.contains(name).click()

      // Проверяем, что URL изменился на ожидаемый
      cy.url().should("include", to.split(1))

      // Проверяем, что ссылка имеет активный стиль
      cy.contains(name).should("have.css", "color", theme.orange)
    })
  })
})
