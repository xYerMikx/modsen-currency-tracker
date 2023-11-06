import { renderWithWrappers } from "@/utils/testUtils"
import { Searchbar } from "./Searchbar"
import { fireEvent } from "@testing-library/react"

describe("Searchbar", () => {
  const setValueMock = jest.fn()
  const testValue = "USD"
  const invalidValue = "hello"

  beforeEach(() => {
    setValueMock.mockClear()
  })

  it("should render searchbar correctly", () => {
    const { getByPlaceholderText } = renderWithWrappers(
      <Searchbar value="" setValue={setValueMock} />,
    )
    const input = getByPlaceholderText("Currency search...")
    expect(input).toBeInTheDocument()
  })

  it("should call setValue function when typing in input", () => {
    const { getByPlaceholderText } = renderWithWrappers(
      <Searchbar value="" setValue={setValueMock} />,
    )
    const input = getByPlaceholderText("Currency search...")
    fireEvent.change(input, { target: { value: testValue } })

    expect(setValueMock).toHaveBeenCalledWith(testValue)
  })

  it("should render SearchItem components when value is not empty and isOpen is true", () => {
    const { getByPlaceholderText, getAllByText } = renderWithWrappers(
      <Searchbar value={testValue} setValue={setValueMock} />,
    )
    const input = getByPlaceholderText("Currency search...")

    fireEvent.click(input)

    const items = getAllByText(testValue)
    expect(items).toHaveLength(1)
  })

  it("should not render SearchItem component when value is not from currencies array", () => {
    const { getByPlaceholderText, queryAllByText } = renderWithWrappers(
      <Searchbar value={invalidValue} setValue={setValueMock} />,
    )
    const input = getByPlaceholderText("Currency search...")

    fireEvent.click(input)

    const items = queryAllByText(invalidValue)
    expect(items).toHaveLength(0)
  })
})
