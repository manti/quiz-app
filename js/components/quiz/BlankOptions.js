import React from 'react'
import { updateAnswer, updateFirebaseWithAnswer } from './actionCreators'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const { array, object, func } = React.PropTypes

const BlankOptions = React.createClass({
  propTypes: {
    options: array.isRequired,
    question: object.isRequired,
    dispatch: func.isRequired
  },
  handleClick (e, value) {
    e.preventDefault()
    console.log(e)
    this.props.dispatch(updateAnswer(this.props.question.id, e.target.innerHTML))
    this.props.dispatch(updateFirebaseWithAnswer(this.props.question.id, e.target.innerHTML))
  },
  render () {
    console.log()
    return (
      <ListGroup>
        {this.props.options.map((val, i) => {
          if (this.props.question.answer.indexOf(val) > -1) {
            console.log(val)
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
