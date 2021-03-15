import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Filter from '@components/Filter/Filter'
import {setTransitionsFilter} from '@/redux/actions'

const FilterContainer = ({transitions, setTransitions}) => {
  const onFilterToggle = (name) => {
    if (name === 'all') {
      if (transitions.all) {
        setTransitions({
          all: false,
          straight: false,
          oneTransition: false,
          twoTransition: false,
          threeTransition: false,
        })
      } else {
        setTransitions({
          all: true,
          straight: true,
          oneTransition: true,
          twoTransition: true,
          threeTransition: true,
        })
      }
    } else {
      setTransitions({
        ...transitions,
        [name]: !transitions[name]
      })
    }
  }

  return (
    <Filter
      transitions={transitions}
      onFilterToggle={onFilterToggle} />
  )
}

const mapStateToProps = ({transitions}) => ({
  transitions
})

const mapDispatchToProps = (dispatch) => ({
  setTransitions: (transitions) => dispatch(setTransitionsFilter(transitions))
})

FilterContainer.propTypes = {
  transitions: PropTypes.object,
  setTransitions: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
