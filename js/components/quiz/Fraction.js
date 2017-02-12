import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateAnswer } from './actionCreators'
const { object, func } = React.PropTypes

const Fraction = React.createClass({
  propTypes: {
    question: object.isRequired,
    dispatch: func.isRequired
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
    return (
      <div>
        {q.question}
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <input type='text' className='form-control' onChange={this.handleNumerator} value={q.answer[0]} />
          </Col>
        </Row>
        <Row>
          <hr className='col-xs-2' style={{marginBottom: '10px', 'marginTop': '10px'}} />
        </Row>
        <Row>
          <Col xs={2}>
            <input type='text' className='form-control' onChange={this.handleDenominator} value={q.answer[1]} />
          </Col>
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
