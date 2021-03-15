import React from 'react'
import PropTypes from 'prop-types'
import TicketCard from '@/components/TicketCard/TicketCard'
import './Tickets.scss'
import Loader from '@/components/Loader/Loader'
import ErrorIndicator from '@/components/ErrorIndicator/ErrorIndicator'

const Tickets = ({isError, isFetching, fetchData, tickets, shownTickets, showMoreTickets}) => {
  return (
    <div className="tickets" >
      <div className="tickets__body">
        {tickets.slice(0, shownTickets).map((ticket, idx) => <TicketCard key={idx} ticket={ticket}/>)}
      </div>
      <div className="tickets__btn">
        {
          isError
          ? <ErrorIndicator/>
          : isFetching
          ? <Loader/>
          : shownTickets > tickets.length
          ? <button onClick={fetchData}>Загрузить еще...</button>
          : <button onClick={showMoreTickets}>Показать еще...</button>
        }
      </div>
    </div>
  )
}

Tickets.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  tickets: PropTypes.array,
  shownTickets: PropTypes.number,
  showMoreTickets: PropTypes.func,
  fetchData: PropTypes.func
}

export default Tickets
