import React from 'react'
import { connect } from 'react-redux'
import CountdownTimer from './CountdownTimer'
const { object, bool } = require('react').PropTypes

const SectionTimer = React.createClass({
  propTypes: {
    tests: object.isRequired,
    arg: object.isRequired,
    fetchingTests: bool
  },
  render () {
    console.log(this.props, 'SectionTimer')
    if (this.props.arg.qId && !this.props.fetchingTests) {
      return <CountdownTimer initialTimeRemaining={this.props.tests.timeRemaining} />
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
