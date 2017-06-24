import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import {fetchTests, setTestStatus} from './actionCreators'
import { hashHistory, Link } from 'react-router'

const { bool, func, object, array } = React.PropTypes

const QnA = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    dispatch: func.isRequired,
    params: object,
    tests: array,
    fetchingTests: bool
  },
  componentDidMount () {
    if (!this.props.tests[1]) {
      this.props.dispatch(fetchTests())
    } else if (this.props.tests[this.props.params.id].completed) {
      hashHistory.push(`/tests/${this.props.params.id}/over`)
    }
    // Set section id to default 1 of the test
    this.props.dispatch(setTestStatus(true, this.props.params.id, '1'))
  },
  componentWillReceiveProps (props) {
    if (props.tests[props.params.id] && props.tests[props.params.id].completed) {
      hashHistory.push(`/tests/${this.props.params.id}/over`)
    }
    // component.forceUpdate()
  },
  render () {
    if (!this.props.fetchingTests && !this.props.tests[this.props.params.id].completed) {
      return (
        <div>
          <h3 className='i-am-center'>Disclaimweqwe</h3>
          <h6>These tests will help you in honing your skills and quantifies your expertise. The scores from GREOnline.in tests does not guarantee you will get the same range of scores in original GRE General Test</h6>
          <Link className='i-am-center' to={`/testTimingAndBreak`}>
            <Button>Start test</Button>
          </Link>
        </div>
      )
    } else {
      return (<div>loading</div>)
    }
  }
})

const mapStateToProps = (state) => {
  return {
    testStarted: state.testStarted,
    tests: state.tests,
    fetchingTests: state.fetchingTests
  }
}

export default connect(mapStateToProps)(QnA)
