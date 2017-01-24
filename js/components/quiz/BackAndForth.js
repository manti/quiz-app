import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'

const { bool, string } = require('react').PropTypes

const BackAndForth = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    nextQ: string,
    prevQ: string
  },

  render () {
    let backAndForth = (
      <br />
    )
    console.log(this.props, 'in bf')
    if (this.props.testStarted || 1) {
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
    testStarted: state.testStarted,
    nextQ: state.nextQ,
    prevQ: state.prevQ
  }
}

export default connect(mapStateToProps)(BackAndForth)
