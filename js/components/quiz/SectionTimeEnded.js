import React from 'react'
import { Col } from 'react-bootstrap'

class SectionTimeEnded extends React.Component {
  render () {
    return (
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <div>Continue</div>
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
