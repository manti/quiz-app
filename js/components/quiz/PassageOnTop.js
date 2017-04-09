import React from 'react'
const { object, string } = React.PropTypes
import { Row } from 'react-bootstrap'
import Mcq from './Mcq'

const PassageOnTop = React.createClass({
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
          <div dangerouslySetInnerHTML={this.createMarkup(this.props.question.passage)} />
        </Row>
        <Row>
          <Mcq isReview={this.props.isReview} question={this.props.question} />
        </Row>
      </div>
    )
  }
})

export default PassageOnTop
