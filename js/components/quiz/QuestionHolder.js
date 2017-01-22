import React from 'react'
import test from '../../test.json'
import { Image } from 'react-bootstrap'
import FourChoices from './FourChoices'

const { object } = React.PropTypes

const QuestionHolder = React.createClass({
  propTypes: {
    params: object
  },
  render () {
    console.log(test.section1.questions[this.props.params.qId])
    let q = test.section1.questions[this.props.params.qId]
    return (
      <div>
        <p>Question holder</p>
        <div>
          <Image src={q.imageUrl} width='150px' thumbnail />
          <p>{q.question}</p>
          <form>
            {q.options.map((val, i) => {
              // console.log(val)
              return <FourChoices key={i} choices={val} />
            })}
          </form>
        </div>
      </div>
    )
  }
})

export default QuestionHolder
