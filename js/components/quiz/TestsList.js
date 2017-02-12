import React from 'react'
import TestCard from './TestCard'
import { connect } from 'react-redux'
import { setTestStatus, fetchTests } from './actionCreators'
const { func, bool, object } = React.PropTypes

const TestsList = React.createClass({
  propTypes: {
    dispatch: func.isRequired,
    tests: object.isRequired,
    fetchingTests: bool
  },
  componentDidMount () {
    if (!this.props.tests[1]) {
      this.props.dispatch(fetchTests())
    }
    this.props.dispatch(setTestStatus(false))
  },
  render () {
    let tests = Object.keys(this.props.tests).filter((w) => {
      return !isNaN(Number(w))
    })
    if (!this.props.fetchingTests) {
      return (
        <div>
          <div className='TestsList'>
            {tests.map((test, i) => {
              return <TestCard title={`Test-${test}`} testId={test} key={i} />
            })}
          </div>
        </div>
      )
    } else {
      return <h3 className='i-am-center'>Loading</h3>
    }
  }
})

const mapStateToProps = (state) => {
  return {
    tests: state.tests,
    fetchingTests: state.fetchingTests
  }
}

export default connect(mapStateToProps)(TestsList)
