import React from 'react'
import { Col, Row, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateAnswer } from './actionCreators'
const { object, string, func } = React.PropTypes

const Fraction = React.createClass({
  propTypes: {
    question: object.isRequired,
    dispatch: func.isRequired,
    isReview: string
  },
  handleNumerator (e) {
    let denominatorValue = this.props.question.answer[1]
    let answerObj = [e.target.value, denominatorValue]
    this.props.dispatch(updateAnswer(answerObj))
    this.forceUpdate()
    // this.props.dispatch(updateFirebaseWithAnswer(answerObj))
  },
  handleDenominator (e) {
    let numeratorValue = this.props.question.answer[0]
    let answerObj = [numeratorValue, e.target.value]
    this.props.dispatch(updateAnswer(answerObj))
    this.forceUpdate()
  },
  render () {
    let q = this.props.question
    let solText
    if (this.props.isReview) {
      solText = (
        <Alert bsStyle='success'>{this.props.question.solution}</Alert>
      )
    }
    return (
      <div>
        <Row>
          <Col>
            {q.question}
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={3} mdPush={3}>
            <input type='text' disabled={this.props.isReview} className='form-control' onChange={this.handleNumerator} value={q.answer[0]} />
          </Col>
        </Row>
        <Row>
          <hr className='col-xs-3 col-xs-offset-3' style={{marginBottom: '10px', 'marginTop': '10px'}} />
        </Row>
        <Row>
          <Col xs={3} mdPush={3}>
            <input type='text' disabled={this.props.isReview} className='form-control' onChange={this.handleDenominator} value={q.answer[1]} />
          </Col>
        </Row>
        <Row>
          {solText}
        </Row>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testId: state.testId,
    sectionId: state.sectionId,
    qId: state.qId,
    tests: state.tests
  }
}

export default connect(mapStateToProps)(Fraction)
