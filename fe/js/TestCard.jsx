const React = require('react')
const { Link } = require('react-router')
const { ButtonGroup, Button } = require('react-bootstrap')

const TestCard = (props) => (
  <li className="list-group-item">
    <span className='lead'>{props.title}</span>
    <ButtonGroup bsClass="pull-right">
      <Link to={`/details/${props.imdbID}`}>
        <Button bsStyle="link">Take test</Button>
      </Link>
      <Button bsStyle="link">View report card</Button>
      <Button bsStyle="link">Solutions</Button>
    </ButtonGroup>
  </li>
)

const { string } = React.PropTypes

TestCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired,
  imdbID: string.isRequired
}

module.exports = TestCard
