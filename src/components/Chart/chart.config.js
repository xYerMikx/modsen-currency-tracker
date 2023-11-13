const customData = {
  datasets: [
    {
      label: "Currency Chart",
      data: [],
      backgroundColor: (ctx) => {
        const { c, o } = ctx.raw
        return c >= o ? "#16C782" : "#EA3943"
      },
      borderColor: (ctx) => {
        const { c, o } = ctx.raw
        return c >= o ? "#11C712" : "#EF2443"
      },
      borderWidth: 2,
      borderSkipped: false,
    },
  ],
}

const candleStick = {
  id: "candlestick",
  beforeDatasetsDraw(chart) {
    const {
      ctx,
      data,
      scales: { y },
    } = chart
    ctx.save()
    ctx.lineWidth = 2

    data.datasets[0].data.forEach((_, index) => {
      const isCloseMoreThanOpen =
        data.datasets[0].data[index].c >= data.datasets[0].data[index].o
      ctx.strokeStyle = isCloseMoreThanOpen ? "#16C782" : "#EA3943"
      ctx.beginPath()
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y,
      )
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].h),
      )
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(
        chart.getDatasetMeta(0).data[index].x,
        chart.getDatasetMeta(0).data[index].y,
      )
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].l),
      )
      ctx.stroke()
    })
  },
}

export const chartConfig = {
  type: "bar",
  data: customData,
  options: {
    aspectRatio: window.innerWidth <= 768 ? 1.25 : 2,
    parsing: {
      xAxisKey: "x",
      yAxisKey: "s",
    },
    layout: {
      padding: {
        bottom: 10,
        left: 10,
      },
    },
    scales: {
      xAxis: {
        title: {
          display: true,
          text: "Day",
          color: "#ffffff",
        },
        type: "timeseries",
        time: {
          unit: "day",
          tooltipFormat: "MMM d, yyyy",
        },
        grid: {
          color: "#3e3e3e",
        },
      },
      y: {
        title: {
          display: true,
          text: "USD",
          color: "#ffffff",
        },
        position: "right",
        beginAtZero: false,
        grace: 1.25,
        grid: {
          color: "#3e3e3e",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          beforeBody: (ctx) => {
            const { raw } = ctx[0]
            const body = [
              `Open: ${Number(raw.o).toFixed(2)}`,
              `High: ${Number(raw.h).toFixed(2)}`,
              `Low: ${Number(raw.l).toFixed(2)}`,
              `Close: ${Number(raw.c).toFixed(2)}`,
            ]
            return body
          },
        },
      },
    },
  },
  plugins: [candleStick],
}
