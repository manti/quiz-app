import React from 'react'
import test from '../../test.json'
import { Image } from 'react-bootstrap'
import FourChoices from './FourChoices'

const QuestionHolder = React.createClass({

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
              return <FourChoices index={i} key={i} choices={val} />
            })}
          </form>
        </div>
      </div>
    )
  }
})

export default QuestionHolder
