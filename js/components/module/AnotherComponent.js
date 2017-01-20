import React from 'react'
import { Link } from 'react-router'

const AnotherComponent = React.createClass({
  render () {
    return (
      <div>
        <h3>Hello from another components</h3>
        <Link to='/'>Go back</Link>
      </div>
    )
  }
})

export default AnotherComponent
