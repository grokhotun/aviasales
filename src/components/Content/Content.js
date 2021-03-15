import React from 'react'
import Filter from '@/components/Filter/Filter'
// import Tickets from '@/components/Tickets/Tickets'
import Tabs from '@/components/Tabs/Tabs'
import './Content.scss'
import TicketsContainer from '@containers/TicketsContainer'

const Content = () => {
  return (
    <main className="content">
      <div className="content__col content__col--filter">
        <Filter/>
      </div>
      <div className="content__col content__col--tickets">
        <Tabs/>
        <TicketsContainer/>
      </div>
    </main>
  )
}

export default Content
