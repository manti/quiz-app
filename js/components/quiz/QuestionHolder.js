import React from 'react'
import test from '../../test.json'
import { Image } from 'react-bootstrap'
const { object } = React.PropTypes

const QuestionHolder = React.createClass({
  propTypes: {
    params: object
  },
  render () {
    console.log(test.section1.questions[this.props.params.qId])
    console.log(this.props.params.qid)
    let q = test.section1.questions[this.props.params.qId]
    let options = (
      <div>{Object.keys(q.options[0])}</div>
    )
    return (
      <div>
        <p>Question holder</p>
        <div>
          <Image src={q.imageUrl} width='150px' thumbnail />
          <p>{q.question}</p>
          {options}
        </div>
      </div>
    )
  }
})

export default QuestionHolder
