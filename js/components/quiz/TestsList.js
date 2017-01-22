import React from 'react'
import TestCard from './TestCard'
import { connect } from 'react-redux'
import { setTestStatus } from './actionCreators'
const { func, bool } = React.PropTypes

const TestsList = React.createClass({
  propTypes: {
    dispatch: func.isRequired,
    testStarted: bool
  },
  componentDidMount () {
    this.props.dispatch(setTestStatus(false))
  },
  render () {
    return (
      <div className='TestsList'>
        <TestCard title='Test 1' testId='1t' />
        <TestCard title='Test 2' testId='1t' />
        <TestCard title='Test 3' testId='1t' />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testStarted: state.testStarted
  }
}

export default connect(mapStateToProps)(TestsList)
