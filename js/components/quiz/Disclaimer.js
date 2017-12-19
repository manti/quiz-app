import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'

const Disclaimer = () => {
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
            <Link className='i-am-center' to={`/testTimingAndBreak`}>
              <div>Start Test</div>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h6>These tests will help you in honing your skills and quantifies your expertise. The scores from GREOnline.in tests does not guarantee you will get the same range of scores in original GRE General Test</h6>
        </Col>
      </Row>
    </div>
    )
}

export default Disclaimer
