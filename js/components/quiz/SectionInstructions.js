import React from 'react'
import { connect } from 'react-redux'
const {object, func, string, bool} = React.PropTypes

class SectionInstructions extends React.Component {
  render () {
    const {tests, sectionId, testId} = this.props
    const test = tests[testId]
    const currentSection = test.sections[sectionId]
    const questionsCount = currentSection.questions.filter(val => val !== undefined).length
    return (
      <div>
        <h1>{currentSection.title}</h1>
        <h2>{questionsCount} questions</h2>
        <h3>{currentSection.duration/60000} minutes</h3>
        <p>{currentSection.instructions}</p>
      </div>
    )
  }
}

SectionInstructions.propTypes = {
  tests: object,
  dispatch: func,
  sectionId: string,
  testId: string,
}

const mapStateToProps = (state) => {
  return {
    testId: state.testId,
    sectionId: state.sectionId,
    tests: state.tests
  }
}

export default connect(mapStateToProps)(SectionInstructions)
