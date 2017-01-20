import React from 'react'
import MasterSearch from './MasterSearch'
import ItemsList from './ItemsList'
import Pagination from './Pagination'
import './scss/masterlist.scss'
import { Link } from 'react-router'

const MasterList = React.createClass({
  render () {
    return (
      <div className='MasterList'>
        DepartmentMasterList page
        <MasterSearch />
        <Pagination />
        <ItemsList />
        <Link to='/add'>Add New Department</Link>
      </div>
    )
  }
})

export default MasterList
