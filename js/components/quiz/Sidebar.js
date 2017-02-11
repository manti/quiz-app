import React from 'react'
import SectionTimer from './SectionTimer'
import CalculatorHelp from './CalculatorHelp'
const { object } = React.PropTypes

const Sidebar = React.createClass({
  propTypes: {
    params: object,
    arg: object.isRequired
  },
  render () {
    return(
      <div>
        <SectionTimer arg={this.props.arg} />
        <CalculatorHelp arg={this.props.arg} />
      </div>
    )
  }
})

export default Sidebar
