const initialState = {
  tickets: [],
  isFetching: true,
  sortBy: 'fast',
  transitions: {
    all: true,
    straight: true,
    oneTransition: true,
    twoTransition: true,
    threeTransition: true
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_FETHCING':
      return {
        ...state,
        isFetching: true
      }

    case 'SET_TICKETS':
      return {
        ...state,
        tickets: [
          ...state.tickets,
          action.payload
        ],
        isFetching: false
      }

    case 'SET_TRANSITIONS_FILTER':
      return {
        ...state,
        transitions: action.payload
      }

    case 'SET_SORTING':
      return {
        ...state,
        sortBy: action.payload
      }

    default:
      return state
  }
}

export default rootReducer
