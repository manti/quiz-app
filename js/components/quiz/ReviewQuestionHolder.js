import React from 'react'
import Mcq from './Mcq'
import Passage from './Passage'
import Blank from './Blank'
import OnlyInput from './OnlyInput'
import Fraction from './Fraction'
import MultiAnswer from './MultiAnswer'
import { connect } from 'react-redux'
import TextSelection from './TextSelection'
import { Col } from 'react-bootstrap'
import CurrentTestStatus from './CurrentTestStatus'
import TestTools from './TestTools'
import PassageOnTop from './PassageOnTop'
import { setNextPrevQuestion, fetchTests, setQuizParams } from './actionCreators'

const { object, func, bool, array } = React.PropTypes

const ReviewQuestionHolder = React.createClass({
  propTypes: {
    params: object,
    dispatch: func,
    tests: array,
    fetchingTests: bool
  },
  componentDidMount () {
    if (!this.props.tests.length) {
      this.props.dispatch(fetchTests())
    }
    let {id, sectionId, qId} = this.props.params
    this.props.dispatch(setNextPrevQuestion(id, sectionId, qId))
    this.props.dispatch(setQuizParams(id, sectionId, qId))
  },
  componentWillReceiveProps () {
    let {id, sectionId, qId} = this.props.params
    this.props.dispatch(setNextPrevQuestion(id, sectionId, qId))
    this.props.dispatch(setQuizParams(id, sectionId, qId))
  },
  render () {
    if (this.props.fetchingTests && this.props.tests) {
      return (
        <h3 className='i-am-center'>Fetching tests</h3>
      )
    } else {
      let {id, sectionId, qId} = this.props.params
      let questionComponent
      let test = this.props.tests[id]
      let section = test.sections[sectionId]
      const questionsCount = section.questions.filter(val => val !== undefined).length
      if (test && section) {
        let q = section.questions[qId]
        switch (q.type) {
          case 'mcq':
            questionComponent = <Mcq isReview='true' question={q} />
            break
          case 'passage':
            questionComponent = <Passage isReview='true' question={q} />
            break
          case '1-blank':
            questionComponent = <Blank isReview='true' question={q} />
            break
          case '2-blank':
            questionComponent = <Blank isReview='true' question={q} />
            break
          case '3-blank':
            questionComponent = <Blank isReview='true' question={q} />
            break
          case 'onlyInput':
            questionComponent = <OnlyInput isReview='true' question={q} />
            break
          case 'fraction':
            questionComponent = <Fraction isReview='true' question={q} />
            break
          case 'multi-answer':
            questionComponent = <MultiAnswer isReview='true' question={q} />
            break
          case 'text-selection':
            questionComponent = <TextSelection isReview='true' question={q} />
            break
          case 'passageOnTop':
            questionComponent = <PassageOnTop isReview='true' question={q} />
            break
          default:
            questionComponent = q.type
        }
        return (
          <div>
            <TestTools q={q} isReview />
            <Col xs={18} md={12}>
              <CurrentTestStatus isReview arg={this.props.params} questionsCount={questionsCount} />
              <br />
              <br />
              <p style={{clear: 'left'}}>
                {questionComponent}
              </p>
            </Col>
          </div>
        )
      } else {
        return (
          <div>Nothing here</div>
        )
      }
      // Add back and forth for review section
    }
  }
})

const mapStateToProps = (state) => {
  return {
    testId: state.testId,
    sectionId: state.sectionId,
    qId: state.qId,
    tests: state.tests,
    fetchingTests: state.fetchingTests
  }
}

export default connect(mapStateToProps)(ReviewQuestionHolder)
