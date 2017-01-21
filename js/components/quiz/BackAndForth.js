import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const { bool } = require('react').PropTypes

const BackAndForth = React.createClass({
  propTypes: {
    testStarted: bool.isRequired
  },

  render () {
    let backAndForth = (
      <div>Hello from the other side</div>
    )
    if (this.props.testStarted) {
      backAndForth = (
        <div>
          <Button>Previous</Button>
          <Button>Next</Button>
        </div>
      )
    }

    return (
      <div>{backAndForth}</div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testStarted: state.testStarted
  }
}

export default connect(mapStateToProps)(BackAndForth)
