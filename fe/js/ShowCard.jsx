const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
  <li className="list-group-item">
    <Link to={`/details/${props.imdbID}`}>
      <h5 className='show-card-title'>{props.title}</h5>
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
