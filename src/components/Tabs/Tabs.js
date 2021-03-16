import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Tabs.scss'

const Tabs = ({sortBy, setSortingBy}) => {
  return (
    <div className="tabs">
      <button onClick={() => setSortingBy('fast')} className={classNames('tabs__btn tabs__btn--left', {'is-active': sortBy === 'fast'})}>Самый быстрый</button>
      <button onClick={() => setSortingBy('cheap')} className={classNames('tabs__btn tabs__btn--right', {'is-active': sortBy === 'cheap'})}>Самый дешевый</button>
    </div>
  )
}

Tabs.propTypes = {
  sortBy: PropTypes.string,
  setSortingBy: PropTypes.func
}

export default Tabs
