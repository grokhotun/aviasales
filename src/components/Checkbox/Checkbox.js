import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'

const Checkbox = ({label, name, checked, onToggle}) => {
  return (
    <label className="checkbox">
      <input
        id={name}
        checked={checked}
        onChange={() => onToggle(name, checked)}
        type="checkbox"
        className="checkbox__input"/>
      <span className="checkbox__custom"></span>
      <span className="checkbox__text">{label}</span>
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onToggle: PropTypes.func,
  checked: PropTypes.bool
}

export default Checkbox
