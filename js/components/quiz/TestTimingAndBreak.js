import React from 'react'
import { Col, Row } from 'react-bootstrap'
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
        <Row style={{backgroundColor: '#a5c5ef', padding: '15px'}}>
          <Col md={4}>
            <div style={{fontSize: '16px', fontWeight: 'bold'}}>
              GREOnline®
            </div>
            <div>
              [[Logo]]
            </div>
          </Col>
          <Col xs={2} md={1} className='button-bg-tools pull-right' onClick={this.onContinueClick}>
            <div style={{textAlign: 'center', position: 'relative', top: '10px'}}>
              <div>Continue</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdPush={4}>
            <h2 className='i-am-center'>Test Timing And Break</h2>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdPush={3}>
            <div >
              <p className='i-am-center'>There will be a 10-minute break following section 3 of the test. Between sections you may pause for 60 seconds, if you choose.</p>

            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdPush={4}>
            <h4 className='i-am-center'>Click Continue to proceed.</h4>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TestTimingAndBreak
