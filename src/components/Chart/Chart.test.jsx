import { waitFor } from "@testing-library/react"
import { ChartComponent } from "./Chart"
import axios from "axios"
import { renderWithWrappers } from "@/utils/testUtils"

jest.mock("axios")

describe("ChartComponent", () => {
  const props = {
    formData: [],
  }

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should render without crashing", () => {
    const { container } = renderWithWrappers(<ChartComponent {...props} />)
    expect(container).not.toBeNull()
  })

  it("should update state with data from axios.get", async () => {
    const data = [
      {
        time_period_start: "2023-11-06T00:00:00.000Z",
        rate_open: 1,
        rate_high: 2,
        rate_low: 0.5,
        rate_close: 1.5,
      },
    ]
    axios.get.mockResolvedValueOnce({ data })
    renderWithWrappers(<ChartComponent {...props} />)
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))
  })

  it("should handle error from axios.get", async () => {
    const error = new Error("Network Error")
    axios.get.mockRejectedValueOnce(error)
    console.error = jest.fn()
    renderWithWrappers(<ChartComponent {...props} />)
    await waitFor(() => expect(console.error).toHaveBeenCalledWith(error))
  })
})
