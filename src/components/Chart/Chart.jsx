import { Component } from "react"
import { Chart as ChartJS, registerables } from "chart.js"
import { Chart } from "react-chartjs-2"
import { chartConfig } from "./chart.config"
import "chartjs-adapter-date-fns"
import axios from "axios"
import { ChartWrapper } from "./styled"
import PropTypes from "prop-types"

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
          ({ rate_open, rate_close, time_period_start, rate_high, rate_low }) => {
            const o = rate_open.toFixed(2)
            const c = rate_close.toFixed(2)
            return {
              x: new Date(time_period_start.slice(0, 10)).setHours(0, 0, 0, 0),
              o,
              h: rate_high.toFixed(2),
              l: rate_low.toFixed(2),
              c,
              s: [o, c],
            }
          },
        )
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
      <ChartWrapper>
        <Chart
          data={this.getDataForChartConfig(formData)}
          options={chartConfig.options}
          type={chartConfig.type}
          plugins={chartConfig.plugins}
        />
      </ChartWrapper>
    )
  }
}

ChartComponent.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      o: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
      l: PropTypes.number.isRequired,
      c: PropTypes.number.isRequired,
      s: PropTypes.arrayOf(PropTypes.number.isRequired),
    }),
  ).isRequired,
}
