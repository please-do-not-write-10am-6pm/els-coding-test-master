import { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(_) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className='pb-5'>Oops... something went wrong!</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
