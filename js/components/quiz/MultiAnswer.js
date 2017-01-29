import React from 'react'
import { Checkbox } from 'react-bootstrap'
const { object } = React.PropTypes

const MultiAnswer = React.createClass({
  propTypes: {
    question: object.isRequired
  },
  render () {
    return (
      <div>
        {this.props.question.question}
        <form>
          {this.props.question.options.map((val, key) => {
            return <Checkbox key={key}> {val} </Checkbox>
          })}
        </form>
      </div>
    )
  }
})

export default MultiAnswer
