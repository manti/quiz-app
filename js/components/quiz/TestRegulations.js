import React from 'react'
import { Col, Button } from 'react-bootstrap'
import {hashHistory} from 'react-router'

class TestRegulations extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    hashHistory.push(`/testInfo`)
  }
  render () {
    return (
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
          </Col>
        </div>
        <div>
          <h3><b>Test Center Regulations</b></h3>
          <p>You should have nothing on your computer table except your identification, pen or pencil, and provided scratch paper. Watch alarms must be turned off. You may not eat, drink, or use tobacco during the test. The official time will be kept by the computer. The administrator is authorized to dismiss you from the test session if you fail to follow directions or for other actions such as, but not limited to, the following. ETS will be notified of the action taken.</p>
          <p>-attempting to take the test for someone else or having someone else take the test for you</p>
          <p>-failing to provide acceptable identification</p>
          <p>-obtaining improper access to the test, a part of the test, or information abut the test</p>
          <p>-using a telephone or using and/or having a cell phone, PFA, or BlackBerry ® device in your possession during the test session or during breaks</p>
          <p>-using any aids in connection with the test, such as mechanical pencils , pens, pagers, beepers, personal calculations, watch calculators, books, pamphlets, notes, unauthorized scratch paper, rulers, highlighter pens, stereos or radios with headphones, telephones, cell phones, watch alarms (including those with flashing lights or alarm sounds), stop watches, dictionaries, translators, and any hand-held electronic or photographic devices</p>
          <p>-creating a disturbance</p>
          <p>-attempting to give or receive assistance: communication in any from is not permitted during the test administration, and discussion or sharing of test content or answers during and after the test administration is prohibited</p>
          <p>-removing or attempting ro remove test content from the test center under no circumstances may test content or any part of the test content be removed, reproduced and/or disclosed by any means (e.g., hard copy, verbally, electronically) to any person or entity</p>
          <p>-tampering with a computer</p>
          <p>-attempting to remove scratch paper from the testing room or using scratch paper during untimed sections of the test or during breaks</p>
          <p>-bringing a weapon or firearm into the test center</p>
          <p>-bringing food, drinks, or tobacco into the testing room</p>
          <p>-leaving the test center vicinity during the test session or during breaks</p>
          <p>-leaving the testing room without permission</p>
          <p>-taking excessive or extended unscheduled breaks during the test session: test center administrators are required to strictly monitor unscheduled breaks and report test takers who take excessive or extended breaks</p>
          <p>-failing to follow any of the test administrator, or specified in any test materials</p>
          <p>ETS reserves the right to take all action – including, but not limited to, barring you from future testing and/or canceling your scores – for failure to comply with test administration regulations or the test administrator’s directions. If your scores are canceled, they will not be reported, and your fees will not be refunded.</p>
          <p>Click <b>Continue</b> to proceed</p>
        </div>
      </div>
    )
  }
}

export default TestRegulations
