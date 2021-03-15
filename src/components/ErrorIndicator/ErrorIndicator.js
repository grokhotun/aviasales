import React from 'react'
import PropTypes from 'prop-types'
import './ErrorIndicator.scss'

const ErrorIndicator = ({callback}) => {
  return (
    <div className="error-indicator">
      <p>Произошла непредвиденная ошибка.</p>
      <button onClick={callback}>Повторить попытку</button>
    </div>
  )
}

ErrorIndicator.propTypes = {
  callback: PropTypes.func
}

export default ErrorIndicator
