import React from 'react'
import FourChoices from './FourChoices'
import { Image } from 'react-bootstrap'

const { object } = React.PropTypes

const Mcq = React.createClass({
  propTypes: {
    question: object
  },

  render () {
    let q = this.props.question
    return (
      <div>
        <div>{q.type}</div>
        <Image src={q.imageUrl} thumbnail />
        <p>{q.question}</p>
        <form>
          {q.options.map((val, i) => {
            return <FourChoices index={i} key={i} choices={val} />
          })}
        </form>
      </div>
    )
  }
})

export default Mcq
