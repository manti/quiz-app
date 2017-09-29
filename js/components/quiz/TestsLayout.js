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
        {this.props.children}
      </Grid>
    )
  }
})

export default TestsLayout
