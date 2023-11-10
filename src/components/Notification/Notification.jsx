import { Component } from "react"
import { NotificationContainer } from "./styled"

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
      <NotificationContainer data-cy="notification">
        График за 30 дней был успешно построен
      </NotificationContainer>
    )
  }
}
