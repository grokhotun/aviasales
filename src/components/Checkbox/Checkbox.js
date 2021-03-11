import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'

const Checkbox = ({label}) => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__input"/>
      <span className="checkbox__custom"></span>
      <span className="checkbox__text">{label}</span>
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string
}

export default Checkbox
