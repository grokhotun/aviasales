import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@/components/Checkbox/Checkbox'
import './Filter.scss'

const Filter = ({transitions, onFilterToggle}) => {
  return (
    <div className="filter">
      <div className="filter__header">
        Количество пересадок
      </div>
      <div className="filter__body">
        <Checkbox onToggle={onFilterToggle} checked={transitions['all']} label="Все" name="all"/>
        <Checkbox onToggle={onFilterToggle} checked={transitions['straight']} label="Прямой" name="straight"/>
        <Checkbox onToggle={onFilterToggle} checked={transitions['oneTransition']} label="1 пересадка" name="oneTransition"/>
        <Checkbox onToggle={onFilterToggle} checked={transitions['twoTransition']} label="2 пересадки" name="twoTransition"/>
        <Checkbox onToggle={onFilterToggle} checked={transitions['threeTransition']} label="3 пеерсадки" name="threeTransition"/>
      </div>
    </div>
  )
}

Filter.propTypes = {
  transitions: PropTypes.object,
  onFilterToggle: PropTypes.func
}

export default Filter
