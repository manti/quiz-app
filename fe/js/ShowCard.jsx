const React = require('react')
const { Link } = require('react-router')
const {ButtonGroup, Button} = require('react-bootstrap')

const ShowCard = (props) => (
  <li className="list-group-item">
    <Link to={`/details/${props.imdbID}`}>
      <h5>{props.title}</h5>
      <ButtonGroup>
        <Button>Take test</Button>
        <Button>View report card</Button>
        <Button>Solutions</Button>
      </ButtonGroup>
    </Link>
  </li>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired,
  imdbID: string.isRequired
}

module.exports = ShowCard
