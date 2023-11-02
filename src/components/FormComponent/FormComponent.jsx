import axios from "axios"
import { Component } from "react"

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

  handleFormSubmit = () => {
    const { onSubmit } = this.props
    onSubmit(this.state.data)
  }

  handleRandomize = () => {
    const newData = this.state.data.map(({ x }) => ({
      x,
      o: this.getRandomValue(),
      h: this.getRandomValue(),
      l: this.getRandomValue(),
      c: this.getRandomValue(),
      s: [this.getRandomValue(), this.getRandomValue()],
    }))
    this.setState({ data: newData })
  }

  getRandomValue = () => {
    return Math.random() * 1.5 + 0.5
  }

  render() {
    return (
      <div>
        {this.state.data.map((_, index) => (
          <div key={index}>
            <h3>Day {index + 1}</h3>
            <input
              type="number"
              placeholder="o"
              onChange={this.handleInputChange(index, "o")}
              value={this.state.data[index].o}
            />
            <input
              type="number"
              placeholder="h"
              onChange={this.handleInputChange(index, "h")}
              value={this.state.data[index].h}
            />
            <input
              type="number"
              placeholder="l"
              onChange={this.handleInputChange(index, "l")}
              value={this.state.data[index].l}
            />
            <input
              type="number"
              placeholder="c"
              onChange={this.handleInputChange(index, "c")}
              value={this.state.data[index].c}
            />
          </div>
        ))}
        <button onClick={this.handleFormSubmit}>Update Chart</button>
        <button onClick={this.handleRandomize}>Randomize values</button>
      </div>
    )
  }
}
