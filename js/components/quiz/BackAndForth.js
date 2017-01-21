import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'

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
          <Row className='show-grid'>
            <Col xs={12} md={8}>
              <Button className='pull-left' bsStyle='link'>Previous</Button>
            </Col>
            <Col xs={6} md={4}>
              <Button className='pull-right' bsStyle='link'>Next</Button>
            </Col>
          </Row>
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
