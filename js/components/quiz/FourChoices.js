import React from 'react'
const { string, number, bool, func } = React.PropTypes

const FourChoices = React.createClass({
  propTypes: {
    choices: string.isRequired,
    index: number.isRequired,
    checked: bool,
    changeHandler: func,
    isReview: string
  },
  render () {
    return (
      <div>
        <input type='radio' disabled={this.props.isReview} name='group1' id={this.props.index} checked={this.props.checked} value={this.props.choices} onChange={this.props.changeHandler} /> &nbsp;
        <label htmlFor={this.props.index}> {this.props.choices}</label>
      </div>
    )
  }
})

export default FourChoices
