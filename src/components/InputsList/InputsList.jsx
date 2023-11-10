import React, { Component } from "react"
import { formInputs } from "@/constants/formInputs"
import { FormInput } from "./styled"

export class InputsList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { indexWithPage, handleChange, data, index } = this.props
    return formInputs.map(({ type, placeholder }) => {
      return (
        <FormInput
          data-testid="form-input"
          key={`${placeholder}-${indexWithPage}`}
          placeholder={placeholder}
          type={type}
          onChange={handleChange(index, placeholder)}
          value={data[indexWithPage][placeholder]}
        />
      )
    })
  }
}
