import React from 'react'
import { Grid } from 'react-bootstrap'
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
