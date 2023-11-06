import { createRoot } from "react-dom/client"
import { act, waitFor } from "@testing-library/react"
import { Map } from "./Map"
import mapboxgl from "mapbox-gl"
import axios from "axios"
import mockData from "@/mocks/data/mockBanks.json"

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    on: jest.fn(),
    remove: jest.fn(),
    addControl: jest.fn(),
  })),
  NavigationControl: jest.fn(),
  Marker: jest.fn(() => ({
    setLngLat: jest.fn(() => ({
      setPopup: jest.fn(() => ({
        addTo: jest.fn(),
      })),
    })),
    remove: jest.fn(),
  })),
  Popup: jest.fn(() => ({
    setHTML: jest.fn(),
  })),
}))

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { features: [] } })),
  CancelToken: {
    source: jest.fn(() => ({
      cancel: jest.fn(),
    })),
  },
  isCancel: jest.fn(),
}))

let container = null
let root = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
  root = createRoot(container)
})

afterEach(() => {
  act(() => {
    root.unmount()
  })
  container.remove()
  container = null
})

describe("map components tests", () => {
  it("renders Map component data", async () => {
    axios.get.mockResolvedValue({ data: mockData })

    await act(async () => {
      root.render(<Map />)
    })

    waitFor(() => {
      expect(mapboxgl.Marker).toHaveBeenCalledTimes(mockData.features.length)
    })
  })

  it("renders only markers for banks with the selected currency", async () => {
    axios.get.mockResolvedValue({ data: mockData })

    await act(async () => {
      root.render(<Map value="USD" />)
    })

    const numBanksWithCurrency = mockData.features.filter((feature) =>
      feature.currencies.includes("USD"),
    ).length

    waitFor(() => {
      expect(mapboxgl.Marker).toHaveBeenCalledTimes(numBanksWithCurrency)
    })
  })
})
