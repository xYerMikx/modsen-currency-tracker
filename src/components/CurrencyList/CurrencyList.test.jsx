import { screen } from "@testing-library/react"
import { CurrencyList } from "./CurrencyList"
import { currencies } from "@/constants/currencies"
import { renderWithWrappers } from "@/utils/testUtils"

const values = [1.2, 0.8, 109.76]
const codes = ["USD", "EUR", "JPY"]
const currency = "USD"

describe("CurrencyList tests", () => {
  it("should render CurrencyList component", () => {
    renderWithWrappers(<CurrencyList values={values} codes={codes} currency={currency} />)
    currencies.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
