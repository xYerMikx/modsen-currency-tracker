import { fireEvent, within } from "@testing-library/react"
import Dropdown from "./Dropdown"
import { renderWithWrappers } from "@/utils/testUtils"

const options = ["USD", "EUR", "JPY"]

describe("Dropdown tests", () => {
  it("should render selected option header text", () => {
    const { getByTestId } = renderWithWrappers(
      <Dropdown selectedOption="USD" options={options} />,
    )
    expect(getByTestId("dropdown-text")).toBeInTheDocument()
  })

  it("should render dropdown list when clicked on header", () => {
    const { getByText, container } = renderWithWrappers(
      <Dropdown selectedOption="USD" options={options} />,
    )
    const header = getByText("USD")
    fireEvent.click(header)
    const list = container.querySelector("ul")
    options.forEach((option) => {
      expect(list).toHaveTextContent(option)
    })
  })

  it("should change selected option", () => {
    const setSelectedOption = jest.fn()
    const { container, getByText } = renderWithWrappers(
      <Dropdown
        selectedOption="USD"
        setSelectedOption={setSelectedOption}
        options={options}
      />,
    )

    const header = getByText("USD")
    fireEvent.click(header)
    const list = container.querySelector("ul")
    const option = within(list).getByText("EUR")
    fireEvent.click(option)
    expect(setSelectedOption).toHaveBeenCalledWith("EUR")
  })

  it("should close dropdown when clicked on option", () => {
    const setSelectedOption = jest.fn()
    const { getByText, container } = renderWithWrappers(
      <Dropdown
        selectedOption="USD"
        setSelectedOption={setSelectedOption}
        options={options}
      />,
    )
    const header = getByText("USD")
    fireEvent.click(header)
    const list = container.querySelector("ul")
    const option = within(list).getByText("EUR")
    fireEvent.click(option)
    options.forEach((option) => {
      expect(within(list).queryByText(option)).not.toBeInTheDocument()
    })
  })
})
