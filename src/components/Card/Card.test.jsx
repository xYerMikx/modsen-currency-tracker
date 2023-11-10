import { fireEvent, screen } from "@testing-library/react"
import { currencies } from "@/constants/currencies"
import { renderWithWrappers } from "@/utils/testUtils"
import { Card } from "./Card"
import ReactDOM from "react-dom"

const mockProps = {
  ...currencies[0],
  amount: 10,
  baseCurrency: "USD",
  isQuote: true,
}

beforeEach(() => {
  renderWithWrappers(<Card {...mockProps} />)
  jest.spyOn(ReactDOM, "createPortal").mockImplementation((node) => node)
})
afterEach(() => {
  ReactDOM.createPortal.mockClear()
})
describe("Card tests", () => {
  it("should render card title", () => {
    const title = screen.getByText(mockProps.name)
    expect(title).toBeInTheDocument()
  })
  it("should render card amount", () => {
    const amount = screen.getByText(mockProps.amount)
    expect(amount).toBeInTheDocument()
  })
  it("should render card image", () => {
    const image = screen.getByAltText(mockProps.name)
    expect(image).toBeInTheDocument()
  })
  it("should open and close the modal on click if isQuote === true", async () => {
    const card = screen.getByTestId("card")
    fireEvent.click(card)

    const modal = await screen.findByTestId("modal")
    expect(modal).toBeInTheDocument()

    const closeButton = screen.getByTestId("close-button")
    fireEvent.click(closeButton)

    expect(modal).not.toBeInTheDocument()
  })
})
