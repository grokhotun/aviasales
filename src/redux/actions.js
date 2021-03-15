import {$api} from '@/api'

const setIsFethcing = (payload) => ({
  type: 'SET_IS_FETHCING',
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
  dispatch(setIsFethcing())
  try {
    const {end, tickets} = await $api.getData()
    dispatch(setTickets(tickets))
    return end
  } catch (error) {
    return error
  }
}

export {
  requestTickets,
  setTransitionsFilter,
  setSorting
}
