import { InputsList } from "./InputsList"
import { renderWithWrappers } from "@/utils/testUtils"

describe("InputsList", () => {
  let props
  let component

  beforeEach(() => {
    props = {
      indexWithPage: 0,
      handleChange: jest.fn(),
      data: [
        {
          o: 1,
          h: 2,
          l: 3,
          c: 4,
        },
      ],
      index: 0,
    }
    component = renderWithWrappers(<InputsList {...props} />)
  })

  it("should render without crashing", () => {
    expect(component).not.toBeNull()
  })

  it("should render correct number of inputs", () => {
    const { getAllByPlaceholderText } = component
    const inputs = getAllByPlaceholderText(
      (content, element) => content !== "" && element.type === "number",
    )
    expect(inputs.length).toBe(4)
  })
})
