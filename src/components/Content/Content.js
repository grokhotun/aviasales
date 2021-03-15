import React from 'react'
import FilterContainer from '@containers/FilterContainer'
import TicketsContainer from '@containers/TicketsContainer'
import Tabs from '@components/Tabs/Tabs'
import './Content.scss'

const Content = () => {
  return (
    <main className="content">
      <div className="content__col content__col--filter">
        <FilterContainer/>
      </div>
      <div className="content__col content__col--tickets">
        <Tabs/>
        <TicketsContainer/>
      </div>
    </main>
  )
}

export default Content
