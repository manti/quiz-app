import React from 'react'
import { Col, Button } from 'react-bootstrap'
import {hashHistory} from 'react-router'

class TestInfo extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    hashHistory.push(`/instructions`)
  }
  render () {
    return (
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
          </Col>
        </div>
        <h3><b>General Test Information</b></h3>
        <br />
        <h4><b>Timing and Break</b></h4>
        <br />
        <p>There will be a 10-minute break following section 3 of the test. At that time notify the administrator if you wish to leave the room. Between sections you may wish to leave the room. Between sections you may pause for 60 seconds if you choose.</p>
        <p>If you wish to leave your seat at any other time during the test, please raise your hand - section timing will not stop for this type of break.</p>
        <br />
        <h4><b>Test Information</b></h4>
        <br />
        <p>If you have a concern about the wording of a test question, please note the section number and the question number on your scratch paper and continue the test. Report your concern to the administrator after you complete the test.</p>
        <p>No credit will be given for any responses marked on scratch paper. Use the scratch paper to work out your answers. All scratch paper must be turned in to the administrator at the end of the testing session.</p>
        <p>In each of the Verbal Reasoning and Quantitative Reasoning sections, you may skip any question and return to that question later. You should answer as many questions as possible during each section and manage your time this in mind. Use the <b>Review</b> button at any time during the section to see which questions you have answered and which questions you have skipped.</p>
        <br />
        <h4><b>Repeater Policy</b></h4>
        <br />
        <p>You may take the General Test (computer-based and/or paper-based) only once per 21-day period, and no more than 5 times within any 12-month period. This applies even if you canceled your scores on the test taken previously. If you test more than once per 21-day period, or more than five times in a 12-month period, your new scores will not be reported, your test fee will be forfeited, and you may be banned from future testing.</p>
        <p>Click <b>Continue</b> to proceed</p>
      </div>
    )
  }
}

export default TestInfo
