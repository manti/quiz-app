import React from 'react'

const ReviewTest = React.createClass({
  render () {
    return (
      <div>Reviewing test {this.props.params.id}</div>
    )
  }
})

export default ReviewTest
