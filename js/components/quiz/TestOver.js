import React from 'react'
import {Link} from 'react-router'
const {object} = React.PropTypes

const TestOver = React.createClass({
  propTypes: {
    params: object
  },
  render () {
    console.log(this.props)
    return (
      <div>
        <h2 className='i-am-center'>{`Test-${this.props.params.id}`} is over</h2>
        <h4 className='i-am-center'>
          <Link to='/tests'>Go back to tests</Link>
        </h4>
        <h4 className='i-am-center'>
          <Link to={`tests/review/${this.props.params.id}`}>Start review</Link>
        </h4>
      </div>
    )
  }
})

export default TestOver
