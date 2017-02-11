import React from 'react'
import TestCard from './TestCard'
import { connect } from 'react-redux'
import { setTestStatus, fetchTests } from './actionCreators'
const { func, bool, array } = React.PropTypes

const TestsList = React.createClass({
  propTypes: {
    dispatch: func.isRequired,
    tests: array,
    testStarted: bool
  },
  componentDidMount () {
    if (!this.props.tests.length) {
      this.props.dispatch(fetchTests())
    }
    this.props.dispatch(setTestStatus(false))
  },
  render () {
    let tests = this.props.tests
    if (this.props.tests.length) {
      return (
        <div>
          <div className='TestsList'>
            {this.props.tests.map((test, i) => {
              return <TestCard title={test.name} testId={test.id} key={i} />
            })}
          </div>
        </div>
      )
    }
    else {
      return <h3 className='i-am-center'>Loading</h3>
    }
  }
})

const mapStateToProps = (state) => {
  return {
    testStarted: state.testStarted,
    tests: state.tests
  }
}

export default connect(mapStateToProps)(TestsList)
