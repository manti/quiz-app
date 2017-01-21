import React from 'react'
import { setTestStatus } from './actionCreators'
import { connect } from 'react-redux'
const { bool, func } = React.PropTypes

const QnA = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    dispatch: func.isRequired
  },
  componentWillUnmount () {
    console.log('Unmounted')
    this.props.dispatch(setTestStatus(false))
  },
  render () {
    return (
      <div>
        <div>Some text here</div>
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
