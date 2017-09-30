import React from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import {hashHistory} from 'react-router'
import {setTestStatus} from './actionCreators'
import {connect} from 'react-redux'
const { string, array, func } = require('react').PropTypes

class SectionBreak extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    let {testId, sectionId, tests} = this.props
    if (tests[testId].sections[Number(sectionId) + 1]) {
      this.props.dispatch(setTestStatus(true, testId, Number(sectionId) + 1))
      hashHistory.push(`/instructions`)
    } else {
      hashHistory.push(`/tests/${testId}/over`)
      console.log('No more sections')
    }
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
          <Col>
            <br />
            <p>There will be a 60 second pause unless you wish to continue immediately.</p>
            <p>The test will automatically continue when the pause time expires.</p>
            <p>If you do not wish to pause, click Continue.</p>
          </Col>
        </Row>
      </div>
    )
  }
}

SectionBreak.propTypes = {
  tests: array,
  dispatch: func,
  sectionId: string.isRequired,
  testId: string.isRequired
}

const mapStateToProps = (state) => {
  return {
    tests: state.tests,
    sectionId: state.sectionId,
    testId: state.testId
  }
}

export default connect(mapStateToProps)(SectionBreak)
