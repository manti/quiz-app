import React from 'react'
const { object, string } = React.PropTypes
import { Col, Row } from 'react-bootstrap'
import Mcq from './Mcq'

const Passage = React.createClass({
  propTypes: {
    question: object,
    isReview: string
  },
  createMarkup (htm) {
    return {__html: htm}
  },
  render () {
    return (
      <div className='Passage'>
        <Row className='show-grid'>
          <Col xs={9} md={6} style={{maxHeight: '80vh', overflow: 'scroll'}}>
            <div dangerouslySetInnerHTML={this.createMarkup(this.props.question.passage)} />
          </Col>
          <Col xs={9} md={6}>
            <Mcq isReview={this.props.isReview} question={this.props.question} />
          </Col>
        </Row>
      </div>
    )
  }
})

export default Passage
