import { fireEvent, waitFor } from "@testing-library/react"
import { FormComponent } from "./FormComponent"
import { renderWithWrappers } from "@/utils/testUtils"

describe("FormComponent", () => {
  const props = {
    onSubmit: jest.fn(),
    observable: { setData: jest.fn() },
  }

  it("should render without crashing", () => {
    renderWithWrappers(<FormComponent {...props} />)
  })

  it("should handle form submit", () => {
    const { getByText } = renderWithWrappers(<FormComponent {...props} />)
    const button = getByText("Update Chart")
    fireEvent.click(button)
    expect(props.onSubmit).toHaveBeenCalledTimes(1)
    expect(props.observable.setData).toHaveBeenCalledTimes(1)
  })

  it("should handle randomize values", () => {
    const { getByText, getAllByTestId } = renderWithWrappers(<FormComponent {...props} />)
    const button = getByText("Randomize values")
    const inputsBefore = getAllByTestId("form-input").map((input) => input.value)
    fireEvent.click(button)
    const inputsAfter = getAllByTestId("form-input").map((input) => input.value)
    expect(inputsBefore).not.toEqual(inputsAfter)
  })
})
