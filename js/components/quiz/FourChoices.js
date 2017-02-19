import React from 'react'
import {Label} from 'react-bootstrap'
const { string, number, bool, func } = React.PropTypes

const FourChoices = React.createClass({
  propTypes: {
    choices: string.isRequired,
    index: number.isRequired,
    checked: bool,
    changeHandler: func,
    isReview: string,
    isSolution: bool
  },
  render () {
    let labelStyle = 'default'
    if (this.props.checked) {
      labelStyle = 'danger'
    }
    if (Boolean(this.props.isSolution)) {
      labelStyle = 'success'
    }
    return (
      <div>
        <input type='radio' disabled={this.props.isReview} name='group1' id={this.props.index} checked={this.props.checked} value={this.props.choices} onChange={this.props.changeHandler} /> &nbsp;
        <Label bsStyle={labelStyle} htmlFor={this.props.index}> {this.props.choices}</Label>
      </div>
    )
  }
})

export default FourChoices
