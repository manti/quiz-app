import React from 'react'
import FourChoices from './FourChoices'
import { Image, Row, Col } from 'react-bootstrap'
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
  createMarkup (htm) {
    return {__html: htm}
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
        <Row>
          <Col md={6} mdPush={3}>
           { q.imageUrl ? (<Image src={q.imageUrl} thumbnail />) : (null) }
          </Col>
        </Row>
        <Row>
          <Col>
            <p dangerouslySetInnerHTML={this.createMarkup(q.question)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <form>
              {q.options.map((val, i) => {
                return <FourChoices isReview={this.props.isReview} index={i} key={i} checked={String(q.answer) === String(i)} isSolution={String(q.solution) === String(i)} changeHandler={this.changeRadio} choices={val} />
              })}
            </form>
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

export default connect(mapStateToProps)(Mcq)
