import React from 'react'
import { Col, Checkbox, Glyphicon } from 'react-bootstrap'
import {Link, hashHistory} from 'react-router'
import { markQuestion, toggleGotoPrompt } from './actionCreators'
import {connect} from 'react-redux'
import CalculatorHelp from './CalculatorHelp'
import Review from './Review'

const {object, func, string, bool} = React.PropTypes

class TestTools extends React.Component {
  constructor (props) {
    super(props)
    this.handleMarkQuestion = this.handleMarkQuestion.bind(this)
  }
  handleMarkQuestion (e, question) {
    this.props.dispatch(markQuestion(e.target.checked))
    this.forceUpdate()
  }
  getQuestionLink (testId, sectionId, qId) {
    let prefix = this.props.isReview ? 'review/' : ''
    return `/tests/${prefix}${testId}/${sectionId}/${qId}`
  }
  showGotoNextPrompt () {
    if (this.props.isReview) {
      console.log('go to next section')
      hashHistory.push(`/tests/review/${this.props.testId}/${Number(this.props.sectionId) + 1}/1`)
    } else {
      this.props.dispatch(toggleGotoPrompt())
    }
  }
  render () {
    const {qId} = this.props
    let backButton = (
      <br />
    )
    let nextButton = (
      <br />
    )
    if (this.props.testId && !this.props.fetchingTests) {
      backButton = (
        <Col xs={2} md={1} className='button-bg-tools'>
          <Link to={this.getQuestionLink(this.props.testId, this.props.sectionId, this.props.prevQ)}>
            <div>Back</div>
          </Link>
          <Glyphicon className='center-the-icon' glyph='arrow-left' />
        </Col>
      )
      nextButton = (
        <Col xs={2} md={1} className='button-bg-tools'>
          <Link to={this.getQuestionLink(this.props.testId, this.props.sectionId, this.props.nextQ)}>
            <div>Next</div>
          </Link>
          <Glyphicon className='center-the-icon' glyph='arrow-right' />
        </Col>
      )
      if (this.props.isSectionLastQ) {
        nextButton = (
          <Col xs={2} md={1} className='button-bg-tools'>
            <Link to={`/seenAllQs`}>
              <div>Next</div>
            </Link>
            <Glyphicon className='center-the-icon' glyph='arrow-right' />
          </Col>
        )
      }
      if (this.props.isReview && this.props.isSectionLastQ) {
        let reviewQlink
        const {testId, sectionId, tests} = this.props
        if (tests[testId].sections[Number(sectionId) + 1]) {
          reviewQlink = `/tests/review/${testId}/${Number(sectionId) + 1}/1`
        } else {
          reviewQlink = `/tests/${testId}/over`
          console.log('No more sections')
        }
        nextButton = (
          <Col xs={2} md={1} className='button-bg-tools'>
            <Link to={reviewQlink}>
              <div>Next</div>
            </Link>
            <Glyphicon className='center-the-icon' glyph='arrow-right' />
          </Col>
        )
      }
    }

    if (this.props.isReview) {
      return (
        <div>
          <h4 style={{ 'position': 'absolute', 'left': '100px'}}>Practice Test-{this.props.testId} Section {this.props.sectionId}</h4>
          <div className='util-box' style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
            <Col xs={2} md={1} className='button-bg-tools'>
              <CalculatorHelp arg={{qId}} />
            </Col>
            <Col xs={2} md={1} className='button-bg-tools'>
              <div>Help</div>
              <Glyphicon className='center-the-icon' glyph='question-sign' />
            </Col>
            {backButton}
            {nextButton}
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <h4 style={{ 'position': 'absolute', 'left': '100px'}}>Practice Test-{this.props.testId} Section {this.props.sectionId}</h4>
          <div className='util-box' style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
            <Col xs={2} md={1} className='button-bg-tools'>
              <Review arg={{qId}} />
            </Col>
            <Col xs={2} md={1} className='button-bg-tools'>
              <div>Mark</div>
              <Checkbox style={{margin: '0 5px'}} onChange={(e) => { this.handleMarkQuestion(e, this.props.q) }} checked={this.props.q.marked} />
            </Col>
            <Col xs={2} md={1} className='button-bg-tools'>
              <CalculatorHelp arg={{qId}} />
            </Col>
            <Col xs={2} md={1} className='button-bg-tools'>
              <div>Help</div>
              <Glyphicon className='center-the-icon' glyph='question-sign' />
            </Col>
            {backButton}
            {nextButton}
          </div>
        </div>
      )
    }
  }
}
TestTools.propTypes = {
  q: object.isRequired,
  tests: object,
  dispatch: func,
  qId: string,
  nextQ: string,
  prevQ: string,
  sectionId: string,
  testId: string,
  isSectionLastQ: bool,
  fetchingTests: bool,
  showSectionPrompt: bool,
  isReview: string
}

const mapStateToProps = (state) => {
  return {
    qId: state.qId,
    tests: state.tests,
    nextQ: state.nextQ,
    prevQ: state.prevQ,
    testId: state.testId,
    sectionId: state.sectionId,
    isSectionLastQ: state.isSectionLastQ,
    fetchingTests: state.fetchingTests,
    showSectionPrompt: state.showSectionPrompt
  }
}

export default connect(mapStateToProps)(TestTools)
