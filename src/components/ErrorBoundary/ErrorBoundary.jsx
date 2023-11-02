import { Component } from "react"

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: undefined,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    }
  }

  componentDidCatch(err, errStack) {
    console.error(err)
    console.error(errStack)
  }
  render() {
    if (this.state.hasError) {
      return <h1>Opps, something went wrong!</h1>
    } else {
      return this.props.children
    }
  }
}
