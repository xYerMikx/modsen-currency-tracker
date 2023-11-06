import React from "react"
import { screen } from "@testing-library/react"
import { StocksCard } from "./StocksCard"
import { renderWithWrappers } from "@/utils/testUtils"

const mockProps = {
  name: "test name",
  imageSrc: "test-string",
  percent: 10,
  currency: "USD",
  isQuote: false,
}

describe("StocksCard tests", () => {
  it("should render name", () => {
    renderWithWrappers(<StocksCard {...mockProps} />)
    expect(screen.getByText("test name")).toBeInTheDocument()
  })

  it("should render percentage", () => {
    renderWithWrappers(<StocksCard percent="5%" />)
    expect(screen.getByText("5%")).toBeInTheDocument()
  })

  it("should render currency", () => {
    renderWithWrappers(<StocksCard currency="USD" />)
    expect(screen.getByText("USD")).toBeInTheDocument()
  })

  it("should not render currency if not passed", () => {
    renderWithWrappers(<StocksCard />)
    expect(screen.queryByText("USD")).not.toBeInTheDocument()
  })
})
