import React from 'react'
import Mcq from './Mcq'
import Passage from './Passage'
import Blank from './Blank'
import OnlyInput from './OnlyInput'
import Fraction from './Fraction'
import TestTools from './TestTools'
import MultiAnswer from './MultiAnswer'
import TextSelection from './TextSelection'
import PassageOnTop from './PassageOnTop'
import QtyAQtyB from './QtyAQtyB'
import { connect } from 'react-redux'
import { Col, Grid } from 'react-bootstrap'
// import QuestionInstructions from './QuestionInstructions'
import CurrentTestStatus from './CurrentTestStatus'
import { hashHistory } from 'react-router'
import { setNextPrevQuestion, fetchTests, setQuizParams, completeTest } from './actionCreators'

const { object, func, bool } = React.PropTypes

const QuestionHolder = React.createClass({
  propTypes: {
    params: object,
    dispatch: func,
    tests: object.isRequired,
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
  wrapComponentInGrid(comp) {
    return(
      <Grid>
        {comp}
      </Grid>
    )
  },
  render () {
    if (this.props.fetchingTests) {
      return (
        <h3 className='i-am-center'>Fetching tests</h3>
      )
    } else {
      let {id, sectionId, qId} = this.props.params
      let questionComponent
      let test = this.props.tests[id]
      let section = test.sections[sectionId]
      const questionsCount = section.questions.filter(val => val !== undefined).length
      let q = section.questions[qId]
      if (!this.props.fetchingTests) {
        let timeRemaining = this.props.tests[id].sections[sectionId].timeRemaining
        if (timeRemaining < 1001) {
          if (test.sections[Number(sectionId) + 1]) {
            hashHistory.push(`/sectionTimeEnded`)
            // hashHistory.push(`/tests/${id}/${Number(sectionId) + 1}/0`)
          } else {
            this.props.dispatch(completeTest(this.props.params.id))
            hashHistory.push(`/tests/${id}/over`)
          }
        }
      }
      switch (q.type) {
        case 'mcq':
          questionComponent = <Mcq question={q} />
          break
        case 'passage':
          questionComponent = <Passage question={q} />
          break
        case '1-blank':
          questionComponent = <Blank question={q} />
          break
        case '2-blank':
          questionComponent = <Blank question={q} />
          break
        case '3-blank':
          questionComponent = <Blank question={q} />
          break
        case 'onlyInput':
          questionComponent = <OnlyInput question={q} />
          break
        case 'fraction':
          questionComponent = <Fraction question={q} />
          break
        case 'multi-answer':
          questionComponent = <MultiAnswer question={q} />
          break
        case 'text-selection':
          questionComponent = <TextSelection question={q} />
          break
        case 'passageOnTop':
          questionComponent = <PassageOnTop question={q} />
          break
        case 'qtyaqtyb':
          questionComponent = <QtyAQtyB question={q} />
          break
        default:
          questionComponent = q.type
      }
      return (
        <div>
          <TestTools q={q} />
          <Col xs={18} md={12}>
            <CurrentTestStatus arg={this.props.params} questionsCount={questionsCount} />
            <br />
            <br />
            <p style={{clear: 'left'}}>
              {this.wrapComponentInGrid(questionComponent)}
            </p>
          </Col>
        </div>
      )
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

export default connect(mapStateToProps)(QuestionHolder)
