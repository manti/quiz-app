import React from 'react'
import './scss/pagination.scss'

const Pagination = React.createClass({
  render () {
    return (
      <div className='Pagination'>
        <div className='total-records'>33 records found</div>
        <div className='prev'>&lt; Prev</div>
        <div className='page-numbers'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className='next'>Next &gt;</div>
      </div>
    )
  }
})

export default Pagination
