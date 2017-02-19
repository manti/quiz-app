import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'

const {object} = React.PropTypes

const ReviewTest = React.createClass({
  propTypes: {
    params: object.isRequired
  },
  render () {
    return (
      <div>
        <Link className='i-am-center' to={`/tests/review/${this.props.params.id}/1/1`}>
          <Button bsStyle='primary'>Start Test-{this.props.params.id} review</Button>
        </Link>
      </div>
    )
  }
})

export default ReviewTest
