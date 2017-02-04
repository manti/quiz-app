import React from 'react'
import FourChoices from './FourChoices'
import { Image } from 'react-bootstrap'
import { updateAnswer, updateFirebaseWithAnswer } from './actionCreators'
import { connect } from 'react-redux'

const { object, func } = React.PropTypes

const Mcq = React.createClass({
  propTypes: {
    question: object.isRequired,
    dispatch: func.isRequired,
    params: object
  },
  changeRadio (e) {
    this.props.question.answer = e.target.id
    this.props.dispatch(updateAnswer(this.props.question.id, e.target.id))
    this.props.dispatch(updateFirebaseWithAnswer(this.props.question.id, e.target.id))
  },
  componentWillReceiveProps () {
    console.log(arguments)
  },
  render () {
    let q = this.props.question
    return (
      <div>
        <Image src={q.imageUrl} thumbnail />
        <p>{q.question}</p>
        <form>
          {q.options.map((val, i) => {
            return <FourChoices index={i} key={i} checked={String(q.answer) === String(i)} changeHandler={this.changeRadio} choices={val} />
          })}
        </form>
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

export default connect(mapStateToProps)(Mcq)
