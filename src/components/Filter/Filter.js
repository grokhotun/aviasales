import React from 'react'
import Checkbox from '@/components/Checkbox/Checkbox'
import './Filter.scss'

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__header">
        Количество пересадок
      </div>
      <div className="filter__body">
        <Checkbox label="Все"/>
        <Checkbox label="Все"/>
        <Checkbox label="Все"/>
        <Checkbox label="Все"/>
        <Checkbox label="Все"/>
      </div>
    </div>
  )
}

export default Filter
