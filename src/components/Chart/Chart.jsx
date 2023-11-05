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
        const array = data.map(
          ({ time_period_start, rate_open, rate_high, rate_low, rate_close }) => ({
            x: new Date(time_period_start.slice(0, 10)).setHours(0, 0, 0, 0),
            o: rate_open,
            h: rate_high,
            l: rate_low,
            c: rate_close,
            s: [rate_open, rate_close],
          }),
        )

        this.setState((prevState) => ({ ...prevState, data: array }))
      } catch (e) {
        console.error(e)
      }
    }
    getData()
  }
  componentDidUpdate(prevProps) {
    const { selectedOption } = this.props
    if (prevProps.selectedOption !== selectedOption) {
    }
  }

  getDataForChartConfig() {
    const configData = chartConfig.data
    const { data } = this.state
    return {
      datasets: [
        {
          label: configData.datasets[0].label,
          data,
          backgroundColor: configData.datasets[0].backgroundColor,
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <Chart
          data={this.getDataForChartConfig()}
          options={chartConfig.options}
          type={chartConfig.type}
          plugins={chartConfig.plugins}
        />
      </div>
    )
  }
}
