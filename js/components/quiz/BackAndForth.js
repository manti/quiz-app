import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router'
import {toggleGotoPrompt} from './actionCreators'
import NextSectionPrompt from './NextSectionPrompt'
const { bool, string, func } = require('react').PropTypes

const BackAndForth = React.createClass({
  propTypes: {
    nextQ: string,
    prevQ: string,
    sectionId: string,
    testId: string,
    isSectionLastQ: bool,
    fetchingTests: bool,
    showSectionPrompt: bool,
    dispatch: func,
    isReview: string
  },

  getQuestionLink (testId, sectionId, qId) {
    let prefix = this.props.isReview ? 'review/' : ''
    return `/tests/${prefix}${testId}/${sectionId}/${qId}`
  },

  showGotoNextPrompt () {
    this.props.dispatch(toggleGotoPrompt())
  },

  render () {
    let backAndForth = (
      <br />
    )
    if (this.props.testId && !this.props.fetchingTests) {
      let nextQMarkup = (
        <Link to={this.getQuestionLink(this.props.testId, this.props.sectionId, this.props.nextQ)}>
          <Button className='pull-right' bsStyle='link'>Next</Button>
        </Link>
      )
      if (this.props.isSectionLastQ) {
        nextQMarkup = (
          <Button className='pull-right' bsStyle='link' onClick={this.showGotoNextPrompt}>Go next section</Button>
        )
      }
      backAndForth = (
        <div>
          <Row className='show-grid'>
            <Col xs={12} md={8}>
              <Link to={this.getQuestionLink(this.props.testId, this.props.sectionId, this.props.prevQ)}>
                <Button className='pull-left' bsStyle='link'>Previous</Button>
              </Link>
            </Col>
            <Col xs={6} md={4}>
              {nextQMarkup}
            </Col>
          </Row>
        </div>
      )
    }

    return (
      <div>
        <div>{backAndForth}</div>
        <NextSectionPrompt />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    nextQ: state.nextQ,
    prevQ: state.prevQ,
    testId: state.testId,
    sectionId: state.sectionId,
    isSectionLastQ: state.isSectionLastQ,
    fetchingTests: state.fetchingTests,
    showSectionPrompt: state.showSectionPrompt
  }
}

export default connect(mapStateToProps)(BackAndForth)
