import React from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import {hashHistory} from 'react-router'

class SectionTimeEnded extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    hashHistory.push(`/sectionBreak`)
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
          <Col md={6} mdPush={5}>
            <br />
            <h4>Your time for this section has ended. </h4>
            <h4>Please click Continue to proceed</h4>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SectionTimeEnded
