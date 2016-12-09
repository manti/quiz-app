const React = require('react')
const TestCard = require('./TestCard')
const Header = require('./Header')
const { object, string, arrayOf } = React.PropTypes
const { connector } = require('./Store')

const Search = React.createClass({
  propTypes: {
    tests: arrayOf(object),
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <ul className='list-group'>
          {this.props.tests
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <TestCard {...show} key={show.imdbID} />
          ))}
        </ul>
      </div>
    )
  }
})

module.exports = connector(Search)
