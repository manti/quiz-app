import React from 'react'

const { string } = React.PropTypes

const QuestionInstructions = React.createClass({
  propTypes: {
    instructions: string
  },
  render () {
    return (
      <div>{this.props.instructions}</div>
    )
  }
})

export default QuestionInstructions
