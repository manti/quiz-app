import React from 'react'
import { setTestStatus } from './actionCreators'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const { bool, func } = React.PropTypes

const QnA = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    dispatch: func.isRequired
  },
  componentWillUnmount () {
    this.props.dispatch(setTestStatus(false))
  },
  render () {
    return (
      <div>
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
