import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <Link to='/tests' className='browse-all btn btn-primary'>Login</Link>
    )
  }
})

export default Landing
