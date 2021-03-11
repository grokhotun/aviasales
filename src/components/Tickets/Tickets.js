import TicketCard from '@/components/TicketCard/TicketCard'
import React from 'react'

import './Tickets.scss'

const Tickets = () => {
  return (
    <div className="tickets" >
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      <TicketCard/>
    </div>
  )
}

export default Tickets
