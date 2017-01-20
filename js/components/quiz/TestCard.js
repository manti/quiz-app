import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router'

const TestCard = (props) => (
  <li className='list-group-item'>
    <span className='lead'>{props.title}</span>
    <ButtonGroup bsClass='pull-right'>
      <Link to={`/tests/${props.testId}`}>
        <Button bsStyle='link'>Take test</Button>
      </Link>
      <Button bsStyle='link'>View report card</Button>
      <Button bsStyle='link'>Solutions</Button>
    </ButtonGroup>
  </li>
)

const { string } = React.PropTypes

TestCard.propTypes = {
  title: string.isRequired,
  testId: string.isRequired
}

export default TestCard
