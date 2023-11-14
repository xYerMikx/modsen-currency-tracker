import { fireEvent, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./Header"
import { renderWithWrappers } from "@/utils/testUtils"
import { headerLinks } from "@/constants/headerLinks"
import { getRoute } from "@/constants/routes"

describe("Header tests", () => {
  it("should render logo", () => {
    renderWithWrappers(
      <Router>
        <Header />
      </Router>,
    )
    const logo = screen.getByAltText("Logo")
    expect(logo).toBeInTheDocument()
  })

  it.each(headerLinks)("should render link $name", ({ name }) => {
    renderWithWrappers(
      <Router>
        <Header />
      </Router>,
    )
    const link = screen.getByText(name)
    expect(link).toBeInTheDocument()
  })

  it.each(headerLinks)("should correctly handle link click $name", ({ name, to }) => {
    renderWithWrappers(
      <Router>
        <Header />
      </Router>,
    )
    const link = screen.getByText(name)
    fireEvent.click(link)
    expect(window.location.pathname).toBe(getRoute(to))
  })
})
