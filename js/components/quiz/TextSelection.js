import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Mcq from './Mcq'
const { object, string } = React.PropTypes

const TextSelection = React.createClass({
  createMarkup (htm) {
    return {__html: htm}
  },
  propTypes: {
    isReview: string,
    question: object
  },
  render () {
    let q = this.props.question
    return (
      <div>
        <Row className='show-grid'>
          <Col xs={9} md={6} style={{maxHeight: '80vh', overflow: 'scroll'}}>
            <p dangerouslySetInnerHTML={this.createMarkup(q.passage)} />
          </Col>
          <Col xs={9} md={6}>
            <Mcq isReview={this.props.isReview} question={this.props.question} />
          </Col>
        </Row>
      </div>
    )
  }
})

export default TextSelection
