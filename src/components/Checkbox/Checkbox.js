import React from 'react'

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

export default Checkbox
