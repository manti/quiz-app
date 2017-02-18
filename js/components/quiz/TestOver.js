import React from 'react'

const {object} = React.PropTypes

const TestOver = React.createClass({
  propTypes: {
    params: object
  },
  render () {
    console.log(this.props)
    return (
      <h2>{`Test-${this.props.params.id}`} is over</h2>
    )
  }
})

export default TestOver
