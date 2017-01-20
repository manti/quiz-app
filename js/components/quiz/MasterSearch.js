import React from 'react'
import './scss/mastersearch.scss'

const MasterSearch = React.createClass({
  render () {
    return (
      <div className='MasterSearch'>
        <div className='MasterSearch__filters'>
          <div className='MasterSearch__title'>Search</div>
          <div className='MasterSearch__grid'>
            <div className='MasterSearch__input'>
              <label>Department Name</label> <br />
              <input type='text' placeholder='Search' />
            </div>
            <div className='MasterSearch__status'>
              Status: <br />
              <label><input type='checkbox' value='all' /> All </label> <br />
              <label><input type='checkbox' value='active' /> Active </label> <br />
              <label><input type='checkbox' value='inactive' /> Inactive </label>
            </div>
            <div className='MasterSearch__actions'>
              <button>Search</button>
              <span>Clear</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
})

export default MasterSearch
