import React from 'react'
import { updateAnswer } from './actionCreators'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const { array, object, func, number, string } = React.PropTypes

const BlankOptions = React.createClass({
  propTypes: {
    options: array.isRequired,
    question: object.isRequired,
    dispatch: func.isRequired,
    blank: number,
    params: object,
    isReview: string
  },
  handleClick (e, value) {
    e.preventDefault()
    if (this.props.isReview) {
      return false
    }
    let answerObj = this.props.question.answer
    answerObj[this.props.blank] = e.target.innerHTML
    this.props.dispatch(updateAnswer(answerObj))
    this.forceUpdate()
    // this.props.dispatch(updateFirebaseWithAnswer(answerObj))
  },
  render () {
    let labelStyle = ''
    if (this.props.checked) {
      labelStyle = 'danger'
    }
    if (this.props.isSolution) {
      labelStyle = 'success'
    }
    return (
      <ListGroup>
        {this.props.options.map((val, i) => {
          if (!this.props.isReview && this.props.question.answer[this.props.blank] === val) {
            return <ListGroupItem href='#' key={i} bsStyle='warning' onClick={(e) => this.handleClick(e, i)}>{val}</ListGroupItem>
          }
          if (this.props.isReview && this.props.question.solution[this.props.blank] === val) {
            return <ListGroupItem href='#' bsStyle='success' key={i}>{val}</ListGroupItem>
          }
          if (this.props.isReview && this.props.question.solution[this.props.blank] !== val && this.props.question.answer[this.props.blank] === val) {
            return <ListGroupItem href='#' bsStyle='danger' key={i}>{val}</ListGroupItem>
          } else {
            return <ListGroupItem href='#' key={i} onClick={this.handleClick}>{val}</ListGroupItem>
          }
        })}
      </ListGroup>
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

export default connect(mapStateToProps)(BlankOptions)
