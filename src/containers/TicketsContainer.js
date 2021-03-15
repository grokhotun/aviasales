import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Loader from '@/components/Loader/Loader'
import Tickets from '@/components/Tickets/Tickets'
import {requestTickets} from '@/redux/actions'

const TicketsContainer = ({tickets, isFetching, fetchData}) => {
  useEffect(() => {
    fetchData()
  }, [])

  if (isFetching) return <Loader/>
  return <Tickets tickets={tickets} />
}

const mapStateToProps = ({tickets, isFetching}) => ({
  tickets,
  isFetching
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: requestTickets(dispatch)
})

TicketsContainer.propTypes = {
  isFetching: PropTypes.bool,
  fetchData: PropTypes.func,
  tickets: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer)
