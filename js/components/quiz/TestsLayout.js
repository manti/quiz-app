import React from 'react'
import { Navbar, Grid } from 'react-bootstrap'
import { Link } from 'react-router'
const { object } = React.PropTypes

const TestsLayout = React.createClass({
  propTypes: {
    params: object,
    children: object.isRequired
  },
  render () {
    return (
      <Grid>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/' className='brand-link'>
                GREOnline.in
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        {this.props.children}
      </Grid>
    )
  }
})

export default TestsLayout
