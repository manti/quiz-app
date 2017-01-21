import React from 'react'
import TestCard from './TestCard'

const TestsList = React.createClass({
  render () {
    return (
      <div className='TestsList'>
        <TestCard title='Test 1' testId='1t' />
        <TestCard title='Test 2' testId='1t' />
        <TestCard title='Test 3' testId='1t' />
      </div>
    )
  }
})

export default TestsList
