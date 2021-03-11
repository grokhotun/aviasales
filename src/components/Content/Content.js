import React from 'react'
import Filter from '@/components/Filter/Filter'
import Tickets from '@/components/Tickets/Tickets'
import './Content.scss'

const Content = () => {
  return (
    <main className="content">
      <div className="content__col content__col--filter">
        <Filter/>
      </div>
      <div className="content__col content__col--tickets">
        <Tickets/>
      </div>
    </main>
  )
}

export default Content
