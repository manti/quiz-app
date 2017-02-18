import React from 'react'
import { Navbar, Grid, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
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
        <Col xs={16} md={11}>
          {this.props.children}
        </Col>
        <Col xs={2} md={1}>
          <Sidebar arg={this.props.params} />
        </Col>
      </Grid>
    )
  }
})

export default TestsLayout
