import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import {fetchTests} from './actionCreators'
import { hashHistory, Link } from 'react-router'

const { bool, func, object } = React.PropTypes

const QnA = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    dispatch: func.isRequired,
    params: object,
    tests: object,
    fetchingTests: bool
  },
  componentDidMount () {
    if (!this.props.tests[1]) {
      this.props.dispatch(fetchTests())
    } else if (this.props.tests[this.props.params.id].completed) {
      hashHistory.push(`/tests/${this.props.params.id}/over`)
    }
  },
  componentWillReceiveProps (props) {
    if (props.tests[props.params.id].completed) {
      hashHistory.push(`/tests/${this.props.params.id}/over`)
    }
    // component.forceUpdate()
  },
  render () {
    if (!this.props.fetchingTests && !this.props.tests[this.props.params.id].completed) {
      return (
        <div>
          <Link to='/tests'>
            <h4>Back</h4>
          </Link>
          <h3 className='i-am-center'>Disclaimer</h3>
          <Link className='i-am-center' to={`/tests/${this.props.params.id}/1/1`}>
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
