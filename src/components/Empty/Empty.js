import React from 'react'
import PropTypes from 'prop-types'

import './Empty.scss'

const Empty = ({message}) => {
  return (
    <div className="empty">
      <p>{message || ''}</p>
    </div>
  )
}

Empty.propTypes = {
  message: PropTypes.string
}

export default Empty
