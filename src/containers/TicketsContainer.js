import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Loader from '@/components/Loader/Loader'
import Tickets from '@/components/Tickets/Tickets'
import ErrorIndicator from '@/components/ErrorIndicator/ErrorIndicator'
import {requestTickets} from '@/redux/actions'
import {filterByTransitions, sortingBy} from '@/utils'

const TicketsContainer = ({isError, isFetching, tickets, fetchData}) => {
  const [shownTickets, setShownTickets] = useState(5)
  useEffect(() => fetchData(), [])

  const showMoreTickets = () => {
    const shownNumber = shownTickets
    setShownTickets(shownNumber + 5)
  }

  if (isError && !tickets.length) {
    return <ErrorIndicator callback={fetchData}/>
  }

  if (isFetching && !tickets.length) {
    return <Loader/>
  }

  return (
    <Tickets
      isError={isError}
      isFetching={isFetching}
      tickets={tickets}
      fetchData={fetchData}
      shownTickets={shownTickets}
      showMoreTickets={showMoreTickets}
    />)
}

const mapStateToProps = ({isFetching, isError, tickets, transitions, sortBy}) => ({
  tickets: sortingBy(filterByTransitions(tickets, transitions), sortBy),
  isFetching,
  isError
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: requestTickets(dispatch)
})

TicketsContainer.propTypes = {
  isFetching: PropTypes.bool,
  isError: PropTypes.bool,
  fetchData: PropTypes.func,
  tickets: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer)
