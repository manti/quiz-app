import React from 'react'
import { updateAnswer, updateFirebaseWithAnswer } from './actionCreators'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const { array, object, func, number, string } = React.PropTypes

const BlankOptions = React.createClass({
  propTypes: {
    options: array.isRequired,
    question: object.isRequired,
    dispatch: func.isRequired,
    blank: number,
    params: object
  },
  handleClick (e, value) {
    e.preventDefault()
    let answerObj = this.props.question.answer
    answerObj[this.props.blank] = e.target.innerHTML
    let {testId, sectionId} = this.props
    this.props.dispatch(updateAnswer(answerObj))
    this.forceUpdate()
    // this.props.dispatch(updateFirebaseWithAnswer(answerObj))
  },
  render () {
    return (
      <ListGroup>
        {this.props.options.map((val, i) => {
          if (this.props.question.answer[this.props.blank] === val) {
            return <ListGroupItem href='#' key={i} bsStyle='warning' onClick={(e) => this.handleClick(e, i)}>{val}</ListGroupItem>
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
