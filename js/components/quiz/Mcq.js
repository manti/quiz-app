import React from 'react'
import FourChoices from './FourChoices'
import { Image } from 'react-bootstrap'
import { updateAnswer } from './actionCreators'
import { connect } from 'react-redux'

const { object, func, string } = React.PropTypes

const Mcq = React.createClass({
  propTypes: {
    question: object.isRequired,
    dispatch: func.isRequired,
    params: object,
    isReview: string
  },
  changeRadio (e) {
    this.props.question.answer = e.target.id
    if (!this.props.isReview) {
      this.props.dispatch(updateAnswer(e.target.id))
    }
    // this.props.dispatch(updateFirebaseWithAnswer(this.props.question.id, e.target.id))
    this.forceUpdate()
  },
  render () {
    let q = this.props.question
    return (
      <div>
        <Image src={q.imageUrl} thumbnail />
        <p>{q.question}</p>
        <form>
          {q.options.map((val, i) => {
            return <FourChoices isReview={this.props.isReview} index={i} key={i} checked={String(q.answer) === String(i)} isSolution={String(q.solution) === String(i)} changeHandler={this.changeRadio} choices={val} />
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
