import React from 'react'
import {Link} from 'react-router'
const {object} = React.PropTypes

const TestOver = React.createClass({
  propTypes: {
    params: object
  },
  render () {
    return (
      <div>
        <h2 className='i-am-center'> Congratulations! Your {`Test-${this.props.params.id}`} is Now Complete </h2>
        <h5 className='i-am-center'>
          On the real test, you will be given a choice to either report or cancel the scores. The window will appear as:
           You now have the option to either report or cancel your scores from this testing session.
          If you choose to report your scores from this testing session, they will become a part of your cumulative record.
          If you choose to cancel your scores from this testing session, SCORES WILL NOT BE REPORTED TO ANY SECTION OF THIS TEST.
          Click Report Scores or Cancel Scores now.
          Click Continue to proceed.
        </h5>
        <h4 className='i-am-center'>
          <Link to='/tests'>Continue</Link>
        </h4>
        <h4 className='i-am-center'>
          <Link to={`tests/review/${this.props.params.id}`}>Start review</Link>
        </h4>
      </div>
    )
  }
})

export default TestOver
