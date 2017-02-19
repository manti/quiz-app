import React from 'react'
import BlankOptions from './BlankOptions'
const { object, string } = React.PropTypes
import { Col } from 'react-bootstrap'

const Blank = React.createClass({
  propTypes: {
    question: object.isRequired,
    isReview: string
  },
  render () {
    let q = this.props.question
    let options = this.props.question.options
    let blankOptions = Object.keys(this.props.question.options)
    return (
      <div className='Blank'>
        <p>{q.question}</p>
        {blankOptions.map((val, key) => {
          <div>Blank {key}</div>
          return (
            <Col xs={6} md={4} key={key}>
              <BlankOptions isReview={this.props.isReview} key={key} blank={key} question={q} options={options[val]} />
            </Col>
          )
        })}
      </div>
    )
  }
})

export default Blank
