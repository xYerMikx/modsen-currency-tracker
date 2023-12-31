import axios from "axios"
import { Component } from "react"
import {
  ButtonContainer,
  DayContainer,
  FormButton,
  FormContainer,
  InputsContainer,
  PageButton,
} from "./styled"
import { InputsList } from "../InputsList/InputsList"

export class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Array.from({ length: 30 }, () => ({
        x: 0,
        o: this.getRandomValue(),
        h: this.getRandomValue(),
        l: this.getRandomValue(),
        c: this.getRandomValue(),
        s: [this.getRandomValue(), this.getRandomValue()],
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

  handleInputChange = (index, field) => (event) => {
    const value = event.target.value
    const newData = [...this.state.data]
    newData[index][field] = +value
    if (field === "o" || field === "c") {
      newData[index].s = [newData[index].o, newData[index].c]
    }
    this.setState({ data: newData })
  }

  handlePageChange = (pageNumber) => () => {
    this.setState((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
    }))
  }

  getRandomValue = (num) => {
    if (num) {
      const adjustment = Math.random() * 0.5 - 0.25
      return (num + adjustment + 0.1).toFixed(3)
    } else {
      return (Math.random() + 0.5).toFixed(3)
    }
  }

  render() {
    const handleRandomize = () => {
      const newData = this.state.data.map(({ x }) => {
        const o = this.getRandomValue()
        const c = this.getRandomValue(Number(o))
        return {
          x,
          o,
          h: this.getRandomValue(),
          l: this.getRandomValue(),
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

    const itemsPerPage = Math.ceil(this.state.data.length / 3)
    const startIndex = this.state.currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return (
      <FormContainer>
        <InputsContainer>
          {this.state.data.slice(startIndex, endIndex).map((_, index) => (
            <DayContainer key={index}>
              <h3>Day {startIndex + index + 1}</h3>
              <InputsList
                data={this.state.data}
                indexWithPage={this.state.currentPage * itemsPerPage + index}
                handleChange={this.handleInputChange}
                index={index}
              />
            </DayContainer>
          ))}
        </InputsContainer>
        <ButtonContainer>
          {Array.from({ length: 3 }, (_, k) => k + 1).map((el) => {
            return (
              <PageButton key={el} onClick={this.handlePageChange(el - 1)}>
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
