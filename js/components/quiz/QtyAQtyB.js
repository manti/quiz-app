import React from 'react'
import FourChoices from './FourChoices'
import { Image, Row, Grid, Col } from 'react-bootstrap'
import { updateAnswer } from './actionCreators'
import { connect } from 'react-redux'

const { object, func, string } = React.PropTypes

const QtyAQtyB = React.createClass({
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
        <Grid>
          <Row className='show-grid'>
            <Col md={6} mdPush={3}>
              <Image src={q.imageUrl} thumbnail />
            </Col>
          </Row>
          <Row className='show-grid'>
            <Col md={12}>
              <p dangerouslySetInnerHTML={this.createMarkup(q.question)} />
            </Col>
          </Row>
          <Row className='show-grid'>
            <Col md={6}>
              <div style={{textDecoration: 'underline', fontWeight: 'bold'}}>Quantity A</div>
              <div>{this.props.question.quantityA}</div>
            </Col>
            <Col md={6}>
              <div style={{textDecoration: 'underline', fontWeight: 'bold'}}>Quantity B</div>
              <div>{this.props.question.quantityB}</div>
            </Col>
          </Row>
          <br />
          <br />
          <Row className='show-grid'>
            <Col md={6} mdPush={3}>
              <form>
                {q.options.map((val, i) => {
                  return <FourChoices isReview={this.props.isReview} index={i} key={i} checked={String(q.answer) === String(i)} isSolution={String(q.solution) === String(i)} changeHandler={this.changeRadio} choices={val} />
                })}
              </form>
            </Col>
          </Row>
        </Grid>
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

export default connect(mapStateToProps)(QtyAQtyB)
