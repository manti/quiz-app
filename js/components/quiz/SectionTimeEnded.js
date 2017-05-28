import React from 'react'
import { Col, Button } from 'react-bootstrap'
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
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
          </Col>
        </div>
        <br />
        <p>Your time for this section has ended. </p>
        <p>Please click Continue to proceed</p>
      </div>
    )
  }
}

export default SectionTimeEnded
