import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
const { object } = React.PropTypes

const OnlyInput = React.createClass({
  propTypes: {
    question: object.isRequired
  },
  render () {
    return (
      <div className='OnlyInput'>
        <p>{this.props.question.question}</p>
        <FormGroup>
          <FormControl type='text' placeholder='Answer' />
        </FormGroup>
      </div>
    )
  }
})

export default OnlyInput
