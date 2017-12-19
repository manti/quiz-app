import React from 'react'
import { connect } from 'react-redux'
const {object, func, string} = React.PropTypes
import { Col, Row } from 'react-bootstrap'
import {hashHistory} from 'react-router'

class SectionInstructions extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }
  onContinueClick (e) {
    let {testId, sectionId, tests} = this.props
    if (tests[testId].sections[Number(sectionId)]) {
      hashHistory.push(`/tests/${testId}/${Number(sectionId)}/1`)
    } else {
      hashHistory.push(`/tests/${testId}/over`)
      console.log('No more sections')
    }
  }

  render () {
    // TODO: Use route params to get the current details
    // TODO: Wire it with back button & continue button of Section break
    const {tests, sectionId, testId} = this.props
    const test = tests[testId]
    const currentSection = test.sections[sectionId]
    const questionsCount = currentSection.questions.filter(val => val !== undefined).length
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
          <Col xs={2} md={1} className='button-bg-tools pull-right' onClick={this.onContinueClick}>
            <div style={{textAlign: 'center', position: 'relative', top: '10px'}}>
              <div>Exit Section</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdPush={4}>
            <h2 className='i-am-center'>{currentSection.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdPush={4}>
            <h3 className='i-am-center'>{questionsCount} questions</h3>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdPush={4}>
            <h3 className='i-am-center'>{currentSection.duration / 60000} minutes</h3>
            <p className='i-am-center'>{currentSection.instructions}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

SectionInstructions.propTypes = {
  tests: object,
  dispatch: func,
  sectionId: string,
  testId: string
}

const mapStateToProps = (state) => {
  return {
    testId: state.testId,
    sectionId: state.sectionId,
    tests: state.tests
  }
}

export default connect(mapStateToProps)(SectionInstructions)
