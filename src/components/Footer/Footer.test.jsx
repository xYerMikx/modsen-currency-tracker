import { screen } from "@testing-library/react"
import { Footer } from "./Footer"
import { renderWithWrappers } from "@/utils/testUtils"
import { BrowserRouter as Router } from "react-router-dom"
import { footerLinks } from "@/constants/footerLinks"

describe("Footer tests", () => {
  const linkBlocks = footerLinks.map(({ title, links }) => [title, links])
  beforeEach(() => {
    renderWithWrappers(
      <Router>
        <Footer />
      </Router>,
    )
  })
  it("should render correctly", () => {
    expect(screen.getByText("Modsen Currency Tracker")).toBeInTheDocument()
    expect(
      screen.getByText("Startsup © 2023-2024, All Rights Reserved"),
    ).toBeInTheDocument()
  })

  it("should render the logo", () => {
    expect(screen.getByAltText("Logo")).toBeInTheDocument()
  })

  it.each(linkBlocks)(
    "should render the footer link block with title %s and links",
    (title, links) => {
      expect(screen.getByText(title)).toBeInTheDocument()

      links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument()
      })
    },
  )
})