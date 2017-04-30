import React from 'react'
import CalculatorHelp from './CalculatorHelp'
import Review from './Review'
const { object } = React.PropTypes

const Sidebar = React.createClass({
  propTypes: {
    params: object,
    arg: object.isRequired
  },
  render () {
    return (
      <div>
        <CalculatorHelp arg={this.props.arg} />
        <Review arg={this.props.arg} />
      </div>
    )
  }
})

export default Sidebar
