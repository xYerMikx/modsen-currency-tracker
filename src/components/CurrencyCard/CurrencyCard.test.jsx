import React from "react"
import { screen } from "@testing-library/react"
import { renderWithWrappers } from "@/utils/testUtils"
import { CurrencyCard } from "./CurrencyCard"

const mockProps = {
  name: "test",
  imageSrc: "test-string",
  amount: 10,
  currency: "USD",
  isQuote: true,
  code: "USD",
}

describe("CurrencyCard tests", () => {
  it("should render all props", () => {
    renderWithWrappers(<CurrencyCard {...mockProps} />)
    expect(screen.getByText("test")).toBeInTheDocument()
    expect(screen.getByText(10)).toBeInTheDocument()
    expect(screen.getByText("USD")).toBeInTheDocument()
  })

  it("should not render currency if not passed", () => {
    renderWithWrappers(<CurrencyCard />)
    expect(screen.queryByText("USD")).not.toBeInTheDocument()
  })
})
