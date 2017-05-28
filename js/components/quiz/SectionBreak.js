import React from 'react'
import { Col, Button } from 'react-bootstrap'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
const { string, array } = require('react').PropTypes

class SectionBreak extends React.Component {
  constructor (props) {
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
  render () {
    return (
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
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

SectionBreak.propTypes = {
  tests: array,
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
