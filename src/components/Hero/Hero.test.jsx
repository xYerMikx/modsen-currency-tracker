import { screen } from "@testing-library/react"
import { renderWithWrappers } from "@/utils/testUtils"
import { Hero } from "./Hero"

describe("Hero tests", () => {
  beforeEach(() => {
    renderWithWrappers(<Hero />)
  })
  it("should render hero title with background", () => {
    const title = screen.getByText("Modsen Currency")
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle(
      `background: -webkit-linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)`,
    )
  })
  it("should render hero subtitle", () => {
    const subtitle = screen.getByText("Tracker")
    expect(subtitle).toBeInTheDocument()
  })
  it("should render hero text", () => {
    const text = screen.getByText(
      "Quotes for the dollar and other international currencies.",
    )
    expect(text).toBeInTheDocument()
  })
  it("should render image", () => {
    const image = screen.getByAltText("Hero image")
    expect(image).toBeInTheDocument()
  })
})
