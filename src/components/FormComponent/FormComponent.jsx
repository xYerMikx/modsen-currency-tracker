import axios from "axios"
import { Component } from "react"
import {
  ButtonContainer,
  DayContainer,
  DayName,
  FormButton,
  FormContainer,
  InputsContainer,
  PageButton,
} from "./styled"
import { InputsList } from "../InputsList/InputsList"
import { getRandomValue } from "@/utils/getRandomValue"
import PropTypes from "prop-types"
import { Observer } from "@/services/observer"

export class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Array.from({ length: 30 }, () => ({
        x: 0,
        o: getRandomValue(),
        h: getRandomValue(),
        l: getRandomValue(),
        c: getRandomValue(),
        s: [getRandomValue(), getRandomValue()],
      })),
      currentPage: 0,
    }
  }

  componentDidMount() {
    const getData = async () => {
      const currentData = this.state.data
      const { data } = await axios("/chart")
      const newData = currentData.map((el, index) => ({
        ...el,
        x: new Date(data[index].time_period_start.slice(0, 10)).setHours(0, 0, 0, 0),
      }))
      this.setState({ data: newData })
    }
    getData()
  }

  render() {
    const handleInputChange = (index, field) => (event) => {
      const value = event.target.value
      const newData = [...this.state.data]
      newData[index][field] = +value
      if (field === "o" || field === "c") {
        newData[index].s = [newData[index].o, newData[index].c]
      }
      this.setState({ data: newData })
    }
    const handlePageChange = (pageNumber) => () => {
      this.setState((prevState) => ({
        ...prevState,
        currentPage: pageNumber,
      }))
    }
    const handleRandomize = () => {
      const newData = this.state.data.map(({ x }) => {
        const o = getRandomValue()
        const c = getRandomValue(Number(o))
        return {
          x,
          o,
          h: getRandomValue(),
          l: getRandomValue(),
          c,
          s: [o, c],
        }
      })
      this.setState({ data: newData })
    }
    const handleFormSubmit = () => {
      const { onSubmit, observable } = this.props
      onSubmit(this.state.data)
      observable.setData(this.state.data)
    }
    const pagesAmount = window.innerWidth <= 768 ? 6 : 3
    const itemsPerPage = Math.ceil(this.state.data.length / pagesAmount)
    const startIndex = this.state.currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return (
      <FormContainer>
        <InputsContainer>
          {this.state.data.slice(startIndex, endIndex).map((_, index) => (
            <DayContainer key={index}>
              <DayName>Day {startIndex + index + 1}</DayName>
              <InputsList
                data={this.state.data}
                indexWithPage={this.state.currentPage * itemsPerPage + index}
                handleChange={handleInputChange}
                index={index}
              />
            </DayContainer>
          ))}
        </InputsContainer>
        <ButtonContainer>
          {Array.from({ length: pagesAmount }, (_, k) => k + 1).map((el) => {
            return (
              <PageButton
                data-testid="page-button"
                key={el}
                onClick={handlePageChange(el - 1)}
              >
                {el}
              </PageButton>
            )
          })}
        </ButtonContainer>
        <FormButton onClick={handleFormSubmit}>Update Chart</FormButton>
        <FormButton onClick={handleRandomize}>Randomize values</FormButton>
      </FormContainer>
    )
  }
}

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  observable: PropTypes.instanceOf(Observer).isRequired,
}
