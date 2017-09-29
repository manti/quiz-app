import React from 'react'
import { FormGroup, FormControl, Alert, InputGroup, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateAnswer } from './actionCreators'
const { object, func, string } = React.PropTypes

const OnlyInput = React.createClass({
  propTypes: {
    question: object.isRequired,
    dispatch: func,
    isReview: string
  },
  handleInputChange (e) {
    this.props.dispatch(updateAnswer(e.target.value))
    // this.props.dispatch(updateFirebaseWithAnswer(this.props.question.id, e.target.value))
    this.forceUpdate()
  },
  render () {
    let solText
    if (this.props.isReview) {
      solText = (
        <Alert bsStyle='success'>{this.props.question.solution}</Alert>
      )
    }
    return (
      <div className='OnlyInput'>
        <p>{this.props.question.question}</p>
        <FormGroup>
        <Col sm={6}>
          <InputGroup>
            <FormControl disabled={this.props.isReview} onChange={this.handleInputChange} type='text' placeholder='Answer' value={this.props.question.answer} />
            <InputGroup.Addon>{this.props.question.suffix}</InputGroup.Addon>
          </InputGroup>
        </Col>
        </FormGroup>
        {solText}
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

export default connect(mapStateToProps)(OnlyInput)
