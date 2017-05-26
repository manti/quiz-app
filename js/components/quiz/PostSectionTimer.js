import React from 'react'
import { Col } from 'react-bootstrap'

class PostSectionTimer extends React.Component {
  render () {
    return (
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <div>Continue</div>
          </Col>
        </div>
        <br />
        <p>There will be a 60 second pause unless you wish to continue immediately.</p>
        <p>The test will automatically continue when the pause time expires.</p>
        <p>If you do not wish to pause, click Continue.</p>
      </div>
    )
  }
}

export default PostSectionTimer
