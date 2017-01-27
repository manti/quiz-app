import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
const { array } = React.PropTypes

const BlankOptions = React.createClass({
  propTypes: {
    options: array.isRequired
  },
  handleClick (e) {
    e.preventDefault()
  },
  render () {
    console.log()
    return (
      <ListGroup>
        {this.props.options.map((val, i) => {
          return <ListGroupItem href='#' key={i} onClick={this.handleClick}>{val}</ListGroupItem>
        })}
      </ListGroup>
    )
  }
})

export default BlankOptions
