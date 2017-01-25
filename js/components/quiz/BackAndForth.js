import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'

const { bool, string, object } = require('react').PropTypes

const BackAndForth = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    nextQ: string,
    prevQ: string,
    arg: object
  },

  render () {
    let backAndForth = (
      <br />
    )
    if (this.props.arg.id) {
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
      <div>
        <div>{backAndForth}</div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testStarted: state.testStarted,
    nextQ: state.nextQ,
    prevQ: state.prevQ
  }
}

export default connect(mapStateToProps)(BackAndForth)
