import React from 'react'
import { Col, Button } from 'react-bootstrap'
import {hashHistory} from 'react-router'
const { object } = require('react').PropTypes

class CopyRight extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    hashHistory.push(`/tests/${this.props.params.id}`)
  }
  render () {
    return (
      <div>
        <div>
          <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
            <Col xs={2} md={1}>
              <Button onClick={this.onContinueClick}>Continue</Button>
            </Col>
          </div>
        </div>
        <div style={{maxWidth: '70%', marginLeft: '15%'}}>
          <h4 className='text-center' style={{fontWeight: '300'}}>
            GREOnline.in provides a comprehensive test environment to aptly recognize your potential and increase your testing skills. The tests are in accordance with the new Revised GRE® General Test rules.
          </h4>
          <h4 className='text-center' style={{fontWeight: '300'}}>
            Copyright © by GREOnline.in. All the questions of all tests are copyrighted property of GREOnline.in. Unauthorized reproduction in part or in whole of these tests is prohibited.
          </h4>
          <h4 className='text-center' style={{fontWeight: '300'}}>
            I understand that by clicking <b>Continue</b> button above, I am agreeing to not reproduce, use, or disclose any of the confidential material of the tests by any means, verbal, electronic, or hardcopy, to anyone in the course of taking the test.
          </h4>
          <h4 className='text-center' style={{fontWeight: '300'}}>
            Graduate Record Examination (GRE)® is a registered trademark of the Educational Testing Service (ETS). GREOnline.in is in no way affiliated with or endorsed by ETS.
          </h4>
        </div>
      </div>
    )
  }
}

CopyRight.propTypes = {
  params: object
}
export default CopyRight
