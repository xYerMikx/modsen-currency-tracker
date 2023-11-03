import { Component } from "react"

export class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    const { observable } = this.props
    observable.subscribe(this.showNotification)
  }

  componentDidUpdate(prevProps) {
    const { observable } = this.props
    if (prevProps.observable !== observable) {
      observable.subscribe(this.showNotification)
    }
  }

  componentWillUnmount() {
    const { observable } = this.props
    observable.unsubscribe(this.showNotification)
  }

  showNotification = () => {
    this.setState({ show: true })
    setTimeout(() => this.setState({ show: false }), 3000)
  }

  render() {
    if (!this.state.show) return null
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          backgroundColor: "lightgreen",
          padding: "10px",
        }}
      >
        График за 30 дней был успешно построен
      </div>
    )
  }
}
