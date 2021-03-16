import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Tabs from '@components/Tabs/Tabs'
import {setSorting} from '@/redux/actions'

const TabsContainer = ({sortBy, setSortingBy}) => {
  return <Tabs setSortingBy={setSortingBy} sortBy={sortBy}/>
}

const mapStateToProps = ({sortBy}) => ({
  sortBy
})

const mapDispatchToProps = (dispatch) => ({
  setSortingBy: (filter) => dispatch(setSorting(filter))
})

TabsContainer.propTypes = {
  sortBy: PropTypes.string,
  setSortingBy: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer)
