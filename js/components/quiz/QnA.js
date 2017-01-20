import React from 'react'
import { Match, Link } from 'react-router'
import BackAndForth from './BackAndForth'

const QnA = React.createClass({
  render () {
    return (
      <div>
        <Link to='/test/12'>Clikc</Link>
        <div>Some text here</div>

        <Match pattern='/test/12' component={BackAndForth} />
      </div>
    )
  }
})

export default QnA
