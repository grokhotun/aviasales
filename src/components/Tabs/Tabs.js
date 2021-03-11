import React from 'react'
import './Tabs.scss'

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="tabs__btn tabs__btn--left is-active">Лево</button>
      <button className="tabs__btn tabs__btn--right">Право</button>
    </div>
  )
}

export default Tabs
