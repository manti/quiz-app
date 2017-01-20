import React from 'react'
import Item from './Item'
import './scss/itemlist.scss'

const ItemsList = React.createClass({
  render () {
    return (
      <div className='ItemsList'>
        <table width='100%'>
          <thead>
            <tr>
              <th width='5%'>#</th>
              <th width='30%'>Department</th>
              <th width='30%'>Department Type</th>
              <th width='25%'>Allowed Gender</th>
            </tr>
          </thead>
          <tbody>
            <Item />
          </tbody>
        </table>
      </div>
    )
  }
})

export default ItemsList
