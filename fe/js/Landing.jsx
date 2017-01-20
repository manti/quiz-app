const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('./Store')
import GoogleLogin from 'react-google-login'

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  responseGoogle (response) {
    console.log(response)
  }
// client_secret = 'N9hqKhtiuyAkeQ15Dv285kNu'
  render () {
    return (
      <div className="container">
        <div className="vertical-center">
          <h2>App title</h2>
          <Link to='/search' id="googleButton" className='browse-all btn btn-primary'> Login </Link>
          <GoogleLogin
            clientId="580809900392-7fqsomvqosql7g98e2fg3u27lnh5725s.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
