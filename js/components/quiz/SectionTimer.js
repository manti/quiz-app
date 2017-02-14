import React from 'react'
import { connect } from 'react-redux'
import CountdownTimer from './CountdownTimer'
import { updateTimeRemaining } from './actionCreators'
const { object, bool, func, string } = require('react').PropTypes

const SectionTimer = React.createClass({
  propTypes: {
    tests: object.isRequired,
    sectionId: string.isRequired,
    testId: string.isRequired,
    arg: object.isRequired,
    fetchingTests: bool,
    dispatch: func
  },
  customCallback (timeRemaining) {
    this.props.dispatch(updateTimeRemaining(timeRemaining))
  },
  render () {
    if (this.props.arg.qId && !this.props.fetchingTests) {
      let currentSection = this.props.tests[this.props.testId].sections[this.props.sectionId]
      return <CountdownTimer tickCallback={this.customCallback} initialTimeRemaining={currentSection.timeRemaining} />
    } else {
      return <br />
    }
  }
})

const mapStateToProps = (state) => {
  return {
    tests: state.tests,
    fetchingTests: state.fetchingTests,
    sectionId: state.sectionId,
    testId: state.testId
  }
}

export default connect(mapStateToProps)(SectionTimer)
