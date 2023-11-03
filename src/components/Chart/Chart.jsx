import { Component } from "react"
import { Chart as ChartJS, registerables } from "chart.js"
import { Chart } from "react-chartjs-2"
import { chartConfig } from "./chart.config"
import "chartjs-adapter-date-fns"
import axios from "axios"

ChartJS.register(...registerables)

export class ChartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          x: 0,
          o: 0,
          h: 0,
          l: 0,
          c: 0,
          s: [0, 0],
        },
      ],
    }
  }

  componentDidMount() {
    const getData = async () => {
      try {
        const { data } = await axios.get("/chart")
        const array = data.map((item) => ({
          x: new Date(item.time_period_start.slice(0, 10)).setHours(0, 0, 0, 0),
          o: item.rate_open,
          h: item.rate_high,
          l: item.rate_low,
          c: item.rate_close,
          s: [item.rate_open, item.rate_close],
        }))

        if (array.length === 0) {
          throw new Error("No data")
        }
        this.setState((prevState) => ({ ...prevState, data: array }))
      } catch (e) {
        console.error(e)
      }
    }
    getData()
  }

  getDataForChartConfig(formData) {
    const configData = chartConfig.data
    const { data } = this.state

    return {
      datasets: [
        {
          label: configData.datasets[0].label,
          data: formData.length < 1 ? data : formData,
          backgroundColor: configData.datasets[0].backgroundColor,
        },
      ],
    }
  }

  render() {
    const { formData } = this.props
    return (
      <div>
        <Chart
          data={this.getDataForChartConfig(formData)}
          options={chartConfig.options}
          type={chartConfig.type}
          plugins={chartConfig.plugins}
        />
      </div>
    )
  }
}
