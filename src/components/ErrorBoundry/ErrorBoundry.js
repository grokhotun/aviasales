import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ErrorBoundry extends Component {
    state = {
      hasError: false
    }

    componentDidCatch() {
      this.setState({
        hasError: true
      })
    }

    render() {
      return (
        this.state.hasError ? <div>Some Error</div> : this.props.children
      )
    }
}

ErrorBoundry.propTypes = {
  children: PropTypes.element
}

export default ErrorBoundry
