import React from 'react'
import { Col, Button } from 'react-bootstrap'
import {hashHistory} from 'react-router'

class TestTimingAndBreak extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    hashHistory.push(`/regulations`)
  }

  render () {
    return (
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
          </Col>
        </div>
        <div >
          <h2 className='i-am-center'>Test Timing And Break</h2>
          <p className='i-am-center'>There will be a 10-minute break following section 3 of the test. Between sections you may pause for 60 seconds, if you choose.</p>
          <h4 className='i-am-center'>Click Continue to proceed.</h4>
        </div>
      </div>
    )
  }
}

export default TestTimingAndBreak
