import React from 'react'
import {Link} from 'react-router'

const NoMatch = React.createClass({
  render () {
    return (
      <div>
        <h1 className='i-am-center'>Page not found</h1>
        <Link to='/tests' className='i-am-center'>Go back to tests</Link>
      </div>
    )
  }
})

export default NoMatch
