import React from 'react'
import { Link } from 'react-router'
import './scss/DepartmentCRUD.scss'

const DepartmentCRUD = React.createClass({
  render () {
    return (
      <div className='DepartmentCRUD'>
        <div className='department-form'>
          <div>
            <label> Department: &nbsp; </label>
            <input type='text' />
          </div>
          <div>
            <label> Department Type: &nbsp; </label>
            <select name='department-type'>
              <option disabled select value>-- Select --</option>
              <option value='Dental'>Dental</option>
              <option value='Others'>Others</option>
            </select>
          </div>
          <div>
            <label> Status: &nbsp; </label>
            <select name='department-status'>
              <option value='a'>Active</option>
              <option value='i'>Inactive</option>
            </select>
          </div>
          <div>
            <label> Allowed Gender: &nbsp; </label>
            <select name='department-gender'>
              <option value='all'>All</option>
              <option value='m'>Male</option>
              <option value='f'>Female</option>
            </select>
          </div>
          <div>
            <label> Cost Center Code: &nbsp; </label>
            <input type='text' />
          </div>
        </div>
        <button>Save</button> | &nbsp;
        <Link to='/list'>Departments list</Link>
      </div>
    )
  }
})

export default DepartmentCRUD
