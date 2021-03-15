import {$api} from '@/api'

const setIsFetching = (payload) => ({
  type: 'SET_IS_FETCHING',
  payload
})

const setIsError = (payload) => ({
  type: 'SET_IS_ERROR',
  payload
})

const setTickets = (payload) => ({
  type: 'SET_TICKETS',
  payload
})

const setTransitionsFilter = (payload) => ({
  type: 'SET_TRANSITIONS_FILTER',
  payload
})

const setSorting = (payload) => ({
  type: 'SET_SORTING',
  payload
})

const requestTickets = (dispatch) => async () => {
  dispatch(setIsFetching(true))
  dispatch(setIsError(false))
  try {
    const {end, tickets} = await $api.getData()
    dispatch(setTickets(tickets))
    dispatch(setIsFetching(false))
    dispatch(setIsError(false))
    return end
  } catch (error) {
    dispatch(setIsError(true))
    return error
  }
}

export {
  requestTickets,
  setTransitionsFilter,
  setSorting
}
