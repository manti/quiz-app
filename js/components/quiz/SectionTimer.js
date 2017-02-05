import React from 'react'
import { connect } from 'react-redux'
import CountdownTimer from './CountdownTimer'
import { updateTimeRemaining } from './actionCreators'
const { object, bool, func } = require('react').PropTypes

const SectionTimer = React.createClass({
  propTypes: {
    tests: object.isRequired,
    arg: object.isRequired,
    fetchingTests: bool,
    dispatch: func
  },
  customCallback (timeRemaining) {
    this.props.dispatch(updateTimeRemaining(timeRemaining))
  },
  render () {
    if (this.props.arg.qId && !this.props.fetchingTests) {
      return <CountdownTimer tickCallback={this.customCallback} initialTimeRemaining={this.props.tests.timeRemaining} />
    }
    else {
      return <br />
    }
  }
})

const mapStateToProps = (state) => {
  return {
    tests: state.tests,
    fetchingTests: state.fetchingTests
  }
}

export default connect(mapStateToProps)(SectionTimer)
