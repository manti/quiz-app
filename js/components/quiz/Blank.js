import React from 'react'
import BlankOptions from './BlankOptions'
const { object } = React.PropTypes

const Blank = React.createClass({
  propTypes: {
    question: object.isRequired
  },
  render () {
    let q = this.props.question
    let options = this.props.question.options
    let blankOptions = Object.keys(this.props.question.options)
    return (
      <div className='Blank'>
        <p>{q.question}</p>
        {blankOptions.map((val, key) => {
          return <BlankOptions key={key} question={q} options={options[val]} />
        })}
      </div>
    )
  }
})

export default Blank
