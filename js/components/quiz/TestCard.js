const React = require('react')
const { ButtonGroup, Button } = require('react-bootstrap')

const TestCard = (props) => (
  <li className='list-group-item'>
    <span className='lead'>{props.title}</span>
    <ButtonGroup bsClass='pull-right'>
      <Button bsStyle='link'>Take test</Button>
      <Button bsStyle='link'>View report card</Button>
      <Button bsStyle='link'>Solutions</Button>
    </ButtonGroup>
  </li>
)

const { string } = React.PropTypes

TestCard.propTypes = {
  title: string.isRequired
}

module.exports = TestCard
