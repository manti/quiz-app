import React from 'react'
import _ from 'lodash'
import { Checkbox, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateAnswer } from './actionCreators'
const { object, func, string } = React.PropTypes

const MultiAnswer = React.createClass({
  propTypes: {
    question: object.isRequired,
    dispatch: func.isRequired,
    isReview: string
  },
  handleCheckBoxChange (e, val) {
    _.remove(this.props.question.answer, function (n) {
      return n === val
    })
    if (e.target.checked) {
      this.props.question.answer.push(val)
    }
    if (!this.props.question.answer || this.props.question.answer.length === 0) {
      this.props.question.answer.push(' ')
    }
    this.props.dispatch(updateAnswer(this.props.question.answer))
    // this.props.dispatch(updateFirebaseWithAnswer(this.props.question.id, this.props.question.answer))
    this.forceUpdate()
  },
  render () {
    let solText
    if (this.props.isReview) {
      solText = (
        <Alert bsStyle='success'>{this.props.question.solution}</Alert>
      )
    }
    this.props.question.answer = typeof this.props.question.answer !== 'undefined' ? this.props.question.answer.map(String) : []
    return (
      <div>
        {this.props.question.question}
        <form>
          {this.props.question.options.map((val, key) => {
            return <Checkbox disabled={Boolean(this.props.isReview)} key={key} checked={this.props.question.answer.indexOf(val) > -1} onChange={(e) => { this.handleCheckBoxChange(e, val) }}> {val} </Checkbox>
          })}
        </form>
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

export default connect(mapStateToProps)(MultiAnswer)
