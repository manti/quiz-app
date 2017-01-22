import React from 'react'
// import { setTestStatus } from './actionCreators'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

const { bool, func, object } = React.PropTypes

const QnA = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    dispatch: func.isRequired,
    params: object
  },
  componentWillUnmount () {
    // this.props.dispatch(setTestStatus(false))
  },
  render () {
    console.log(this.props.params)
    return (
      <div>
        <h3>Disclaimer</h3>
        <Link to={`${this.props.params.id}/1`}>
          <Button>Start test</Button>
        </Link>
        <Link to='/tests'>
          <h4>Back</h4>
        </Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testStarted: state.testStarted
  }
}

export default connect(mapStateToProps)(QnA)
