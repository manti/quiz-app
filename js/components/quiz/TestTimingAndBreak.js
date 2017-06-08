import React from 'react'
import { Col, Button } from 'react-bootstrap'
import {hashHistory} from 'react-router'

class TestTimingAndBreak extends React.Component {
  constructor(props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    let {testId, sectionId, tests} = this.props
    if (tests[testId].sections[Number(sectionId) + 1]) {
      hashHistory.push(`/tests/${testId}/${Number(sectionId) + 1}/1`)
    } else {
      hashHistory.push(`/tests/${testId}/over`)
      console.log('No more sections')
    }
  }
  
  render() {
    return(
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
          </Col>
        </div>
        <h2>TestTimingAndBreak</h2>
        <p>There will be a 10-minute break following section 3 of the test. Between sections you may pause for 60 seconds, if you choose.</p>
        <h4>Click Continue to proceed.</h4>
      </div>
    )
  }
}

export default TestTimingAndBreak
