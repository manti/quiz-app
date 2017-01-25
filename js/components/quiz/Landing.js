import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='container'>
        <Link to='/tests' className='browse-all btn btn-primary'>Login</Link>
      </div>
    )
  }
})

export default Landing
