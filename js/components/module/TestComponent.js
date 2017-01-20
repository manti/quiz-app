import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const TestComponent = React.createClass({
  render () {
    axios.get('instahms/master/RegionMaster/list.json')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    return (
      <div>
        <h2>Hello from TestComponent</h2>
        <Link to='/another'>Another component</Link>
      </div>
    )
  }
})

export default TestComponent
