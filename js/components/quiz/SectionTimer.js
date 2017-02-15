import React from 'react'
import { connect } from 'react-redux'
import CountdownTimer from './CountdownTimer'
import { updateTimeRemaining } from './actionCreators'
import { hashHistory } from 'react-router'
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
  sectionTimeUp () {
    let {testId, sectionId} = this.props
    hashHistory.push(`/tests/${testId}/${Number(sectionId) + 1}/1`)
  },
  render () {
    if (this.props.arg.qId && !this.props.fetchingTests) {
      let currentSection = this.props.tests[this.props.testId].sections[this.props.sectionId]
      return <CountdownTimer tickCallback={this.customCallback} initialTimeRemaining={currentSection.timeRemaining} completeCallback={this.sectionTimeUp} />
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
