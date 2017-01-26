import React from 'react'
const { string, number } = React.PropTypes

const FourChoices = React.createClass({
  propTypes: {
    choices: string.isRequired,
    index: number.isRequired
  },
  render () {
    return (
      <div>
        <input type='radio' name='group1' id={this.props.index} value={this.props.choices} /> &nbsp;
        <label htmlFor={this.props.index}> {this.props.choices}</label>
      </div>
    )
  }
})

export default FourChoices
