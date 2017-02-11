import React from 'react'
import Mcq from './Mcq'
import Passage from './Passage'
import Blank from './Blank'
import OnlyInput from './OnlyInput'
import Fraction from './Fraction'
import MultiAnswer from './MultiAnswer'
import { connect } from 'react-redux'
import { setNextPrevQuestion, fetchTests } from './actionCreators'

const { object, func, bool, array } = React.PropTypes

const QuestionHolder = React.createClass({
  propTypes: {
    params: object,
    dispatch: func,
    tests: array.isRequired,
    fetchingTests: bool
  },
  componentDidMount () {
    if (!this.props.tests.length) {
      this.props.dispatch(fetchTests())
    }
    let {id, sectionId, qId} = this.props.params
    this.props.dispatch(setNextPrevQuestion(id, sectionId, qId))
  },
  componentWillReceiveProps () {
    let {id, sectionId, qId} = this.props.params
    this.props.dispatch(setNextPrevQuestion(id, sectionId, qId))
  },
  render () {
    if (this.props.fetchingTests) {
      return (
        <div>Fetching tests</div>
      )
    } else {
      let {id, sectionId, qId} = this.props.params
      let questionComponent
      let test = this.props.tests[id]
      let section = test.sections[sectionId]
      let q = section.questions[this.props.params.qId]
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
        default:
          questionComponent = q.type
      }
      return (
        <div>
          <br />
          {questionComponent}
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
