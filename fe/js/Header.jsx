const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')
const { Navbar } = require('react-bootstrap')
const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <h3>Available tests</h3>
    } else {
      utilSpace = (
        <h4 className='header-back pull-right'>
          <Link to='/search'>
            Back
          </Link>
        </h4>
      )
    }
    return (
      <header className='header'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/' className='brand-link'>
                App title
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)
