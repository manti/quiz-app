import React from 'react'
import { connect } from 'react-redux'
const {object, func, string} = React.PropTypes
import { Col, Button } from 'react-bootstrap'
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
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
          </Col>
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Exit Section</Button>
          </Col>
        </div>
        <h2 className='i-am-center'>{currentSection.title}</h2>
        <h3 className='i-am-center'>{questionsCount} questions</h3>
        <h3 className='i-am-center'>{currentSection.duration / 60000} minutes</h3>
        <p className='i-am-center'>{currentSection.instructions}</p>
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
