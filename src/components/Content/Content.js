import React from 'react'
import FilterContainer from '@containers/FilterContainer'
import TicketsContainer from '@containers/TicketsContainer'
import TabsContainer from '@containers/TabsContainer'
import './Content.scss'

const Content = () => {
  return (
    <main className="content">
      <div className="content__col content__col--filter">
        <FilterContainer/>
      </div>
      <div className="content__col content__col--tickets">
        <TabsContainer/>
        <TicketsContainer/>
      </div>
    </main>
  )
}

export default Content
