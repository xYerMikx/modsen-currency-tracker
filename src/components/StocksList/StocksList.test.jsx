import { screen } from "@testing-library/react"
import { StocksList } from "./StocksList"
import { stocks } from "@/constants/stocks"
import { renderWithWrappers } from "@/utils/testUtils"

it("should render StocksList of cards", () => {
  renderWithWrappers(<StocksList />)
  stocks.forEach(({ name }) => {
    expect(screen.getByText(name)).toBeInTheDocument()
  })
})
