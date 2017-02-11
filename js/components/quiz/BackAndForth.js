import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router'

const { bool, string, object } = require('react').PropTypes

const BackAndForth = React.createClass({
  propTypes: {
    testStarted: bool.isRequired,
    nextQ: string,
    prevQ: string,
    arg: object.isRequired
  },

  getQuestionLink (testId, sectionId, qId) {
    return `/tests/${testId}/${sectionId}/${qId}`
  },

  render () {
    let backAndForth = (
      <br />
    )
    // console.log(this.props)
    if (this.props.arg.id) {
      backAndForth = (
        <div>
          <Row className='show-grid'>
            <Col xs={12} md={8}>
              <Link to={this.getQuestionLink(this.props.arg.id, this.props.arg.sectionId, this.props.prevQ)}>
                <Button className='pull-left' bsStyle='link'>Previous</Button>
              </Link>
            </Col>
            <Col xs={6} md={4}>
              <Link to={this.getQuestionLink(this.props.arg.id, this.props.arg.sectionId, this.props.nextQ)}>
                <Button className='pull-right' bsStyle='link'>Next</Button>
              </Link>
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
