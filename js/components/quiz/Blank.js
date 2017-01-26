import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
const { object, number } = React.PropTypes

const Blank = React.createClass({
  propTypes: {
    question: object.isRequired,
    blanks: number.isRequired
  },
  handleClick (e) {
    e.preventDefault()
  },
  render () {
    return (
      <div className='Blank'>
        <p>{this.props.question.question}</p>
        <ListGroup>
          <ListGroupItem href='#' onClick={this.handleClick}>Link 1</ListGroupItem>
          <ListGroupItem href='#' onClick={this.handleClick}>Link 2</ListGroupItem>
          <ListGroupItem href='#' onClick={this.handleClick}>Link 3</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
})

export default Blank
