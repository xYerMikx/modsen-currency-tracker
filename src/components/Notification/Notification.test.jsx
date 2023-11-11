import { act } from "@testing-library/react"
import { Notification } from "./Notification"
import { renderWithWrappers } from "@/utils/testUtils"

describe("Notification", () => {
  let observable
  let component

  beforeEach(() => {
    observable = {
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    }
    component = renderWithWrappers(<Notification observable={observable} />)
  })

  it("should render without crashing", () => {
    expect(component).not.toBeNull()
  })

  it("should subscribe to observable on mount", () => {
    expect(observable.subscribe).toHaveBeenCalledTimes(1)
  })

  it("should unsubscribe from observable on unmount", () => {
    component.unmount()
    expect(observable.unsubscribe).toHaveBeenCalledTimes(1)
  })

  it("should show notification when showNotification is called", async () => {
    const showNotification = observable.subscribe.mock.calls[0][0]
    act(() => {
      showNotification()
    })
    const notification = await component.findByText(
      "График за 30 дней был успешно построен",
    )
    expect(notification).toBeInTheDocument()
  })
})
