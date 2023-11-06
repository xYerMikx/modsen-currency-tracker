import { render, fireEvent, waitFor, act } from "@testing-library/react"
import axios from "axios"
import { Modal } from "./Modal"
import { currenciesCodes } from "@/constants/currencies"
import { renderWithWrappers } from "@/utils/testUtils"

jest.mock("axios")

describe("Modal", () => {
  const onClose = jest.fn()
  const name = "Test"
  const imageSrc = "test.jpg"
  const code = "USD"
  const mockProps = {
    onClose,
    name,
    imageSrc,
    code,
  }

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        data: {
          USD: { value: 1 },
          EUR: { value: 0.85 },
          GBP: { value: 0.75 },
        },
      },
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("fetches and displays data correctly", async () => {
    const { getByTestId } = renderWithWrappers(<Modal {...mockProps} />)

    expect(axios.get).toHaveBeenCalledWith("/currencies")

    const input = getByTestId("conversion-input")

    await waitFor(() => expect(getByTestId("conversion-input").value).toBe("1"))
    await waitFor(() =>
      expect(getByTestId("conversion-select").value).toBe(
        currenciesCodes.filter((el) => el !== code)[0],
      ),
    )
  })

  it("handles currency change", async () => {
    const { getByTestId } = renderWithWrappers(<Modal {...mockProps} />)

    fireEvent.change(getByTestId("conversion-select"), { target: { value: "EUR" } })
    const select = getByTestId("conversion-select").value
    await waitFor(() => expect(select).toBe("EUR"))
  })

  it("handles value change", async () => {
    const { getByTestId } = renderWithWrappers(<Modal {...mockProps} />)

    fireEvent.change(getByTestId("conversion-input"), { target: { value: "2" } })

    await waitFor(() => expect(getByTestId("conversion-input").value).toBe("2"))
  })

  it("handles close button click", async () => {
    const { getByTestId } = renderWithWrappers(<Modal {...mockProps} />)

    fireEvent.click(getByTestId("close-button"))

    expect(onClose).toHaveBeenCalled()
  })
})
