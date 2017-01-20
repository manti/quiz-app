const React = require('react')
const Header = require('./Header')
const axios = require('axios')
const { connector } = require('./Store')
const TestPaper = require('./TestPaper')

class Details extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => {
        console.error('axios error', error)
      })
  }
  assignShow (id) {
    const showArray = this.props.tests.filter((show) => show.imdbID === id)
    return showArray[0]
  }
  render () {
    const {title} = this.assignShow(this.props.params.id) || 'Ttit'
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div className='container'>
        <Header />
        <div>
          <h1>{title}</h1>
          {rating}
        </div>
        <TestPaper />
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

Details.propTypes = {
  params: object,
  tests: arrayOf(object).isRequired
}

module.exports = connector(Details)
