import React from 'react'
import './scss/masterlist.scss'
import TestCard from './TestCard'

const TestsList = React.createClass({
  render () {
    return (
      <div className='TestsList'>
        <TestCard title='Test 1' />
        <TestCard title='Test 2' />
        <TestCard title='Test 3' />
      </div>
    )
  }
})

export default TestsList
