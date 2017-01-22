import React from 'react'
const { string } = React.PropTypes

const FourChoices = React.createClass({
  propTypes: {
    choices: string.isRequired
  },
  render () {
    console.log(this.props.choices)
    return (
      <div>
        <input type='radio' /> {this.props.choices}
      </div>
    )
  }
})

export default FourChoices
