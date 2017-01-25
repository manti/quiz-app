import React from 'react'
import { Navbar } from 'react-bootstrap'
import BackAndForth from './BackAndForth'
import { Link } from 'react-router'
const { object } = React.PropTypes

const TestsLayout = React.createClass({
  propTypes: {
    params: object,
    children: object.isRequired
  },
  render () {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/' className='brand-link'>
                App
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <BackAndForth arg={this.props.params} />
        {this.props.children}
      </div>
    )
  }
})

export default TestsLayout